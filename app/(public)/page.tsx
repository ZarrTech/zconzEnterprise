import { CTASection, FeatureGrid, HowItWorks, ServiceHero, StatsKPI } from '@/ui';

export default function Home() {
  return (
    <main>
      <ServiceHero
        title="Operate logistics, crypto desk, and produce commerce in one platform."
        subtitle="Premium execution for modern enterprises: reliable fulfillment, compliant ticket workflows, and delightful customer operations."
        cta1="View Dashboard"
        cta2="Contact Support"
      />

      <section className="container grid gap-4 md:grid-cols-3">
        <StatsKPI label="Shipments Completed" value="10K+" />
        <StatsKPI label="Produce Orders" value="50K+" />
        <StatsKPI label="Crypto Tickets" value="2K+" />
      </section>

      <section className="section container">
        <h2 className="mb-6 text-2xl font-semibold">Our Services</h2>
        <FeatureGrid items={['Create Shipment', 'Shop Produce', 'Create Crypto Ticket']} />
      </section>

      <section className="section container">
        <h2 className="mb-6 text-2xl font-semibold">How it works</h2>
        <HowItWorks steps={['Choose your service', 'Pay securely with verification', 'Track progress in one dashboard']} />
      </section>

      <CTASection title="Scale operations with Zeconz Enterprises." />
    </main>
  );
}
