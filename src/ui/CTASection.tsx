export function CTASection({ title }: { title: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-card border border-borderGold bg-gradient-to-r from-card to-card2 p-8 shadow-gold">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-2 text-muted">Payment confirmed. Your order is now processing.</p>
        </div>
      </div>
    </section>
  );
}
