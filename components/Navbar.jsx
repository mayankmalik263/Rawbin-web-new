'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <header className="bg-white py-4 sticky top-0 w-full z-[100] border-b border-black/5">
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent-lilac z-50 rounded-r-full"
      />
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-5">
        <Link href="/" className="flex flex-col items-center no-underline">
          <Image src="/images/logo.png" alt="Rawbin Logo" width={120} height={38} className="h-[38px] w-auto [image-rendering:-webkit-optimize-contrast]" />
          <div className="text-[11px] font-medium text-nc-text tracking-[0.2px] mt-1">Cook Eat Compost</div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 text-[15px] font-semibold text-nc-text">
            <Link href="#why-rawbin" className="hover:text-primary transition-colors">Why Rawbin?</Link>
            <Link href="/technology" className="hover:text-primary transition-colors">Technology</Link>
            <Link href="#faqs" className="hover:text-primary transition-colors">FAQs</Link>
            
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-1 hover:text-primary transition-colors">
                More <ChevronDown size={14} />
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-black/5 p-2 focus:outline-none flex flex-col gap-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="#how-it-works" className={`${active ? 'bg-bg-alt text-primary' : 'text-nc-text'} px-4 py-2 rounded-lg text-sm transition-colors`}>
                        How It Works
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="#why-compost" className={`${active ? 'bg-bg-alt text-primary' : 'text-nc-text'} px-4 py-2 rounded-lg text-sm transition-colors`}>
                        Why Should You Compost?
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="#" className={`${active ? 'bg-bg-alt text-primary' : 'text-nc-text'} px-4 py-2 rounded-lg text-sm transition-colors`}>
                        Compost Report
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/roe-calculator" className={`${active ? 'bg-bg-alt text-primary' : 'text-nc-text'} px-4 py-2 rounded-lg text-sm transition-colors`}>
                        ROE Calculator
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/science" className={`${active ? 'bg-bg-alt text-primary' : 'text-nc-text'} px-4 py-2 rounded-lg text-sm transition-colors`}>
                        Science of Composting
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/about-us" className={`${active ? 'bg-bg-alt text-primary' : 'text-nc-text'} px-4 py-2 rounded-lg text-sm transition-colors`}>
                        About Us
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>
          
          <Link href="#order" className="bg-primary text-nc-text px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:shadow-hover hover:-translate-y-0.5 transition-all">
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} className="text-nc-text" /> : <MenuIcon size={24} className="text-nc-text" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-black/5 p-5 flex flex-col gap-4 md:hidden shadow-lg">
          <Link href="#why-rawbin" className="font-semibold text-lg py-2 border-b border-black/5" onClick={() => setMobileMenuOpen(false)}>Why Rawbin?</Link>
          <Link href="/technology" className="font-semibold text-lg py-2 border-b border-black/5" onClick={() => setMobileMenuOpen(false)}>Technology</Link>
          <Link href="#faqs" className="font-semibold text-lg py-2 border-b border-black/5" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
          <Link href="#how-it-works" className="font-semibold text-lg py-2 border-b border-black/5" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
          <Link href="/roe-calculator" className="font-semibold text-lg py-2 border-b border-black/5" onClick={() => setMobileMenuOpen(false)}>ROE Calculator</Link>
          <Link href="/about-us" className="font-semibold text-lg py-2 border-b border-black/5" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="#order" className="bg-primary text-nc-text px-6 py-3 rounded-full font-medium text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Order Now</Link>
        </div>
      )}
    </header>
  );
}
