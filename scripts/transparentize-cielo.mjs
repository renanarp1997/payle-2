/**
 * Remove fundo claro / xadrez “falso” do logo Cielo (PNG → RGBA transparente).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetPath = path.join(root, "assets", "cielo.png");
const publicPath = path.join(root, "public", "logos", "acquirers", "cielo.png");

const { data, info } = await sharp(assetPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
if (channels !== 4) throw new Error(`Expected 4 channels, got ${channels}`);

const out = Buffer.from(data);

for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const avg = (r + g + b) / 3;
  const spread = Math.max(r, g, b) - Math.min(r, g, b);

  // Células brancas / cinza-claro do xadrez: neutros luminosos (evita médios = borda do texto)
  const lightNeutral = avg > 200 && spread < 42;
  const veryWhite = r > 243 && g > 243 && b > 243;

  if (lightNeutral || veryWhite) {
    out[i + 3] = 0;
  }
}

const png = await sharp(out, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toBuffer();
fs.writeFileSync(assetPath, png);
fs.writeFileSync(publicPath, png);
console.log("OK: assets/cielo.png e public/logos/acquirers/cielo.png atualizados.");
