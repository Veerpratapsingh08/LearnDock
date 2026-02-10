export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16 animate-pulse">
           {/* Simple logo representation or pulse circle */}
           <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
           <div className="relative h-full w-full rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/50">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
           </div>
        </div>
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Loading resources...
        </p>
      </div>
    </div>
  );
}
