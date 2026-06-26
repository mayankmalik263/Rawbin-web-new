'use client';
import { motion, useMotionValue } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialProof() {
  const baseReviews = [
    {
      text: "Bravo, finally the wait is over ❤️",
      name: "Renu Yadav",
      date: "Mar 2025"
    },
    {
      text: 'When I say "dream come true" I am saying this for myself that i have such a product to use. Brilliant and congratulations. So glad to see this.',
      name: "Shashi Bhatnagar",
      date: "Mar 2025"
    },
    {
      text: "Real product solving a real problem 💯",
      name: "Nischay Gupta",
      date: "Apr 2025"
    },
    {
      text: "This is more than interesting, timely too- can't be more timey actually-since we are late already but then with nothing on cards - Rawbin is the first of firsts- more first as it sounds that it is covering all the important challenges.",
      name: "Sadhana Monga",
      date: "Apr 2025"
    },
    {
      text: "Great achievement and a great product much needed in today’s time. We too do waste composition at home but this would really be handy and a way forward for everyone hopefully!",
      name: "Apoorva Jhala",
      date: "May 2025"
    },
    {
      text: "This is the need of the hour kind of innovation! Kudos to the team and best wishes. :)",
      name: "Kesha Yadav",
      date: "May 2025"
    },
    {
      text: "Name and the design is awesome, looking forward to try it out",
      name: "Renju P B",
      date: "Jun 2025"
    },
    {
      text: "It's a great innovation for sustainable living & a smart step toward a cleaner planet 🌍",
      name: "Chetan Raj",
      date: "Jun 2025"
    },
    {
      text: "That's cool and exciting product. Great solution to resolve grassroot level problem. Hearty congratulations",
      name: "Rajesh Ramaswamy",
      date: "Jul 2025"
    },
    {
      text: "Glad to see such innovations taking place.",
      name: "Yeshvanth Suresh Babu",
      date: "Jul 2025"
    },
    {
      text: "Do you still have some stock? I want to gift one to my mom! And nothing better to gift to her and I would love to get it from someone I have worked with! So proud that I can flaunt that I know the founder! Hehe",
      name: "Nidhi Shetty",
      date: "Aug 2025"
    },
    {
      text: "Great name :)",
      name: "Kartik S",
      date: "Aug 2025"
    },
    {
      text: "Awesome product. And the brand name is solid!",
      name: "Lal Prasath Bangarusamy",
      date: "Sep 2025"
    },
    {
      text: "Way to go and eager to see Rawbin becoming a household name💯✨",
      name: "Savrang Jain R",
      date: "Oct 2025"
    },
    {
      text: "full compost, that’s amazing! I’m preordering this for my family back home :) Happy to volunteer them to be Guinea pigs 🐽",
      name: "Akil M.",
      date: "Nov 2025"
    },
    {
      text: "Real world problem addressed",
      name: "Aanchal Wadhwa",
      date: "Dec 2025"
    },
    {
      text: "I heard about Rawbin, and I instantly loved the idea.",
      name: "Supreet Srinivas",
      date: "Jan 2026"
    }
  ];

  // Repeat reviews 3 times for a long seamless horizontal slider (looks infinite)
  const reviews = [...baseReviews, ...baseReviews, ...baseReviews];

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  const [cardWidth, setCardWidth] = useState(400);
  const [activeCenterIndex, setActiveCenterIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const gap = 24;
  const step = cardWidth + gap;

  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(300);
      } else {
        setCardWidth(400);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMounted && containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;

      // Start centered on the middle set of reviews
      const middleCardIndex = Math.floor(reviews.length / 2);
      const initialX = -(middleCardIndex * step - (containerWidth / 2 - cardWidth / 2));
      x.set(initialX);

      setConstraints({
        left: -trackWidth + containerWidth - 200,
        right: 200
      });

      // Calculate initial active index
      const targetX = containerWidth / 2 - initialX - cardWidth / 2;
      const index = Math.round(targetX / step);
      setActiveCenterIndex(index);
    }
  }, [isMounted, cardWidth, step]);

  const handleDrag = () => {
    if (!containerRef.current) return;
    const currentX = x.get();
    const containerWidth = containerRef.current.offsetWidth;
    const centerPosition = containerWidth / 2;
    const targetX = centerPosition - currentX - cardWidth / 2;
    const index = Math.round(targetX / step);
    const clampedIndex = Math.max(0, Math.min(reviews.length - 1, index));
    setActiveCenterIndex(clampedIndex);
  };

  return (
    <section className="bg-[#12161A] py-24 border-b border-white/5 relative overflow-hidden select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1F5A3F]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 mb-16 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-white"
          >
            Wall of 💚
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#A3B899] font-medium"
          >
            Hear from our cheerleaders and community who trust Rawbin.
          </motion.p>
        </div>
      </div>

      {/* Slider Viewport Container */}
      <div 
        ref={containerRef}
        className="w-full relative py-8 overflow-hidden cursor-grab active:cursor-grabbing z-10"
      >
        {/* Left & Right Edge Gradient Masks for Cinematic Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#12161A] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#12161A] to-transparent z-20 pointer-events-none" />

        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.15}
          dragTransition={{ power: 0.2, timeConstant: 300 }}
          onDrag={handleDrag}
          onDragTransitionEnd={handleDrag}
          style={{ x }}
          className="flex gap-6 px-12 md:px-24 w-max"
        >
          {reviews.map((review, i) => {
            // A card is active if it's hovered, or if nothing is hovered and it's the center card
            const isActive = hoveredIndex !== null ? hoveredIndex === i : activeCenterIndex === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ width: cardWidth }}
                animate={{
                  scale: isActive ? 1.02 : 0.98,
                  backgroundColor: isActive ? "#F9FAFB" : "#9BA1AC",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`h-[320px] rounded-[32px] p-8 flex flex-col justify-between shadow-sm transition-shadow duration-300 ${
                  isActive ? "shadow-xl shadow-black/10" : ""
                }`}
              >
                {/* Testimonial Quote */}
                <div className="flex-grow">
                  <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed line-clamp-6">
                    "{review.text}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4">
                  {/* Stars Row */}
                  <div className="flex gap-0.5 mb-2 text-gray-900">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" className="text-gray-900" />
                    ))}
                  </div>
                  {/* Name */}
                  <div className="font-extrabold text-sm text-gray-900 tracking-tight">{review.name}</div>
                  {/* Date */}
                  <div className="text-xs text-gray-600 font-bold mt-0.5">{review.date}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 mt-16 relative z-10">
        {/* Press Mentions */}
        <div className="bg-[#F7F3EF] rounded-3xl p-10 md:p-14 border border-black/5 text-center mb-16">
          <h6 className="text-xs font-bold text-[#6B7280] uppercase tracking-[4px] mb-12">Press Mentions</h6>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20">

            {/* New York Times */}
            <Link
              href="https://www.linkedin.com/posts/akhandelwal25_womenclimatecollective-wcc2024-climateweeknyc-activity-7245372779309457408-uz19"
              target="_blank"
              rel="noreferrer"
              className="opacity-85 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="/images/NYTimes.png"
                alt="The New York Times"
                width={220}
                height={45}
                className="object-contain"
              />
            </Link>

            {/* Red FM */}
            <Link
              href="https://www.linkedin.com/posts/akhandelwal25_i-had-the-incredible-opportunity-to-record-activity-7245724368272547840-XvF-"
              target="_blank"
              rel="noreferrer"
              className="opacity-85 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="/images/redfm.png"
                alt="Red FM 93.5"
                width={130}
                height={70}
                className="object-contain"
              />
            </Link>

            {/* Ground Report */}
            <Link
              href="https://groundreport.in/top-story/anu-khandelwal-from-bangalore-made-rawbin-composter-to-recycle-food-waste-7067551"
              target="_blank"
              rel="noreferrer"
              className="opacity-85 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="/images/ground-report.webp"
                alt="Ground Report"
                width={210}
                height={55}
                className="object-contain"
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
