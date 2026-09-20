import { build } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";

// Keep local/branch previews unindexed while supporting the existing Workers Builds command.
const siteEnvironment = process.env.SITE_ENV ?? (
  process.env.WORKERS_CI === "1" && process.env.WORKERS_CI_BRANCH === "main"
    ? "production"
    : "preview"
);
const production = siteEnvironment === "production";
const serverDir = ".prerender";
const origin = "https://fuyera.com";
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
try {
  await build();
  await build({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: serverDir,
      copyPublicDir: false,
    },
  });
  const { pages, render, locales, localizedHref, translate } = await import(
    pathToFileURL(resolve(serverDir, "entry-server.js"))
  );
  const template = await readFile("dist/index.html", "utf8");
  for (const locale of locales) for (const [basePath, sourcePage] of Object.entries(pages)) {
    const path = localizedHref(basePath, locale);
    const page = { title: translate(sourcePage.title, locale), description: translate(sourcePage.description, locale) };
    const notFound = basePath === "/404";
    const url = origin + (path === "/" ? "/" : path);
    const head = [
      `<meta name="description" content="${escape(page.description)}">`,
      `<meta name="robots" content="${production && !notFound ? "index,follow" : "noindex,nofollow"}">`,
      ...(!notFound ? [`<link rel="canonical" href="${url}">`] : []),
      ...(!notFound ? [...locales.map((language) => `<link rel="alternate" hreflang="${language}" href="${origin}${localizedHref(basePath, language)}">`), `<link rel="alternate" hreflang="x-default" href="${origin}${basePath}">`] : []),
      `<meta property="og:locale" content="${locale === "en" ? "en_US" : locale === "zh-Hant" ? "zh_TW" : "zh_CN"}">`,
      `<meta property="og:type" content="website">`,
      `<meta property="og:site_name" content="Fuyera Intelligence">`,
      `<meta property="og:title" content="${escape(page.title)}">`,
      `<meta property="og:description" content="${escape(page.description)}">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:image" content="${origin}/images/social-card.png">`,
      `<meta property="og:image:alt" content="Fuyera — AI products. Practical engineering.">`,
      `<meta name="twitter:card" content="summary_large_image">`,
    ].join("\n    ");
    const html = template
      .replace('<html lang="en">', `<html lang="${locale}">`)
      .replace(
        "<title>Fuyera Intelligence</title>",
        `<title>${escape(page.title)}</title>`,
      )
      .replace("<!--page-head-->", head)
      .replace("<!--app-html-->", render(path));
    const file =
      path === "/"
        ? "dist/index.html"
        : `dist${path}.html`;
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  // An image format supported by social previews, generated from the site's own branding.
  const { default: sharp } = await import("sharp");
  const svg = renderToStaticMarkup(
    createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", width: 1200, height: 630 },
      createElement("rect", { width: 1200, height: 630, fill: "#0D1117" }),
      createElement(
        "text",
        {
          x: 76,
          y: 110,
          fill: "#F5F6F3",
          fontFamily: "sans-serif",
          fontSize: 34,
        },
        "Fuyera",
      ),
      createElement(
        "text",
        {
          x: 76,
          y: 290,
          fill: "#F5F6F3",
          fontFamily: "sans-serif",
          fontSize: 70,
          fontWeight: 600,
        },
        "AI products.",
      ),
      createElement(
        "text",
        {
          x: 76,
          y: 385,
          fill: "#F5F6F3",
          fontFamily: "sans-serif",
          fontSize: 70,
          fontWeight: 600,
        },
        "Practical engineering.",
      ),
      createElement("rect", {
        x: 76,
        y: 465,
        width: 110,
        height: 8,
        fill: "#3468F5",
      }),
    ),
  );
  await sharp(Buffer.from(svg)).png().toFile("dist/images/social-card.png");
  const urls = locales.flatMap((locale) => Object.keys(pages).filter((p) => p !== "/404").map((p) => localizedHref(p, locale)));
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((p) => `<url><loc>${origin}${p}</loc></url>`).join("")}</urlset>\n`,
  );
  await writeFile(
    "dist/robots.txt",
    production
      ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
      : "User-agent: *\nDisallow: /\n",
  );
  await writeFile(
    "dist/_headers",
    `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n${production ? "" : "  X-Robots-Tag: noindex, nofollow\n"}`,
  );
  console.log(
    `Generated ${Object.keys(pages).length * locales.length} static pages (${production ? "production" : "preview; noindex"}).`,
  );
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
