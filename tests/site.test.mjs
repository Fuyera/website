import { test, after } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { once } from "node:events";
const paths = [
  "/",
  "/products",
  "/products/anchor",
  "/products/ambulance-ai",
  "/products/intelligent-operator",
  "/products/laofu-canvas",
  "/services",
  "/technology",
  "/company",
  "/contact",
  "/support",
  "/legal/privacy",
  "/legal/terms",
];
const fileFor = (path) =>
  path === "/" ? "dist/index.html" : `dist${path}.html`;
const decode = (text) => text.replaceAll("&amp;", "&");
process.env.PORT = "0";
const { server } = await import("../scripts/preview.mjs");
if (!server.listening) await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
after(() => new Promise((resolve) => server.close(resolve)));

test("encoded separators cannot create an external redirect and duplicate route separators are canonicalised", async () => {
  for (const path of ["/%2fexample.org/", "/%5cexample.org/", "/%00bad"]) {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 400, path);
    assert.equal(response.headers.get("location"), null, path);
  }
  for (const [path, expected] of [["/products//anchor", "/products/anchor"], ["/%70roducts/anchor", "/products/anchor"]]) {
    const response = await fetch(base + path + "?from=normalisation", { redirect: "manual" });
    assert.equal(response.status, 308, path);
    assert.equal(response.headers.get("location"), expected + "?from=normalisation");
  }
});

test("every route has real HTML, unique metadata, one heading and a canonical", async () => {
  const titles = new Set();
  for (const path of paths) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, path);
    assert.ok(html.includes("<main"), path);
    assert.ok(html.includes('<meta name="description"'), path);
    assert.ok(html.includes(`href="https://fuyera.com${path}"`), path);
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), title);
    titles.add(title);
    assert.doesNotMatch(
      html,
      /FuyeClaw|FearCore|FuyePal|OpenClaw|Hong Kong-based|Dexu|Horiz|Reswe|德旭|润维|汇智|会智|<!--app-html-->/i,
    );
  }
});
test("every internal link, anchor and local asset resolves in the static output", async () => {
  for (const path of paths) {
    const html = await readFile(fileFor(path), "utf8");
    for (const [, raw] of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
      const href = decode(raw);
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, base + path);
      const baseRoute = url.pathname.replace(/^\/zh-(?:hant|hans)(?=\/|$)/, "") || "/";
      if (url.hash || paths.includes(baseRoute)) {
        assert.ok(paths.includes(baseRoute), `${path}: ${href}`);
        if (url.hash) {
          const target = await readFile(fileFor(url.pathname), "utf8");
          assert.ok(
            target.includes(`id="${url.hash.slice(1)}"`),
            `${path}: ${href}`,
          );
        }
      } else await access("dist" + url.pathname);
    }
  }
});
test("unknown paths return an actual 404 and preserve recovery content", async () => {
  for (const path of ["/not-a-page", "/products/unknown", "/404.html"]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 404);
    const html = await response.text();
    assert.match(html, /This page could not be found/);
    assert.match(html, /noindex,nofollow/);
    assert.doesNotMatch(html, /rel="canonical"/);
  }
});
test("deep links and trailing slash redirects preserve route and query", async () => {
  const response = await fetch(base + "/products/anchor/?from=test", {
    redirect: "manual",
  });
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "/products/anchor?from=test");
  assert.match(
    await (await fetch(base + "/products/anchor")).text(),
    /Make each phone/,
  );
});
test("preview and production indexing policies are internally consistent", async () => {
  const robots = await readFile("dist/robots.txt", "utf8");
  const production = robots.includes("Allow: /");
  for (const prefix of ["", "/zh-hant", "/zh-hans"]) for (const path of paths) {
    const route = prefix + (prefix && path === "/" ? "" : path);
    const html = await readFile(fileFor(route), "utf8");
    assert.ok(html.includes(`content="${production ? "index,follow" : "noindex,nofollow"}"`));
  }
  const headers = await readFile("dist/_headers", "utf8");
  assert.equal(headers.includes("X-Robots-Tag: noindex"), !production);
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  assert.equal((sitemap.match(/<loc>/g) || []).length, paths.length * 3);
  assert.doesNotMatch(sitemap, /404/);
});
test("contact and support use genuine email actions without pretend submission", async () => {
  for (const path of ["/contact", "/support"]) {
    const html = await readFile(fileFor(path), "utf8");
    assert.match(html, /mailto:hello@fuyera.com/);
    assert.doesNotMatch(html, /<form|message sent|successfully submitted/i);
  }
  const html = await readFile("dist/contact.html", "utf8");
  assert.match(html, /Copy email/);
  assert.match(html, /role="status"/);
});
test("no analytics, remote fonts or internal design documents ship in HTML", async () => {
  for (const path of paths) {
    const html = await readFile(fileFor(path), "utf8");
    assert.doesNotMatch(
      html,
      /googletagmanager|google-analytics|fonts.googleapis|WEBSITE_DESIGN_SPEC|\/Users\/|Fuyera_Positioning/,
    );
  }
  await access("dist/images/social-card.png");
  for (const name of [
    "CURRENT_CONTEXT.md",
    "WEBSITE_DESIGN_SPEC.md",
    "design",
  ]) {
    await assert.rejects(access("dist/" + name));
  }
});

