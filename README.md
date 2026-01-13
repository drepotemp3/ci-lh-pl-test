# Static Landing Page

![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
![Lighthouse](https://img.shields.io/badge/Lighthouse-95+-success)
![Accessibility](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-blue)

> Production-ready static landing page with automated linting, accessibility checks, and Lighthouse CI.

## Quick Start
```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint:js` - Lint JavaScript
- `npm run lint:css` - Lint CSS
- `npm run lint:html` - Validate HTML
- `npm run format` - Format code with Prettier
- `npm run test:a11y` - Run accessibility tests
- `npm run test:links` - Check for broken links
- `npm run lighthouse` - Run Lighthouse CI locally

## CI/CD Pipeline

On every push/PR:
- ✅ Code formatting & linting
- ✅ Build verification
- ✅ Accessibility scan (WCAG 2.1 AA)
- ✅ Link validation
- ✅ Lighthouse performance/SEO audit

## Deploy

Auto-deploys to production via [Netlify/Vercel/GitHub Pages] on push to `main`.