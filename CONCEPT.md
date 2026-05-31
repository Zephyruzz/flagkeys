# Flagkeys — Concept Document

## Origin
Conceived and built by Zephyruzz ([Mannan Vishal Pandya]), 2026.
This document establishes the original concept, problem statement, and technical approach for Flagkeys.

## The Problem
Professors and instructors are increasingly embedding invisible instructions inside academic assignment prompts. These hidden commands are designed to manipulate AI tools that students use — causing the AI to include specific words, assign positive self-evaluations, or behave in ways that expose the student as an AI user.

These traps are invisible to the human eye but fully readable by AI models. Common techniques include:

- White or near-white colored text on a white background
- Font sizes of 0pt, 1pt, 2pt or other humanly invisible sizes
- Microsoft Word's native vanish/hidden text property
- Zero-width unicode characters embedded between visible words
- Natural language prompt injection phrases buried in document text
- Homoglyph substitutions using Cyrillic or Greek characters that visually resemble Latin letters

## The Solution
Flagkeys is a browser-based tool that detects these hidden commands before they affect the student's work.

The user uploads a .docx file. Flagkeys unzips the file client-side — a .docx is a ZIP archive containing XML — and inspects every text run in the document's XML structure for suspicious formatting properties. No file is ever sent to a server. All processing happens locally in the browser.

## Technical Approach
- Parse word/document.xml from the .docx ZIP archive using JSZip
- Walk every text run element (w:r) in the document XML
- Flag runs where w:sz value indicates font size below 12pt
- Flag runs where w:color value is white, near-white, or background-matching
- Flag runs containing the w:vanish property
- Flag runs containing known prompt injection phrases via pattern matching
- Flag zero-width and invisible unicode characters
- Flag homoglyph character substitutions from non-Latin scripts

## Target User
Students at any academic level who receive assignments as Word documents and want to verify the document contains no hidden AI-manipulation traps before using AI assistance.

## Original Creation Date
This repository was created and this concept was documented in 2026. All commits are timestamped on GitHub as proof of original authorship.

## Copyright
Copyright 2026 [Mannan Vishal Pandya]. All rights reserved.
No part of this codebase or concept may be reproduced, distributed, or used without explicit written permission from the original author.
