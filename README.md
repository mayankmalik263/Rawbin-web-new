# Rawbin - Modern Home Composting Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.5.0-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)

Rawbin is India's first smart home composter engineered specifically for urban Indian households. This project contains the official promotional and interactive website for Rawbin, showcasing the device's key value propositions, technological specs, environmental impacts, and more.

---

## 🌟 About Rawbin

Rawbin is an intelligent, compact, and odor-free home composting system that transforms everyday kitchen leftovers into nutrient-rich organic compost in as little as **7 days**. Designed for modern apartments, it operates whisper-quietly, consumes less power than a standard LED bulb, and eliminates odors with an advanced carbon filtration system.

### Key Value Propositions
* **🌱 Odor-Free:** Advanced carbon filtration keeps kitchens smelling fresh.
* **🏠 Apartment Friendly:** Compact, premium aesthetics suitable for any modern urban home.
* **⚡ Fast Composting:** Accelerates organic decomposition down to a 7-day cycle.
* **🔋 Energy Efficient:** Uses less power than a standard LED bulb (~4 units/month).
* **🇮🇳 Designed for India:** Built specifically for Indian lifestyles, climates, and organic waste patterns.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Library:** [React 18](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) & [React Awesome Reveal](https://github.com/moezbhatti/react-awesome-reveal)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Feather](https://feathericons.com/)
* **Static Prototype:** Legacy/static HTML & CSS fallback files (`index.html`, `styles.css`, `script.js`) are also included in the root directory.

---

## 📂 Project Structure

```text
├── app/                            # Next.js App Router root
│   ├── roe-calculator/             # Return on Environment (ROE) calculator page
│   │   └── page.js
│   ├── technology/                 # Product tech deep-dive page
│   │   └── page.js
│   ├── globals.css                 # Global CSS rules
│   ├── layout.js                   # Root layout with site navbar/footer
│   └── page.js                     # master landing page component list
├── components/                     # Reusable UI components
│   ├── AnnouncementBar.jsx         # Rotating top announcement marquee
│   ├── AskRawbin.jsx               # Floating AI-like query helper component
│   ├── Footer.jsx                  # master site footer
│   ├── MobileCTA.jsx               # Floating mobile-specific action triggers
│   ├── Navbar.jsx                  # master navigation header
│   └── sections/                   # Individual landing page sections
│       ├── CompostOutput.jsx       # Section displaying what to do with compost
│       ├── EverythingYouNeedToKnow.jsx # Detailed specs center column diagram
│       ├── FAQSection.jsx          # Interactive accordions for FAQs
│       ├── FinalCTA.jsx            # Final purchase prompt & social validation
│       ├── HeroSection.jsx         # Top introduction and call to action
│       ├── HowItWorks.jsx          # Step-by-step composting process details
│       ├── SocialProof.jsx         # Reviews, testimonials, and active metrics
│       ├── TransformSection.jsx    # Table of YES/NO compostable items
│       ├── TrustLogos.jsx          # Partner ecosystem logos carousel
│       └── WhyRawbin.jsx           # Value prop cards & Indian design highlight
├── public/                         # Static assets (images, logos, fonts)
├── index.html                      # Static HTML prototype fallback
├── styles.css                      # Static CSS prototype fallback
├── script.js                       # Static JS prototype fallback
├── tailwind.config.js              # Tailwind setup & theme configuration
├── package.json                    # Project dependencies & script triggers
└── README.md                       # This documentation file
```

---

## 🚀 Getting Started

Follow these steps to run the Next.js development server locally.

### Prerequisites
Make sure you have Node.js (version 18 or above recommended) installed on your system.

### Installation
1. Clone or download the repository files.
2. Open your terminal in the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

### Building for Production
To optimize and bundle the website for production deployment:
```bash
npm run build
```

To run the built production bundle:
```bash
npm start
```

---

## 🤝 Collaboration & Git Workflow

This project is built collaboratively by **Mayank** and **Priyansh Mangla**. To keep the production-ready code in the `master` branch stable, we follow a branching and Pull Request (PR) workflow:

### 1. Sync Your master Branch
Before starting any new features or bug fixes, always ensure your local `master` branch is up to date with the latest code from GitHub:
```bash
git checkout master
git pull origin master
```

### 2. Create a Feature Branch
Create a new branch specifically for your changes. Use a descriptive naming convention:
```bash
# Priyansh's branches should be prefixed with 'priyansh/'
git checkout -b priyansh/<feature-name>
```
*Example:* `git checkout -b priyansh/roe-calculator-logic`

### 3. Make Changes and Commit
Work on your code changes, run the local server (`npm run dev`) to test them, and commit them with descriptive messages:
```bash
# Stage the modified and new files
git add .

# Create a clear commit message
git commit -m "feat: added interactive inputs to the ROE calculator"
```

### 4. Push Branch to GitHub
Push your local branch to the remote repository:
```bash
git push origin priyansh/<feature-name>
```

### 5. Open a Pull Request (PR)
1. Go to the repository page on GitHub.
2. Click on the green **"Compare & pull request"** button that automatically appears for recently pushed branches.
3. Write a brief summary of what you implemented or fixed, and click **"Create pull request"**.

### 6. Review & Merge (Mayank's Role)
* **Code Review:** Mayank will review the submitted PR on GitHub, checking the code diffs for formatting, logic, and compatibility.
* **Approval/Requests:** Mayank can request revisions/comments or directly approve the changes.
* **Merging:** Once approved and all checks pass, Mayank will merge the PR into the `master` branch, updating the live code safely.

---

## 📋 Redesign Specification & Project Roadmap (Notebook Checklist)

This section outlines the upcoming product redesign and feature additions requested in the project specification roadmap. 

### 🎨 1. Theme, Aesthetics & Brand Direction
*   [x] **Accent Color Expansion — Brown & Lilac (Completed: June 26, 2026):**
    *   Introduced Chocolate Brown and Lilac as secondary accent colors across the UI. Tailwind config tokens added and sprinkled on pill badges, borders, alternating icons, and hover elements.
*   [x] **Remove Cartoon Icons (Completed: June 26, 2026):**
    *   Replace all flat cartoon/vector icons and raw text emojis with custom high-fidelity outline SVG icons across the landing page, technology tab, and YES/NO list cards.

### 🏗️ 2. Section Restructuring & Clean-up
*   [ ] **Merge "Everything You Need To Know" into "What is Rawbin" Section:**
    *   Combine the "Everything You Need To Know" specification details and the homepage "What is Rawbin" section (currently at the bottom of HeroSection.jsx) into a single, cohesive, premium storytelling layout.
*   [x] **Enhance "Trusted Logos Strip" (Completed: June 26, 2026):**
    *   Re-positioned and styled the partner/trust logo carousel as a full infinite marquee strip. Increased logo sizes (`max-h-20`, `max-w-[240px]`) and reduced inter-logo gap to `3rem` for a denser, more premium display.
*   [x] **Remove "Rawbin Community Impact" (Completed: June 26, 2026):**
    *   Stripped away the generic community impact stats cards to declutter the user flow and maintain focus on premium product ownership.
*   [x] **Remove Redundant Dead UI Elements (Completed: June 26, 2026):**
    *   Removed the non-functional "Read our Composting Guides & Blogs →" button from the bottom of `SocialProof.jsx` — it had no `href`/`onClick` and was already duplicated in the Footer's Quick Links section. Cleaned up the unused `ArrowRight` import as well.
*   [x] **Highlight Cards Styling Clean-up (Completed: June 27, 2026):**
    *   Removed the colored top border lines (green, purple, brown) from the Innovation Highlights cards in the "Everything You Need To Know" section for a cleaner, uniform, and minimalist look.

### 📸 3. New Content & Community Visuals
*   [x] **New Hero Section BG & Photo (Completed: June 26, 2026 / Updated: June 27, 2026):**
    *   Replaced the background image with a high-quality photo of Rawbin (`new_hero_bg.png`) set in a modern Indian kitchen.
    *   Refined the desktop layout with a premium seamless glassmorphic frosted pane (`backdrop-blur-[10px] bg-white/10` with custom linear-gradient mask) on the left side to show the blurred kitchen details behind the text.
    *   Implemented a stacked card layout for mobile and tablet viewports to prevent device clipping and text overlap.
    *   Aligned the top announcement bar background color to `#F0EAE1` to match the brand sand-beige color palette.
*   [x] **Custom AI-Generated Step Illustrations (Completed: June 26, 2026):**
    *   Replaced the three generic placeholder images in the **"How It Works"** section with custom AI-generated illustrations accurately depicting the Rawbin device:
        *   **Step 1 (`image1.png`):** Indian woman in a kurti adding kitchen scraps to the Rawbin in a warm, modern Indian kitchen.
        *   **Step 2 (`image2.png`):** Rawbin composting automatically with leaf/swirl motion graphics showing silent, effortless processing.
        *   **Step 3 (`image3.png`):** Harvesting rich compost on an Indian apartment balcony with the Rawbin visible in the background.
    *   Card image container height increased from `220px` to `260px` to better showcase the wider illustrations.
*   [ ] **"Insta Grid: See what community is doing with the compost" Section:**
    *   Implement an interactive, premium Instagram-style social grid displaying posts from the Rawbin community showing customer unboxings, kitchen setups, and real-world utility of the compost (backyard organic gardening, indoor plants, balconing, community farm drops).

### ⚡ 4. Copywriting & Interactive Components
*   [x] **"Composting shouldn't feel like..." Section (Completed: June 26, 2026):**
    *   Implemented on the homepage as the "How It Works" section titled "Composting Shouldn't Feel Like Work", showcasing the 3 simple steps of the Rawbin cycle.
*   [x] **Deep-Dive "Learn More" Resource Hub (Completed: June 26, 2026):**
    *   Developed a dedicated `/science` subpage detailing the chemical, biological, and structural science for all 12 FAQs. Added anchor-linked \"Learn More Science →\" buttons inside the expanded FAQ panels on the homepage for seamless direct navigation.
*   [x] **Interactive "Ask Rawbin" AI Chatbot with Custom RAG (Completed: June 26, 2026):**
    *   Implement a secure Next.js API route integrating the Gemini 1.5 Flash API with a localized RAG knowledge base (`rawbin-knowledge.md`) containing product specifications and company (Newcycl) context.
*   [x] **High-Fidelity Interactivity (Completed: June 26, 2026):**
    *   Integrated smooth Framer Motion interactions across all pages. Includes a solid lilac scroll progress bar, spring-physics-based whileHover and whileTap scaling/lifting on CTA buttons, cards, and checklists, and soft looping breathing glow shadows on primary actions.
*   [x] **Dedicated "About Us" Page (Completed: June 26, 2026):**
    *   Migrated to a fully dedicated `/about-us` subpage, accessible via the Navbar's "More" dropdown and the Footer.
    *   Page features: founder story (Anu Khandelwal — from Twilio data scientist to sustainability entrepreneur), Rawbin's making journey rooted in Indian kitchens, prototyping timeline, product philosophy, and an interactive LinkedIn timeline showcasing real journey posts.
    *   Instagram Reels section removed from this page (scope moved to a future dedicated social section).
    *   Hero section background replaced with a premium dark solid color, removing the previous visually poor gradient.
*   [x] **"Wall of 💚" Testimonials Redesign (Completed: June 26, 2026):**
    *   Replaced the old static testimonial layout in `SocialProof.jsx` with a **premium dark-themed draggable infinite carousel**.
    *   Integrated all **17 real customer testimonials** migrated from the legacy `WallOfLove.js` component of the previous codebase.
    *   Features: star ratings, reviewer name & date, drag-to-scroll on desktop, smooth infinite auto-scroll. Non-functional navigation arrows were removed.
*   [x] **Press Mentions Section — Real Logos (Completed: June 26, 2026):**
    *   Replaced the placeholder "As Seen In" text block (which listed fictitious media names) with an authentic **"Press Mentions"** section.
    *   Three real press logo images (`NYTimes.png`, `redfm.png`, `ground-report.webp`) imported from the legacy codebase into `public/images/`.
    *   Each logo is a clickable `<Link>` pointing to the actual article or LinkedIn post for that press coverage.
    *   Card uses a warm cream background (`#F7F3EF`) so logos render in their original brand colors (black NY Times wordmark, red Red FM, green Ground Report) without inversion filters.
*   [ ] **Interactive "Ask Rawbin" AI Chatbot with Custom RAG (Newcycl Knowledge):**
    *   Implement a secure Next.js API route integrating the Gemini 1.5 Flash API with a localized RAG knowledge base (`rawbin-knowledge.md`) containing product specifications and company (Newcycl) context.
*   [x] **High-Fidelity Interactivity (Completed: June 26, 2026):**
    *   Ensure the site is packed with premium, fluid interactions: hover-based radial glow effects, scroll-triggered animations via Framer Motion, and micro-interactions on all primary action buttons.
*   [x] **Interactive Product Views Gallery (Completed: June 27, 2026):**
    *   Replaced the static "Product View" card in the center of the "Everything You Need To Know" section with an interactive, Amazon-style image carousel and thumbnail selector. Added 5 different real product angles/views (Front View, Home Setting, Side View, Back View, and Top-Down View) with smooth Framer Motion transitions.

### 📱 5. Responsive Design & Multi-Platform Compatibility
*   [x] **Cross-Device Fluidity (Completed: June 27, 2026):** Ensure all layout grids, typography, and images scale dynamically across standard breakpoints.
    *   **Mobile (320px - 480px):** Optimized vertical single-column layout, tap-friendly interaction targets (minimum 48px), and bottom-docked sticky `MobileCTA` button.
    *   **Tablet (768px - 1024px):** Responsive dual-column grids, readable font sizing, stacked card representations for media, and compact navigation headers.
    *   **Laptop & Desktop (1200px - 1920px+):** Ultra-premium wide grids, high-definition responsive media (with full-bleed background images and seamless glassmorphic blending), hover-based micro-interactions, and large immersive storytelling components.

### 🌟 6. Design Reference & Luxury Aesthetics (Eight Sleep Style)
*   [x] **Eight Sleep Inspiration (Completed: June 27, 2026):** Draw design principles from the premium, high-tech aesthetic of [Eight Sleep](https://www.eightsleep.com/):
    *   **Luxury Tech Positioning:** Position Rawbin as a high-end, smart appliance rather than just "another compost bin."
    *   **High Contrast Dark Theme:** Use rich, deep backgrounds (transitioning to chocolate browns/blacks) paired with subtle, neon-like glowing accents, sharp white sans-serif typography, and sleek borders.
    *   **Scientific & Feature Deep Dives:** Use comparison tables, exploded/transparent product renders, and metric-focused benefit sections (e.g., carbon credits, composting speed) to justify the premium price tag.

### ✍️ 7. Approved Messaging & Copywriting (Hero Section)
*   [x] **Primary Headline Upgrade (Completed: June 26, 2026):** Updated the Hero section's copy to match the approved marketing team specifications:
    *   **Headline:**
        ```text
        YOUR FRIDGE GOT SMART.
        YOUR OVEN GOT SMART.
        YOUR BIN DIDN'T.

        Until now.
        ```
    *   **Sub-headline:**
        ```text
        Transform food scraps into compost, effortlessly using Rawbin.
        ```

### 🔍 8. SEO Optimization & Search Intent Strategy
*   [x] **High-Intent Keyword Integration (Completed: June 26, 2026):** Targeted search terms used when looking to buy or learn about smart composting appliances.
    *   **Informational Keywords (Awareness):**
        *   "How to compost food waste in an apartment"
        *   "Odorless kitchen composter benefits"
        *   "Indoor organic waste disposal solutions India"
    *   **Commercial Keywords (Researching/Comparing):**
        *   "Best kitchen composters 2026"
        *   "Smart food recycler reviews"
        *   "Electric vs manual home compost bin"
    *   **Transactional Keywords (High Buying Intent):**
        *   "Buy electric kitchen composter India"
        *   "Odor-free home composter price"
        *   "Best smart compost bin for sale"
    *   **Implementation Plan:** 
        *   Injected these terms naturally in landing page titles, header tags (`<h1>`, `<h2>`), image alt text, and meta descriptions.
        *   Page structure optimized to win "Featured Snippets" (e.g., clear, bulleted answers for questions like "What can you compost in a smart kitchen bin?").
