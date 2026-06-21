import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskRawbin from "@/components/AskRawbin";
import MobileCTA from "@/components/MobileCTA";
import AnnouncementBar from "@/components/AnnouncementBar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Rawbin - Modern Composting",
  description: "Rawbin transforms everyday leftovers into nutrient-rich compost automatically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
