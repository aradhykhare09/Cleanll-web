import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname; // c:\Users\aradh\Desktop\CLEANLL-WEB

// Target directories that have the huge images
const targetDirs = [
    'public/aquasky',
    'public/pureone',
    'public/aquahide',  // Check this too
    'public/bidet'      // And this
];

// Helper to get all files recursively
function getFiles(dir, files = []) {
    if (!fs.existsSync(dir)) return files;
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else {
            files.push(name);
        }
    }
    return files;
}

const allFiles = [];
targetDirs.forEach(d => {
    const fullDir = path.join(rootDir, d);
    getFiles(fullDir, allFiles);
});

console.log(`Found ${allFiles.length} files to check.`);

allFiles.forEach(subPath => {
    if (!subPath.match(/\.(png|jpg|jpeg|webp)$/i)) return;

    // Check size
    const stat = fs.statSync(subPath);
    const sizeMB = stat.size / (1024 * 1024);

    // Optimize if > 0.5 MB
    if (sizeMB > 0.5) {
        console.log(`Optimizing ${path.basename(subPath)} (${sizeMB.toFixed(2)} MB)...`);

        try {
            // Convert to WebP, Resize to 800px width
            // We output to the SAME directory, but with .webp extension (if it wasn't already)
            // Or if it IS webp, we just re-compress it.

            const dir = path.dirname(subPath);
            const ext = path.extname(subPath);
            const nameWithoutExt = path.basename(subPath, ext);
            // Always target .webp for best compression
            const newFilename = `${nameWithoutExt}.webp`;

            // Temporary output dir
            const tempDir = path.join(dir, 'temp_opt_all');
            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

            // Command: Resize to 800, Convert to WebP (lossless-ish or high quality)
            // Using auto WebP usually is good enough.
            const cmd = `npx -y @squoosh/cli --resize "{\\"width\\":800}" --webp auto -d "${tempDir}" "${subPath}"`;

            execSync(cmd, { stdio: 'ignore' });

            const outputPath = path.join(tempDir, newFilename); // Squoosh outputs with definition extension usually? 
            // Actually squoosh cli outputs input-filename.webp if we use --webp

            // If input was "Image.png", output is "Image.webp"
            // If input was "Image.webp", output is "Image.webp"

            if (fs.existsSync(outputPath)) {
                const newStat = fs.statSync(outputPath);
                console.log(`-> ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);

                // Move to original location
                const finalPath = path.join(dir, newFilename);

                // If the extension changed (e.g. png -> webp), we should delete the old png
                // BUT we need to update code references first or we break the app.
                // For now, let's keep both if extension differs, but user wants FIX. 
                // So I will eventually need to update the code.
                // Let's Replace the file at finalPath.

                fs.copyFileSync(outputPath, finalPath);

                // If original was NOT webp, delete it to save space? 
                // No, deleting it breaks the app until I update the code.
                // User wants "production ready". 
                // I will Log this so I know which files to update in code.
                if (ext.toLowerCase() !== '.webp') {
                    console.log(`EXTENSION_CHANGED: ${subPath} -> ${finalPath}`);
                }
            } else {
                console.error(`Output missing for ${subPath}`);
            }

            // Cleanup check
            if (fs.existsSync(tempDir) && fs.readdirSync(tempDir).length === 0) {
                fs.rmdirSync(tempDir);
            }

        } catch (e) {
            console.error(`Failed ${subPath}: ${e.message}`);
        }
    }
});
