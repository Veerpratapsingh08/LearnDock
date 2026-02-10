import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="LearnDock"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
            />
            <span className="font-semibold text-foreground">LearnDock</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Open source project •{' '}
            <a
              href="https://github.com/Veerpratapsingh08/LearnDock"
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
          Made with ❤️ by{' '}
          <a
            href="https://veerpratapsingh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Veer Pratap Singh
          </a>
          . Not affiliated with YouTube.
        </p>
      </div>
    </footer>
  );
}
