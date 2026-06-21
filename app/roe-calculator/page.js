import Link from 'next/link';

export const metadata = {
  title: 'ROE Calculator | Rawbin',
  description: 'Calculate your Return on Environment.',
};

export default function ROECalculatorPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <h1 className="text-5xl font-black mb-6">
          Return on Environment (ROE) Calculator
        </h1>
        
        <p className="text-xl text-text-muted mb-16 leading-relaxed">
          See your personal climate impact based on your household's composting habits.
        </p>

        <div className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm mb-10">
          <div className="text-6xl mb-6">🧮</div>
          <h2 className="text-2xl font-bold mb-4">Calculator Coming Soon</h2>
          <p className="text-text-muted mb-8">
            We're building an interactive tool to help you calculate your exact CO₂e savings and compost generation based on your daily food waste.
          </p>

          <Link href="/" className="bg-primary text-nc-text px-8 py-3 rounded-full font-bold inline-block hover:shadow-hover transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
