import os
import shutil

src: str = "src"
dist: str = "dist"
dest: str = os.path.join(dist, "src")

def has_py_file(folder: str) -> bool:
    """Check if a folder contains at least one .py file (recursively)."""
    for _, _, files in os.walk(folder):
        for file in files:
            if file.endswith(".py"):
                return True
            if file.endswith(".pyi"):
                return True
    return False

def copy_py_only(src_folder: str, dest_folder: str) -> None:
    """Copy only folders/files that contain .py and for types pyi files."""
    for root, _, files in os.walk(src_folder):
        if has_py_file(root):
            dest_root: str = os.path.join(dest_folder, os.path.relpath(root, src_folder))
            os.makedirs(dest_root, exist_ok=True)
            for file in files:
                if file.endswith(".py"):
                    shutil.copy2(os.path.join(root, file), os.path.join(dest_root, file))
                if file.endswith(".pyi"):
                    shutil.copy2(os.path.join(root, file), os.path.join(dest_root, file))

# Make sure destination exists
os.makedirs(dest, exist_ok=True)
copy_py_only(src, dest)

print("Bundled python files to successfully!.")
