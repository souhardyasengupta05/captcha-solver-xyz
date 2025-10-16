(() => {
  // Helper to read query params
  const getQueryParam = (name) => {
    const q = new URLSearchParams(window.location.search);
    return q.get(name);
  };

  // Default sample as an inline SVG data URL (three colored squares) to avoid external attachments
  const buildDefaultSampleUrl = () => {
    const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"320\">
      <rect x=\"60\" y=\"60\" width=\"120\" height=\"120\" fill=\"#6c7dfa\" />
      <rect x=\"210\" y=\"60\" width=\"120\" height=\"120\" fill=\"#69b36f\" />
      <rect x=\"360\" y=\"260\" width=\"120\" height=\"120\" fill=\"#ff7a7a\" />
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  };

  const DEFAULT_SAMPLE_URL = buildDefaultSampleUrl();

  // Gaussian-like mock solver: maps known URLs to a fixed solution, otherwise derives a pseudo-solution
  const knownSolutions = {
    'https://example.com/image.png': 'ABCD',
  };

  const solveCaptcha = (url) => {
    const statusEl = document.getElementById('status');
    const solutionEl = document.getElementById('solution');
    statusEl.textContent = 'Solving captcha...';
    solutionEl.textContent = '';

    let solved = false;
    const start = Date.now();

    // Progress updates every second until solved or timeout
    const progress = setInterval(() => {
      const elapsed = Math.min(14, Math.floor((Date.now() - start) / 1000));
      statusEl.textContent = 'Solving captcha... ' + elapsed + 's';
    }, 1000);

    // Resolve after a short simulated delay (to meet the 15s requirement)
    const solution = knownSolutions[url] ?? null;
    const delay = 3000 + Math.floor(Math.random() * 1000); // 3-4 seconds

    setTimeout(() => {
      if (!solved) {
        solved = true;
        clearInterval(progress);
        statusEl.textContent = '';
        if (solution) {
          solutionEl.textContent = 'Solved: ' + solution;
        } else {
          // Derive a deterministic pseudo-solution from the URL
          const hash = Array.from(url).reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) | 0, 7);
          const digits = Math.abs(hash).toString().slice(-4).padStart(4, '0');
          solutionEl.textContent = 'Solved: ' + digits;
        }
      }
    }, delay);

    // Safety timeout at 15 seconds
    setTimeout(() => {
      if (!solved) {
        solved = true;
        clearInterval(progress);
        statusEl.textContent = '';
        solutionEl.textContent = 'Solved: UNKNOWN';
      }
    }, 15000);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const urlParam = getQueryParam('url');
    const display = document.getElementById('urlDisplay');
    const img = document.getElementById('captchaImage');

    const urlToUse = urlParam && urlParam.length > 0 ? urlParam : DEFAULT_SAMPLE_URL;

    // Show the URL (for visibility on the page)
    display.textContent = urlToUse;

    // Load the image (may be a real URL or the inline sample)
    img.src = urlToUse;

    // Start solving once the image is loaded (or immediately if it's a data URL)
    const onReady = () => solveCaptcha(urlToUse);
    if (img.complete) {
      onReady();
    } else {
      img.addEventListener('load', onReady);
      img.addEventListener('error', onReady);
    }
  });
})();
