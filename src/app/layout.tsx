import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dev Portfolio | Premium Senior Engineer',
  description: 'A premium developer portfolio for a senior software engineer with modern UI, animations, and responsive design.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Dev Portfolio | Premium Senior Engineer',
    description: 'A premium developer portfolio for a senior software engineer with modern UI, animations, and responsive design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Portfolio | Premium Senior Engineer',
    description: 'A premium developer portfolio for a senior software engineer with modern UI, animations, and responsive design.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
