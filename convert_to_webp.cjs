const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertFile(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath).webp({ quality: 90 }).toFile(outputPath);
    console.log(`Converted ${inputPath} -> ${outputPath} (${info.size} bytes)`);
  } catch (err) {
    console.error(`Error converting ${inputPath}:`, err);
  }
}

const args = process.argv.slice(2);
if (args.length >= 2) {
  convertFile(args[0], args[1]);
} else if (args.length === 1) {
  const input = args[0];
  const output = input.replace(/\.jpg$/, '.webp');
  convertFile(input, output);
} else {
  console.log('Usage: node convert_to_webp.cjs <input.jpg> [output.webp]');
}
