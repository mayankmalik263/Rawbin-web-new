import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-black/5 mt-20">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col items-start no-underline mb-6">
              <Image src="/images/logo.png" alt="Rawbin Logo" width={140} height={44} className="h-[44px] w-auto [image-rendering:-webkit-optimize-contrast]" />
            </Link>
            <p className="text-text-muted text-sm max-w-sm">
              Rawbin is an intelligent home composting system that transforms kitchen leftovers into nutrient-rich compost with minimal effort.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-nc-text mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3 text-text-muted text-sm font-medium">
              <Link href="#why-rawbin" className="hover:text-primary transition-colors">Why Rawbin</Link>
              <Link href="/technology" className="hover:text-primary transition-colors">Technology</Link>
              <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="#faqs" className="hover:text-primary transition-colors">FAQs</Link>
              <Link href="#" className="hover:text-primary transition-colors">Compost Report</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
              <Link href="#" className="hover:text-primary transition-colors">Blogs</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-nc-text mb-6">Legal & Support</h4>
            <div className="flex flex-col gap-3 text-text-muted text-sm font-medium mb-8">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Shipping Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Returns & Refunds</Link>
              <Link href="#" className="hover:text-primary transition-colors">Warranty</Link>
            </div>
            
            <h4 className="font-bold text-nc-text mb-3">Need Help?</h4>
            <button className="text-primary font-bold text-sm hover:underline">Ask Rawbin ↗</button>
          </div>
        </div>
        
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Cook • Eat • Compost
          </div>
          <div className="text-sm font-medium text-nc-text">
            Every Leftover Has a Next Life.
          </div>
          <div className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Rawbin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
