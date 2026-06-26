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
*   [ ] **Theme Swap (Chocolate Brown):** 
    *   Transition the color palette away from lilac/standard green colors.
    *   Implement a rich, premium **Chocolate Brown** palette (`#3C2F2F`, `#2B1E1E`, `#D9C3B0`) combined with warm creams and muted organic accents. This establishes a grounded, high-end earthy connection suitable for premium kitchen appliances.
*   [ ] **Unique Composting Design:**
    *   Avoid generic, low-effort composting visual patterns (clipart leaves, recycling symbols, flat green).
    *   Employ ultra-premium Apple-like dark/light glassmorphic blocks, clean layouts, and rich typography (e.g., *Instrument Serif*, *Outfit*).
*   [x] **Remove Cartoon Icons (Completed: June 26, 2026):**
    *   Replace all flat cartoon/vector icons and raw text emojis with custom high-fidelity outline SVG icons across the landing page, technology tab, and YES/NO list cards.

### 🏗️ 2. Section Restructuring & Clean-up
*   [ ] **Merge "Explore Tech" into "What is Rawbin":**
    *   Combine the technical specification details (aeration, sensors, heater) directly into the core product introduction page/section. Highlighting the "how it works" and "what it is" in a single fluid storytelling layout.
*   [x] **Enhance "Trusted Logos Strip" (Completed: June 26, 2026):**
    *   Re-position and style the partner/trust logo carousel or grid to sit immediately below the Hero section or integrated naturally with a prominent clean style.
*   [x] **Remove "Rawbin Community Impact" (Completed: June 26, 2026):**
    *   Strip away the generic community impact stats cards to declutter the user flow and maintain focus on premium product ownership.

### 📸 3. New Content & Community Visuals
*   [ ] **New Hero Section BG & Photo:**
    *   Introduce a high-quality product photo of Rawbin placed in a modern kitchen setting.
    *   Update the background gradients and container alignment to highlight the premium physical design of the device.
*   [ ] **"Insta Cards" Social Grid:**
    *   Implement an interactive grid/carousel of Instagram-style social cards displaying actual customers showcasing their Rawbin devices, kitchen setups, and unboxings.
*   [ ] **"See what community is doing with the compost" Section:**
    *   A section dedicated to displaying real-world utility of the nutrient-rich output (e.g., backyard organic gardening, nourishing indoor plants, community farm drops, greening balconies).

### ⚡ 4. Copywriting & Interactive Components
*   [ ] **"Composting shouldn't feel like..." Section:**
    *   Write and design an empathetic interactive comparison showing the old, messy, smelly way of composting vs. the effortless, clean, 7-day Rawbin experience.
*   [ ] **Deep-Dive "Learn More" Resource Hub:**
    *   Develop a clean, accordion-based or multi-tab resource drawer for users wanting to learn the science behind Rawbin's composting process.
*   [ ] **Dedicated "About Us" Section:**
    *   Incorporate the Rawbin brand philosophy, founders' vision, and why we are building a circular solution specifically tailored for Indian kitchens.
*   [ ] **Interactive "Ask Rawbin" AI/Query Component:**
    *   Expand the floating interactive search assistant (`components/AskRawbin.jsx`) to let users query anything about compostable materials (e.g., "Can I put citrus peels in Rawbin?") with immediate responses.
*   [ ] **High-Fidelity Interactivity:**
    *   Ensure the site is packed with premium, fluid interactions: hover-based radial glow effects, scroll-triggered animations via Framer Motion, and micro-interactions on all primary action buttons.

### 📱 5. Responsive Design & Multi-Platform Compatibility
*   [ ] **Cross-Device Fluidity:** Ensure all layout grids, typography, and images scale dynamically across standard breakpoints.
    *   **Mobile (320px - 480px):** Optimized vertical single-column feeds, tap-friendly interaction targets (minimum 48px), and bottom-docked sticky CTA buttons.
    *   **Tablet (768px - 1024px):** Dual-column grids, readable font sizing, and compact navigation headers.
    *   **Laptop & Desktop (1200px - 1920px+):** Ultra-premium wide grids, high-definition responsive media (like `hero-bg.png`), hover-based micro-interactions, parallax layouts, and large, immersive storytelling components.

### 🌟 6. Design Reference & Luxury Aesthetics (Eight Sleep Style)
*   [ ] **Eight Sleep Inspiration:** Draw design principles from the premium, high-tech aesthetic of [Eight Sleep](https://www.eightsleep.com/):
    *   **Luxury Tech Positioning:** Position Rawbin as a high-end, smart appliance rather than just "another compost bin."
    *   **High Contrast Dark Theme:** Use rich, deep backgrounds (transitioning to chocolate browns/blacks) paired with subtle, neon-like glowing accents, sharp white sans-serif typography, and sleek borders.
    *   **Scientific & Feature Deep Dives:** Use comparison tables, exploded/transparent product renders, and metric-focused benefit sections (e.g., carbon credits, composting speed) to justify the premium price tag.

### ✍️ 7. Approved Messaging & Copywriting (Hero Section)
*   [x] **Primary Headline Upgrade (Completed: June 26, 2026):** Update the Hero section's copy to match the approved marketing team specifications:
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
*   [x] **High-Intent Keyword Integration (Completed: June 26, 2026):** Target the search terms users use when they are looking to buy or learn about smart composting appliances.
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
        *   Inject these terms naturally in landing page titles, header tags (`<h1>`, `<h2>`), image alt text, and meta descriptions.
        *   Optimize the page structure to win "Featured Snippets" (e.g., clear, bulleted answers for questions like "What can you compost in a smart kitchen bin?").



