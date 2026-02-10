import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <Image
            src="/logo.svg"
            alt="LearnDock"
            width={80}
            height={80}
            className="w-40 h-40"
            priority
          />
        </div>
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Loading resources...
        </p>
      </div>
    </div>
  );
}
