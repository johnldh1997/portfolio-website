// ── THEME TOGGLE ──
function toggleTheme() {
  document.documentElement.classList.toggle('light-mode');
  const isLight = document.documentElement.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#F8F8F8' : '#0F0F0F');
}

// ── BURGER MENU ──
function toggleMenu() {
  document.getElementById('mobilenav').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
}

// ── TYPED ANIMATION (index only) ──
const typedEl = document.getElementById('typed');
if (typedEl) {
  const words = ['Data Analyst', 'Flutter Developer', 'Software Developer', 'Problem Solver'];
  let wi = 0, ci = 0, deleting = false;

  function tick() {
    const word = words[wi];
    if (!deleting) {
      typedEl.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
      typedEl.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 60 : 90);
  }
  tick();
}

// ── AUTOMATIC COPYRIGHT YEAR ──
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));
}

// ── CURSOR TRAIL ──
let lastTrailTime = 0;
document.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  const now = Date.now();
  if (now - lastTrailTime < 30) return;
  lastTrailTime = now;

  const dot = document.createElement('span');
  dot.className = 'cursor-trail-dot';
  if (!document.documentElement.classList.contains('light-mode')) {
    dot.textContent = '✦';
  }
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
  document.body.appendChild(dot);
  dot.addEventListener('animationend', () => dot.remove());
});
