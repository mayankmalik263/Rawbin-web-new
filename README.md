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

## 📈 Under Construction / Future Features

* **Return on Environment (ROE) Calculator:** A fully interactive tool to calculate exact carbon dioxide equivalents ($CO_2e$) saved and compost output based on daily kitchen waste inputs.
* **Technology Deep Dive:** Detailed articles on our aeration systems, thermal sensors, and patented composting technology.

