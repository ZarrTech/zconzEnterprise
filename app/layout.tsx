import './globals.css';
import { ReactNode } from 'react';
import { TopNav } from '@/ui/TopNav';
import { Footer } from '@/ui/Footer';
import { SupportFab } from '@/ui/SupportFab';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text antialiased">
        <TopNav />
        {children}
        <Footer />
        <SupportFab />
      </body>
    </html>
  );
}
