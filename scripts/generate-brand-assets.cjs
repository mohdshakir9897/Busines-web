const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BRAND_DIR = path.join(__dirname, '../public/brand');
const PUBLIC_DIR = path.join(__dirname, '../public');

if (!fs.existsSync(BRAND_DIR)) {
  fs.mkdirSync(BRAND_DIR, { recursive: true });
}

// 1. Horizontal SVG (4:1 ratio -> 1600 x 400)
function getHorizontalSvg(isDarkBg = false) {
  const bg = isDarkBg ? '<rect width="1600" height="400" fill="#070712"/>' : '';
  return `<svg width="1600" height="400" viewBox="0 0 1600 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hexBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22D3EE"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="byteTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="60%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="pixelHGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  ${bg}

  <!-- Hexagon Icon Group (Centered around x=260, y=200) -->
  <g transform="translate(260, 200)">
    <!-- Glow behind hexagon -->
    <polygon points="0,-140 121.2,-70 121.2,70 0,140 -121.2,70 -121.2,-70" 
      fill="none" stroke="#38BDF8" stroke-width="20" opacity="0.35" filter="url(#glow)"/>

    <!-- Main Hexagon Outline -->
    <polygon points="0,-140 121.2,-70 121.2,70 0,140 -121.2,70 -121.2,-70" 
      fill="none" stroke="url(#hexBorderGrad)" stroke-width="12" stroke-linejoin="round"/>

    <!-- Corner Nodes -->
    <circle cx="0" cy="-140" r="14" fill="#22D3EE" filter="url(#softGlow)"/>
    <circle cx="121.2" cy="-70" r="14" fill="#38BDF8" filter="url(#softGlow)"/>
    <circle cx="121.2" cy="70" r="14" fill="#3B82F6" filter="url(#softGlow)"/>
    <circle cx="0" cy="140" r="14" fill="#6366F1" filter="url(#softGlow)"/>
    <circle cx="-121.2" cy="70" r="14" fill="#3B82F6" filter="url(#softGlow)"/>
    <circle cx="-121.2" cy="-70" r="14" fill="#22D3EE" filter="url(#softGlow)"/>

    <!-- Inner Pixel H (5x5 grid cells, size 22px, gap 6px) -->
    <!-- Grid total height: 5*22 + 4*6 = 110 + 24 = 134. y offset: -67 -->
    <!-- Grid total width: 5*22 + 4*6 = 134. x offset: -67 -->
    <g transform="translate(-67, -67)">
      <!-- Left Column (5 squares at x=0) -->
      <rect x="0" y="0" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="0" y="28" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="0" y="56" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="0" y="84" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="0" y="112" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>

      <!-- Crossbar (3 squares at row index 2: x=28, 56, 84) -->
      <rect x="28" y="56" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="56" y="56" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="84" y="56" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>

      <!-- Right Column (5 squares at x=112) -->
      <rect x="112" y="0" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="112" y="28" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="112" y="56" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="112" y="84" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>
      <rect x="112" y="112" width="24" height="24" rx="4" fill="url(#pixelHGrad)"/>

      <!-- Floating Particle Pixels -->
      <rect x="146" y="2" width="10" height="10" rx="2" fill="#38BDF8" opacity="0.85"/>
      <rect x="158" y="24" width="8" height="8" rx="2" fill="#3B82F6" opacity="0.85"/>
      <rect x="-30" y="74" width="9" height="9" rx="2" fill="#38BDF8" opacity="0.85"/>
      <rect x="-18" y="94" width="12" height="12" rx="3" fill="#3B82F6" opacity="0.85"/>
    </g>
  </g>

  <!-- Typography: HEX in crisp white, BYTE in vivid violet gradient -->
  <g id="brand-text">
    <text x="500" y="248" 
      font-family="system-ui, -apple-system, 'Plus Jakarta Sans', Inter, sans-serif" 
      font-size="160" 
      font-weight="900" 
      letter-spacing="12" 
      fill="#FFFFFF">HEX</text>
    <text x="940" y="248" 
      font-family="system-ui, -apple-system, 'Plus Jakarta Sans', Inter, sans-serif" 
      font-size="160" 
      font-weight="900" 
      letter-spacing="12" 
      fill="url(#byteTextGrad)">BYTE</text>
  </g>
</svg>`;
}

