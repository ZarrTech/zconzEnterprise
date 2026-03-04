import './globals.css';
import { ReactNode } from 'react';
import { TopNav } from '@/ui/TopNav';
import { Footer } from '@/ui/Footer';
import { SupportFab } from '@/ui/SupportFab';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><TopNav />{children}<Footer /><SupportFab /></body></html>;
}
