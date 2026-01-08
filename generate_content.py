#!/usr/bin/env python3
import sys
from pathlib import Path

def should_skip(path_obj):
    """
    Check if the file or any of its parent directories should be ignored.
    """
    parts = path_obj.parts

    # Skip hidden files/folders (starting with .)
    if any(part.startswith('.') for part in parts):
        return True

    # Specific directory/file exclusions based on the Ruby script
    ignored_patterns = [
        'node_modules',
        'public',
        '.next'
    ]

    path_str = str(path_obj)
    if any(pattern in path_str for pattern in ignored_patterns):
        return True

    # Specific filename exclusions
    filename = path_obj.name
    if filename in [
        'prompt.md',
        'generate_content.py',
        'file_structure.md',
        'LICENSE',
        'favicon.ico',
        'pnpm-lock.yaml',
        'pnpm-workspace.yaml',
        '.gitignore',
        'README.md',
        'javascript.svg'
    ]:
        return True

    return False

def main():
    # Setup output path (defaults to file_structure.md)
    output_filename = sys.argv[1] if len(sys.argv) > 1 else 'file_structure.md'
    root = Path.cwd()

    try:
        with open(output_filename, 'w', encoding='utf-8') as md:
            # rglob('*') recursively finds all files and directories
            # We sort them to maintain a consistent order
            paths = sorted(root.rglob('*'))

            for path in paths:
                # We only want to process files, not directories
                if not path.is_file():
                    continue

                # Get the path relative to the root for matching and display
                rel_path = path.relative_to(root)

                if should_skip(rel_path):
                    continue

                # Write header and code block
                md.write(f"File: {rel_path}\n")
                # Remove the leading dot from the extension for the markdown hint
                lang = path.suffix.lstrip('.')
                md.write(f"```{lang}\n")

                try:
                    md.write(path.read_text(encoding='utf-8'))
                except (UnicodeDecodeError, PermissionError):
                    md.write("[Error: Could not read file content]")

                md.write("\n```\n\n")

        print(f"✅ Wrote file structure to {output_filename}")

    except Exception as e:
        print(f"❌ An error occurred: {e}")

if __name__ == "__main__":
    main()
