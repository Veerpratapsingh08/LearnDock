import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaylistCard from '@/components/PlaylistCard';
import { getCategoryBySlug, getAllCategorySlugs } from '@/lib/data';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found - LearnDock',
    };
  }

  return {
    title: `${category.name} Playlists - LearnDock`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Group playlists by difficulty
  const beginnerPlaylists = category.playlists.filter(
    (p) => p.difficulty === 'beginner'
  );
  const intermediatePlaylists = category.playlists.filter(
    (p) => p.difficulty === 'intermediate'
  );
  const advancedPlaylists = category.playlists.filter(
    (p) => p.difficulty === 'advanced'
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-50 border-b border-surface-200">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-surface-500 hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-surface-300">/</span>
              <span className="text-surface-900 font-medium">
                {category.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <section className="py-12 bg-gradient-to-b from-surface-50 to-white">
          <div className="container">
            <div className="flex items-start gap-4">
              <span className="text-5xl" role="img" aria-label={category.name}>
                {category.icon}
              </span>
              <div>
                <h1 className="text-3xl font-bold text-surface-900">
                  {category.name}
                </h1>
                <p className="text-surface-600 mt-2 max-w-2xl">
                  {category.description}
                </p>
                <p className="text-sm text-surface-500 mt-3">
                  {category.playlists.length} curated playlist
                  {category.playlists.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playlists */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-12">
              {/* Beginner */}
              {beginnerPlaylists.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-surface-900 mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    Beginner
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {beginnerPlaylists.map((playlist, index) => (
                      <PlaylistCard key={index} playlist={playlist} />
                    ))}
                  </div>
                </div>
              )}

              {/* Intermediate */}
              {intermediatePlaylists.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-surface-900 mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    Intermediate
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {intermediatePlaylists.map((playlist, index) => (
                      <PlaylistCard key={index} playlist={playlist} />
                    ))}
                  </div>
                </div>
              )}

              {/* Advanced */}
              {advancedPlaylists.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-surface-900 mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    Advanced
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {advancedPlaylists.map((playlist, index) => (
                      <PlaylistCard key={index} playlist={playlist} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Back link */}
        <section className="py-8 border-t border-surface-200">
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Browse all categories
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
