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

// ── PROJECT CAROUSEL ──
document.querySelectorAll('.project-carousel').forEach((carousel) => {
  const viewport = carousel.querySelector('.carousel-viewport');
  const slides = [...viewport.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.parentElement.querySelectorAll('.carousel-dot')];
  let index = 0;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('active', n === index));
    dots.forEach((d, n) => d.classList.toggle('active', n === index));
  }

  carousel.querySelector('.carousel-prev').addEventListener('click', () => show(index - 1));
  carousel.querySelector('.carousel-next').addEventListener('click', () => show(index + 1));
  dots.forEach((dot, n) => dot.addEventListener('click', () => show(n)));
});

// ── SCREENSHOT LIGHTBOX ──
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  let gallery = [];
  let galleryIndex = 0;
  let lastTrigger = null;

  function renderLightbox() {
    const img = gallery[galleryIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    const multi = gallery.length > 1;
    prevBtn.style.visibility = multi ? 'visible' : 'hidden';
    nextBtn.style.visibility = multi ? 'visible' : 'hidden';
  }
  function openLightbox(img) {
    lastTrigger = img;
    const card = img.closest('.project-card');
    gallery = [...card.querySelectorAll('.project-screenshot, .project-screenshot-mobile')];
    galleryIndex = gallery.indexOf(img);
    renderLightbox();
    lightbox.classList.add('open');
    closeBtn.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    if (lastTrigger) lastTrigger.focus();
  }
  function showRelative(delta) {
    galleryIndex = (galleryIndex + delta + gallery.length) % gallery.length;
    renderLightbox();
  }

  document.querySelectorAll('.project-screenshot, .project-screenshot-mobile').forEach((img) => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.addEventListener('click', () => openLightbox(img));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img); }
    });
  });
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showRelative(-1));
  nextBtn.addEventListener('click', () => showRelative(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showRelative(-1);
    if (e.key === 'ArrowRight') showRelative(1);
  });
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
