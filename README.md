# Rawbin - Modern Home Composting Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.5.0-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Groq API](https://img.shields.io/badge/Groq_API-Llama_3.1_8B-orange?style=flat-square&logo=groq)](https://groq.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.475.0-blue?style=flat-square&logo=lucide)](https://lucide.dev/)
[![Sharp](https://img.shields.io/badge/Sharp_Image-0.33.5-green?style=flat-square&logo=sharp)](https://sharp.pixelplumbing.com/)
[![RAG Knowledge](https://img.shields.io/badge/RAG_Knowledge-Markdown-blue?style=flat-square&logo=markdown)](https://daringfireball.net/projects/markdown/)
[![Git](https://img.shields.io/badge/Git-91_Commits-F05032?style=flat-square&logo=git)](https://git-scm.com/)

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
* **AI Chatbot & RAG:** [Groq Cloud API](https://groq.com/) using [Meta Llama 3.1 8B](https://meta.ai/) and local knowledge base
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

## 📋 Redesign Specification & Project Roadmap (Notebook Checklist)

This section outlines the upcoming product redesign and feature additions requested in the project specification roadmap. 

### 🎨 1. Theme, Aesthetics & Brand Direction
*   [x] **Accent Color Expansion — Brown & Lilac (Completed: June 26, 2026 / Updated: June 27, 2026):**
    *   Introduced Chocolate Brown and Lilac as secondary accent colors across the UI. Tailwind config tokens added and sprinkled on pill badges, borders, alternating icons, and hover elements across the `WhyRawbin`, `HowItWorks`, `EverythingYouNeedToKnow`, `CompostOutput`, and `AnnouncementBar` sections.
*   [x] **Remove Cartoon Icons (Completed: June 26, 2026):**
    *   Replace all flat cartoon/vector icons and raw text emojis with custom high-fidelity outline SVG icons across the landing page, technology tab, and YES/NO list cards.
*   [x] **CSS Variable-Driven Theme Engine (Completed: June 27, 2026):**
    *   Mapped Tailwind configuration colors to dynamic CSS variables and defined Light/Dark mode classes in global styles.
    *   Injected a theme restoration head script in the layout root to prevent light-mode flashes by reading from localStorage before render.
    *   Swapped container background elements to use theme-aware colors (e.g. `bg-bg-main`, `text-nc-text`) so that pages transition cleanly.

### 🏗️ 2. Section Restructuring & Clean-up
*   [x] **Merge "Everything You Need To Know" into "What is Rawbin" Section (Completed: June 28, 2026):**
    *   Combine the "Everything You Need To Know" specification details and the homepage "What is Rawbin" section (currently at the bottom of HeroSection.jsx) into a single, cohesive, premium storytelling layout.
*   [x] **Premium Results Panel Dashboard (Completed: June 26, 2026):**
    *   Refactored the old 4-column Impact Section in `HeroSection.jsx` into a premium 3-column dashboard highlighting the core metrics: **1,500kg** CO2 saved a year (Status Green), **90%** less waste by volume (Chocolate Brown), and **7 days** start-to-finished compost (Sterilising Lilac) with spring hover and custom glow shadows.
*   [x] **Rawbin vs. Traditional Composting Section (Completed: June 26, 2026):**
    *   Created a high-contrast comparison table component `ComparisonSection.jsx` comparing Rawbin vs. Traditional composting on **Speed**, **Smell**, **Effort**, and **Indoor Suitability**. Incorporating check/cross icons and styled states, registered under `WhyRawbin`.
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
*   [x] **"Insta Grid: See what community is doing with the compost" Section (Completed: June 27, 2026):**
    *   Implemented an interactive, premium 3-column Instagram Reels Grid ("What's Going On in the Rawbin Community") directly below the Compost Use Cases on the landing page.
    *   Displays 3 real-world Reels (`DX60vemoTSt`, `DYZua7shjNJ`, `DZFYb2AM6gK`) with their actual video cover thumbnails (`reel1_image.png`, `reel2_image.png`, `reel3_image.png`), custom-themed gradients, play overlays, and official profile logo (`rawbin-instagram-pfp.jpg`) headers.
    *   Includes verified live metrics (likes, views, and comments) and real captions for each post.
    *   Added a prominent bottom CTA button ("Follow @rawbin.in on Instagram") redirecting to the official Rawbin Instagram handle.
*   [x] **Product Image Corner Rounding & Overflow Fixes (Completed: June 27, 2026):**
    *   Fixed double-corner nested frame mismatches, Safari overflow issues, and rounded all product images slider corners (`rounded-2xl`, `overflow-hidden`) for a clean, curved visual aesthetic.

### ⚡ 4. Copywriting & Interactive Components
*   [x] **"Composting shouldn't feel like..." Section (Completed: June 26, 2026):**
    *   Implemented on the homepage as the "How It Works" section titled "Composting Shouldn't Feel Like Work", showcasing the 3 simple steps of the Rawbin cycle.
*   [x] **Compost Report PDF Integration (Completed: June 27, 2026):**
    *   Copied `PL.M.25-26.00078.pdf` into the Next.js `public/` directory so it is served statically and wired up the "Compost Report" buttons in the Footer and Navbar dropdown to open the document statically in a new tab.
*   [x] **Deep-Dive "Learn More" Resource Hub (Completed: June 26, 2026):**
    *   Developed a dedicated `/science` subpage detailing the chemical, biological, and structural science for all 12 FAQs. Added anchor-linked \"Learn More Science →\" buttons inside the expanded FAQ panels on the homepage for seamless direct navigation.
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
*   [x] **Interactive "Ask Rawbin" AI Chatbot with Custom RAG (Completed: June 27, 2026):**
    *   **Architecture**: Built a secure Next.js API route (`/api/chat`) that reads a localized product knowledge base (`rawbin-knowledge.md`) containing all verified specs, pricing tiers, composting guidelines, and company (Newcycl) context.
    *   **Model**: Integrates **`llama-3.1-8b-instant`** hosted on Groq's high-speed inference engine.
    *   **RAG Prompts**: Contextualizes the system prompt with the full knowledge base under a strict fact-grounding policy (temperature 0.3) to completely prevent AI hallucinations or competitor comparisons.
    *   **Server-Side Cleaners**: Features regex filters that clean formatting markers (removes bold asterisks `**`, maps hyphens `- ` to bullet circles `•`), guaranteeing clean plain-text lists in the UI.
    *   **Chatbot UI**: Updated `components/AskRawbin.jsx` to manage conversation history (passes last 20 messages for multi-turn context), disable inputs during active loading, show floating bubble states, and fall back to friendly offline messages if API keys are missing.
    *   **Limits & Performance**: Uses native fetch to minimize packages. Operates under Groq's free tier limits (131,072 tokens per minute and 14,400 requests per minute).
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

---

## 🐛 Known Issues & Product Backlog (Bugs)

The following issues have been identified and are tracked for future resolution:

1. **AI Chatbot Modal Cannot Be Closed:**
   - **Symptom:** Once the Rawbin AI Chatbot is opened, clicking the floating trigger button again, clicking outside the chatbot window, or clicking an overlay does not close the chat modal.
2. **Broken Hash Navigation from Subpages:**
   - **Symptom:** When on a subpage (e.g., `/technology` or `/about-us`), clicking hash links meant for the home page (e.g., `#why-rawbin`, `#how-it-works`) tries to navigate relative to the subpage (e.g., `http://localhost:3000/technology#why-rawbin`) instead of redirecting back to the home page with the hash (e.g., `/#why-rawbin`).
   - **Scope:** Applies to header navbar and dropdown links. Note that `/roe-calculator` and `/science` are separate pages and work correctly.
3. **"Why Should You Compost?" Button Inactive:**
   - **Symptom:** The "Why Should You Compost?" CTA does not perform any action when clicked.
   - **Suggested Connections:**
     - Link to the `/science` subpage (Science of Composting) for deep educational value.
     - Smooth-scroll to the newly extracted `ImpactSection` (One Small Habit. A Lasting Impact) or the `TransformSection` (YES/NO list) to show the direct benefits.
     - Automatically open the Ask Rawbin AI Chatbot with a pre-filled prompt like *"Why should I compost?"*.
4. **SVG Icon Enhancements:**
   - **Request:** Investigate higher quality or simpler, cleaner outline SVG icons that present a premium look.
5. **"Watch How It Works" Button Inactive:**
   - **Symptom:** The watch video play button in the Hero section is not functional.
6. **Inactive Purchasing CTAs:**
   - **Symptom:** Purchase triggers such as "I'm Ready to Compost" or "Order Now" are static and do not trigger any checkout/contact flows.
7. **"Contact Us" Button Inactive:**
   - **Symptom:** The "Contact Us" trigger button in the footer or final sections does not open a contact form or email handler.
8. **Missing Blog Links:**
   - **Symptom:** The "Blogs" link in the footer is a dead link/placeholder. Needs to point to an active blog resource.
9. **"Ask Rawbin" Text Links Do Not Trigger Chatbot:**
   - **Symptom:** Text links or navigation items labeled "Ask Rawbin" (e.g., in the Navbar or Footer) do not trigger the floating chatbot drawer to open.
10. **Hero Image Responsiveness on Mobile/Tablet (Resolved):**
    - **Symptom:** On mobile/tablet viewports, the main hero image displayed in a large stacked block below the CTA buttons, breaking the premium storytelling flow.
    - **Resolution:** Configured the background image to be a full-bleed absolute background across all viewport sizes, displaying the kitchen scene clearly behind the hero text.
11. **Merge Storytelling & Specifications Sections (Resolved):**
    - **Symptom:** Homepage felt fragmented with specs and storytelling split across the page, causing visual disconnect.
    - **Resolution:** Combined the "What is Rawbin?" storytelling narrative and "Everything You Need To Know" specifications slider/details side-by-side into a premium layout inside `EverythingYouNeedToKnow.jsx`. Extracted the results dashboard to a dedicated `ImpactSection` component placed directly below.
12. **Missing Navigation Links in Mobile Hamburger Menu (Resolved):**
    - **Symptom:** Mobile navbar drawer was missing links like "Science of Composting", "Compost Report", and "Why Should You Compost?".
    - **Resolution:** Updated `Navbar.jsx` to render all missing desktop links inside the mobile hamburger menu drawer.
13. **Next.js Logo and Slider Image Optimization Warnings (Resolved):**
    - **Symptom:** Console warnings on load regarding preloading (LCP) the logo and slider images, and missing `sizes` attribute on the product view image container.
    - **Resolution:** Configured `priority` attributes and optimized `sizes` definitions in `Navbar.jsx` and `EverythingYouNeedToKnow.jsx`.
14. **Fix Client-Side Page Titles (Resolved):**
    - **Symptom:** `/science` and `/about-us` routes are client-side components and inherit duplicate home page metadata.
    - **Resolution:** Separated pages into server components (`page.js`) that export page-specific metadata blocks, and client components (`SciencePageClient` / `AboutUsPageClient`) that manage dynamic UI/animations.
15. **Generate Dynamic Sitemap & Robots Configuration (Resolved):**
    - **Symptom:** Missing `sitemap.xml` and `robots.txt` for crawlers.
    - **Resolution:** Implemented Next.js route generators (`sitemap.js` and `robots.js`) to dynamically serve sitemaps and configure crawler boundaries.
16. **Inject JSON-LD Product & FAQ Schemas (Resolved):**
    - **Symptom:** Missing structured metadata markup for search engine rich results.
    - **Resolution:** Injected custom JSON-LD schema blocks (Organization, Product, and FAQPage) directly into the root layout head for rich search snippet indexing.




