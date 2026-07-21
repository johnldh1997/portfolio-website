// ── THEME TOGGLE ──
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Persist theme across pages
(function () {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
})();

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
