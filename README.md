# 🌐 Personal Portfolio Website | John Lee
> 🚀 **Live Production Deployment:** [👉 Click Here to View the Live Website](https://johnldh1997.github.io/portfolio-website/)

Welcome to the technical repository for my personal portfolio platform. This codebase serves as a standalone front-end engineering project, built entirely from scratch to demonstrate modern semantic web layout structures, responsive user interfaces, custom client-side states, and clean project asset organization.

---

## 📂 Project Directory Structure
To keep the root production workspace modular and maintainable, all production-ready user-facing files are decoupled into a dedicated deployment directory, which serves as the active hosting target source for GitHub Pages:

```text
📦 portfolio-website
 ┣ 📂 docs                  <-- Active Production Target (GitHub Pages Source)
 ┃ ┣ 📂 css
 ┃ ┃ ┗ 📄 styles.css        [Global CSS Variables, Responsive Grids, Media Queries]
 ┃ ┣ 📂 js
 ┃ ┃ ┗ 📄 main.js           [State Switchers, Typewriter Loop, Temporal Engine]
 ┃ ┣ 📄 index.html          [Main Home Landing Page]
 ┃ ┣ 📄 about.html          [Background & Professional Summary]
 ┃ ┣ 📄 cv.html             [Technical Skills Matrix & Core Education Grid]
 ┃ ┣ 📄 portfolio.html      [Case Studies & Interactive Project Layouts]
 ┃ ┗ 📄 contact.html        [Network Channels & Outreach Panel]
 ┗ 📄 README.md             <-- Technical Documentation (Root)
```

## 🛠️ Technology Stack & Core Competencies
### Languages: 
HTML5 (Semantic Document Structure), 

CSS3 (Custom Root Variables & Keyframes), 

Vanilla JavaScript (ES6+ Native DOM Manipulation)

### Design Systems: 
Inter Typography Ecosystem

FontAwesome Icons

### Development Workflow: Visual Studio Code local IDE development, Live Server local workspace emulation, Git configuration control trackers, GitHub Pages static cloud hosting deployment

## 🎨 Engineering & Frontend Techniques Used
### 1. Light / Dark Theme Switcher
**What it is:** A toggle button that instantly flips the website's appearance between a dark mode and a light mode.

**How it works:** When clicked, it changes the background and text color variables across the whole site. It also securely saves your preference directly in your web browser's temporary memory, meaning the site will remember your preferred mode even if you refresh or switch pages.

### 2. Auto-Updating Copyright Date
**What it is:** A smart footer note at the bottom of each page that displays the copyright year.

**How it works:** Instead of typing a static year that becomes outdated every January, a script checks the visitor's computer or phone clock when the page loads and automatically prints the current calendar year.

### 3. Fluid Mobile-Responsive Design
**What it is:** A layout system that ensures the website shrinks, resizes, and scales to look clean on any screen size.

**How it works:** The structure dynamically repositions elements based on the display size. For example, on a large computer monitor, the navigation menu is flat across the top; on a small phone, it neatly tucks into a clickable slide-out "burger" menu icon.  

### 4. Interactive Typewriter Banner
**What it is:** An animated text sequence on the home screen that types out different professional roles.

**How it works:** A background script loops through a list of job keywords (Data Analyst, Flutter Developer, BI Engineer, Software Developer, Problem Solver), typing them out letter-by-letter and deleting them before moving to the next title. 
