# Portfolio website

My personal portfolio site. Static HTML, CSS and vanilla JavaScript — no framework, no build step.

**Live:** https://johnldh1997.github.io/portfolio-website/

## Pages

| File | Contents |
|---|---|
| `index.html` | Landing page |
| `about.html` | Background and summary |
| `cv.html` | Skills and education |
| `portfolio.html` | Project case studies |
| `contact.html` | Contact details |

## Built with

- HTML5, CSS3 (custom properties, flexbox/grid, media queries)
- Vanilla JavaScript (ES6+), no framework or build step
- Inter via Google Fonts, Font Awesome icons
- GitHub Pages for hosting

## What's in it

- **Screenshot lightbox** — opens on click or Enter/Space, closes on Escape or a
  backdrop click, and arrow keys move between screenshots within the same project.
  Focus moves to the close button on open and returns to the triggering image on
  close, so it's usable without a mouse.
- **Light/dark theme toggle** — stores the choice in `localStorage` and updates the
  `theme-color` meta tag so mobile browser chrome matches the active theme.
- **Project carousels** — previous/next buttons and clickable dots for projects with
  multiple screenshots.
- **Scroll reveal** — `IntersectionObserver` fades sections in as they enter the
  viewport, unobserving each element once it has been shown.
- **Responsive layout** — horizontal nav on desktop, burger menu on mobile.
- **Typewriter banner** — cycles role titles on the landing page.
- **Cursor trail** — throttled to ~30ms and skipped for non-mouse pointers.
- Footer year is read from the system clock.

## Structure

```text
docs/                 <- GitHub Pages source
├── css/styles.css
├── js/main.js
├── index.html
├── about.html
├── cv.html
├── portfolio.html
└── contact.html
```

## Running locally

Clone the repo and open `docs/index.html` in a browser, or serve the `docs` folder
with any static server. No dependencies to install.

## Deployment

GitHub Pages, served from the `/docs` folder on `main`.
