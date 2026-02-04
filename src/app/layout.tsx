import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnDock - Curated YouTube Playlists for Learning',
  description:
    'A community-curated collection of high-quality YouTube playlists for DSA, Python, Web Development, and more. Find the right playlist in seconds.',
  keywords: [
    'youtube playlists',
    'learning',
    'dsa',
    'python',
    'web development',
    'programming',
    'tutorials',
    'education',
  ],
  authors: [{ name: 'LearnDock Community' }],
  openGraph: {
    title: 'LearnDock - Curated YouTube Playlists for Learning',
    description:
      'Find high-quality YouTube playlists for DSA, Python, Web Development, and more.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
