# Captcha Solver Demo

A minimal, client-side CAPTCHA viewer and mock solver designed to run in a GitHub Pages environment. It accepts a captcha image URL via the query string parameter ?url= and will display both the image and a solved-captcha text within 15 seconds.

## FEATURES
- Displays the captcha URL provided by the ?url= parameter on the page.
- Renders a default attached sample image (three colored squares) when no URL is provided.
- Mock captcha solving: simulates a solver and reveals the solved text within 15 seconds.
- Self-contained frontend (no external dependencies required).
- MIT license.

## DOCUMENTATION
This project is a self-contained static page that demonstrates a simple captcha viewer and a mock solver. It is designed to be deployed to GitHub Pages from the repository root.

## HOW TO USE
1. Host the repository on GitHub Pages (e.g. https://<your-username>.github.io/<repo-name>/).
2. Open the page with an optional URL parameter:
   - https://<your-domain>/?url=https://example.com/image.png
3. If you provide a URL, the page will display the image from that URL and attempt to solve the captcha within 15 seconds.
4. If no url parameter is provided, a default sample image (three colored squares) will be shown and solved.

## PROJECT STRUCTURE
- index.html: Main HTML entry point.
- styles.css: Page styling.
- app.js: Client-side logic for loading the captcha image and running the mock solver.
- README.md: This document.
- LICENSE: MIT license.

## LICENSE
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
