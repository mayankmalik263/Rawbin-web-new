'use client';
import { motion } from 'framer-motion';

export default function TrustLogos() {
  const logos = [
    { src: '/images/logos/earthon.webp', name: 'EarthON' },
    { src: '', name: 'QWEIN by Qualcomm' }, // Fallback text layout if image is missing
    { src: '/images/logos/aic.png', name: 'AIC Banasthali' },
    { src: '/images/logos/meity.png', name: 'MeitY' },
    { src: '/images/logos/nsrcel.png', name: 'NSRCEL' },
    { src: '/images/logos/wcc.webp', name: 'Women Climate Collective' },
    { src: '/images/logos/nidhi_prayas.png', name: 'NIDHI Prayas' },
    { src: '/images/logos/pieds.png', name: 'PIEDS BITS Pilani' },
    { src: '/images/logos/sidbi.png', name: 'SIDBI' },
  ];

  return (
    <section className="bg-[#FBFAF6] py-14 border-b border-black/5 overflow-hidden">
      {/* Self-contained styling for infinite marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
          gap: 3rem;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-5 text-center mb-10">
        <h6 className="text-[10px] font-bold text-text-very-muted uppercase tracking-[2px]">
          Trusted by Leading Innovation & Sustainability Ecosystems
        </h6>
      </div>
      
      <div className="relative w-full overflow-hidden mask-gradient py-2">
        <div className="marquee-container flex items-center">
          {/* Loop three times to ensure a seamless looping effect */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 w-64 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out select-none cursor-default"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-20 max-w-[240px] object-contain"
                />
              ) : (
                <span className="font-sans text-base md:text-xl font-black tracking-tight text-neutral-800 text-center whitespace-nowrap">
                  QWEIN <span className="text-[12px] font-normal lowercase">by</span> Qualcomm
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
