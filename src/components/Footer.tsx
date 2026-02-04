export default function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-50 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <span className="font-semibold text-surface-700">LearnDock</span>
          </div>

          <p className="text-sm text-surface-500 text-center">
            Open source project •{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Contribute on GitHub
            </a>
          </p>

          <div className="flex items-center gap-4 text-sm text-surface-500">
            <a href="/about" className="hover:text-primary-600 transition-colors">
              About
            </a>
            <a
              href="/contribute"
              className="hover:text-primary-600 transition-colors"
            >
              Contribute
            </a>
          </div>
        </div>

        <p className="text-xs text-surface-400 text-center mt-6">
          Made with ❤️ by the community. Not affiliated with YouTube.
        </p>
      </div>
    </footer>
  );
}
