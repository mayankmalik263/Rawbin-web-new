'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const co2Values = {
  1: { co2: 625, label: 'Auto Rickshaw', image: '/images/calculator/auto.png', dailyWaste: 0.25 },
  2: { co2: 1375, label: 'Motor Cycle', image: '/images/calculator/motorcycle.png', dailyWaste: 0.5 },
  3: { co2: 2187, label: 'Diesel Car', image: '/images/calculator/car.png', dailyWaste: 0.75 },
  4: { co2: 2781, label: 'Diesel Truck', image: '/images/calculator/truck.png', dailyWaste: 1.0 },
  5: { co2: 3437, label: 'Diesel Bus', image: '/images/calculator/bus.png', dailyWaste: 1.25 },
  6: { co2: 4375, label: 'Cargo Train', image: '/images/calculator/train.png', dailyWaste: 1.5 },
};

export default function ROECalculatorClient() {
  const [familySize, setFamilySize] = useState(4);
  const [customWaste, setCustomWaste] = useState(false);
  const [wasteValue, setWasteValue] = useState(1.0); // in kg/day

  const currentData = co2Values[familySize];
  const activeWaste = customWaste ? wasteValue : currentData.dailyWaste;

  // Methane CO2e avoided calculation:
  // Daily Food Waste * 0.06 kg CH4/kg * 70 (GWP) * 365 days
  const co2eSaved = Math.round(activeWaste * 0.06 * 70 * 365);
  
  // Compost yield: ~25% of organic waste input
  const compostYield = Math.round(activeWaste * 0.25 * 365);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FBFAF6] font-sans">
      <div className="max-w-[1080px] mx-auto px-5">
        
        {/* Header Block */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#F0EAE1] text-nc-text font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-black/5 mb-6"
          >
            📊 Return on Environment (ROE)
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-nc-text leading-tight tracking-tight mb-4"
          >
            Calculate Your Climate Impact
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            Every kitchen creates waste. See how easily Rawbin transforms that footprint into organic regeneration.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 bg-white p-8 rounded-3xl border border-black/5 shadow-sm"
          >
            <div className="flex justify-between items-center mb-8 border-b border-black/5 pb-4">
              <h2 className="text-xl font-bold text-nc-text">Calculator Settings</h2>
              <button 
                onClick={() => setCustomWaste(!customWaste)}
                className="text-xs font-bold text-primary hover:underline uppercase tracking-wider"
              >
                {customWaste ? 'Use Family Size' : 'Enter Custom Waste'}
              </button>
            </div>

            {!customWaste ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-nc-text uppercase tracking-wider mb-3">
                    👪 Family Members: <span className="text-primary font-black text-lg">{familySize}</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="6" 
                    step="1" 
                    value={familySize} 
                    onChange={(e) => setFamilySize(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#F0EAE1] rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-2 px-1 text-xs font-bold text-text-very-muted">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6+</span>
                  </div>
                </div>

                <div className="bg-[#FBFAF6] p-4 rounded-2xl border border-black/5">
                  <p className="text-sm text-text-muted">
                    Estimated daily organic kitchen waste for <span className="font-bold text-nc-text">{familySize} members</span> is <span className="font-bold text-primary">{currentData.dailyWaste} kg</span>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-nc-text uppercase tracking-wider mb-3">
                    🥕 Daily Food Waste: <span className="text-primary font-black text-lg">{wasteValue.toFixed(2)} kg</span>
                  </label>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="5.0" 
                    step="0.1" 
                    value={wasteValue} 
                    onChange={(e) => setWasteValue(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#F0EAE1] rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-2 px-1 text-xs font-bold text-text-very-muted">
                    <span>0.1 kg</span><span>1.0 kg</span><span>2.5 kg</span><span>5.0 kg</span>
                  </div>
                </div>

                <div className="bg-[#FBFAF6] p-4 rounded-2xl border border-black/5">
                  <p className="text-sm text-text-muted">
                    Set the exact average weight of raw leftovers, vegetable peels, and plate scrapes processed by your kitchen daily.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-black/5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted font-medium">Estimated Annual Input:</span>
                <span className="font-bold text-nc-text">{(activeWaste * 365).toFixed(0)} kgs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted font-medium">Device Composting Cycle:</span>
                <span className="font-bold text-nc-text">7 Days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted font-medium">Starter Requirement:</span>
                <span className="font-bold text-nc-text">Previous Batch (Sourdough Model)</span>
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Primary Stat Card */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center font-bold text-primary text-xl select-none">
                🌱
              </div>

              <h3 className="text-sm font-bold text-text-very-muted uppercase tracking-wider mb-6">Annual Carbon Avoided</h3>
              
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-black text-primary tracking-tight">{co2eSaved}</span>
                <span className="text-lg font-bold text-nc-text ml-2">kgs CO₂e</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#FBFAF6] p-6 rounded-2xl border border-black/5">
                <div className="relative w-28 h-20 flex-shrink-0 flex items-center justify-center bg-white rounded-xl border border-black/5 p-2">
                  <Image 
                    src={co2Values[familySize].image} 
                    alt={co2Values[familySize].label}
                    fill
                    sizes="112px"
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Equivalent to removing the yearly emissions of a single <span className="font-bold text-nc-text">{co2Values[familySize].label}</span> from the road.
                  </p>
                </div>
              </div>
            </div>

            {/* Yield Stat Card */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center font-bold text-primary text-xl select-none">
                🍂
              </div>

              <h3 className="text-sm font-bold text-text-very-muted uppercase tracking-wider mb-6">Annual Organic Compost Yield</h3>
              
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-black text-[#5C4033] tracking-tight">{compostYield}</span>
                <span className="text-lg font-bold text-nc-text ml-2">kgs / year</span>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                Rawbin harvests nutrient-rich, living soil food containing organic carbon and micro-organisms ready to restore plant health in home gardens and urban greenery.
              </p>
            </div>
            
            <div className="text-center pt-2">
              <Link href="/" className="text-sm font-bold text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
