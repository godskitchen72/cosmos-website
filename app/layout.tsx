import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmos Medical Technologies',
  description: 'AI-powered medical documentation, no-fault workflow, billing, and practice automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