// 2. Square SVG (1:1 ratio -> 800 x 800)
function getSquareSvg(isDarkBg = false) {
  const bg = isDarkBg ? '<rect width="800" height="800" fill="#070712"/>' : '';
  return `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hexBorderGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22D3EE"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="byteTextGradSq" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="60%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="pixelHGradSq" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
    <filter id="glowSq" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlowSq" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  ${bg}

  <!-- Hexagon Icon Group (Centered around x=400, y=340) -->
  <g transform="translate(400, 320)">
    <!-- Glow behind hexagon -->
    <polygon points="0,-180 155.8,-90 155.8,90 0,180 -155.8,90 -155.8,-90" 
      fill="none" stroke="#38BDF8" stroke-width="24" opacity="0.35" filter="url(#glowSq)"/>

    <!-- Main Hexagon Outline -->
    <polygon points="0,-180 155.8,-90 155.8,90 0,180 -155.8,90 -155.8,-90" 
      fill="none" stroke="url(#hexBorderGradSq)" stroke-width="16" stroke-linejoin="round"/>

    <!-- Corner Nodes -->
    <circle cx="0" cy="-180" r="18" fill="#22D3EE" filter="url(#softGlowSq)"/>
    <circle cx="155.8" cy="-90" r="18" fill="#38BDF8" filter="url(#softGlowSq)"/>
    <circle cx="155.8" cy="90" r="18" fill="#3B82F6" filter="url(#softGlowSq)"/>
    <circle cx="0" cy="180" r="18" fill="#6366F1" filter="url(#softGlowSq)"/>
    <circle cx="-155.8" cy="90" r="18" fill="#3B82F6" filter="url(#softGlowSq)"/>
    <circle cx="-155.8" cy="-90" r="18" fill="#22D3EE" filter="url(#softGlowSq)"/>

    <!-- Inner Pixel H (5x5 grid cells, size 30px, gap 8px) -->
    <!-- Grid total height: 5*30 + 4*8 = 150 + 32 = 182. y offset: -91 -->
    <!-- Grid total width: 5*30 + 4*8 = 182. x offset: -91 -->
    <g transform="translate(-91, -91)">
      <!-- Left Column (5 squares at x=0) -->
      <rect x="0" y="0" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="0" y="38" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="0" y="76" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="0" y="114" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="0" y="152" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>

      <!-- Crossbar (3 squares at row index 2: x=38, 76, 114) -->
      <rect x="38" y="76" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="76" y="76" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="114" y="76" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>

      <!-- Right Column (5 squares at x=152) -->
      <rect x="152" y="0" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="152" y="38" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="152" y="76" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="152" y="114" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>
      <rect x="152" y="152" width="32" height="32" rx="6" fill="url(#pixelHGradSq)"/>

      <!-- Floating Particle Pixels -->
      <rect x="198" y="2" width="14" height="14" rx="3" fill="#38BDF8" opacity="0.85"/>
      <rect x="214" y="32" width="10" height="10" rx="2" fill="#3B82F6" opacity="0.85"/>
      <rect x="-42" y="100" width="12" height="12" rx="3" fill="#38BDF8" opacity="0.85"/>
      <rect x="-24" y="126" width="16" height="16" rx="4" fill="#3B82F6" opacity="0.85"/>
    </g>
  </g>

  <!-- Centered Typography & Line Accent -->
  <g transform="translate(400, 620)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, 'Plus Jakarta Sans', Inter, sans-serif" 
      font-size="94" 
      font-weight="900" 
      letter-spacing="10">
      <tspan fill="#FFFFFF">HEX</tspan><tspan fill="url(#byteTextGradSq)">BYTE</tspan>
    </text>
    <rect x="-60" y="36" width="120" height="6" rx="3" fill="url(#byteTextGradSq)"/>
  </g>
</svg>`;
}

