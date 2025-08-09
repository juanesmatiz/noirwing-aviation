
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Inventory from "../components/Inventory";

export default function Home(){
  return (
    <main>
      <Hero />
      <section id="inventory" className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-2xl font-semibold">Curated Inventory & Acquisition Targets</h2>
          <span className="text-sm text-white/70">Demo showcase</span>
        </div>
        <Filters onChange={()=>{}} />
        <div className="mt-6">
          <Inventory />
        </div>
      </section>
    </main>
  );
}

