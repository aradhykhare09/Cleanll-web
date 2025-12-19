import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

const directories = [
    'public/aquabreeze',
    'public/aqualite'
];

directories.forEach(dirRef => {
    const dirPath = path.join(rootDir, dirRef);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        if (file.endsWith('.webp')) {
            const fullPath = path.join(dirPath, file);
            const nameWithoutExt = path.basename(file, '.webp');
            const jpgName = `${nameWithoutExt}.jpg`;
            const tempDir = path.join(dirPath, 'temp_opt'); // Use a temp dir

            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

            console.log(`Converting ${file} to JPG...`);

            try {
                // Use Squoosh to resize to 800px and convert to MozJPEG
                const cmd = `npx -y @squoosh/cli --resize "{\\"width\\":800}" --mozjpeg auto -d "${tempDir}" "${fullPath}"`;
                execSync(cmd, { stdio: 'ignore' });

                // Squoosh output might be name.jpg (since we asked for mozjpeg, usually it changes extension? 
                // Squoosh CLI behaviors: if input is foo.webp and we use --mozjpeg, output is foo.jpg in destination)
                // Let's verify.

                /* 
                   Actually Squoosh CLI sometimes outputs <filename>.webp.jpg depending on version. 
                   But 'auto' means it tries to find mapped extension. 
                   Let's check the temp dir content after run. 
                */

                const expectedOutput = path.join(tempDir, `${nameWithoutExt}.jpg`);

                // If not there, maybe it's named fullPath's basename?

                if (fs.existsSync(expectedOutput)) {
                    const targetPath = path.join(dirPath, jpgName);
                    fs.copyFileSync(expectedOutput, targetPath);
                    console.log(`Created ${targetPath}`);
                } else {
                    // Try looking purely for any .jpg in temp
                    const tempFiles = fs.readdirSync(tempDir);
                    const createdJpg = tempFiles.find(f => f.endsWith('.jpg'));
                    if (createdJpg) {
                        fs.copyFileSync(path.join(tempDir, createdJpg), path.join(dirPath, jpgName));
                        console.log(`Created ${path.join(dirPath, jpgName)} from ${createdJpg}`);
                    } else {
                        console.error(`Failed to convert ${file}`);
                    }
                }

            } catch (e) {
                console.error(`Error on ${file}: ${e.message}`);
            }

            // Clean temp
            if (fs.existsSync(tempDir)) {
                fs.rmSync(tempDir, { recursive: true, force: true });
            }
        }
    });
});
