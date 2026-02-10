import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="LearnDock"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-semibold text-foreground">LearnDock</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Open source project •{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Contribute on GitHub
            </a>
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="/contribute"
              className="hover:text-primary transition-colors"
            >
              Contribute
            </a>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Made with ❤️ by the community. Not affiliated with YouTube.
        </p>
      </div>
    </footer>
  );
}
