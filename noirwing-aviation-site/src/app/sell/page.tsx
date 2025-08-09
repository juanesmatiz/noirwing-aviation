
'use client';
import { useState } from 'react';

const fields = [
  {name:'owner_name', label:'Owner / Broker Name', required:true},
  {name:'email', label:'Contact Email', required:true},
  {name:'phone', label:'Contact Phone', required:false},
  {name:'make', label:'Make', required:true},
  {name:'model', label:'Model', required:true},
  {name:'year', label:'Year', required:true},
  {name:'serial', label:'Serial Number', required:false},
  {name:'tail', label:'Registration (Tail #)', required:false},
  {name:'category', label:'Category (Jet/Turboprop/Piston)', required:true},
  {name:'priceUSD', label:'Asking Price (USD)', required:false},
  {name:'hours', label:'Total Time (hrs)', required:false},
  {name:'cycles', label:'Cycles', required:false},
  {name:'seats', label:'Seats', required:false},
  {name:'rangeNM', label:'Range (NM)', required:false},
  {name:'engines', label:'Engines', required:false},
  {name:'engine_program', label:'Engine Program (TAP/ESP/JSSI)', required:false},
  {name:'apu_program', label:'APU Program', required:false},
  {name:'avionics', label:'Avionics Suite', required:false},
  {name:'connectivity', label:'Connectivity (Gogo/Avance/Starlink)', required:false},
  {name:'maint', label:'Maintenance Status (Phases/C/D/Annual)', required:false},
  {name:'damage_history', label:'Damage History', required:false},
  {name:'location', label:'Location', required:false},
  {name:'images', label:'Image URLs (comma-separated)', required:false},
];

export default function SellPage(){
  const [state, set] = useState<any>({ category:'Jet' });
  const [ok, setOk] = useState<string|undefined>();
  const [err, setErr] = useState<string|undefined>();
  const setv = (k:string, v:any)=> set((s:any)=>({...s, [k]:v}));
  const submit = async (e:any)=>{
    e.preventDefault();
    setOk(undefined); setErr(undefined);
    try{
      const res = await fetch('/api/submit-listing', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(state) });
      if(!res.ok) throw new Error('Submission failed');
      setOk('Thanks! Your aircraft was submitted for review.');
      set({});
    }catch(e:any){
      setErr(e.message);
    }
  };
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">List Your Aircraft</h1>
      <p className="text-white/70 mt-2">Submissions are reviewed by our team before publication. You will receive a confirmation email.</p>
      <form onSubmit={submit} className="mt-6 grid gap-4">
        {fields.map(f=> (
          <div key={f.name}>
            <label className="text-xs uppercase text-white/60">{f.label}{f.required && ' *'}</label>
            <input className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" value={state[f.name]||''} onChange={e=>setv(f.name, e.target.value)} required={f.required}/>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <input type="checkbox" required/> <span className="text-sm">I confirm I have rights to list this aircraft and agree to Terms.</span>
        </div>
        <div className="flex gap-2 justify-end">
          <a href="/legal/brokerage-agreement" className="btn btn-outline">Brokerage Agreement</a>
          <button className="btn btn-gold" type="submit">Submit for Review</button>
        </div>
        {ok && <div className="text-green-400">{ok}</div>}
        {err && <div className="text-red-400">{err}</div>}
      </form>
    </main>
  );
}

