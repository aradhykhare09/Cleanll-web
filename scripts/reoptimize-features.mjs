/**
 * Re-optimize feature images with aggressive compression
 */

import sharp from 'sharp';
import { readdir, stat, unlink, rename, copyFile } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDERS = ['aqualite', 'aquabreeze'];
const PUBLIC_DIR = join(__dirname, '../public');

async function processFolder(folderName) {
  const folderPath = join(PUBLIC_DIR, folderName);
  
  console.log(`\n📁 Processing: ${folderName}`);
  console.log('─'.repeat(40));
  
  let totalOriginal = 0;
  let totalNew = 0;
  
  try {
    const files = await readdir(folderPath);
    
    for (const file of files) {
      if (!file.endsWith('.webp')) continue;
      
      const filePath = join(folderPath, file);
      const originalStat = await stat(filePath);
      const originalSize = originalStat.size;
      totalOriginal += originalSize;
      
      // Create optimized version with new name
      const optimizedPath = join(folderPath, file.replace('.webp', '_opt.webp'));
      
      try {
        await sharp(filePath)
          .resize(600, null, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({
            quality: 70,
            effort: 6,
            smartSubsample: true,
          })
          .toFile(optimizedPath);
        
        const newStat = await stat(optimizedPath);
        const newSize = newStat.size;
        totalNew += newSize;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${file}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${savings}% saved)`);
        
        // Try to replace original
        try {
          await unlink(filePath);
          await rename(optimizedPath, filePath);
        } catch (replaceError) {
          console.log(`   ⚠️ Created as ${file.replace('.webp', '_opt.webp')} (original locked)`);
        }
      } catch (err) {
        console.error(`   ❌ ${file}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Folder total: ${(totalOriginal/1024/1024).toFixed(2)}MB → ${(totalNew/1024/1024).toFixed(2)}MB`);
    
  } catch (error) {
    console.error(`❌ Error processing ${folderName}:`, error.message);
  }
}

async function main() {
  console.log('\n🔧 RE-OPTIMIZING FEATURE IMAGES');
  console.log('================================');
  
  for (const folder of FOLDERS) {
    await processFolder(folder);
  }
  
  console.log('\n✨ Done! Restart the dev server if files were locked.\n');
}

main().catch(console.error);
