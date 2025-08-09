
export default function Contact(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Request a Buyer’s Brief</h1>
      <p className="text-white/70 mt-2">Tell us your mission profile—range, seats, budget, preferred OEMs—and we’ll respond within one business day.</p>
      <div className="text-white/60 text-sm mt-2">Default escrow/title partner: Insured Aircraft Title Service (IATS), Oklahoma City.</div>
      <form method="POST" action="/api/lead" className="mt-6 grid gap-4">
        <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="name" placeholder="Name" required/>
        <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="email" placeholder="Email" required/>
        <input className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="phone" placeholder="Phone"/>
        <textarea className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15" name="details" placeholder="Mission details"></textarea>
        <div className="flex justify-end">
          <button className="btn btn-gold">Submit</button>
        </div>
      </form>
    </main>
  )
}

