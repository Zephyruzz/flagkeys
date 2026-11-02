# Flagkeys — Concept Document

## Origin
Conceived and built by Zephyruzz ([Mannan Vishal Pandya]), 2026.
This document records the original concept and technical approach for Flagkeys.

## Background
Word documents can contain text that does not appear, or is hard to notice, when the document is read normally. Software that processes the file's contents still receives this text. Examples include:

- White or near-white colored text on a white background
- Very small font sizes
- Microsoft Word's native vanish/hidden text property
- Zero-width unicode characters between visible words
- Text-direction control characters

## The Idea
Flagkeys is a browser-based tool that shows this kind of content so a reader can see everything a document contains.

The user selects a .docx file. Flagkeys unzips the file client-side — a .docx is a ZIP archive containing XML — and inspects each text run in the document's XML structure. No file is sent to a server. All processing happens locally in the browser.

## Technical Approach
- Parse word/document.xml and related parts from the .docx ZIP archive using JSZip
- Walk every text run element (w:r) in the document XML
- Flag runs where the w:sz value indicates a font size below 12pt
- Flag runs where the w:color value is white or near-white
- Flag runs containing the w:vanish property
- Flag text matching known prompt injection phrases
- Flag zero-width, invisible, and text-direction unicode characters

## Possible Future Work
- Homoglyph detection: non-Latin characters that resemble Latin letters

## Intended Use
Anyone who wants to inspect the contents of a Word document. A result describes what is in the file; it does not establish why the content is there.

## Original Creation Date
This repository was created and this concept was documented in 2026. All commits are timestamped on GitHub as proof of original authorship.

## Copyright
Copyright 2026 [Mannan Vishal Pandya]. All rights reserved.
No part of this codebase or concept may be reproduced, distributed, or used without explicit written permission from the original author.
