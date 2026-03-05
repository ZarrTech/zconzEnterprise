export function HowItWorks({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step} className="premium-card p-5">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-black">{index + 1}</span>
          <p className="mt-3 text-sm text-muted">{step}</p>
        </li>
      ))}
    </ol>
  );
}
