# flagkeys

A browser-based file inspector that shows content stored in a file but not visible when you open it.

Files can hold more than what appears on screen. Very small type, white text, hidden formatting, and invisible Unicode characters are all still part of the file, and software that reads the file will pick them up. Flagkeys lists these so you can see everything a file contains.

The goal is to make this work for almost any file type. **Flagkeys currently supports .docx files**, and more formats are planned.

## What it checks in .docx files

- Font sizes under 12pt, with very small sizes ranked highest
- White and near-white text colors
- Word's hidden text property (`w:vanish`)
- Zero-width, invisible, and text-direction Unicode characters
- Phrases commonly used in prompt injection

It reads the document body, headers, footers, footnotes, endnotes, and comments.

A flag means something is worth a look. It says nothing about why the content is there, and small print or invisible characters often have ordinary explanations.

## How it works

Flagkeys reads a file's underlying structure instead of what it looks like on screen. A .docx file, for example, is a ZIP archive containing XML, so Flagkeys unzips it in the browser and inspects the formatting and content of each text run. Files are processed locally and are not uploaded to a server.

## Roadmap

Planned, not yet available:

- **Documents:** PDF, legacy .doc, RTF, OpenDocument
- **Presentations and spreadsheets:** PowerPoint, Excel, including hidden slides, rows, and sheets
- **Web and text:** HTML, Markdown, plain text, and other text formats
- **Images:** text embedded in images, and file metadata
- **Detection:** homoglyphs (non-Latin characters that resemble Latin letters), and formatting inherited from styles

## Current limitations

- Only .docx files can be scanned
- Text inside images is not checked
- Formatting inherited from Word styles, rather than applied directly to text, may not be detected

## Status

Early development. Built by Zephyruzz. Copyright 2026 [Mannan Vishal Pandya].
