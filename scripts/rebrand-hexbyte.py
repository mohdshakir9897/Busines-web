import os
import re

ROOT_DIR = '.'
EXTENSIONS = {'.ts', '.tsx', '.json', '.html', '.xml', '.css', '.md'}
EXCLUDE_DIRS = {'node_modules', '.git', 'dist', 'build', '.next'}

# Rules applied in order of specificity
REPLACEMENTS = [
    # Domains and social handles
    ('https://synthex.global', 'https://hexbyte.io'),
    ('http://synthex.global', 'https://hexbyte.io'),
    ('synthex.global', 'hexbyte.io'),
    ('twitter.com/synthexglobal', 'twitter.com/hexbyteio'),
    ('linkedin.com/company/synthexglobal', 'linkedin.com/company/hexbyte'),
    ('github.com/synthex', 'github.com/hexbyte'),
    ('synthex.io', 'hexbyte.io'),

    # Routes
    ('/life-at-synthex', '/life-at-hexbyte'),
    ('life-at-synthex', 'life-at-hexbyte'),

    # Exact Dockets / IDs
    ('SYN-REQ-', 'HEX-REQ-'),
    ('SYN-', 'HEX-'),

    # Exact Brand casing:
    # 1. All-caps with separator
    ('SYNTHEX.GLOBAL', 'HEXBYTE'),
    ('SYNTHEX.IO', 'HEXBYTE'),
    ('SYNTHEX GLOBAL', 'HEXBYTE'),
    ('SYNTHEX', 'HEXBYTE'),

    # 2. Mixed case
    ('Synthex Global Inc.', 'HEXBYTE Inc.'),
    ('Synthex Global Inc', 'HEXBYTE Inc'),
    ('Synthex Global', 'HEXBYTE'),
    ('Synthex global', 'Hexbyte'),
    ('Synthex', 'Hexbyte'),

    # 3. Lowercase identifiers
    ('synthex', 'hexbyte'),
]

modified_files = []

for root, dirs, files in os.walk(ROOT_DIR):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for filename in files:
        ext = os.path.splitext(filename)[1]
        if ext in EXTENSIONS:
            filepath = os.path.join(root, filename)
            # Skip script itself or package-lock if any
            if 'rebrand-hexbyte' in filepath:
                continue
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                new_content = content
                for old_val, new_val in REPLACEMENTS:
                    new_content = new_content.replace(old_val, new_val)

                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    modified_files.append(filepath)
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Rebranding completed. Modified {len(modified_files)} files:")
for mf in sorted(modified_files):
    print(f"  {mf}")
