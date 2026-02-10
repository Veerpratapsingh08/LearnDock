import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About - LearnDock',
  description: 'Learn about LearnDock, the community-curated YouTube playlist directory.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container">
          <article className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              About LearnDock
            </h1>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                What is LearnDock?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LearnDock is a community-curated, open-source directory of
                high-quality YouTube playlists for technical and academic subjects.
                We help learners find the <strong>right playlist</strong> in seconds,
                not hours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No ads. No algorithms. No fluff. Just quality learning resources,
                curated by the community.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Why we built this
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    YouTube search is noisy — quality playlists get buried under
                    clickbait.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Reddit threads and forum lists get outdated within months.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Great playlists are hoarded in private bookmarks, not shared.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Self-learners need trusted starting points, not endless options.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our principles
              </h2>
              <div className="grid gap-4">
                <div className="p-5 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-1">
                    Quality over quantity
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Every playlist is vetted. We reject more than we accept.
                  </p>
                </div>
                <div className="p-5 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-1">
                    Community-first
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Open source, transparent, and powered by contributors like you.
                  </p>
                </div>
                <div className="p-5 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-1">
                    Minimal by design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fast, accessible, no distractions. Works on slow connections.
                  </p>
                </div>
                <div className="p-5 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-1">
                    Forever free
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No ads, no paywalls, no tracking. Open source forever.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Open Source
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LearnDock is 100% open source. The entire codebase, including all
                playlist data, is available on GitHub.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have questions, feedback, or want to report an issue? Open an issue
                on GitHub or start a discussion. We&apos;d love to hear from you.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
