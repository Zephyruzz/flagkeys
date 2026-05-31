# flagkeys
Hidden prompt detector for .docx files — detects invisible font sizes, white text, and injection phrases embedded in academic documents.

Professors and instructors increasingly embed invisible instructions inside assignment prompts — using white text, microscopic font sizes, or zero-width characters — designed to manipulate AI tools that students use. These traps are invisible to the human eye but readable by AI models like ChatGPT and Claude.

Flagkeys detects these hidden commands before they affect your work.

## What it detects

- Font sizes under 12pt — including 0pt, 1pt, 2pt and other humanly invisible sizes
- White and near-white text colors designed to blend into document backgrounds
- Zero-width and invisible unicode characters embedded between words
- Word's native vanish/hidden text property (w:vanish)
- Natural language prompt injection phrases targeting AI behavior
- Homoglyph substitutions — Cyrillic or Greek characters disguised as Latin letters

## How it works

Flagkeys reads the raw XML structure of .docx files directly in the browser. A .docx file is a ZIP archive containing XML — Flagkeys unzips it client-side and inspects every text run for suspicious formatting properties. No file is ever uploaded to a server. Everything happens locally in your browser.

## Status

Early development. Built and originated by Zephyruzz. Copyright 2026 [Mannan Vishal Pandya].
