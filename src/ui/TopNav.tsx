'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Home'],
  ['/logistics', 'Logistics'],
  ['/crypto', 'Crypto'],
  ['/farm-produce', 'Farm Produce'],
  ['/reviews', 'Reviews'],
  ['/contact', 'Contact']
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-borderGold/50 bg-bg/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-lg font-semibold tracking-[0.2em] text-gold">ZECONZ</div>
        <div className="hidden gap-2 md:flex">
          {links.map(([href, label]) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className="relative rounded-pill px-4 py-2 text-sm text-text/90 hover:text-text">
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-pill border border-borderGold bg-gold/15"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex gap-2">
          <Link href="/login" className="rounded-pill border border-borderGold px-4 py-2 text-sm hover:bg-card2">
            Sign in
          </Link>
          <Link href="/register" className="rounded-pill bg-gold px-4 py-2 text-sm font-semibold text-black hover:bg-goldHover hover:shadow-gold">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
