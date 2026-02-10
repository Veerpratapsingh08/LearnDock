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
        <div className="bg-muted/10 border-b border-border">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-foreground font-medium">
                {category.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <section className="py-12 md:py-16 bg-muted/10 border-b border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <span className="text-6xl select-none grayscale" role="img" aria-label={category.name}>
                {category.icon}
              </span>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {category.name}
                </h1>
                <p className="text-lg text-muted-foreground mt-3 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center gap-3 mt-4 text-sm text-muted-foreground">
                     <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                        {category.playlists.length} Playlists
                     </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Playlists */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <div className="space-y-16">
              {/* Beginner */}
              {beginnerPlaylists.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <h2 className="text-xl font-semibold text-foreground">Beginner Level</h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    {beginnerPlaylists.map((playlist, index) => (
                      <PlaylistCard key={index} playlist={playlist} />
                    ))}
                  </div>
                </div>
              )}

              {/* Intermediate */}
              {intermediatePlaylists.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                     <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    </span>
                    <h2 className="text-xl font-semibold text-foreground">Intermediate Level</h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    {intermediatePlaylists.map((playlist, index) => (
                      <PlaylistCard key={index} playlist={playlist} />
                    ))}
                  </div>
                </div>
              )}

              {/* Advanced */}
              {advancedPlaylists.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <h2 className="text-xl font-semibold text-foreground">Advanced Level</h2>
                  </div>
                  <div className="flex flex-col gap-4">
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
        <section className="py-8 border-t border-border">
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
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
