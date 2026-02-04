import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-4">
                Find the{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  right playlist
                </span>{' '}
                in seconds
              </h1>
              <p className="text-lg text-surface-600 mb-8">
                Community-curated YouTube playlists for DSA, Python, Web Dev,
                and more. No ads, no fluff — just quality learning resources.
              </p>
            </div>

            <SearchBar categories={categories} />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-surface-900">
                Browse by Category
              </h2>
              <span className="text-sm text-surface-500">
                {categories.length} categories •{' '}
                {categories.reduce((acc, cat) => acc + cat.playlists.length, 0)}{' '}
                playlists
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Know a great playlist?
              </h2>
              <p className="text-surface-600 mb-6">
                LearnDock is open source and community-driven. Help others
                discover quality learning resources.
              </p>
              <a
                href="/contribute"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Contribute a Playlist
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
