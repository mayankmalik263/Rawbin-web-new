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
│   └── page.js                     # Main landing page component list
├── components/                     # Reusable UI components
│   ├── AnnouncementBar.jsx         # Rotating top announcement marquee
│   ├── AskRawbin.jsx               # Floating AI-like query helper component
│   ├── Footer.jsx                  # Main site footer
│   ├── MobileCTA.jsx               # Floating mobile-specific action triggers
│   ├── Navbar.jsx                  # Main navigation header
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

## 📈 Under Construction / Future Features

* **Return on Environment (ROE) Calculator:** A fully interactive tool to calculate exact carbon dioxide equivalents ($CO_2e$) saved and compost output based on daily kitchen waste inputs.
* **Technology Deep Dive:** Detailed articles on our aeration systems, thermal sensors, and patented composting technology.
