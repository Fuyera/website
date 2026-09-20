import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("dist");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".xml": "application/xml",
};
export const server = createServer(async (req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405);
      res.end();
      return;
    }
    const url = new URL(req.url, "http://localhost");
    if (/%(?:2f|5c|00)/i.test(url.pathname)) {
      res.writeHead(400);
      res.end("Bad request");
      return;
    }
    const pathname = decodeURIComponent(url.pathname).replace(/\/{2,}/g, "/");
    if (/[\x00-\x1f\x7f\\]/.test(pathname)) {
      res.writeHead(400);
      res.end("Bad request");
      return;
    }
    if (url.pathname !== encodeURI(pathname)) {
      res.writeHead(308, { Location: encodeURI(pathname) + url.search });
      res.end();
      return;
    }
    const languagePrefix = pathname.match(/^\/(zh-hant|zh-hans)(?:\/|$)/)?.[1];
    const notFoundFile = resolve(root, languagePrefix ? `${languagePrefix}/404.html` : "404.html");
    const relative = pathname.replace(/^\/+/, "");
    const candidate = resolve(root, relative);
    if (candidate !== root && !candidate.startsWith(root + sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    let file = pathname === "/" ? resolve(root, "index.html") : candidate;
    let status = 200;
    if (/^\/(?:zh-hant\/|zh-hans\/)?404(?:\.html)?$/.test(pathname)) {
      file = notFoundFile;
      status = 404;
    } else {
      if (pathname.endsWith("/") && pathname !== "/") {
        res.writeHead(308, {
          Location: pathname.replace(/\/+$/, "") + url.search,
        });
        res.end();
        return;
      }
      try {
        if (!(await stat(file)).isFile()) throw new Error("not a file");
        if (pathname.endsWith(".html")) {
          res.writeHead(308, { Location: (pathname === "/index.html" ? "/" : pathname.slice(0, -5)) + url.search });
          res.end();
          return;
        }
      } catch {
        file = `${candidate}.html`;
        try {
          if (!(await stat(file)).isFile()) throw new Error("not a file");
        } catch {
          file = notFoundFile;
          status = 404;
        }
      }
    }
    const content = await readFile(file);
    res.writeHead(status, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "X-Robots-Tag": "noindex, nofollow",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : content);
  } catch {
    res.writeHead(400);
    res.end("Bad request");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Local preview: http://127.0.0.1:${port}`),
);
