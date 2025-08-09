
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import all from '../data/inventory.json';

export default function Inventory(){
  const [filters, setFilters] = useState<any>({ q:'', cat:'All', minPrice:0, maxPrice:100000000, seats:0, year:1990, range:0, sort:'priceDesc' });

  const data = useMemo(()=>{
    let list = [...(all as any[])];
    const q = (filters.q||'').toLowerCase();
    if(q) list = list.filter(a => (a.title + ' ' + a.make + ' ' + a.model + ' ' + a.location).toLowerCase().includes(q));
    if(filters.cat !== 'All') list = list.filter(a => a.category === filters.cat);
    list = list.filter(a => a.priceUSD >= filters.minPrice && a.priceUSD <= filters.maxPrice && a.seats >= filters.seats && a.year >= filters.year);
    switch(filters.sort){
      case 'priceAsc': list.sort((a,b)=>a.priceUSD-b.priceUSD); break;
      case 'priceDesc': list.sort((a,b)=>b.priceUSD-a.priceUSD); break;
      case 'yearDesc': list.sort((a,b)=>b.year-a.year); break;
      case 'yearAsc': list.sort((a,b)=>a.year-b.year); break;
    }
    return list;
  }, [filters]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map(a => (
        <div key={a.id} className="card overflow-hidden">
          <div className="relative h-48">
            <Image src={a.img} alt={a.title} fill style={{objectFit:'cover'}} />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold tracking-wide">{a.title}</h3>
                <div className="text-xs text-white/60">{a.location}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">${new Intl.NumberFormat('en-US').format(a.priceUSD)}</div>
                <div className="text-xs text-white/60">{a.year} • {a.seats} seats</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-white/80 line-clamp-2">{a.avionics}</div>
            <div className="mt-4 flex gap-2 justify-end">
              <Link href={`/aircraft/${a.id}`} className="btn btn-gold">View details</Link>
              <Link href={`/contact?aircraft=${encodeURIComponent(a.title)}`} className="btn btn-outline">Request brief</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

