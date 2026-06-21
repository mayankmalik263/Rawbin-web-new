import Link from 'next/link';

export const metadata = {
  title: 'Technology | Rawbin',
  description: 'Composting, Engineered for Modern Homes.',
};

export default function TechnologyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-8">
          <span>⚙️</span> Smart Composting Technology
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Composting, Engineered for<br/>Modern Homes
        </h1>
        
        <p className="text-xl text-text-muted mb-16 leading-relaxed max-w-2xl mx-auto">
          Deep dive into the science and technology that makes Rawbin the most advanced home composting system in the world. (Full page coming soon)
        </p>

        <div className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm text-left mb-10">
          <h2 className="text-2xl font-bold mb-4">Under Development</h2>
          <p className="text-text-muted mb-6">
            This technical deep-dive will include detailed information on:
          </p>
          <ul className="list-disc pl-5 text-text-muted flex flex-col gap-2 mb-8">
            <li>Aeration System</li>
            <li>Temperature Management</li>
            <li>Moisture Balance</li>
            <li>Odour Control</li>
            <li>Intelligent Composting Process</li>
            <li>Closed-Loop Economics</li>
            <li>Energy Consumption Metrics</li>
          </ul>

          <Link href="/" className="text-primary font-bold hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
