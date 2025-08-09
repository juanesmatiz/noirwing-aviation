
import inv from '../../../data/inventory.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Aircraft({ params }:{ params:{ id:string }}){
  const a = (inv as any[]).find(x => x.id === params.id);
  if(!a) return <main className="mx-auto max-w-5xl px-4 py-10">Not found.</main>;
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-80 rounded-3xl overflow-hidden border border-white/10">
          <Image src={a.img} alt={a.title} fill style={{objectFit:'cover'}} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{a.title}</h1>
          <div className="text-white/70 text-sm mt-1">{a.location}</div>
          <div className="text-2xl font-bold mt-2">${new Intl.NumberFormat('en-US').format(a.priceUSD)}</div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <Spec label="Year" value={a.year} />
            <Spec label="Category" value={a.category} />
            <Spec label="Seats" value={a.seats} />
            <Spec label="Range (NM)" value={a.rangeNM} />
            <Spec label="Hours" value={a.hours} />
            <Spec label="Engines" value={a.engines} />
          </div>
          <div className="mt-4 card p-3">
            <div className="text-xs uppercase text-white/60">Avionics</div>
            <div className="text-sm">{a.avionics}</div>
          </div>
          <div className="mt-3 card p-3">
            <div className="text-xs uppercase text-white/60">Maintenance</div>
            <div className="text-sm">{a.maint}</div>
          </div>
          <div className="mt-5 flex gap-2">
            <Link href={`/contact?aircraft=${encodeURIComponent(a.title)}`} className="btn btn-gold">Request Spec Sheet</Link>
            <Link href={`/contact?aircraft=${encodeURIComponent(a.title)}&type=offer`} className="btn btn-outline">Make an Offer</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({label, value}:{label:string, value:any}){
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
      <div className="text-[10px] uppercase text-white/60">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  )
}

