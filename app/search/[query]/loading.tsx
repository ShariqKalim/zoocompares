export default function SearchLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="sticky top-0 bg-background border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-4 w-20 bg-muted rounded mb-4 animate-pulse" />
          <div className="h-8 w-64 bg-muted rounded animate-pulse" />
        </div>
      </header>

      {/* Search Bar Skeleton */}
      <div className="py-8 px-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="h-14 bg-muted rounded-full animate-pulse" />
        </div>
      </div>

      {/* Empty State Skeleton */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full animate-pulse" />
          <div className="h-6 w-48 bg-muted rounded animate-pulse mx-auto mb-2" />
          <div className="h-4 w-64 bg-muted rounded animate-pulse mx-auto" />
        </div>
      </main>
    </div>
  );
}