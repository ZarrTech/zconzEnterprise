export function StatsKPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="premium-card p-5">
      <div className="text-3xl font-bold text-gold">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
