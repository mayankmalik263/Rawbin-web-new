import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskRawbin from "@/components/AskRawbin";
import MobileCTA from "@/components/MobileCTA";
import AnnouncementBar from "@/components/AnnouncementBar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Rawbin | Smart Composter for Home India - Odor-Free Kitchen Composter",
  description: "Transform daily food waste into nutrient-rich organic compost in 7 days. Rawbin is India's first smart electric home composter designed to be odor-free and apartment-friendly.",
  keywords: [
    "smart composter",
    "smart composter in india",
    "smart composter for home",
    "home composter",
    "electric kitchen composter",
    "odor-free home composter",
    "food waste recycler india",
    "indoor compost machine",
    "organic waste composter"
  ],
  metadataBase: new URL("https://www.rawbin.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rawbin | Smart Composter for Home India",
    description: "Transform daily food waste into nutrient-rich organic compost in 7 days. Rawbin is India's first smart electric home composter designed to be odor-free and apartment-friendly.",
    url: "https://www.rawbin.in",
    siteName: "Rawbin",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Rawbin Smart Composter in modern kitchen",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawbin | Smart Composter for Home India",
    description: "Transform daily food waste into nutrient-rich organic compost in 7 days. Rawbin is India's first smart electric home composter designed to be odor-free and apartment-friendly.",
    images: ["/images/hero-bg.png"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rawbin",
              "url": "https://www.rawbin.in",
              "logo": "https://www.rawbin.in/images/logo.png",
              "sameAs": [
                "https://www.instagram.com/rawbin.in",
                "https://www.linkedin.com/company/rawbin"
              ]
            })
          }}
        />
        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Rawbin Smart Composter",
              "image": [
                "https://www.rawbin.in/images/rawbin-main-white-bg.jpeg",
                "https://www.rawbin.in/images/rawbin-main-normal-bg.jpeg"
              ],
              "description": "Rawbin is an intelligent, compact, and odor-free home composting system that transforms everyday kitchen leftovers into nutrient-rich organic compost in just 7 days.",
              "brand": {
                "@type": "Brand",
                "name": "Rawbin"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.rawbin.in/#order",
                "priceCurrency": "INR",
                "price": "19999",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/PreOrder",
                "seller": {
                  "@type": "Organization",
                  "name": "Rawbin"
                }
              }
            })
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Rawbin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rawbin is an intelligent home composting system that transforms kitchen leftovers into nutrient-rich compost with minimal effort. Simply add your leftovers, let Rawbin manage the process, and return valuable nutrients back to plants, soil, and nature."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Rawbin smell?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, Rawbin is designed to be 100% odor-free using advanced carbon filtration and bio-transform technology."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much electricity does Rawbin use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rawbin is highly energy efficient, using just ~4 units of electricity per month, which is less power than a standard LED bulb over the same period."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-body-bg`}>
        <AnnouncementBar />
        <div className="relative">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
        <AskRawbin />
        <MobileCTA />
      </body>
    </html>
  );
}
