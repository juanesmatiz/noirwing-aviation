
export function Logo({ className='' }:{ className?:string }){
  return (
    <div className={"flex items-center gap-2 " + className}>
      <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#0A0A0A" stroke="#D4AF37" strokeWidth="2"/>
        <path d="M10 36 L54 28 L38 26 L32 18 L28 26 L24 27 L21 31 Z" fill="#D4AF37"/>
      </svg>
      <span className="font-bold tracking-wide">Noirwing Aviation</span>
    </div>
  );
}

