import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Preserve the original artwork; ship small, correctly cased derivatives.
const root = "public/Image";
const mapping = new Map();
for (const dir of fs.readdirSync(root)) {
  for (const name of fs.readdirSync(path.join(root, dir))) {
    const input = path.join(root, dir, name);
    if (!/\.(png|jpg)$/i.test(name) || dir === "Logo" || dir === "SM-Icons")
      continue;
    const output = input.replace(/\.(png|jpg)$/i, ".webp");
    await sharp(input)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(output);
    mapping.set(
      "/Image/" + dir + "/" + name,
      "/" + output.replaceAll("\\", "/").replace("public/", ""),
    );
  }
}
await sharp("public/Image/Logo/nm-logo.png")
  .trim()
  .resize({ width: 420 })
  .png()
  .toFile("public/Image/Logo/nm-logo-web.png");
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(file);
      continue;
    }
    if (!/\.(tsx?|css)$/.test(file)) continue;
    let s = fs
      .readFileSync(file, "utf8")
      .replaceAll("/image/", "/Image/")
      .replaceAll("/Image/logo/", "/Image/Logo/");
    for (const [from, to] of mapping) s = s.replaceAll(from, to);
    s = s.replaceAll(
      "/Image/Vr/vr-teaser.jpg",
      "/Image/VR-Ecperience/vr-teaser.webp",
    );
    s = s.replaceAll("bg-[url('/Image/noise.png')]", "architectural-grid");
    s = s
      .replace(/\s+unoptimized\b/g, "")
      .replace(/quality=\{100\}/g, "quality={75}");
    s = s.replace(/\bpriority\b/g, "preload");
    s = s.replace(/<Image\b([\s\S]*?)\/>/g, (match, attrs) =>
      /\bfill\b/.test(attrs) && !/\bsizes=/.test(attrs)
        ? '<Image sizes="(max-width: 768px) 100vw, 75vw"' + attrs + "/>"
        : match,
    );
    fs.writeFileSync(file, s);
  }
}
walk("src");
console.log("Optimized existing artwork and normalized asset references.");
