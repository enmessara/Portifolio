<div align="center">

# Benson Ngugi | Portfolio

**Video Editor · Cybersecurity Specialist · Backend Developer**

A fast, accessible, responsive personal portfolio built with plain HTML, CSS and JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-none-2f6df6?style=flat)
![Responsive](https://img.shields.io/badge/responsive-yes-2f6df6?style=flat)

[**Live Demo**](https://your-domain.com) · [**Report a Bug**](../../issues) · [**Contact**](mailto:bensonngugi@proton.me)

</div>

---

<div align="center">

| Dark | Light |
|:---:|:---:|
| <img src="docs/preview-dark.png" alt="Dark theme preview" width="460"> | <img src="docs/preview-light.png" alt="Light theme preview" width="460"> |

</div>

## Overview

This repository contains the source for my personal portfolio website. It showcases my work in video editing, cybersecurity, Python development and backend engineering, and gives potential clients and employers an easy way to get in touch.

The site is a static page with **no framework, no build step and no dependencies**, so it loads quickly and can be hosted anywhere for free.

## Features

- **Dark and light themes** with a toggle; the choice is saved and applied before first paint
- **Responsive layout** from large desktops down to small phones, with an accessible mobile menu
- **Project showcase** with 4 categories (Video Editing, Cybersecurity, Coding, Backend Development) and a live **category filter**
- **Scroll-spy navigation** that highlights the current section
- **Downloadable CV** and a **contact form** that opens the visitor's email app with the message pre-filled
- **Accessibility:** skip link, keyboard focus styles, ARIA states, and support for `prefers-reduced-motion`
- **Touch-friendly:** project links stay visible on devices without hover
- **Performance:** lazy-loaded images, system-font fallback, and no JavaScript libraries
- **SEO basics:** page title, meta description, Open Graph tags and favicon

## Tech stack

| | |
|---|---|
| **Markup** | HTML5 |
| **Styling** | CSS3 (Grid, Flexbox, media queries) |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Typeface** | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |

## Project structure

```
.
├── index.html        # Page content and structure
├── style.css         # Styles, light/dark themes, responsive rules
├── script.js         # Menu, theme toggle, project filter, scroll-spy, contact form
├── cv.pdf            # Downloadable CV
├── images/
│   └── profile.jpg   # Profile photo
├── docs/             # README screenshots
└── *.svg             # Contact icons
```

## Getting started

### Prerequisites

A modern web browser. Python 3 is optional, only needed for the local server.

### Run locally

```bash
# Clone the repository
git clone https://github.com/enmessara/portfolio.git
cd portfolio

# Option 1: open index.html in your browser

# Option 2: serve it locally
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customisation

| To change | Edit |
|---|---|
| Profile photo | Replace `images/profile.jpg` (square, 600 × 600 px or larger) |
| CV | Replace `cv.pdf` |
| Name, bio, skills, stats | `index.html` |
| Projects | `index.html`, in the `#projects` section |
| Accent colour | `--accent` and `--accent-text` in `style.css` |
| Contact details | `#contact` section in `index.html` |

**Adding a project:** copy an existing `.project-card` block into the matching category and update its image, link, title and description.

## Deployment

The site is static, so any static host works.

**GitHub Pages**

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Save. The site will be live at `https://<username>.github.io/<repository>/`.

**Netlify / Vercel / Cloudflare Pages:** import the repository, leave the build command empty and set the publish directory to the project root.

## Browser support

Latest versions of Chrome, Edge, Firefox and Safari on desktop and mobile.

## Contact

**Benson Ngugi**

- GitHub: [@enmessara](https://github.com/enmessara)
- Email: [bensonngugi@proton.me](mailto:bensonngugi@proton.me)
- Location: Meru, Kenya

## License

&copy; 2026 Benson Ngugi. All rights reserved.
