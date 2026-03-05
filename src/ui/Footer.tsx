export function Footer() {
  return (
    <footer className="mt-20 border-t border-borderGold/40 bg-bg2/80">
      <div className="container grid gap-8 py-12 text-sm md:grid-cols-4">
        <div>
          <h4 className="text-base font-semibold text-gold">Zeconz Enterprises</h4>
          <p className="mt-2 text-muted">Unified logistics, produce commerce, and compliant crypto desk workflows.</p>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-2 space-y-1 text-muted">
            <li>Logistics</li><li>Crypto Desk</li><li>Farm Produce</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-muted">support@zeconz.local</p>
          <p className="text-muted">+234 000 0000</p>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <input className="mt-2 w-full rounded-input border border-borderGold bg-card p-2" placeholder="you@example.com" />
        </div>
      </div>
    </footer>
  );
}
