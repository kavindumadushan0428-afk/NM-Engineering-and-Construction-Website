import sharp from "sharp";
const logo = await sharp("public/Image/Logo/nm-logo-web.png")
  .resize({ width: 175 })
  .png()
  .toBuffer();
const design = Buffer.from(
  `<svg width="1200" height="630"><rect width="650" height="630" fill="#ffffff"/><text x="56" y="285" font-family="Arial" font-size="76" fill="#111111" letter-spacing="-3">Built around</text><text x="56" y="369" font-family="Arial" font-size="76" fill="#656565" letter-spacing="-3">your life.</text><rect x="57" y="421" width="44" height="3" fill="#c02729"/><text x="56" y="475" font-family="Arial" font-size="20" fill="#111111">N&amp;M Engineering Services &amp; Construction</text><text x="56" y="552" font-family="Arial" font-size="15" fill="#656565">RAMBUKKANA · KEGALLE · SRI LANKA</text></svg>`,
);
await sharp("public/Image/Home/hero.webp")
  .resize(1200, 630, { fit: "cover" })
  .composite([{ input: design }, { input: logo, top: 57, left: 70 }])
  .jpeg({ quality: 86 })
  .toFile("public/social.jpg");
for (const [name, size] of [
  ["icon", 64],
  ["apple-icon", 180],
]) {
  await sharp("public/Image/Logo/nm-logo-web.png")
    .resize(size - 8, size - 8, { fit: "contain", background: "#ffffff" })
    .extend({ top: 4, bottom: 4, left: 4, right: 4, background: "#ffffff" })
    .png()
    .toFile(`src/app/${name}.png`);
}
console.log("Brand icons and social preview created from original artwork.");
