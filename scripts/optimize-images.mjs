/**
 * Image Optimization Script
 * ========================
 * This script converts all PNG images to optimized WebP format
 * while maintaining quality and drastically reducing file size.
 * 
 * Run with: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: join(__dirname, '../public'),
  outputDir: join(__dirname, '../public'), // Same folder, different extension
  quality: {
    webp: 85, // WebP quality (0-100) - 85 is excellent balance
    jpeg: 85,
  },
  maxWidth: 1920, // Max width for large images
  thumbnailWidth: 400, // For feature images
  skipFolders: ['node_modules', '.git'],
};

// Stats tracking
let stats = {
  processed: 0,
  skipped: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0,
  errors: [],
};

/**
 * Get all image files recursively
 */
async function getImageFiles(dir, files = []) {
  const items = await readdir(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const itemStat = await stat(fullPath);
    
    if (itemStat.isDirectory()) {
      if (!CONFIG.skipFolders.includes(item)) {
        await getImageFiles(fullPath, files);
      }
    } else {
      const ext = extname(item).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        files.push({
          path: fullPath,
          size: itemStat.size,
          ext: ext,
        });
      }
    }
  }
  
  return files;
}

/**
 * Convert and optimize a single image
 */
async function optimizeImage(file) {
  const outputPath = file.path.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  // Skip if WebP already exists and is newer
  try {
    const outputStat = await stat(outputPath);
    const inputStat = await stat(file.path);
    if (outputStat.mtime > inputStat.mtime) {
      console.log(`⏭️  Skipping (already optimized): ${basename(file.path)}`);
      stats.skipped++;
      return;
    }
  } catch {
    // Output doesn't exist, proceed with conversion
  }
  
  try {
    const image = sharp(file.path);
    const metadata = await image.metadata();
    
    // Determine target width based on image location
    let targetWidth = CONFIG.maxWidth;
    
    // For feature images (smaller thumbnails), use smaller width
    if (file.path.includes('aquasky') || 
        file.path.includes('pureone') ||
        file.path.includes('bidet') ||
        file.path.includes('cistern') ||
        file.path.includes('aqualite') ||
        file.path.includes('aquabreeze') ||
        file.path.includes('aquahide')) {
      targetWidth = 600; // Feature images don't need to be huge
    }
    
    // For banner images, keep them larger
    if (file.path.includes('banner') || file.path.includes('products')) {
      targetWidth = 1920;
    }
    
    // Only resize if image is larger than target
    let processedImage = image;
    if (metadata.width > targetWidth) {
      processedImage = image.resize(targetWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Convert to WebP with optimization
    await processedImage
      .webp({
        quality: CONFIG.quality.webp,
        effort: 6, // Higher = better compression, slower
        smartSubsample: true,
      })
      .toFile(outputPath);
    
    // Get new file size
    const outputStat = await stat(outputPath);
    const savings = ((file.size - outputStat.size) / file.size * 100).toFixed(1);
    
    stats.totalOriginalSize += file.size;
    stats.totalOptimizedSize += outputStat.size;
    stats.processed++;
    
    console.log(`✅ ${basename(file.path)} → ${basename(outputPath)}`);
    console.log(`   ${(file.size / 1024).toFixed(0)}KB → ${(outputStat.size / 1024).toFixed(0)}KB (${savings}% saved)`);
    
  } catch (error) {
    console.error(`❌ Error processing ${file.path}:`, error.message);
    stats.errors.push({ file: file.path, error: error.message });
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n🖼️  IMAGE OPTIMIZATION SCRIPT');
  console.log('================================\n');
  console.log(`📁 Source directory: ${CONFIG.inputDir}\n`);
  
  // Get all image files
  console.log('🔍 Scanning for images...\n');
  const files = await getImageFiles(CONFIG.inputDir);
  
  console.log(`📊 Found ${files.length} images to process\n`);
  console.log('─'.repeat(50) + '\n');
  
  // Process each file
  for (const file of files) {
    await optimizeImage(file);
  }
  
  // Print summary
  console.log('\n' + '═'.repeat(50));
  console.log('📈 OPTIMIZATION SUMMARY');
  console.log('═'.repeat(50));
  console.log(`✅ Processed: ${stats.processed} images`);
  console.log(`⏭️  Skipped: ${stats.skipped} images`);
  console.log(`❌ Errors: ${stats.errors.length}`);
  console.log('');
  console.log(`📦 Original total: ${(stats.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Optimized total: ${(stats.totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Total savings: ${((stats.totalOriginalSize - stats.totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📉 Reduction: ${((stats.totalOriginalSize - stats.totalOptimizedSize) / stats.totalOriginalSize * 100).toFixed(1)}%`);
  console.log('═'.repeat(50) + '\n');
  
  if (stats.errors.length > 0) {
    console.log('⚠️  Errors encountered:');
    stats.errors.forEach(e => console.log(`   - ${e.file}: ${e.error}`));
  }
  
  console.log('\n✨ Done! Now update your components to use .webp extensions.\n');
}

main().catch(console.error);

