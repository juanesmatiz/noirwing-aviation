
'use client';
import { useState } from 'react';

export default function Filters({ onChange }:{ onChange:(s:any)=>void }){
  const [s, setS] = useState({ q:'', cat:'All', minPrice:0, maxPrice:100000000, seats:0, year:1990, range:0, sort:'priceDesc' });
  const upd=(k:any,v:any)=>{ const n={...s,[k]:v}; setS(n); onChange(n); };
  return (
    <div className="card p-4 backdrop-blur">
      <div className="text-xs uppercase text-white/60 mb-2">Refine</div>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
        <select value={s.cat} onChange={e=>upd('cat', e.target.value)} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
          {['All','Jet','Turboprop','Piston'].map(c=><option key={c}>{c}</option>)}
        </select>
        <input placeholder="Search make, model, location…" value={s.q} onChange={e=>upd('q', e.target.value)} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15"/>
        <input type="number" placeholder="Min Price" value={s.minPrice} onChange={e=>upd('minPrice', Number(e.target.value))} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15"/>
        <input type="number" placeholder="Max Price" value={s.maxPrice} onChange={e=>upd('maxPrice', Number(e.target.value))} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15"/>
        <input type="number" placeholder="Min Seats" value={s.seats} onChange={e=>upd('seats', Number(e.target.value))} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15"/>
        <input type="number" placeholder="Min Year" value={s.year} onChange={e=>upd('year', Number(e.target.value))} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15"/>
      </div>
    </div>
  );
}

