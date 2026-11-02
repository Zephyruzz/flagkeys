# flagkeys

A browser-based inspector for Word (.docx) files. Flagkeys shows text that is stored in a document but may not be visible when reading it.

A document can hold more than what appears on the page. Very small type, white text, hidden formatting, and invisible Unicode characters are all still part of the file, and software that reads the file will pick them up. Flagkeys lists these so you can see the whole document.

## What it checks

- Font sizes under 12pt, with very small sizes ranked highest
- White and near-white text colors
- Word's hidden text property (`w:vanish`)
- Zero-width, invisible, and text-direction Unicode characters
- Phrases commonly used in prompt injection

It reads the document body, headers, footers, footnotes, endnotes, and comments.

A flag means something is worth a look. It says nothing about why the text is there, and small print or invisible characters often have ordinary explanations.

## How it works

A .docx file is a ZIP archive containing XML. Flagkeys unzips it in the browser and inspects the formatting and content of each text run. Files are processed locally and are not uploaded to a server.

## Limitations

- Text inside images is not checked
- Formatting inherited from Word styles, rather than applied directly to text, may not be detected
- Only Word's XML-based formats are supported, not PDF or legacy .doc files

## Status

Early development. Built by Zephyruzz. Copyright 2026 [Mannan Vishal Pandya].