test("professional products and unreleased Canvas keep an honest route to enquiry", async () => {
  const catalogue = await readFile("dist/products.html", "utf8");
  for (const slug of ["ambulance-ai", "intelligent-operator", "laofu-canvas", "anchor"]) {
    assert.ok(catalogue.includes(`href="/products/${slug}"`));
  }
  for (const slug of ["ambulance-ai", "intelligent-operator"]) {
    const html = await readFile(`dist/products/${slug}.html`, "utf8");
    assert.match(html, /Current capabilities/);
    assert.match(html, /English-language adaptation/);
    assert.match(html, /mailto:hello@fuyera.com\?subject=/);
    assert.doesNotMatch(html, /Buy now|Download now|clinically validated|certified medical/i);
  }
  const canvas = await readFile("dist/products/laofu-canvas.html", "utf8");
  assert.match(canvas, /Release pending/);
  assert.doesNotMatch(canvas, /href="https:\/\/apps.apple.com/);
});

const languagePaths = ["zh-hant", "zh-hans"];
const localizedPath = (prefix, path) => `/${prefix}${path === "/" ? "" : path}`;
const decodeText = (text) => text.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&gt;", ">").replace(/\s+/g, " ").trim();

test("both Chinese editions have translated static HTML, metadata and reciprocal language links", async () => {
  for (const prefix of languagePaths) {
    const titles = new Set();
    const language = prefix === "zh-hant" ? "zh-Hant" : "zh-Hans";
    for (const path of paths) {
      const route = localizedPath(prefix, path);
      const response = await fetch(base + route);
      assert.equal(response.status, 200, route);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${language}">`), route);
      assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route);
      const title = html.match(/<title>(.*?)<\/title>/)[1];
      assert.match(title, /[\u4e00-\u9fff]/, route);
      assert.ok(!titles.has(title), title);
      titles.add(title);
      assert.ok(html.includes(`rel="canonical" href="https://fuyera.com${route}"`), route);
      for (const [lang, href] of [["en", path], ["zh-Hant", localizedPath("zh-hant", path)], ["zh-Hans", localizedPath("zh-hans", path)], ["x-default", path]]) {
        assert.ok(html.includes(`hreflang="${lang}" href="https://fuyera.com${href}"`), route);
      }
      // All local navigation stays in the selected language except the explicit switcher.
      const withoutSwitcher = html.replace(/<details class="language-switcher"[\s\S]*?<\/details>/g, "");
      for (const [, href] of withoutSwitcher.matchAll(/href="(\/[^"\s]*)"/g)) {
        if (/^\/(assets|images|fonts)\//.test(href) || href === "/favicon.svg") continue;
        assert.ok(href.startsWith(`/${prefix}`), `${route}: ${href}`);
        const target = new URL(decode(href), base);
        assert.equal((await fetch(target)).status, 200, `${route}: ${href}`);
      }
    }
  }
  assert.match(await readFile("dist/index.html", "utf8"), /<html lang="en">/);
});

test("every rendered text and accessibility label has a Chinese translation or is an explicit proper name", async () => {
  const dictionary = JSON.parse(await readFile("src/locales/zh.json", "utf8"));
  for (const [key, pair] of Object.entries(dictionary)) {
    assert.equal(pair.length, 2, key);
    assert.ok(pair.every((value) => typeof value === "string" && value.length > 0), key);
  }
  const unchanged = new Set(["Fuyera", "Fuyera Intelligence", "Fuyera Intelligence Limited", "© 2026 Fuyera Intelligence Limited", "FUYERA INTELLIGENCE", "FUYERA ANCHOR", "Anchor", "laofu canvas", "Fu Ye", "FY", "iPhone & iPad", "iOS / iPadOS 17+", "English", "繁體中文", "简体中文", "hello@fuyera.com"]);
  for (const path of [...paths, "/404"]) {
    const english = await readFile(fileFor(path), "utf8");
    const body = english.match(/<body>([\s\S]*?)<\/body>/)[1];
    const texts = [...body.matchAll(/>([^<>]+)</g)].map((m) => decodeText(m[1]));
    texts.push(...[...body.matchAll(/(?:alt|aria-label)="([^"]+)"/g)].map((m) => decodeText(m[1])));
    for (const key of texts.filter((text) => /[A-Za-z\u4e00-\u9fff]/.test(text) && !unchanged.has(text))) {
      assert.ok(Object.hasOwn(dictionary, key), `${path}: Missing translation: ${key}`);
      for (const [index, prefix] of [[0, "zh-hans"], [1, "zh-hant"]]) {
        const translated = decodeText(await readFile(`dist${localizedPath(prefix, path)}.html`, "utf8"));
        assert.ok(translated.includes(dictionary[key][index]), `${prefix}${path}: Untranslated: ${key}`);
      }
    }
  }
});

test("localized missing pages and legacy HTML addresses preserve language, query and status", async () => {
  for (const prefix of languagePaths) {
    const response = await fetch(`${base}/${prefix}/products/missing`);
    assert.equal(response.status, 404);
    const html = await response.text();
    assert.ok(html.includes(`href="/${prefix}/products"`));
    assert.doesNotMatch(html, /rel="canonical"|hreflang="x-default"/);
    assert.match(html, /noindex,nofollow/);
  }
  for (const route of ["/products/intelligent-operator", "/zh-hant/products/intelligent-operator", "/zh-hans/products/laofu-canvas", "/zh-hant"]) {
    const response = await fetch(`${base}${route}.html?from=shared`, { redirect: "manual" });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), `${route}?from=shared`);
  }
});