// 3. OpenGraph / Twitter Card (1200 x 630 on dark background #070712)
function getOgCardSvg() {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="meshGlow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.25"/>
      <stop offset="50%" stop-color="#8B5CF6" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#070712" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="hexBorderOg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22D3EE"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="byteTextOg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="60%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="pixelHOg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#070712"/>
  <rect width="1200" height="630" fill="url(#meshGlow)"/>

  <!-- Logo Group -->
  <g transform="translate(600, 220)">
    <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" 
      fill="none" stroke="url(#hexBorderOg)" stroke-width="12" stroke-linejoin="round"/>
    <circle cx="0" cy="-120" r="12" fill="#22D3EE"/>
    <circle cx="104" cy="-60" r="12" fill="#38BDF8"/>
    <circle cx="104" cy="60" r="12" fill="#3B82F6"/>
    <circle cx="0" cy="120" r="12" fill="#6366F1"/>
    <circle cx="-104" cy="60" r="12" fill="#3B82F6"/>
    <circle cx="-104" cy="-60" r="12" fill="#22D3EE"/>

    <g transform="translate(-60, -60)">
      <rect x="0" y="0" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="0" y="26" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="0" y="52" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="0" y="78" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="0" y="104" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>

      <rect x="26" y="52" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="52" y="52" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="78" y="52" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>

      <rect x="104" y="0" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="104" y="26" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="104" y="52" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="104" y="78" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
      <rect x="104" y="104" width="22" height="22" rx="4" fill="url(#pixelHOg)"/>
    </g>
  </g>

  <!-- Wordmark -->
  <g transform="translate(600, 420)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, 'Plus Jakarta Sans', Inter, sans-serif" 
      font-size="90" 
      font-weight="900" 
      letter-spacing="12">
      <tspan fill="#FFFFFF">HEX</tspan><tspan fill="url(#byteTextOg)">BYTE</tspan>
    </text>
    <rect x="-80" y="32" width="160" height="6" rx="3" fill="url(#byteTextOg)"/>
  </g>

  <!-- Tagline -->
  <text x="600" y="530" 
    text-anchor="middle" 
    font-family="system-ui, -apple-system, 'DM Sans', Inter, sans-serif" 
    font-size="30" 
    font-weight="500" 
    letter-spacing="2" 
    fill="#94A3B8">ENTERPRISE INTELLIGENT CLOUD &amp; DATA PLATFORM</text>
</svg>`;
}

async function run() {
  console.log('Generating Hexbyte brand assets...');

  // 1. Horizontal logos
  const horizTransBuf = Buffer.from(getHorizontalSvg(false));
  const horizDarkBuf = Buffer.from(getHorizontalSvg(true));
  await sharp(horizTransBuf).png().toFile(path.join(BRAND_DIR, 'hexbyte-logo-4x1-transparent.png'));
  await sharp(horizDarkBuf).png().toFile(path.join(BRAND_DIR, 'hexbyte-logo-4x1.png'));
  fs.writeFileSync(path.join(BRAND_DIR, 'hexbyte-logo-4x1.svg'), horizTransBuf);

  // 2. Square logos
  const sqTransBuf = Buffer.from(getSquareSvg(false));
  const sqDarkBuf = Buffer.from(getSquareSvg(true));
  await sharp(sqTransBuf).png().toFile(path.join(BRAND_DIR, 'hexbyte-logo-1x1-transparent.png'));
  await sharp(sqDarkBuf).png().toFile(path.join(BRAND_DIR, 'hexbyte-logo-1x1.png'));
  fs.writeFileSync(path.join(BRAND_DIR, 'hexbyte-logo-1x1.svg'), sqTransBuf);

  // 3. Open Graph image (1200x630)
  const ogBuf = Buffer.from(getOgCardSvg());
  await sharp(ogBuf).png().toFile(path.join(BRAND_DIR, 'hexbyte-og-card.png'));
  await sharp(ogBuf).png().toFile(path.join(PUBLIC_DIR, 'og-image.png'));

  // 4. Favicons and app icons
  const iconBase = sharp(sqDarkBuf);
  await iconBase.clone().resize(16, 16).png().toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));
  await iconBase.clone().resize(32, 32).png().toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
  await iconBase.clone().resize(48, 48).png().toFile(path.join(PUBLIC_DIR, 'favicon-48x48.png'));
  await iconBase.clone().resize(180, 180).png().toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  await iconBase.clone().resize(192, 192).png().toFile(path.join(PUBLIC_DIR, 'icon-192x192.png'));
  await iconBase.clone().resize(512, 512).png().toFile(path.join(PUBLIC_DIR, 'icon-512x512.png'));
  // Standard favicon.ico
  await iconBase.clone().resize(48, 48).toFile(path.join(PUBLIC_DIR, 'favicon.ico'));

  console.log('All brand assets successfully generated in /public/brand and /public!');
}

run().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
