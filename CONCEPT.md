# Flagkeys — Concept Document

## Origin
Conceived and built by Zephyruzz ([Mannan Vishal Pandya]), 2026.
This document records the original concept and technical approach for Flagkeys.

## Background
Files can contain content that does not appear, or is hard to notice, when they are opened normally. Software that processes a file still receives this content. Examples include:

- White or near-white colored text on a white background
- Very small font sizes
- Hidden text properties, such as Microsoft Word's vanish property
- Zero-width unicode characters between visible words
- Text-direction control characters

## The Idea
Flagkeys is a browser-based file inspector that shows this kind of content so a person can see everything a file contains.

The long-term goal is to support almost any file type, using the same approach throughout: read the file's underlying structure rather than its on-screen appearance, and do all processing locally in the browser. No file is sent to a server.

## Current Scope
The first supported format is .docx, the only one available today. Flagkeys unzips the file client-side — a .docx is a ZIP archive containing XML — and inspects each text run in the document's XML structure.

## Technical Approach for .docx
- Parse word/document.xml and related parts from the .docx ZIP archive using JSZip
- Walk every text run element (w:r) in the document XML
- Flag runs where the w:sz value indicates a font size below 12pt
- Flag runs where the w:color value is white or near-white
- Flag runs containing the w:vanish property
- Flag text matching known prompt injection phrases
- Flag zero-width, invisible, and text-direction unicode characters

## Future Direction
Planned, not yet built:

- Documents: PDF, legacy .doc, RTF, OpenDocument
- Presentations and spreadsheets: PowerPoint and Excel, including hidden slides, rows, and sheets
- Web and text: HTML, Markdown, plain text, and other text formats
- Images: text embedded in images, and file metadata
- Detection: homoglyphs (non-Latin characters that resemble Latin letters), and formatting inherited from styles

## Intended Use
Anyone who wants to inspect the contents of a file. A result describes what is in the file; it does not establish why the content is there.

## Original Creation Date
This repository was created and this concept was documented in 2026. All commits are timestamped on GitHub as proof of original authorship.

## Copyright
Copyright 2026 [Mannan Vishal Pandya]. All rights reserved.
No part of this codebase or concept may be reproduced, distributed, or used without explicit written permission from the original author.
