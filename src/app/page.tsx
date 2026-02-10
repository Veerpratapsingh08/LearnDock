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
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Curated learning paths for <span className="text-primary">developers</span>.
              </h1>
              <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                A community-curated collection of high-quality YouTube playlists for DSA, Python, Web Development, and more.
              </p>
            </div>

            <SearchBar categories={categories} variant="hero" />
            
             <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground/60">
                    Trusted by open source contributors
                </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex items-end justify-between mb-8">
              <div>
                 <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    Browse Categories
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">
                    Select a topic to start learning
                </p>
              </div>
             
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {categories.length} Topics
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Contribute CTA - Minimal */}
        <section className="py-16 border-t border-border bg-card">
          <div className="container text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Missing a great playlist?</h3>
            <p className="text-muted-foreground mb-6">
              Help the community by submitting high-quality resources.
            </p>
            <a
              href="/contribute"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Submit a playlist
            </a>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}
