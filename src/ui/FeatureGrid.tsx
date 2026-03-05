export function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="premium-card p-5 hover:-translate-y-0.5 hover:border-borderGold/60">
          <h3 className="font-semibold">{item}</h3>
          <p className="mt-2 text-sm text-muted">Fast, secure and trackable execution built for enterprise workflows.</p>
        </div>
      ))}
    </div>
  );
}
