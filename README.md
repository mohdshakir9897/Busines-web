# HEXBYTE Enterprise Platform Website

Enterprise-grade digital web presence and multi-page platform for **HEXBYTE** — a high-performance intelligent cloud infrastructure and autonomous data platform serving global enterprise leaders.

## Brand Identity & Specifications

- **Brand Name**: HEXBYTE (all-caps in brand logo, headings, and system labels; Hexbyte in running narrative prose).
- **Core Visual Palette**:
  - Dark Slate Ground: `#070712` / `#020617`
  - Neon Cyan: `#22D3EE` / `#38BDF8`
  - Enterprise Electric Blue: `#3B82F6`
  - Deep Violet: `#8B5CF6`
  - Vibrant Magenta: `#D946EF`
- **Logo Assets (`/public/brand/`)**:
  - `hexbyte-logo-4x1-transparent.png`: Horizontal transparent lockup for dark navbar, glass headers, and footer.
  - `hexbyte-logo-4x1.png`: Horizontal lockup on brand solid `#070712` background.
  - `hexbyte-logo-1x1-transparent.png`: Square icon mark for favicon, preloader, 404, and Thank You page.
  - `hexbyte-logo-1x1.png`: Square icon mark on brand solid `#070712` background.
  - `hexbyte-og-card.png`: 1200x630 Open Graph & Twitter Social Card.
- **Reusable Component**:
  - `<Logo variant="horizontal | icon" />` located at `src/components/common/Logo.tsx` providing single-source-of-truth brand rendering.

## Architecture

- **Framework**: React 19 + Vite + TypeScript (Strict)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`) with custom enterprise design tokens
- **Motion**: `motion/react` (Framer Motion) for page transitions, micro-interactions, and preloader logo animation
- **Routing**: Wouter lightweight routing covering all 40 enterprise pages (Services, Industries, Case Studies, Careers, Resources, Legal, and hidden `/admin` console).
- **SEO & Schema**: Schema.org Organization JSON-LD, Open Graph, Twitter Cards, Sitemap, and PWA Manifest.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build & type check
npm run build
```
