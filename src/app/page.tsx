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
        <section className="py-10 md:py-14">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Community-curated YouTube playlists for learning.
              </p>
            </div>

            <SearchBar categories={categories} />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Browse by Category
              </h2>
              <span className="text-sm text-muted-foreground">
                {categories.length} categories •{' '}
                {categories.reduce((acc, cat) => acc + cat.playlists.length, 0)}{' '}
                playlists
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Contribute CTA - Minimal */}
        <section className="py-8 border-t border-border">
          <div className="container text-center">
            <p className="text-sm text-muted-foreground">
              Want to contribute?{' '}
              <a
                href="/contribute"
                className="text-primary hover:underline"
              >
                Submit a playlist →
              </a>
            </p>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}
