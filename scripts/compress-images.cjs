const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '../public/images');
const MAX_BYTES = 300 * 1024; // 300 KB (307,200 bytes)

async function compressImage(filePath) {
  const inputBuffer = fs.readFileSync(filePath);
  if (inputBuffer.length <= MAX_BYTES) {
    console.log(`[Keep] ${path.basename(filePath)} is already ${(inputBuffer.length / 1024).toFixed(1)} KB (<= 300 KB)`);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const originalSize = inputBuffer.length;

  const metadata = await sharp(inputBuffer).metadata();
  let width = metadata.width;
  if (width > 1920) {
    width = 1920;
  }

  let quality = 82;
  let buffer;

  while (quality >= 35) {
    let pipeline = sharp(inputBuffer);
    if (width && width < metadata.width) {
      pipeline = pipeline.resize({ width, withoutEnlargement: true });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
    } else if (ext === '.png') {
      buffer = await pipeline.png({ quality: Math.min(quality, 80), compressionLevel: 9 }).toBuffer();
    } else if (ext === '.webp') {
      buffer = await pipeline.webp({ quality }).toBuffer();
    } else {
      break;
    }

    if (buffer.length <= MAX_BYTES) {
      break;
    }

    quality -= 6;
    if (quality <= 65 && width > 1600) {
      width = 1600;
    } else if (quality <= 50 && width > 1360) {
      width = 1360;
    }
  }

  if (buffer && buffer.length < originalSize) {
    fs.writeFileSync(filePath, buffer);
    const newSize = fs.statSync(filePath).size;
    console.log(`[Compressed] ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (final quality ~${quality}%)`);
  } else {
    console.warn(`[Warning] Could not compress ${path.basename(filePath)} below original size`);
  }
}

async function run() {
  if (!fs.existsSync(targetDir)) {
    console.error(`Target directory ${targetDir} does not exist.`);
    return;
  }

  const files = fs.readdirSync(targetDir);
  for (const file of files) {
    const fullPath = path.join(targetDir, file);
    if (fs.statSync(fullPath).isFile() && /\.(jpe?g|png|webp)$/i.test(file)) {
      await compressImage(fullPath);
    }
  }
  console.log('Compression complete.');
}

run().catch(console.error);
