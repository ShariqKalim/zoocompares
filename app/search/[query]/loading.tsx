export default function SearchLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="sticky top-0 bg-background border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-4 w-16 bg-muted rounded mb-4 animate-pulse" />
          <div className="h-8 w-48 bg-muted rounded animate-pulse" />
        </div>
      </header>

      {/* Search Bar Skeleton */}
      <div className="py-8 px-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="h-12 bg-muted rounded-full animate-pulse" />
        </div>
      </div>

      {/* Results Skeleton */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="h-4 w-32 bg-muted rounded mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-border rounded-lg p-6">
              <div className="h-40 bg-muted rounded-lg mb-4 animate-pulse" />
              <div className="h-4 w-24 bg-muted rounded mb-2 animate-pulse" />
              <div className="h-4 w-32 bg-muted rounded mb-3 animate-pulse" />
              <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
