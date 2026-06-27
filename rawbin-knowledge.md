# Rawbin — Complete AI Context Document

> **Purpose:** This document contains every single detail about the Rawbin product, company (Newcycl), website codebase, design system, content/copy, data, roadmap, and architecture. It is designed to be fed to an AI system so it has a full, accurate context window and does **not** hallucinate or fabricate any information about Rawbin.

---

## Table of Contents

1. [Company & Brand Identity](#1-company--brand-identity)
2. [Product: Rawbin — The Smart Home Composter](#2-product-rawbin--the-smart-home-composter)
3. [Tech Stack & Architecture](#3-tech-stack--architecture)
4. [Full Project File Tree](#4-full-project-file-tree)
5. [Configuration Files (Verbatim)](#5-configuration-files-verbatim)
6. [Design System & Theming](#6-design-system--theming)
7. [Page & Component Architecture](#7-page--component-architecture)
8. [Complete Component Inventory with Content](#8-complete-component-inventory-with-content)
9. [All Hardcoded Data & Content](#9-all-hardcoded-data--content)
10. [External Links & URLs](#10-external-links--urls)
11. [Static Assets Inventory](#11-static-assets-inventory)
12. [Animations Library](#12-animations-library)
13. [SEO & Metadata](#13-seo--metadata)
14. [CI/CD & Deployment](#14-cicd--deployment)
15. [Git Workflow & Collaboration](#15-git-workflow--collaboration)
16. [Redesign Roadmap & Task Status](#16-redesign-roadmap--task-status)
17. [Key Domain Knowledge & Science](#17-key-domain-knowledge--science)
18. [Founder & Team](#18-founder--team)

---

## 1. Company & Brand Identity

### Parent Company: Newcycl
- **Website:** https://www.newcycl.com/
- **Copyright:** © {current year} Newcycl - All Rights Reserved
- **Tagline:** #CookEatCompost
- **R&D Partner:** Techshlok ("Powered by Innovation – In collaboration with Techshlok, our trusted R&D partner.")
- **Email:** compost@rawbin.in
- **Compost Drop Email:** compostdrop@newcycl.com

### Social Media
| Platform   | URL                                          |
|------------|----------------------------------------------|
| Facebook   | https://www.facebook.com/newcyclofficial      |
| Instagram  | https://www.instagram.com/newcycl/            |
| X (Twitter)| https://x.com/NewcyclOfficial                 |
| Instagram (Rawbin) | https://www.instagram.com/rawbin.in/ |

### Brand Colors (Design Tokens)
| Token Name          | Hex Code   | Usage                                |
|---------------------|------------|--------------------------------------|
| `nc-bgreen`         | `#45B900`  | Primary brand green (CTAs, accents)  |
| `nc-blue`           | `#273266`  | Secondary blue                       |
| `nc-dgreen`         | `#1F5A3F`  | Dark green (text, backgrounds)       |
| `nc-purple`         | `#5433FF`  | Purple accent                        |
| `nc-text`           | `#002A12`  | Primary text color                   |
| `rb-coffee-brown`   | `#5C4943`  | Rawbin Brown product variant         |
| `rb-forest-green`   | `#4f574a`  | Rawbin Green product variant         |
| `rb-rose-gold`      | `#dad5cf`  | Rawbin Rose Gold product variant     |

### Additional CSS Variables (from App.css)
| Variable   | Value      |
|------------|------------|
| `--bgreen` | `#45b900`  |
| `--dgreen` | `#1f5a3f`  |
| `--text`   | `#002a12`  |
| `--bg`     | `#e3e4e8`  |
| `--fg`     | `#17181c`  |
| `--bs1`    | `#ffffff`  |
| `--bs2`    | `#c1c2c5`  |
| `--transDur` | `0.1s`  |

### Background Color
- Body: `#f9f5f3` (warm off-white/cream)
- Body text: `#002A12` (nc-text)

### Brand Fonts
| Font             | Source        | Usage                      |
|------------------|---------------|---------------------------|
| Inter            | Google Fonts  | Root layout body font      |
| Plus Jakarta Sans| Google Fonts  | Main page content font     |
| Comfortaa        | Google Fonts  | Logo/brand name in Navbar  |
| Dancing Script   | Google Fonts  | Decorative script text     |
| Prata            | Google Fonts  | Large display headings (CO2)|
| Doto             | Local (`/public/fonts/`) | Special font (Regular 400, SemiBold 600, Bold 700) |

---

## 2. Product: Rawbin — The Smart Home Composter

### One-Line Description
Rawbin is India's first smart home composter — an IoT-powered device that converts food waste into organic fertilizer in just 7 days, completely automatically.

### Positioning
- **India's FIRST smart home composter**
- Engineered specifically for urban Indian households
- Premium smart appliance positioning (not "another compost bin")
- Handmade in India, Engineered for the World

### Key Value Propositions
1. **100% Odor-Free:** Advanced carbon filtration keeps kitchens fresh. Absolutely odor free, worms free, and fruit flies free. Only smells earthy and magical.
2. **Apartment Friendly:** Compact, premium aesthetics; can be kept indoors and flaunted. No sprawling backyard needed.
3. **Fast Composting:** Accelerates organic decomposition down to a 7-day cycle.
4. **Energy Efficient:** Uses less power than a standard LED bulb (~4 units of electricity/month).
5. **Designed for India:** Built specifically for Indian lifestyles, climates, and organic waste patterns.
6. **Self-Cleaning:** Spray water, stir, rinse off from the bottom.
7. **Compost as you throw:** No waiting — keep adding waste on top, take compost from the bottom when ready.
8. **Closed-Loop System:** Uses the same compost to create more (curd-milk model). No repeated inoculant purchases.

### Product Specifications

#### Sizes & Capacity
| Model    | Height | Diameter | Capacity |
|----------|--------|----------|----------|
| Rawbin S | 60cm   | 30cm     | 10 kg    |
| Rawbin M | 70cm   | 35cm     | 15 kg    |
| Rawbin L | 80cm   | 40cm     | 25 kg    |

#### Other Specs
- **Lifespan:** Approximately 10 years
- **Power consumption:** 4 units of electricity per month
- **Available colors:** Beige (Rose Gold), Green, Steel gray (also referred to as Brown in the codebase — Coffee Brown, Forest Green, Rose Gold)
- **Cleanable:** Yes, plug off from power first

### What Can Be Composted
- All kinds of food waste: peels, leftovers, rotten bread, spoiled onion
- Edible and non-edible food waste
- Specific examples from hero animation: Banana peels, Leftover curry, Extra rice, Rotten dough
- Other mentioned items: fruit scraps, coffee grounds, uneaten salad, vegetable peels, uneaten bread

### How Rawbin Works — 3 Steps
1. **Put food waste** — Drop in food waste: leftovers, vegetable peels, uneaten bread, extra rice. Rawbin handles fruit scraps, coffee grounds, and even salad.
2. **Add Rawbin mixture** — Add a scoop of Rawbin mixture (like adding detergent to a washing machine). Speeds up composting.
3. **Press the top button** — Close the lid, press the top button. The mixture blends with food waste, rotating clockwise then counterclockwise for perfect mixing. Done!

### Composting Science
- Composting happens in 3 phases: **Mesophilic → Thermophilic → Mesophilic**
- Rawbin integrates all 3 phases together
- Retains maximum heat inside structurally
- Eliminates odor by providing optimal oxygen through stirrer
- **Intelligent Sensors:** Monitors temperature, humidity; adjusts in real-time to create perfect microclimate. Sensor-driven LED blinks when compost is ready.
- **Smart Heat Saving:** Sensor-driven internal heating system. If Rawbin is in a warm environment, the heater reduces temperature accordingly. Considers natural heat and adjusts.
- **Closed-Loop:** Functions on its own. Uses same compost to create more (curd-milk model). Only needs power (4 units/month). Scalable and affordable.

### Environmental Impact: CO2 Calculation
- **1 Rawbin removes 1,500 kgs eCO2 emissions/year**
- This is more than EVs, recycling, high-speed rails, and walkable cities combined
- **Formula:** `1 x 0.06 x 70 x 365 = 1,533 kg CO2e per family/year (avg.)`
  - 1 kg = Daily food waste per family (avg.)
  - 0.06 kg CH4 per kg of food waste = Methane emissions factor
  - 70 = Global Warming Potential (GWP) of methane
  - 365 = Days in a year

### ROE (Return on Environment) Calculator Data
CO2 equivalents by family size:

| Family Members | eCO2 (kgs) | Vehicle Equivalent  |
|---------------|-------------|---------------------|
| 1             | 625         | Auto Rickshaw       |
| 2             | 1,375       | Motorcycle          |
| 3             | 2,187       | Diesel Car          |
| 4             | 2,781       | Diesel Truck        |
| 5             | 3,437       | Diesel Bus          |
| 6             | 4,375       | Cargo Train         |

### Current Sales Status
- **SOLD OUT** — "We're sold out! The next batch is coming soon."
- Waitlist: https://forms.gle/w8PioSB3WnWCgR8z8

### Compost Report
- PDF document: `PL.M.25-26.00078.pdf`
- URL: https://rawbin.in/PL.M.25-26.00078.pdf

### YouTube Video
- Product explainer: https://www.youtube.com/embed/LyTpXQoIGho?si=mntFl6T4jhU7tm1p

---

## 3. Tech Stack & Architecture

### Framework & Libraries
| Technology              | Version   | Purpose                              |
|------------------------|-----------|--------------------------------------|
| Next.js                | 14.2.3    | Framework (App Router)               |
| React                  | ^18       | UI library                           |
| React DOM              | ^18       | React DOM rendering                  |
| Tailwind CSS           | ^3.4.1    | Utility-first CSS (devDep)           |
| Framer Motion          | ^12.5.0   | Animation library                    |
| React Awesome Reveal   | ^4.2.14   | Scroll reveal animations             |
| Lucide React           | ^0.436.0  | Icon library (devDep)                |
| React Feather          | ^2.0.10   | Icon library                         |
| @headlessui/react      | ^2.1.8    | Accessible UI primitives             |
| @emotion/react         | ^11.13.3  | CSS-in-JS (emotion)                  |
| react-card-flip        | ^1.2.3    | Card flip component                  |
| react-responsive-carousel | ^3.2.23 | Image carousel (devDep)             |
| react-type-animation   | ^3.2.0    | Typing animation effect (devDep)     |
| sharp                  | ^0.33.5   | Image optimization                   |
| PostCSS                | ^8        | CSS processing (devDep)              |
| ESLint                 | ^8        | Linting (devDep)                     |
| eslint-config-next     | 14.2.3    | Next.js ESLint config (devDep)       |

### Project Configuration

#### package.json Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "build:netlify": "netlify deploy --build"
}
```

#### Path Aliases (jsconfig.json)
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### ESLint
```json
{
  "extends": "next/core-web-vitals"
}
```

#### PostCSS
- Plugin: `tailwindcss` only

#### Next.js Config (next.config.mjs)
- Images: Remote patterns allowed for `https://images.unsplash.com/**`

#### Netlify Config (netlify.toml)
```toml
[[plugins]]
package = "@netlify/plugin-nextjs"

[build]
command = "npm run build"
publish = ".next"
```

---

## 4. Full Project File Tree

```
rwb-website-dev/
├── .eslintrc.json                          # ESLint configuration
├── .git/                                   # Git repository
├── .github/
│   └── workflows/
│       └── netlify-prod.yml                # GitHub Actions: Deploy to Netlify (PROD)
├── .gitignore                              # Git ignore rules
├── .next/                                  # Next.js build output (gitignored)
├── Animations/
│   ├── NeonCursor/
│   │   ├── NeonCursor.css                  # Neon cursor styles (803 bytes)
│   │   └── NeonCursor.js                   # Neon cursor component (3,350 bytes)
│   └── SplashCursor/
│       └── SplashCursor.jsx                # Splash cursor WebGL effect (37,645 bytes)
├── README.md                               # Brief repo README
├── deno.lock                               # Deno lock file
├── jsconfig.json                           # JS path aliases
├── netlify.toml                            # Netlify deploy config
├── next.config.mjs                         # Next.js config
├── node_modules/                           # Dependencies (gitignored)
├── package-lock.json                       # NPM lock file (224 KB)
├── package.json                            # Project manifest
├── postcss.config.mjs                      # PostCSS config
├── public/
│   ├── fonts/
│   │   ├── Doto-Bold.ttf                   # Doto font bold
│   │   ├── Doto-Regular.ttf                # Doto font regular
│   │   └── Doto-SemiBold.ttf               # Doto font semi-bold
│   ├── ClimateLaunchpad.png                # Partner logo
│   ├── MeitY.png                           # Partner logo (MeitY)
│   ├── NYTimes.png                         # Press mention (New York Times)
│   ├── PIEDS.png                           # Partner logo (PIEDS BITS Pilani)
│   ├── PL.M.25-26.00078.pdf               # Compost lab report PDF (844 KB)
│   ├── Rawbin.png                          # Rawbin logo
│   ├── Rawbin_3.png                        # Rawbin product image (OG)
│   ├── Rawbin_Brown_1.png                  # Brown variant - front (521 KB)
│   ├── Rawbin_Brown_2.png                  # Brown variant - angle (234 KB)
│   ├── Rawbin_Brown_3.png                  # Brown variant - alternate (296 KB)
│   ├── Rawbin_Brown_H.png                  # Brown variant - hero (684 KB)
│   ├── Rawbin_Green_1.png                  # Green variant - front (531 KB)
│   ├── Rawbin_Green_2.png                  # Green variant - angle (218 KB)
│   ├── Rawbin_Green_3.png                  # Green variant - alternate (237 KB)
│   ├── Rawbin_Rose_Gold_1.png              # Rose Gold variant - front (523 KB)
│   ├── Rawbin_Rose_Gold_2.png              # Rose Gold variant - angle (247 KB)
│   ├── Rawbin_Rose_Gold_3.png              # Rose Gold variant - alternate (245 KB)
│   ├── aic.png                             # Partner logo (AIC Banasthali)
│   ├── auto.png                            # ROE calculator - Auto rickshaw
│   ├── bus.png                             # ROE calculator - Bus
│   ├── car.png                             # ROE calculator - Car
│   ├── character.svg                       # Character illustration
│   ├── compost-bg.png                      # Footer compost background
│   ├── compost-flip.png                    # Hero card flip - compost side
│   ├── compost.jpg                         # Compost image (1.7 MB)
│   ├── compost.png                         # Compost image (2.2 MB)
│   ├── cursor.png                          # Custom cursor icon
│   ├── earth.png                           # Earth image
│   ├── earthON.webp                        # EarthON partner logo
│   ├── environment.svg                     # Environment illustration
│   ├── facebook.png                        # Facebook icon
│   ├── family-dinner.jpg                   # Family dinner photo
│   ├── ground-report.webp                  # Press mention (Ground Report)
│   ├── instagram.png                       # Instagram icon
│   ├── motorcycle.png                      # ROE calculator - Motorcycle
│   ├── next.svg                            # Next.js logo
│   ├── nidhi_prayas.png                    # Partner logo (Nidhi Prayas)
│   ├── nsrcel.png                          # Partner logo (NSRCEL)
│   ├── redfm.png                           # Press mention (Red FM)
│   ├── sidbi.png                           # Partner logo (SIDBI)
│   ├── train.png                           # ROE calculator - Train
│   ├── trash-flip.png                      # Hero card flip - trash side
│   ├── trash_bag.png                       # Trash bag image (CO2 section)
│   ├── truck.png                           # ROE calculator - Truck
│   ├── underline.svg                       # Decorative underline
│   ├── vercel.svg                          # Vercel logo
│   ├── villgro-logo.png                    # Partner logo (Villgro)
│   ├── wcc.webp                            # Partner logo (Women Climate Collective)
│   └── x.png                              # X (Twitter) icon
├── robots.txt                              # Search engine directives
├── sitemap.xml                             # XML sitemap
├── src/
│   └── app/
│       ├── App.css                         # Component-level styles (7,763 bytes)
│       ├── components/
│       │   ├── Banner.js                   # Top announcement banner
│       │   ├── Button.js                   # CTA button (Join waitlist)
│       │   ├── CEC.js                      # Cook-Eat-Compost section + Footer wrapper
│       │   ├── CECMarquee.js               # Cook-Eat-Compost marquee animation
│       │   ├── Co2.js                      # CO2 impact section
│       │   ├── FAQ.js                      # FAQ section container
│       │   ├── FAQItem.js                  # Individual FAQ accordion item
│       │   ├── Footer.js                   # Site footer
│       │   ├── Header.js                   # Navigation header (Navbar)
│       │   ├── Hero.js                     # Hero section with card flip
│       │   ├── HowRawbinWorks.js           # How it works (3-step process)
│       │   ├── Intro.js                    # Introducing Rawbin (product gallery + features)
│       │   ├── PressMentions.js            # Press mentions (NY Times, Red FM, Ground Report)
│       │   ├── ROE.js                      # Return on Environment calculator
│       │   ├── ReadMore.js                 # Expandable text component
│       │   ├── Reasons.js                  # 3 reasons to compost
│       │   ├── RecognisedBy.js             # Partner logos marquee carousel
│       │   ├── ScienceAndTech.js           # Science and tech of Rawbin
│       │   └── WallOfLove.js               # Customer testimonials grid
│       ├── favicon.ico                     # Site favicon
│       ├── globals.css                     # Global Tailwind + CSS variables
│       ├── layout.js                       # Root layout (Inter font, metadata)
│       └── page.js                         # Main landing page (component composition)
└── tailwind.config.js                      # Tailwind CSS configuration
```

---

## 5. Configuration Files (Verbatim)

### tailwind.config.js
```javascript
const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "nc-bgreen": "#45B900",
        "nc-blue": "#273266",
        "nc-dgreen": "#1F5A3F",
        "nc-purple": "#5433FF",
        "nc-text": "#002A12",
        "rb-coffee-brown": "#5C4943",
        "rb-forest-green": "#4f574a",
        "rb-rose-gold": "#dad5cf",
      },
      fontSize: {
        "nc-button": "15px",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
```

### globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  background-color: #f9f5f3;
  color: #002A12;
}

.bg-box {
  background: linear-gradient(to bottom, #c8e8bf, transparent);
  position: absolute;
  left: 0px;
  right: 0px;
  height: 100vh;
  opacity: 0.6;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://www.rawbin.in/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.rawbin.in/</loc>
        <lastmod>2025-05-29T17:30:35+00:00</lastmod>
        <priority>1.00</priority>
    </url>
</urlset>
```

### .gitignore
Ignores: `node_modules`, `.pnp`, `.yarn`, `coverage`, `.vscode`, `.next`, `out`, `build`, `.DS_Store`, `*.pem`, debug logs, `.env*.local`, `.vercel`, `.netlify`, `*.tsbuildinfo`, `next-env.d.ts`

---

## 6. Design System & Theming

### Color Palette Summary
- **Primary Green:** `#45B900` (nc-bgreen) — CTAs, accents, brand green
- **Dark Green:** `#1F5A3F` (nc-dgreen) — Text on dark, section backgrounds
- **Text Black:** `#002A12` (nc-text) — Body text, dark backgrounds
- **Purple:** `#5433FF` (nc-purple) — Accent, active states
- **Blue:** `#273266` (nc-blue) — Secondary blue
- **Body Background:** `#f9f5f3` — Warm cream
- **Green Transparency:** `#45b9008c` (~55% opacity green) — Section backgrounds
- **Light Green Tint:** `#45b90026` (~15% opacity green) — Card/section backgrounds
- **Compost Background:** Uses `compost-bg.png` with `rebeccapurple` fallback

### Typography Hierarchy
- **Root font:** Inter (Google Fonts)
- **Body font:** Plus Jakarta Sans (Google Fonts)
- **Logo font:** Comfortaa (Google Fonts) — Used in Navbar for "Rawbin" wordmark
- **Decorative/script:** Dancing Script — Used in CEC section and HowRawbinWorks
- **Display headings:** Prata (serif) — Used for large CO2 numbers
- **Special/tech:** Doto (local) — Used for Cook-Eat-Compost marquee

### Animation System
- **Marquee scroll:** `scroll 20s linear infinite` with CSS translateX
- **Loop scroll:** `loop-scroll 10s linear infinite`
- **Orbiting circles:** `Rotate 20s linear infinite` and `circle-rotate 20s linear infinite`
- **Transition duration:** `0.1s` (global CSS variable `--transDur`)
- **Custom cursors:** NeonCursor (Framer Motion spring physics) and SplashCursor (WebGL shader-based fluid simulation)

### Responsive Breakpoints (from App.css)
| Breakpoint   | Max Width  | Adjustments                        |
|-------------|------------|-------------------------------------|
| Large       | <= 1919px  | Main circle: 500px, images: 360px  |
| Medium      | <= 1200px  | Main circle: 450px                 |
| Small       | <= 550px   | Main circle: 260px, images: 200px  |

---

## 7. Page & Component Architecture

### Root Layout (src/app/layout.js)
- **Font:** Inter (Google Fonts, latin subset)
- **Metadata (SEO):**
  - Title: "Rawbin | India's first smart home composter | Pre-Order Now"
  - Description: "Rawbin is an IoT powered smart home composter that converts your food waste into organic fertilizer in just 7 days, completely automatically."
  - OG image: `https://rawbin.in/Rawbin_3.png` (800x600)
  - OG URL: `https://rawbin.in`
  - OG site name: "Rawbin | Smart Home Composter"
  - Locale: `en_US`
  - Type: `website`

### Main Page Component Order (src/app/page.js)
The landing page renders components in this exact order:
1. `<Banner />` — Sold out announcement bar
2. `<Navbar />` (imported from `Header.js`) — Site navigation
3. `<Hero />` — Card flip hero section
4. `<Intro />` — Product introduction with color picker carousel
5. `<PressMentions />` — NY Times, Red FM, Ground Report
6. `<CECMarquee />` — Cook-Eat-Compost large scrolling text
7. `<Co2 />` — 1500kg CO2e impact section
8. **Inline CTA block** — "Choose to do good for the planet" + CookEatCompost + Button
9. `<RecognisedBy />` — Partner/backer logos marquee
10. `<HowRawbinWorks />` — 3-step process with orbiting food icons
11. `<ScienceAndTech />` — 4 technology cards
12. `<ROE />` — Return on Environment calculator
13. `<FAQ />` — 6 frequently asked questions
14. `<WallOfLove />` — Customer testimonials
15. `<CEC />` — "Convert waste to something beautiful" + marquee + Footer

---

## 8. Complete Component Inventory with Content

### Banner.js
- **Purpose:** Dismissable top announcement bar
- **Message:** "We're sold out! The next batch is coming soon - join the waitlist to be first in line."
- **Waitlist link:** https://forms.gle/w8PioSB3WnWCgR8z8
- **Style:** Green-tinted background `bg-[#45b90026]`, 96% width, rounded-xl
- **Close icon:** X from react-feather

### Button.js
- **Purpose:** Reusable CTA button
- **Text:** "Join the waitlist"
- **Action:** Opens `https://forms.gle/w8PioSB3WnWCgR8z8` in new tab
- **Style:** `bg-nc-bgreen text-white px-6 py-2 rounded-full font-semibold`

### Header.js (Navbar)
- **Logo:** "Rawbin" in Comfortaa font, `text-nc-bgreen`, with "Cook - Eat - Compost" subtitle
- **Navigation items:**
  1. "How it Works" -> `#how-it-works`
  2. "Impact" -> `#impact`
  3. "RoE" -> `#roe`
  4. "Compost Report" -> `https://rawbin.in/PL.M.25-26.00078.pdf` (external, new tab)
  5. "FAQs" -> `#faq`
  6. "Contact Us" -> `#footer`
- **CTA:** Waitlist button
- **Mobile:** Hamburger menu with disclosure panel
- **Active state:** Purple text (`text-nc-purple`) on mobile
- **Hover effect:** Gradient underline animation (from nc-dgreen to nc-bgreen)

### Hero.js
- **Headline:** "Your {TypeAnimation} doesn't have to cost the planet."
- **Type animation words:** "Banana peels" -> "Leftover curry" -> "Extra rice" -> "Rotten dough" (1500ms each, infinite repeat)
- **Card flip interaction:** Click/tap to flip between Trash image and Compost image
- **Helper text:** "NOTE: Click or Tap on the image to see what you can turn your food waste into!"
- **Images:** `trash-flip.png` (front), `compost-flip.png` (back)

### Intro.js
- **Title:** "INTRODUCING RAWBIN"
- **Subtitle:** "INDIA'S FIRST SMART HOME COMPOSTER"
- **Description:** "Rawbin is an IoT powered smart home composter that converts your food waste into organic fertilizer in just 7 days, completely automatically."
- **Color picker:** 3 dots for Rose Gold, Green, Brown — switches product image carousel
- **Product images:** 3 carousel images per color variant (9 total):
  - Rose Gold: `Rawbin_Rose_Gold_1.png`, `_2.png`, `_3.png`
  - Green: `Rawbin_Green_1.png`, `_2.png`, `_3.png`
  - Brown: `Rawbin_Brown_1.png`, `_2.png`, `_3.png`
- **Feature cards (5):**
  1. 100% ODOR FREE — Flower icon
  2. THROW ANYTHING YOU CAN'T EAT — WheatOff icon
  3. COMPOST AS YOU THROW — Recycle icon
  4. KEEP IT INDOOR AND FLAUNT IT — House icon
  5. SELF-CLEANING — WashingMachine icon

### PressMentions.js
- **Title:** "PRESS MENTIONS"
- **Press logos (3 clickable links):**
  1. **The New York Times** — SVG wordmark -> LinkedIn post about Women Climate Collective WCC 2024 Climate Week NYC
  2. **Red FM** — `redfm.png` -> LinkedIn post about recording at Red FM
  3. **Ground Report** — `ground-report.webp` -> Article: "Anu Khandelwal from Bangalore made Rawbin composter to recycle food waste"

### CECMarquee.js
- **Content:** "Cook-Eat-Compost" in Doto font
- **Style:** `text-6xl lg:text-8xl`, semi-transparent green `text-[#45b9008c]`, uppercase
- **Animation:** CSS marquee scroll

### Co2.js (CO2Counter)
- **Section ID:** `#impact`
- **Image:** `trash_bag.png` (rotated -6deg)
- **Headline:** "1500kgs CO2e / year" in Prata font (text-6xl to text-9xl)
- **Description:** "1 Rawbin removes 1500 kgs eCO2 emissions/year, which is more than the emissions reduction potential of EVs, recycling, high speed rails, and walkable cities combined."
- **"More Information" popover:** Shows CO2 calculation breakdown
- **Import note:** Imports `SplashCursor` from Animations (though unclear if rendered)

### Reasons.js
- **Title:** "3 REASONS WHY YOU SHOULD COMPOST"
- **Subtitle:** Scientific context about carbon sequestration: "2-5 GtCO2 per year by 2050, cumulative 104-130 GtCO2 by end of century at $0-$100 per ton"
- **Cards (3):**
  1. **Feed plants, not landfills** — SproutIcon
  2. **Reduce more CO2 than your EV** — CarIcon
  3. **It's a no-brainer climate action** — EarthIcon

### Inline CTA Block (in page.js)
- Text: "Choose to do good for the planet"
- Subtitle: "Cook - Eat - Compost"
- CTA: Waitlist button
- Background: 15% opacity nc-bgreen

### RecognisedBy.js
- **Title:** "Backed & supported by amazing Institutes, Corporates, and Individuals"
- **Partners/Backers (9 logos in infinite marquee):**
  1. AIC Banasthali (`aic.png`)
  2. MeitY (`MeitY.png`)
  3. NSRCEL (`nsrcel.png`)
  4. Women Climate Collective (`wcc.webp`)
  5. Nidhi Prayas (`nidhi_prayas.png`)
  6. PIEDS BITS Pilani (`PIEDS.png`)
  7. SIDBI (`sidbi.png`)
  8. EarthON (`earthON.webp`)
  9. QWEIN by Qualcomm (SVG logo inline)
- **Style:** Grayscale by default, color on hover

### HowRawbinWorks.js
- **Section ID:** `#how-it-works`
- **Title:** "It's a 3 step easy-peasy process"
- **Orbiting animation:** Rawbin Brown Hero image with concentric circles and orbiting food icons (Drumstick, Donut, Carrot, Cookie, Apple, Egg, pizza slice, watermelon slice)
- **Play button:** Opens YouTube video dialog (https://www.youtube.com/embed/LyTpXQoIGho)
- **Steps (3):**
  1. **01 — Put food waste:** Description of what to throw in
  2. **02 — Add Rawbin mixture:** Like adding detergent to washing machine
  3. **03 — Press the top button:** Lid close, button press, clockwise/counterclockwise rotation

### ScienceAndTech.js
- **Title:** "SCIENCE & TECH OF RAWBIN"
- **Subtitle:** Autonomy description — regulating water, temperature, heat, microclimate
- **Cards (4):**
  1. **Perfect blend of technology and nature** — Flower2 icon, green bg `#45b9008c`
     - Mesophilic -> Thermophilic -> Mesophilic phases, heat retention, odor elimination
  2. **Fitted with intelligent sensors** — Cpu icon, dark green bg `nc-dgreen`
     - Temperature, humidity monitoring, real-time adjustment, LED indicator
  3. **Smart heat saving hack** — Heater icon, black bg `nc-text`
     - Sensor-driven heating, accounts for natural heat, energy efficiency
  4. **A closed-loop system** — Infinity icon, light green bg `#45b90026`
     - Curd-milk model, no repeated inoculant purchases, only needs power (4 units/month)
- Each card uses `<ReadMore>` for expandable text

### ReadMore.js
- **Purpose:** Expandable text component (shows first 36 words by default)
- **Controls:** "show more" / "show less" toggle with chevron icon
- **Accessibility:** Keyboard support (Space/Enter), aria-expanded

### ROE.js
- **Section ID:** `#roe`
- **Title:** "Rawbin RoE Calculator"
- **Description:** "By RoE we mean Return on Environment..."
- **Input:** Range slider (1-6 family members)
- **Output:** Displays eCO2 value + corresponding vehicle image + label
- **Vehicle images:** auto.png, motorcycle.png, car.png, truck.png, bus.png, train.png

### FAQ.js + FAQItem.js
- **Section ID:** `#faq`
- **Title:** "Frequently Asked Questions" (split across 3 divs for layout)
- **FAQ Data (6 items):**

| # | Question | Answer |
|---|----------|--------|
| 1 | What is the size and capacity of Rawbin? | Rawbin comes in 3 sizes - S, M, L. Rawbin S: 60cm (H) X 30cm (diameter); 10 kg, Rawbin M: 70cm (H) X 35cm (diameter); 15 kg, Rawbin L: 80cm (H) X 40cm (diameter); 25 kg |
| 2 | What is the life of Rawbin? | Approximately 10 years |
| 3 | How much power does Rawbin use in a month? | 4 units of electricity |
| 4 | Can we clean Rawbin? | Yes, Rawbin can be cleaned safely from inside. Just remember to plug it off from power. |
| 5 | What are the different colors of Rawbin? | Beige, Green, Steel gray |
| 6 | What do I do with unused compost? | Please connect with us at compostdrop@newcycl.com |

- **Accordion:** Uses HeadlessUI Disclosure with Plus/X toggle icons

### WallOfLove.js
- **Title:** "Wall of Love"
- **Subtitle:** "Rawbin has been lucky enough to receive immense love from our cheerleaders on social media."
- **All 17 Customer Testimonials:**

| #  | Name                      | Testimonial                                                                                                                                                              |
|----|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Renu Yadav               | "Bravo, finally the wait is over"                                                                                                                                     |
| 2  | Shashi Bhatnagar          | "When I say 'dream come true' I am saying this for myself that i have such a product to use. Brilliant and congratulations. So glad to see this."                        |
| 3  | Nischay Gupta             | "Real product solving a real problem"                                                                                                                                 |
| 4  | Sadhana Monga             | "This is more than interesting, timely too...Rawbin is the first of firsts..."                                                                                          |
| 5  | Apoorva Jhala             | "Great achievement and a great product much needed in today's time..."                                                                                                   |
| 6  | Kesha Yadav               | "This is the need of the hour kind of innovation! Kudos to the team and best wishes. :)"                                                                                |
| 7  | Renju P B                 | "Name and the design is awesome, looking forward to try it out"                                                                                                          |
| 8  | Chetan Raj                | "It's a great innovation for sustainable living & a smart step toward a cleaner planet"                                                                               |
| 9  | Rajesh Ramaswamy          | "That's cool and exciting product. Great solution to resolve grassroot level problem. Hearty congratulations"                                                            |
| 10 | Yeshvanth Suresh Babu     | "Glad to see such innovations taking place."                                                                                                                             |
| 11 | Nidhi Shetty              | "Do you still have some stock? I want to gift one to my mom! ...So proud that I can flaunt that I know the founder! Hehe"                                                |
| 12 | Kartik S                  | "Great name :)"                                                                                                                                                          |
| 13 | Lal Prasath Bangarusamy   | "Awesome product. And the brand name is solid!"                                                                                                                          |
| 14 | Savrang Jain R            | "Way to go and eager to see Rawbin becoming a household name"                                                                                                        |
| 15 | Akil M.                   | "full compost, that's amazing! I'm preordering this for my family back home :) Happy to volunteer them to be Guinea pigs"                                             |
| 16 | Aanchal Wadhwa            | "Real world problem addressed"                                                                                                                                           |
| 17 | Supreet Srinivas          | "I heard about Rawbin, and I instantly loved the idea."                                                                                                                  |

- **Desktop layout:** 4-column masonry grid
- **Mobile layout:** Single column with 5 selected testimonials

### CEC.js
- **Quote:** "Convert waste to something beautiful" in Dancing Script font
- **Marquee:** "Hand Made in India Engineered for the World"
- **Footer wrapper:** Renders `<Footer>` component with compost background

### Footer.js
- **Logo:** Newcycl SVG logo -> links to https://www.newcycl.com/
- **Center:**
  - "#CookEatCompost" (large text)
  - "Copyright {year} Newcycl - All Rights Reserved"
  - "Powered by Innovation - In collaboration with Techshlok, our trusted R&D partner."
- **Right side:**
  - CTA: Waitlist button
  - Social links: Facebook, Instagram, X, Mail
  - Email: "email to us at compost@rawbin.in"
- **Background:** Dark green (`nc-dgreen`) with compost background image

---

## 9. All Hardcoded Data & Content

### Hero Section Copy
- Headline animation: "Your {Banana peels / Leftover curry / Extra rice / Rotten dough} doesn't have to cost the planet."

### Intro Section Copy
- "INTRODUCING RAWBIN"
- "INDIA'S FIRST SMART HOME COMPOSTER"
- "Rawbin is an IoT powered smart home composter that converts your food waste into organic fertilizer in just 7 days, completely automatically."

### CO2 Section Data
- 1500kgs CO2e / year
- Formula: 1 x 0.06 x 70 x 365 = 1533 kg CO2e
- Comparison: More than EVs + Recycling + High-speed rails + Walkable cities combined

### 3 Reasons Copy
1. Feed plants, not landfills
2. Reduce more CO2 than your EV
3. It's a no-brainer climate action
- Scientific claim: Soil carbon sequestration could be 2-5 GtCO2/year by 2050, cumulative 104-130 GtCO2 by end of century, $0-$100/ton CO2

### Inline CTA Copy
- "Choose to do good for the planet"
- "Cook - Eat - Compost"

### How It Works Titles
- "It's a 3 step easy-peasy process"
- Step 1: "Put food waste"
- Step 2: "Add Rawbin mixture"
- Step 3: "Press the top button"

### Science & Tech Titles
- "SCIENCE & TECH OF RAWBIN"
- Card 1: "Perfect blend of technology and nature"
- Card 2: "Fitted with intelligent sensors"
- Card 3: "Smart heat saving hack"
- Card 4: "A closed-loop system"

### ROE Calculator Copy
- "Rawbin RoE Calculator"
- "By RoE we mean Return on Environment."
- "How many family members do you have?"
- "equivalent to yearly emissions of one {vehicle}"

### CEC Copy
- "Convert waste to something beautiful"
- "Hand Made in India Engineered for the World"

---

## 10. External Links & URLs

### Primary URLs
| Purpose                 | URL                                                       |
|------------------------|-----------------------------------------------------------|
| Main website           | https://www.rawbin.in/                                    |
| Newcycl parent company | https://www.newcycl.com/                                  |
| Waitlist form          | https://forms.gle/w8PioSB3WnWCgR8z8                      |
| Compost Report PDF     | https://rawbin.in/PL.M.25-26.00078.pdf                    |
| YouTube explainer      | https://www.youtube.com/embed/LyTpXQoIGho?si=mntFl6T4jhU7tm1p |
| OG Image               | https://rawbin.in/Rawbin_3.png                            |
| Sitemap                | https://www.rawbin.in/sitemap.xml                         |

### Social Media URLs
| Platform    | URL                                            |
|-------------|------------------------------------------------|
| Facebook    | https://www.facebook.com/newcyclofficial        |
| Instagram   | https://www.instagram.com/newcycl/              |
| X (Twitter) | https://x.com/NewcyclOfficial                   |
| Email       | mailto:compost@rawbin.in                        |

### Press Mention Links
| Outlet        | URL                                                                                                                                          |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| NY Times/WCC  | https://www.linkedin.com/posts/akhandelwal25_womenclimatecollective-wcc2024-climateweeknyc-activity-7245372779309457408-uz19                 |
| Red FM        | https://www.linkedin.com/posts/akhandelwal25_i-had-the-incredible-opportunity-to-record-activity-7245724368272547840-XvF-                    |
| Ground Report | https://groundreport.in/top-story/anu-khandelwal-from-bangalore-made-rawbin-composter-to-recycle-food-waste-7067551                          |

### Image External Source
- Unsplash: Allowed via Next.js `remotePatterns` for `https://images.unsplash.com`

---

## 11. Static Assets Inventory

### Product Images
| File                   | Size    | Description                    |
|-----------------------|---------|--------------------------------|
| Rawbin.png            | 34 KB   | Rawbin logo                    |
| Rawbin_3.png          | 65 KB   | Product image (OG)             |
| Rawbin_Brown_H.png    | 684 KB  | Brown variant hero (orbiting)  |
| Rawbin_Brown_1.png    | 521 KB  | Brown variant carousel 1       |
| Rawbin_Brown_2.png    | 234 KB  | Brown variant carousel 2       |
| Rawbin_Brown_3.png    | 296 KB  | Brown variant carousel 3       |
| Rawbin_Green_1.png    | 531 KB  | Green variant carousel 1       |
| Rawbin_Green_2.png    | 218 KB  | Green variant carousel 2       |
| Rawbin_Green_3.png    | 237 KB  | Green variant carousel 3       |
| Rawbin_Rose_Gold_1.png| 523 KB  | Rose Gold variant carousel 1   |
| Rawbin_Rose_Gold_2.png| 247 KB  | Rose Gold variant carousel 2   |
| Rawbin_Rose_Gold_3.png| 245 KB  | Rose Gold variant carousel 3   |

### Hero & Content Images
| File               | Size    | Description                    |
|-------------------|---------|--------------------------------|
| trash-flip.png    | 440 KB  | Hero card flip front           |
| compost-flip.png  | 381 KB  | Hero card flip back            |
| trash_bag.png     | 438 KB  | CO2 section illustration       |
| compost-bg.png    | 576 KB  | Footer background              |
| compost.jpg       | 1.7 MB  | Compost photo                  |
| compost.png       | 2.2 MB  | Compost illustration           |
| earth.png         | 465 KB  | Earth image                    |
| family-dinner.jpg | 2.0 MB  | Family dinner scene            |

### ROE Calculator Vehicle Images
| File            | Size    | Vehicle          |
|----------------|---------|------------------|
| auto.png       | 1.0 MB  | Auto Rickshaw    |
| motorcycle.png | 1.3 MB  | Motorcycle       |
| car.png        | 1.3 MB  | Diesel Car       |
| truck.png      | 721 KB  | Diesel Truck     |
| bus.png        | 1.3 MB  | Diesel Bus       |
| train.png      | 1.2 MB  | Cargo Train      |

### Partner/Backer Logos
| File                    | Size   | Organization                |
|------------------------|--------|-----------------------------|
| aic.png                | 26 KB  | AIC Banasthali              |
| MeitY.png              | 319 KB | Ministry of Electronics & IT|
| nsrcel.png             | 29 KB  | NSRCEL (IIM Bangalore)      |
| wcc.webp               | 8 KB   | Women Climate Collective    |
| nidhi_prayas.png       | 26 KB  | Nidhi Prayas                |
| PIEDS.png              | 72 KB  | PIEDS BITS Pilani           |
| sidbi.png              | 19 KB  | SIDBI                       |
| earthON.webp           | 14 KB  | EarthON                     |
| ClimateLaunchpad.png   | 10 KB  | ClimateLaunchpad            |
| villgro-logo.png       | 138 KB | Villgro                     |

### Press Mention Logos
| File              | Size   | Outlet        |
|------------------|--------|---------------|
| NYTimes.png      | 62 KB  | The New York Times |
| redfm.png        | 9 KB   | Red FM        |
| ground-report.webp| 11 KB | Ground Report |

### Social/UI Icons
| File           | Size  | Icon         |
|---------------|-------|--------------|
| facebook.png  | 911 B | Facebook     |
| instagram.png | 1.3 KB| Instagram    |
| x.png         | 1.2 KB| X (Twitter)  |
| cursor.png    | 506 B | Custom cursor|

### Documents
| File                     | Size   | Description          |
|-------------------------|--------|----------------------|
| PL.M.25-26.00078.pdf   | 844 KB | Compost lab report   |

### Other
| File            | Size   | Description          |
|----------------|--------|----------------------|
| character.svg  | 24 KB  | Character illustration|
| environment.svg| 32 KB  | Environment illustration|
| underline.svg  | 5 KB   | Decorative underline |
| next.svg       | 1.4 KB | Next.js logo         |
| vercel.svg     | 629 B  | Vercel logo          |

---

## 12. Animations Library

### SplashCursor (Animations/SplashCursor/SplashCursor.jsx)
- **Size:** 37,645 bytes
- **Technology:** WebGL shader-based fluid simulation
- **Purpose:** Interactive cursor effect with fluid/splash rendering
- **Imported by:** Co2.js component

### NeonCursor (Animations/NeonCursor/)
- **Files:** NeonCursor.js (3,350 bytes) + NeonCursor.css (803 bytes)
- **Technology:** Framer Motion (motion.div) with spring physics animations
- **Features:**
  - Main cursor dot (20px, orange `rgb(236, 101, 23)`)
  - Trailing ring (40px, orange border)
  - Glow effect (60px, radial gradient)
  - Hover detection on `a, button, input, [data-hover="true"]` elements
  - Click scaling (0.8x)
  - Hover scaling (1.2x main, 1.5x trail, 2x glow)
  - Mix-blend-mode: screen

---

## 13. SEO & Metadata

### Page Title
"Rawbin | India's first smart home composter | Pre-Order Now"

### Meta Description
"Rawbin is an IoT powered smart home composter that converts your food waste into organic fertilizer in just 7 days, completely automatically."

### Open Graph Tags
- **og:title:** Same as page title
- **og:description:** Same as meta description
- **og:url:** https://rawbin.in
- **og:site_name:** Rawbin | Smart Home Composter
- **og:image:** https://rawbin.in/Rawbin_3.png (800x600)
- **og:locale:** en_US
- **og:type:** website

### Sitemap
- Single URL entry: `https://www.rawbin.in/` (priority 1.00, lastmod 2025-05-29)

### Robots.txt
- User-agent: * -> Allow: /
- Sitemap: https://www.rawbin.in/sitemap.xml

### Target SEO Keywords (from redesign README)
**Informational (Awareness):**
- "How to compost food waste in an apartment"
- "Odorless kitchen composter benefits"
- "Indoor organic waste disposal solutions India"

**Commercial (Researching/Comparing):**
- "Best kitchen composters 2026"
- "Smart food recycler reviews"
- "Electric vs manual home compost bin"

**Transactional (High Buying Intent):**
- "Buy electric kitchen composter India"
- "Odor-free home composter price"
- "Best smart compost bin for sale"

---

## 14. CI/CD & Deployment

### Hosting
- **Platform:** Netlify
- **Plugin:** `@netlify/plugin-nextjs`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

### GitHub Actions Workflow (netlify-prod.yml)
- **Name:** "Deploy to Netlify | PROD"
- **Trigger:** `workflow_dispatch` (manual)
- **Runner:** ubuntu-latest
- **Steps:**
  1. Checkout repository (actions/checkout@v4)
  2. Setup Node.js latest (actions/setup-node@v4 with npm cache)
  3. Install Netlify CLI globally
  4. Install dependencies (npm ci)
  5. Build project (npm run build)
  6. Deploy to Netlify with --build --prod flags
- **Secrets required:** `NETLIFY_SITE_ID`, `NETLIFY_SECRET_TOKEN`

### Local Development
```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm start          # Run production server
npm run lint       # Run ESLint
```

---

## 15. Git Workflow & Collaboration

### Contributors
- **Mayank** — Project lead, code reviewer, merges PRs to master
- **Priyansh Mangla** — Developer, creates feature branches

### Branching Strategy
- **Production branch:** `master`
- **Feature branches:** `priyansh/<feature-name>` (e.g., `priyansh/roe-calculator-logic`)
- **Workflow:** Sync master -> Create feature branch -> Commit -> Push -> PR -> Code review -> Merge

### Repository
- **GitHub repo:** `newcycl-interns/rwb-website-dev`

---

## 16. Redesign Roadmap & Task Status

### Completed Tasks (23 total)
1. Accent Color Expansion (Brown & Lilac)
2. Remove Cartoon Icons -> Custom SVG icons
3. CSS Variable-Driven Theme Engine (Light/Dark)
4. Enhance Trusted Logos Strip (infinite marquee)
5. Remove "Rawbin Community Impact"
6. Remove Redundant Dead UI Elements
7. Highlight Cards Styling Clean-up
8. New Hero Section BG & Photo (glassmorphic pane)
9. Custom AI-Generated Step Illustrations (How It Works)
10. Insta Grid Community Section
11. "Composting shouldn't feel like..." Section
12. Compost Report PDF Integration
13. Deep-Dive "Learn More" Resource Hub (/science)
14. Interactive "Ask Rawbin" AI Chatbot with RAG
15. High-Fidelity Interactivity (Framer Motion everywhere)
16. Dedicated "About Us" Page (founder story)
17. "Wall of Love" Testimonials Redesign (draggable carousel)
18. Press Mentions Section (real logos)
19. Interactive Product Views Gallery (Amazon-style)
20. Cross-Device Fluidity (mobile/tablet/desktop)
21. Eight Sleep Design Inspiration
22. Primary Headline Upgrade (approved copy)
23. High-Intent Keyword Integration (SEO)

### Pending Tasks (2 remaining)
1. **Merge "Everything You Need To Know" into "What is Rawbin" Section** — Combine specification details with "What is Rawbin" into a single premium storytelling layout
2. **Interactive "Ask Rawbin" AI Chatbot with Custom RAG (Newcycl Knowledge)** — Implement secure Next.js API route with Gemini 1.5 Flash API + rawbin-knowledge.md knowledge base

### Approved Hero Section Copy
```
YOUR FRIDGE GOT SMART.
YOUR OVEN GOT SMART.
YOUR BIN DIDN'T.

Until now.
```
**Sub-headline:** "Transform food scraps into compost, effortlessly using Rawbin."

---

## 17. Key Domain Knowledge & Science

### Composting Science
- **3 Phases:** Mesophilic -> Thermophilic -> Mesophilic
- **Methane factor:** 0.06 kg CH4 per kg food waste
- **GWP of methane:** 70
- **Annual impact per household:** ~1,533 kg CO2e (1 kg waste/day x 0.06 x 70 x 365)
- **Soil carbon sequestration potential:** 2-5 GtCO2/year by 2050; 104-130 GtCO2 cumulative by end of century

### Environmental Claims
- Composting has more emissions reduction potential than: EVs, Recycling, High-speed rails, Walkable cities — **combined**
- Cost: $0-$100 per ton of CO2

### Product Innovation
- **Closed-loop / Curd-milk model:** Same compost seeds future batches
- **Sensor array:** Temperature, humidity monitoring with real-time adjustment
- **Heat management:** Adaptive heating that accounts for ambient temperature
- **LED indicator:** Sensor-driven alert when compost is ready
- **Structural heat retention:** Built-in insulation design

---

## 18. Founder & Team

### Founder
- **Name:** Anu Khandelwal
- **Background:** Former Twilio data scientist turned sustainability entrepreneur
- **LinkedIn:** https://www.linkedin.com/in/akhandelwal25
- **Base:** Bangalore, India

### Company
- **Name:** Newcycl
- **R&D Partner:** Techshlok
- **Contact:** compost@rawbin.in / compostdrop@newcycl.com

### Recognition & Awards
- AIC Banasthali
- MeitY (Ministry of Electronics & IT, Govt. of India)
- NSRCEL (IIM Bangalore)
- Women Climate Collective (WCC 2024, Climate Week NYC)
- Nidhi Prayas
- PIEDS BITS Pilani
- SIDBI
- EarthON
- QWEIN by Qualcomm
- ClimateLaunchpad
- Villgro

### Press Coverage
- The New York Times (via Climate Week NYC)
- Red FM (recorded at studio)
- Ground Report (feature article)

### Instagram Reels (from redesign roadmap)
- Reel IDs: `DX60vemoTSt`, `DYZua7shjNJ`, `DZFYb2AM6gK`
- Cover images: `reel1_image.png`, `reel2_image.png`, `reel3_image.png`
- Profile picture: `rawbin-instagram-pfp.jpg`
- Handle: `@rawbin.in`

---

> **End of Document.** This file contains the complete, exhaustive context about the Rawbin project. Any AI system reading this document should have sufficient information to answer questions, generate code, or create content about Rawbin without hallucinating or fabricating details. All data comes directly from the project's source code, configuration files, static assets, and design documentation.
