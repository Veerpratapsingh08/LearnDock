import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contribute - LearnDock',
  description: 'Learn how to contribute playlists to LearnDock.',
};

export default function ContributePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-surface-900 mb-4">
              Contribute a Playlist
            </h1>
            <p className="text-lg text-surface-600 mb-12">
              Help the community discover quality learning resources. It only takes
              a few minutes.
            </p>

            {/* Steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-surface-900 mb-6">
                How to contribute
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">
                      Fork the repository
                    </h3>
                    <p className="text-surface-600 text-sm">
                      Go to our GitHub repo and click &quot;Fork&quot; to create your own
                      copy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">
                      Find the right category file
                    </h3>
                    <p className="text-surface-600 text-sm mb-2">
                      Navigate to <code className="bg-surface-100 px-1.5 py-0.5 rounded text-sm">data/</code> and
                      open the JSON file for your category (e.g., <code className="bg-surface-100 px-1.5 py-0.5 rounded text-sm">dsa.json</code>).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">
                      Add your playlist entry
                    </h3>
                    <p className="text-surface-600 text-sm mb-3">
                      Add a new entry following this format:
                    </p>
                    <pre className="bg-surface-900 text-surface-100 p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "title": "Playlist Title",
  "creator": "Channel Name",
  "url": "https://youtube.com/playlist?list=...",
  "language": "English",
  "difficulty": "beginner",
  "videoCount": 42,
  "description": "Brief description (max 150 chars)",
  "year": 2024
}`}
                    </pre>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">
                      Submit a Pull Request
                    </h3>
                    <p className="text-surface-600 text-sm">
                      Commit your changes and open a PR. We review submissions within
                      48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Acceptance Criteria */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-surface-900 mb-6">
                What we look for
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 border border-green-200 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    We accept
                  </h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Hosted on YouTube (public playlist)</li>
                    <li>• Minimum 5 videos</li>
                    <li>• Focused on one topic</li>
                    <li>• Good audio/video quality</li>
                    <li>• Free to access (no paywall)</li>
                  </ul>
                </div>

                <div className="p-5 border border-red-200 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    We reject
                  </h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Unknown/anonymous creators</li>
                    <li>• Outdated content (deprecated tech)</li>
                    <li>• Incomplete or abandoned playlists</li>
                    <li>• Low-quality recordings</li>
                    <li>• Duplicates of existing entries</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Report Issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-surface-900 mb-4">
                Report a problem
              </h2>
              <p className="text-surface-600 mb-4">
                Found a dead link, outdated playlist, or have a suggestion? Open an
                issue on GitHub.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Open an issue
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </section>

            {/* CTA */}
            <section className="p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl text-center">
              <h2 className="text-xl font-semibold text-surface-900 mb-2">
                Ready to contribute?
              </h2>
              <p className="text-surface-600 mb-6">
                Your contribution helps thousands of learners find quality resources.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-900 text-white px-6 py-3 rounded-lg hover:bg-surface-800 transition-colors font-medium"
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
                Start on GitHub
              </a>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
