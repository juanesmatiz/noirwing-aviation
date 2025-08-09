
import Link from 'next/link';

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.12),transparent_45%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Private Aviation, Perfected.</h1>
        <p className="mt-4 max-w-2xl text-white/80">Boutique aircraft brokerage for discerning buyers and sellers—global reach, technical rigor, and white‑glove execution.</p>
        <div className="mt-8 flex gap-3">
          <Link href="#inventory" className="btn btn-gold">Browse Inventory</Link>
          <Link href="/sell" className="btn btn-outline">List Your Aircraft</Link>
        </div>
      </div>
    </section>
  );
}

