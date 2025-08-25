import fs from "fs";
import path from "path";

const src: string = "src";
const dist: string = "dist";
const dest: string = path.join(dist, "src");

/**
 * Check if a folder contains at least one .py or .pyi file (recursively).
 */
function hasPyFile(folder: string): boolean {
    const items = fs.readdirSync(folder, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(folder, item.name);
        if (item.isDirectory()) {
            if (hasPyFile(fullPath)) return true;
        } else if (item.isFile() && (item.name.endsWith(".py") || item.name.endsWith(".pyi"))) {
            return true;
        }
    }
    return false;
}

/**
 * Copy only folders/files that contain .py and .pyi files.
 */
function copyPyOnly(srcFolder: string, destFolder: string): void {
    const items = fs.readdirSync(srcFolder, { withFileTypes: true });

    for (const item of items) {
        const srcPath = path.join(srcFolder, item.name);
        const relativePath = path.relative(src, srcPath);
        const destPath = path.join(destFolder, relativePath);

        if (item.isDirectory()) {
            if (hasPyFile(srcPath)) {
                fs.mkdirSync(destPath, { recursive: true });
                copyPyOnly(srcPath, destPath);
            }
        } else if (item.isFile()) {
            if (item.name.endsWith(".py") || item.name.endsWith(".pyi")) {
                fs.mkdirSync(path.dirname(destPath), { recursive: true });
                fs.copyFileSync(srcPath, destPath);
            }
        }
    }
}

// Make sure destination exists
fs.mkdirSync(dest, { recursive: true });
copyPyOnly(src, dest);

console.log("✅ Bundled Python files successfully!");
