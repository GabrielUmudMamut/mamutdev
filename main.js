// ── NAV: add scrolled class ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

// ── REVEAL on scroll ──
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
reveals.forEach(el => obs.observe(el));

// ── EASTER EGG: cheese emoji in footer opens rokfor & brownie ──
document.getElementById('cheese-egg').addEventListener('click', () => {
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>rokfor & brownie 🧀</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #faf6ee;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Georgia', serif;
      gap: 1.5rem;
    }
    img {
      max-width: min(90vw, 600px);
      max-height: 80vh;
      border-radius: 20px;
      border: 2px solid #e8dcc8;
      box-shadow: 0 12px 48px rgba(0,0,0,0.1);
      object-fit: cover;
    }
    p {
      font-style: italic;
      font-size: 1rem;
      color: #b5a898;
      letter-spacing: 0.05em;
    }
    span { color: #c8923a; }
  </style>
</head>
<body>
  <img src="images/rb.png" alt="rokfor and brownie" />
  <p><span>rokfor</span> & <span>brownie</span> 🐱🐶</p>
</body>
</html>`);
  win.document.close();
});
