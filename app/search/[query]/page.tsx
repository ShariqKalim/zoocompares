'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import SearchBar from '@/components/search-bar';
import { ArrowLeft } from 'lucide-react';

// Mock search results
const generateResults = (query: string) => {
  const mockResults = [
    {
      id: 1,
      title: 'iPhone 15 Pro',
      category: 'Smartphones',
      price: '$999',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24',
      category: 'Smartphones',
      price: '$899',
      rating: 4.6,
    },
    {
      id: 3,
      title: 'Google Pixel 8 Pro',
      category: 'Smartphones',
      price: '$799',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'OnePlus 12',
      category: 'Smartphones',
      price: '$649',
      rating: 4.5,
    },
  ];
  return mockResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.category.toLowerCase().includes(query.toLowerCase())
  );
};

export default function SearchPage() {
  const params = useParams();
  const query = decodeURIComponent(params.query as string);
  const results = generateResults(query);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            Results for &quot;{query}&quot;
          </h1>
        </div>
      </header>

      {/* Search Bar */}
      <div className="py-8 px-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </div>

      {/* Results */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {results.length > 0 ? (
          <div>
            <p className="text-muted-foreground mb-8">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary"
                >
                  <div className="h-40 bg-muted rounded-lg mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {result.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{result.price}</span>
                    <span className="text-sm text-yellow-500">
                      ★ {result.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              No results found for &quot;{query}&quot;
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
