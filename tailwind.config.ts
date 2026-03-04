import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', bg2: 'var(--bg2)', card: 'var(--card)', card2: 'var(--card2)',
        text: 'var(--text)', muted: 'var(--muted)', gold: 'var(--gold)', goldHover: 'var(--goldHover)',
        borderGold: 'var(--border)', danger: 'var(--danger)', success: 'var(--success)', warning: 'var(--warning)'
      },
      borderRadius: { card: '16px', input: '12px', pill: '999px' },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.35)',
        gold: '0 0 0 1px rgba(245,196,0,0.35), 0 8px 30px rgba(245,196,0,0.15)'
      },
      maxWidth: { container: '1200px' }
    }
  },
  plugins: []
};

export default config;
