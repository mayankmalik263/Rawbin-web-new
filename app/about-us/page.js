'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ExternalLink, MessageCircle, Heart, Share2 } from 'lucide-react';
import { 
  WindIcon, 
  ThreeLeavesIcon, 
  IndiaIcon, 
  GlobeIcon, 
  IntelligentIcon,
  SproutIcon
} from '@/components/icons';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('linkedin');

  const linkedInPosts = [
    {
      id: 1,
      date: 'March 18, 2025',
      topic: 'World Recycling Day Launch',
      likes: 201,
      comments: 91,
      shares: 7,
      link: 'https://www.linkedin.com/posts/akhandelwal25_rawbin-indias-first-smart-home-composter-activity-7307738872057143296-aCyp',
      text: 'Two years of R&D. Countless hours spent at failed experiments. Hundreds of prototypes tested and lessons learnt. And now, on World Recycling Day, we’re launching Rawbin—India’s first smart home composter that turns food waste into organic fertilizer in just 7 days. ☘️\n\nI still remember when I first started building Rawbin—I had no clue how to make a hardware product. But then TechShlok, Electronics Design House joined us as our R&D partner, and together, we built (and failed at) prototype after prototype, all to create something truly effortless: a composter as simple as throwing waste in a bin.'
    },
    {
      id: 2,
      date: 'May 23, 2025',
      topic: 'Food Planet Prize Nomination',
      likes: 128,
      comments: 27,
      shares: 1,
      link: 'https://www.linkedin.com/posts/akhandelwal25_rawbin-foodplanetprize-homecomposting-activity-7331553158604759040-YpZz',
      text: 'Few mails make you pinch yourself - Is this real ? 🥹\n\nRawbin just got nominated for the Food Planet Prize, the world’s biggest environmental award for food system solutions. What started as a crazy idea to fight food waste from our homes is now on the global stage. 🌍💚\n\nGrateful, humbled, and more fired up than ever.'
    },
    {
      id: 3,
      date: 'June 1, 2026',
      topic: 'Organic Waste Circular Economy',
      likes: 35,
      comments: 0,
      shares: 1,
      link: 'https://www.linkedin.com/posts/akhandelwal25_household-food-waste-is-the-most-expensive-activity-7467209774154162176-mXsx',
      text: 'Household food waste is the most expensive organic waste stream to collect.\n\nIndia doesn\'t have a waste technology problem, we rather have feedstock quality issues due to poor segregation at source, and logistics challenges due to distributed homes. That\'s why Rawbin is focused entirely on distributed, at-source household composting. We process waste where it is generated, keeping the feedstock quality high and municipal transport costs near zero.'
    }
  ];

  const instagramReels = [
    {
      id: 'DXRmiHnDl97',
      title: 'Meeting Our First Rawbinhoods',
      desc: 'Welcoming our first 100 early supporters. Order fulfillment starting and June shipments going out!',
      likes: '1.2k',
      comments: 48,
      link: 'https://www.instagram.com/reel/DXRmiHnDl97/'
    },
    {
      id: 'DX60vemoTSt',
      title: 'Composting Spice-Rich leftovers',
      desc: 'Testing Rawbin with oil-heavy, spice-filled Indian food waste. Watch the thermal cycle do its magic.',
      likes: '2.8k',
      comments: 112,
      link: 'https://www.instagram.com/reel/DX60vemoTSt/'
    },
    {
      id: 'DYPasc0PWwX',
      title: 'The Countertop Odor Test',
      desc: 'Putting our dual-stage activated carbon filters to the ultimate test next to everyday kitchen appliances.',
      likes: '950',
      comments: 34,
      link: 'https://www.instagram.com/reel/DYPasc0PWwX/'
    },
    {
      id: 'DYZua7shjNJ',
      title: 'Why segregate waste?',
      desc: 'Why centralized composting fails due to lack of immediate outcomes. Composting at source brings immediate rewards.',
      likes: '1.6k',
      comments: 72,
      link: 'https://www.instagram.com/reel/DYZua7shjNJ/'
    },
    {
      id: 'DZFYb2AM6gK',
      title: 'New York Times Features Rawbin',
      desc: 'Pioneering decentralized waste solutions on the global stage. Profiling our 2024 Climate Week NYC print feature.',
      likes: '4.2k',
      comments: 204,
      link: 'https://www.instagram.com/reel/DZFYb2AM6gK/'
    }
  ];

  return (
    <main className="bg-body-bg min-h-screen pb-20 font-sans">
      
      {/* 1. Hero Header Section */}
      <section className="relative w-full bg-gradient-to-br from-[#12241A] to-[#1C3A28] pt-28 pb-20 flex items-center justify-center border-b border-black/10 overflow-hidden">
        {/* Subtle decorative radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-[1280px] w-full mx-auto px-5 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/15 px-4 py-1.5 rounded-full font-bold text-xs md:text-sm text-[#7CE89A] mb-6 shadow-xs"
          >
            <SproutIcon className="w-4 h-4 text-[#7CE89A]" />
            <span>The Making of Rawbin</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight max-w-4xl mx-auto tracking-tight"
          >
            Reimagining Waste at <span className="font-serif italic text-[#7CE89A] block sm:inline">Its Origin</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#A3B899] font-medium mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            How a Data Scientist turned a messy daily chore into an elegant smart kitchen habit.
          </motion.p>
        </div>
      </section>

      {/* 2. The Founder's Journey Section */}
      <section className="max-w-[1280px] mx-auto px-5 py-20 border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Detailed Story */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-nc-text">
              The Thesis that Sparked a Startup
            </h2>
            <div className="space-y-6 text-text-muted font-medium text-base md:text-lg leading-relaxed">
              <p>
                Anu Khandelwal spent years working as a Data Scientist at Twilio and other tech companies. Her path shifted during her Master&apos;s studies in the UK, where her thesis examined the garbage infrastructure in North Delhi.
              </p>
              <p>
                Her research exposed a core flaw: modern waste management is focused on <span className="text-nc-text font-bold">"waste displacement"</span>—the collection and transport of garbage from one neighborhood to landfills—rather than actual resource processing.
              </p>
              <p>
                When the 2021 lockdowns hit Bengaluru, municipal wet waste collection collapsed. Bags of leftovers sat rotting on balconies, causing foul odors and fruit flies. Anu realized that waiting for centralized systems to fix waste is futile. Composting had to be decentralized, clean, and processed at source: inside our kitchens.
              </p>
              <p className="border-l-4 border-primary pl-4 text-nc-text font-bold font-serif italic text-lg md:text-xl">
                &ldquo;If we can make throwing scraps in a composter as satisfying and convenient as throwing them in a bin, we solve 60% of municipal landfill growth.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Profile testimonial card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-md flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-inner">
                <Image 
                  src="/images/AnuMamLinkedinPfp.jpg" 
                  alt="Anu Khandelwal - Founder & CEO" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-extrabold text-2xl text-nc-text">Anu Khandelwal</h3>
              <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Founder & CEO, Newcycl</p>
              <p className="text-sm font-medium text-text-muted leading-relaxed max-w-sm mb-6">
                Nominated for the global Food Planet Prize and recognized as one of India&apos;s leading women climate innovators.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/akhandelwal25/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#EAF3EC] text-[#1F5A3F] px-4 py-2.5 rounded-full font-bold text-xs hover:bg-[#1F5A3F] hover:text-white transition-all shadow-xs border border-black/5"
                >
                  Connect on LinkedIn <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Prototyping & Engineering Journey */}
      <section className="max-w-[1280px] mx-auto px-5 py-20 border-b border-black/5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-nc-text mb-4">
            Two Years of R&D. Countless Prototypes.
          </h2>
          <p className="text-text-muted font-medium text-lg">
            Engineering a countertop appliance to handle the toughest organic scraps in high-density apartments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Indian Scraps */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-6 border border-black/5">
                <ThreeLeavesIcon className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-xl text-nc-text mb-3">Spice & Moisture Tolerance</h4>
              <p className="text-text-muted text-sm md:text-base font-medium leading-relaxed mb-6">
                Traditional home composters fail under the moisture, grease, and acidic spice profiles (like turmeric, chili oil, citrus, and onion skins) typical of Indian cuisine. We custom-engineered high-torque grinding blades and optimized thermal heating profiles to balance moisture without turning scraps into a wet anaerobic mush.
              </p>
            </div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider">Engineered for India</div>
          </div>

          {/* Card 2: Prototyping Failures */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-6 border border-black/5">
                <IntelligentIcon className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-xl text-nc-text mb-3">TechShlok R&D Partnership</h4>
              <p className="text-text-muted text-sm md:text-base font-medium leading-relaxed mb-6">
                Hardware is hard. Partnering with TechShlok (Electronics Design House), we built and failed at prototype after prototype. We deployed early models in Jaipur and Bengaluru—testing with bachelors, elderly residents, and busy parents to perfect a composting process as simple as throwing waste in a bin.
              </p>
            </div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider">Convenience-Driven UX</div>
          </div>

          {/* Card 3: Odorless countertop */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-6 border border-black/5">
                <WindIcon className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-xl text-nc-text mb-3">Dual-Stage Carbon Filtration</h4>
              <p className="text-text-muted text-sm md:text-base font-medium leading-relaxed mb-6">
                To fit inside compact urban apartments next to microwaves, Rawbin had to run completely odor-free. We engineered a sealed dual-stage activated carbon filter layout that traps volatile organic compounds (VOCs) and sulfur particles. Operates whisper-quietly under 40dB.
              </p>
            </div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider">Countertop-Ready</div>
          </div>
        </div>
      </section>

      {/* 4. Journey & Community Media Hub */}
      <section className="max-w-[1080px] mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-nc-text mb-4">
            Journey & Community Media Hub
          </h2>
          <p className="text-text-muted font-medium text-lg max-w-2xl mx-auto">
            Trace the Rawbin milestone timeline through our updates on LinkedIn and Instagram Reels.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#EAF3EC]/60 border border-black/5 p-1.5 rounded-full flex gap-2">
            <button 
              onClick={() => setActiveTab('linkedin')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'linkedin' ? 'bg-[#1F5A3F] text-white shadow-sm' : 'text-[#1F5A3F] hover:bg-[#EAF3EC]'}`}
            >
              LinkedIn Posts
            </button>
            <button 
              onClick={() => setActiveTab('instagram')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'instagram' ? 'bg-[#1F5A3F] text-white shadow-sm' : 'text-[#1F5A3F] hover:bg-[#EAF3EC]'}`}
            >
              Instagram Reels
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'linkedin' ? (
              <motion.div 
                key="linkedin-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {linkedInPosts.map((post) => (
                  <div key={post.id} className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/5">
                          <Image src="/images/AnuMamLinkedinPfp.jpg" alt="Anu Khandelwal Profile" fill />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-nc-text text-base">Anu Khandelwal</h5>
                          <p className="text-xs text-text-very-muted font-bold uppercase">{post.date}</p>
                        </div>
                      </div>
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#1F5A3F] hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-bold bg-[#EAF3EC] px-3 py-1.5 rounded-full border border-[#1F5A3F]/10"
                      >
                        View Post <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="text-text-muted text-sm md:text-base font-medium whitespace-pre-wrap leading-relaxed mb-6">
                      {post.text}
                    </div>
                    <div className="flex gap-6 border-t border-black/5 pt-4 text-xs font-bold text-text-muted">
                      <span className="flex items-center gap-1.5"><Heart size={14} className="text-[#1F5A3F]" /> {post.likes} Likes</span>
                      <span className="flex items-center gap-1.5"><MessageCircle size={14} className="text-[#1F5A3F]" /> {post.comments} Comments</span>
                      <span className="flex items-center gap-1.5"><Share2 size={14} className="text-[#1F5A3F]" /> {post.shares} Shares</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="instagram-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {instagramReels.map((reel) => (
                  <div key={reel.id} className="bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
                    
                    {/* Reel Cover Graphic Representation */}
                    <div className="relative h-48 w-full bg-gradient-to-br from-[#1C3A28] to-[#12241A] flex flex-col justify-center items-center p-6 text-center text-white border-b border-black/5">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-4 border border-white/30 shadow-md">
                        <Play size={20} fill="white" className="ml-1" />
                      </div>
                      <span className="font-bold text-xs uppercase tracking-widest text-[#7CE89A] mb-1">Instagram Reel</span>
                      <h4 className="font-extrabold text-sm tracking-tight leading-snug line-clamp-2 max-w-[200px]">{reel.title}</h4>
                    </div>

                    {/* Reel Description */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <p className="text-text-muted text-xs md:text-sm font-medium leading-relaxed mb-6">
                        {reel.desc}
                      </p>
                      
                      <div className="flex justify-between items-center border-t border-black/5 pt-4">
                        <span className="text-xs font-extrabold text-text-very-muted">💚 {reel.likes} likes</span>
                        <a 
                          href={reel.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                        >
                          Play Reel ↗
                        </a>
                      </div>
                    </div>

                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Pre-order CTA Footer Bar */}
      <section className="max-w-[1280px] mx-auto px-5 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1C3A28] to-[#12241A] rounded-3xl p-8 md:p-12 text-center text-white border border-white/10 shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Start Your Composting Journey Today</h2>
            <p className="text-sm md:text-base font-medium text-[#7CE89A] leading-relaxed mb-8">
              Decentralize food waste, eliminate odors, and nourish the soil. Rawbin is built for the way you live.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#order" className="bg-primary text-nc-text px-8 py-4 rounded-2xl font-bold hover:shadow-hover hover:-translate-y-0.5 transition-all text-center">
                Pre-order Now
              </Link>
              <Link href="/" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold border border-white/20 transition-all text-center">
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
