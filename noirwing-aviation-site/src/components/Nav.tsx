
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';

export default function Nav(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#inventory" className="opacity-80 hover:opacity-100">Inventory</Link>
          <Link href="/sell" className="opacity-80 hover:opacity-100">List Aircraft</Link>
          <Link href="/about" className="opacity-80 hover:opacity-100">About</Link>
          <Link href="/contact" className="btn btn-gold">Request Brief</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
          <a href="/#inventory">Inventory</a><br/>
          <a href="/sell">List Aircraft</a><br/>
          <a href="/about">About</a><br/>
          <a href="/contact" className="btn btn-gold w-full mt-2">Request Brief</a>
        </div>
      )}
    </header>
  );
}

