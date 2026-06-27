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
