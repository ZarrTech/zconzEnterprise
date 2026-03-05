import Link from 'next/link';

export function ServiceHero({ title, subtitle, cta1, cta2 }: { title: string; subtitle: string; cta1: string; cta2: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="premium-card p-8 md:p-12">
          <p className="mb-3 inline-flex rounded-pill border border-borderGold/60 bg-gold/10 px-3 py-1 text-xs uppercase tracking-wider text-gold">Zeconz Enterprises</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-pill bg-gold px-5 py-3 font-semibold text-black hover:bg-goldHover hover:shadow-gold">{cta1}</Link>
            <Link href="/contact" className="rounded-pill border border-borderGold px-5 py-3 hover:bg-card2">{cta2}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
