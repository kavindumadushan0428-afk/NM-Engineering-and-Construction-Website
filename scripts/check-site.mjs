import assert from "node:assert/strict";
import fs from "node:fs";
const origin = process.env.QA_ORIGIN || "http://localhost:3001";
const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/book-consultation",
  "/vr-experience",
  "/privacy",
  "/terms",
  ...[
    "design-build",
    "house-plans",
    "3d-visualization",
    "renovation",
    "boq-estimation",
    "landscaping",
  ].map((s) => "/services/" + s),
];
const links = new Set();
const assets = new Set();
const results = [];
for (const route of routes) {
  const res = await fetch(origin + route);
  assert.equal(res.status, 200, route);
  const html = await res.text();
  const visible = html.replace(/<script\b[\s\S]*?<\/script>/g, "");
  assert.equal(
    (visible.match(/<h1[\s>]/g) || []).length,
    1,
    route + " must have one h1",
  );
  assert.equal(
    (visible.match(/<main[\s>]/g) || []).length,
    1,
    route + " must have one main",
  );
  assert.equal(
    (visible.match(/<footer[\s>]/g) || []).length,
    1,
    route + " must have one footer",
  );
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /application\/ld\+json/);
  assert.equal(res.headers.get("x-content-type-options"), "nosniff");
  for (const match of visible.matchAll(/href="(\/[^"]*)"/g))
    links.add(match[1].replaceAll("&amp;", "&").split("#")[0]);
  for (const match of visible.matchAll(/src="(\/[^"]*)"/g))
    assets.add(match[1].replaceAll("&amp;", "&"));
  results.push({
    route,
    status: res.status,
    title: html.match(/<title>(.*?)<\/title>/)?.[1],
  });
}
for (const link of links) {
  if (!link || link.startsWith("/_next/")) continue;
  assert.equal(
    (await fetch(origin + link, { method: "HEAD" })).status,
    200,
    "Broken link: " + link,
  );
}
for (const asset of assets)
  assert.equal(
    (await fetch(origin + asset)).status,
    200,
    "Broken asset: " + asset,
  );
for (const missing of ["/not-a-real-page", "/services/not-a-service"])
  assert.equal((await fetch(origin + missing)).status, 404, missing);
for (const asset of [
  "/social.jpg",
  "/icon.png",
  "/apple-icon.png",
  "/robots.txt",
  "/sitemap.xml",
  "/Models/nm-house-web.glb",
])
  assert.equal((await fetch(origin + asset)).status, 200, asset);
fs.mkdirSync("artifacts", { recursive: true });
fs.writeFileSync(
  "artifacts/route-qa.json",
  JSON.stringify(
    { routes: results, internalLinks: links.size, assets: assets.size },
    null,
    2,
  ),
);
console.log(
  `${routes.length} routes, ${links.size} internal links, ${assets.size} images and both 404 cases passed.`,
);
