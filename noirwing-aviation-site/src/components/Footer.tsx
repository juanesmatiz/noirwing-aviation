export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Work with Noirwing Aviation</h3>
          <p className="text-white/70 text-sm mt-2 max-w-md">
            Buying or selling worldwide? We orchestrate valuation, pre-buy, escrow/title, and delivery. Discretion guaranteed.
          </p>
          <p className="text-white/60 text-xs mt-4">© {new Date().getFullYear()} Noirwing Aviation</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <form method="POST" action="/api/lead">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="name" placeholder="Name"/>
              <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="email" placeholder="Email"/>
              <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="phone" placeholder="Phone"/>
              <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="budget" placeholder="Budget (USD)"/>
              <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15 sm:col-span-2" name="mission" placeholder="Mission (e.g., 1200nm, 6 seats)"/>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold" style={{background:'#D4AF37', color:'#0A0A0A'}}>Request Consultation</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}
