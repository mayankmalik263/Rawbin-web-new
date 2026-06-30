'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Microscope, Sparkles, AlertCircle, BookOpen } from 'lucide-react';

export default function SciencePageClient() {
  const faqs = [
    {
      id: "faq-1",
      q: "What is Rawbin?",
      a: "Rawbin is an intelligent home composting system that transforms kitchen leftovers into nutrient-rich compost with minimal effort.",
      science: "At its core, Rawbin is a specialized thermophilic aerobic bioreactor designed for residential use. Rather than acting as a simple food dehydrator (which only dries and crushes waste without biological decomposition), Rawbin maintains an active microbial environment. It uses custom high-torque shredding blades to increase the surface-area-to-volume ratio of kitchen scraps by over 10x. This allows air and composting bacteria to access the organic matter rapidly. The system automatically balances moisture levels (ideally between 40% and 60%) using internal thermal sensors, facilitating rapid breakdown of complex starches, lipids, and proteins into stable organic compounds. This results in a volume reduction of up to 90% in just 7 days."
    },
    {
      id: "faq-2",
      q: "What do I do with the compost?",
      a: "You can use the compost for your indoor plants, outdoor gardens, community gardens, or even gift it to neighbors.",
      science: "The dry organic output from Rawbin is a concentrated pre-compost packed with organic carbon, nitrogen, phosphorus, potassium (NPK), and trace minerals. When added to soil, it acts as a slow-release natural fertilizer and soil conditioner. Scientifically, this organic matter binds to soil particles to form stable humus complexes, increasing the soil's water-holding capacity (up to 20x its dry weight in water) and improving aeration. Furthermore, it inoculates the soil with beneficial microflora. Organisms such as *Bacillus subtilis* and *Streptomyces* species compete with and suppress common root pathogens, enhancing the root system's resilience and plant health naturally."
    },
    {
      id: "faq-3",
      q: "Rawbin vs Traditional Composting?",
      a: "Unlike traditional composting which can take months, attract pests, and produce odors, Rawbin uses smart technology to create compost in just a few days, completely odor-free and mess-free.",
      science: "Traditional backyard composting heaps rely on passive aeration, which often results in anaerobic pockets. Under anaerobic conditions, microbes produce methane (CH₄, a greenhouse gas 28x more potent than CO₂) and hydrogen sulfide (H₂S, the source of rotten-egg smell). It takes 60–90 days to yield stable compost. Rawbin, by contrast, uses active internal aeration and a heated chamber to compress this cycle into 7 days. By maintaining a constant supply of oxygen, Rawbin keeps the process strictly aerobic. It heats the mixture to the thermophilic composting range (55°C to 65°C) within the first 48 hours. Composting science dictates that keeping the pile at 55°C+ for 72 consecutive hours is the biological threshold required to neutralize plant pathogens (like *E. coli* or *Salmonella*) and render weed seeds and pest larvae completely inert."
    },
    {
      id: "faq-4",
      q: "Does Rawbin smell?",
      a: "No, Rawbin is designed to be 100% odor-free using advanced carbon filtration and bio-transform technology.",
      science: "Organic decay produces volatile organic compounds (VOCs), organic acids, ammonia (NH₃), and sulfur-containing compounds. Rawbin prevents odors through two scientific principles: (1) Active Aerobic Aeration: Consistent oxygen flow via an internal stirrer prevents the anaerobic fermentation that generates foul-smelling gases. (2) Dual-Stage Activated Carbon Adsorption: The exhaust gases are pushed through a pressurized activated carbon canister. Activated carbon has an extremely high surface-area-to-mass ratio—typically 1,000 to 1,500 square meters per gram. Odorous gas molecules are physically bound (adsorbed) onto the carbon's microscopic pores via Van der Waals forces, releasing clean, odorless air into your kitchen."
    },
    {
      id: "faq-5",
      q: "Does Rawbin attract pests?",
      a: "No, the closed-loop system is completely sealed, preventing any pests or insects from accessing the organic matter.",
      science: "Insects (like fruit flies, *Drosophila melanogaster*) and rodents are guided to organic waste by chemical scents (VOCs) and require an open path to lay eggs or feed. Rawbin's construction is hermetically sealed with food-grade silicone gaskets around the lid. Air is drawn in and pushed out strictly through micro-mesh stainless steel screens and carbon filters that act as physical barriers. Because no odors escape and there are no entry points, pests cannot detect or access the waste. Additionally, the thermophilic heat phase (55°C–65°C) sanitizes the waste inside, destroying any insect eggs or larvae that might have been present on fruit peels before they were placed in the bin."
    },
    {
      id: "faq-6",
      q: "How much electricity does Rawbin use?",
      a: "Rawbin is highly energy efficient, using just ~4 units of electricity per month, which is less power than a standard LED bulb over the same period.",
      science: "Rawbin operates on an average power draw of only 50W, consuming approximately 4 kWh (units) per month under normal household use. This efficiency is achieved through a smart, sensor-driven heat-saving system. Composting is an exothermic biological process: when thermophilic bacteria digest organic feedstock, their metabolic activity naturally generates heat. Rawbin's internal sensors continuously monitor this temperature. When they detect that the microbial activity is generating sufficient biogenic heat to sustain the composting range, the device's microprocessors automatically turn off or scale down the electrical heating coil. The insulated double-walled chassis retains this heat, minimizing power consumption to just the low-wattage internal mixing motor."
    },
    {
      id: "faq-7",
      q: "How do I clean Rawbin?",
      a: "The inner bucket is easily removable and can be washed with mild soap and water or placed in a dishwasher.",
      science: "The inner bucket is cast from premium, high-thermal-conductivity aluminum to ensure rapid, uniform heat transfer throughout the composting pile. The interior is coated with a non-stick ceramic layer. Unlike standard plastics, this ceramic coating is highly scratch-resistant and chemically inert. It prevents the complex sugars, proteins, and organic oils present in cooked leftovers from polymerizing and sticking to the walls during high-temperature cycles. This allows residues to slide off easily during a standard dishwasher cycle or hand wash."
    },
    {
      id: "faq-8",
      q: "What is the size and capacity of Rawbin?",
      a: "Rawbin handles up to 3kg of everyday kitchen leftovers per cycle and features a compact design perfect for modern apartments.",
      science: "Rawbin is sized at approximately 35cm x 30cm x 40cm, matching the footprint of a standard countertop toaster oven or bread maker. Its 3kg maximum capacity is mathematically optimized based on Indian municipal solid waste profile audits. A typical family of 4 to 6 members generates 400g to 600g of wet organic kitchen waste per day. Over a 7-day composting cycle, this totals roughly 3kg of feedstock. The volume of the mixing drum is designed to accommodate the bulk density of uncompressed kitchen waste, allowing enough headspace for optimal air circulation during active mixing."
    },
    {
      id: "faq-9",
      q: "What is the expected life of Rawbin?",
      a: "Built with durable, high-quality materials, Rawbin is engineered to last for years of daily use.",
      science: "Rawbin's durability is verified through rigorous accelerated life testing (ALT) simulating daily thermal and mechanical load cycles. Key structural specifications include: (1) Drive Train: High-torque, low-RPM gear motors with case-hardened steel gears designed to crush dense organic matter without stripping. (2) Chamber: Non-corrosive, marine-grade aluminum and UV-stabilized ABS exterior polymers that resist damage from organic acids and daily scrubbing. (3) Sensors: Heavy-duty, industrial-grade thermistors and humidity sensors sealed in protective stainless steel probes to prevent degradation from moisture and corrosive gases."
    },
    {
      id: "faq-10",
      q: "How do I use Rawbin properly?",
      a: "Simply open the lid, add your organic kitchen leftovers, close it, and let Rawbin's intelligent sensors take over. That's it!",
      science: "Operation relies on what we call the 'Sourdough Model' or 'Inoculum Starter Model'. Composting requires a healthy population of specialized microbes. Rather than forcing users to purchase chemical inoculants for every single cycle, Rawbin is self-sustaining. When harvesting completed compost, you leave approximately 10% (a handful) of the batch inside the bucket. This residual compost is rich in dormant, heat-acclimated thermophilic composting bacteria. When new organic scraps are added and the lid is closed, the sensors activate the cycles, and the pre-existing microbes wake up, reproducing and digesting the fresh food scraps immediately. This makes the system a continuous biological loop."
    },
    {
      id: "faq-11",
      q: "What maintenance is required?",
      a: "Rawbin requires near-zero intervention. The only maintenance needed is occasionally replacing the carbon filter to maintain its odor-free operation.",
      science: "The primary physical component requiring maintenance is the activated carbon filter cartridge. Activated carbon adsorbs odor molecules by filling up active surface sites in its porous structure. Over 3 to 6 months of daily composting, these pore spaces become fully saturated (loaded) with VOCs and moisture, reducing their filtration efficiency. Replacing the filter cartridge restores full adsorption capacity. The device's microprocessor tracks total operating hours and sensor data to alert the user via an LED indicator when filter saturation is reached."
    },
    {
      id: "faq-12",
      q: "What warranty does Rawbin include?",
      a: "Rawbin comes with a comprehensive 1-year warranty covering any manufacturing defects or operational issues.",
      science: "Our 1-year warranty is backed by local customer support teams. It covers all active components: the internal gear motor, heating elements, ambient sensors, control board, and mixing blades. In the event of a component failure, our modular design allows for easy swap-outs of individual parts, reducing waste and ensuring your home composting cycle remains uninterrupted."
    }
  ];

  return (
    <main className="bg-[#0D0F12] text-white min-h-screen font-sans">
      
      {/* 1. Header Section */}
      <section className="relative w-full bg-gradient-to-b from-[#12161A] to-[#0D0F12] pt-28 pb-16 border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-lilac hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1F5A3F]/15 border border-[#1F5A3F]/40 px-4 py-1.5 rounded-full font-bold text-xs uppercase text-primary tracking-widest mb-6">
              <Microscope className="w-4 h-4 text-primary" />
              <span>Thermophilic Bioreactor Tech</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 font-serif italic text-primary">
              The Science of Composting
            </h1>
            <p className="text-lg md:text-xl text-[#A3B899] font-medium leading-relaxed">
              Every detail of the Rawbin has been engineered to turn organic leftovers into living soil food. Explore the biological, chemical, and mechanical physics behind our 7-day loop.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Split Grid */}
      <section className="max-w-[1280px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sidebar Anchor Menu */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-[#A3B899] mb-4 flex items-center gap-2">
              <BookOpen size={16} /> FAQ Index & Science Deep Dives
            </h3>
            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, index) => (
                <a 
                  key={faq.id}
                  href={`#${faq.id}`}
                  className="text-sm font-semibold text-white/60 hover:text-primary transition-colors hover:translate-x-1 duration-150 inline-block truncate"
                >
                  <span className="text-accent-lilac mr-2">{String(index + 1).padStart(2, '0')}</span>
                  {faq.q}
                </a>
              ))}
            </div>
          </aside>

          {/* Right Column: Detailed FAQs list */}
          <div className="lg:col-span-8 space-y-12">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id}
                id={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="bg-white/5 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-[#1F5A3F]/30 transition-colors"
              >
                {/* Decorative absolute element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/1 rounded-bl-full flex items-center justify-center font-bold text-white/5 text-xl select-none group-hover:bg-[#1F5A3F]/5 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h2 className="text-2xl font-black mb-4 pr-12 text-[#F9FAFB] group-hover:text-primary transition-colors">
                  {faq.q}
                </h2>
                
                {/* Standard Answer */}
                <div className="bg-[#12161A]/60 border border-white/5 p-5 rounded-2xl mb-6">
                  <span className="text-[10px] font-black uppercase text-accent-lilac tracking-widest block mb-2">Website FAQ Answer</span>
                  <p className="text-[#A3B899] font-semibold text-base leading-relaxed">{faq.a}</p>
                </div>

                {/* Science deep dive */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase text-primary tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> Technical & Biological Explanation
                  </span>
                  <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                    {faq.science}
                  </p>
                </div>

                {/* Proof Warning Badge */}
                <div className="mt-6 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <AlertCircle className="w-5 h-5 text-accent-lilac flex-shrink-0 mt-0.5" />
                  <p className="text-[12px] text-white/60 font-medium leading-relaxed">
                    All specifications are verified in Newcycl R&D laboratories in Bengaluru. Testing conforms to standard aerobic waste stabilization protocols.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom CTA Footer block */}
      <section className="max-w-[1280px] mx-auto px-5 py-12 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-black">Ready to Decentralize Your Waste?</h2>
          <p className="text-sm font-medium text-[#A3B899] leading-relaxed">
            Eliminate methane, cut municipal logistics, and start nourishing your home plants with Rawbin.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a href="https://forms.gle/w8PioSB3WnWCgR8z8" target="_blank" rel="noopener noreferrer" className="bg-primary text-[#0D0F12] px-8 py-3.5 rounded-2xl font-bold hover:shadow-hover hover:-translate-y-0.5 transition-all text-sm">
              Pre-order Rawbin Now
            </a>
            <Link href="/" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-2xl font-bold border border-white/10 transition-all text-sm">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
