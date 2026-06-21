import Link from 'next/link';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/10 p-3 z-[90] pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <Link href="#order" className="flex items-center justify-center w-full bg-primary text-nc-text py-3.5 rounded-xl font-bold tracking-wide active:scale-[0.98] transition-transform">
        ORDER NOW
      </Link>
    </div>
  );
}
