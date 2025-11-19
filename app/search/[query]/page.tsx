'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

// Mock search results
const mockResults = [
  {
    id: 1,
    title: 'iPhone 15 Pro',
    category: 'Smartphones',
    price: '$999',
    rating: 4.8,
    description: 'Latest iPhone with advanced camera system'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24',
    category: 'Smartphones',
    price: '$899',
    rating: 4.6,
    description: 'Powerful Android smartphone with AI features'
  },
  {
    id: 3,
    title: 'Google Pixel 8 Pro',
    category: 'Smartphones',
    price: '$799',
    rating: 4.7,
    description: 'Google\'s flagship with exceptional camera'
  },
  {
    id: 4,
    title: 'OnePlus 12',
    category: 'Smartphones',
    price: '$649',
    rating: 4.5,
    description: 'Fast charging and smooth performance'
  },
  {
    id: 5,
    title: 'MacBook Pro',
    category: 'Laptops',
    price: '$1999',
    rating: 4.9,
    description: 'Professional laptop for creative work'
  },
  {
    id: 6,
    title: 'Sony Headphones',
    category: 'Audio',
    price: '$299',
    rating: 4.4,
    description: 'Noise cancelling wireless headphones'
  }
];

// Advanced search function
const searchProducts = (query: string) => {
  if (!query.trim()) return [];

  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return mockResults.filter(product => {
    const searchableText = `
      ${product.title.toLowerCase()}
      ${product.category.toLowerCase()}
      ${product.description.toLowerCase()}
    `;

    return searchTerms.every(term => 
      searchableText.includes(term)
    );
  });
};

export default function SearchPage() {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof mockResults>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Only initialize from URL if query exists
  useEffect(() => {
    if (params.query) {
      const initialQuery = decodeURIComponent(params.query as string);
      setSearchQuery(initialQuery);
      performSearch(initialQuery);
    }
  }, [params.query]);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setHasSearched(true);
    
    const timer = setTimeout(() => {
      const searchResults = searchProducts(query);
      setResults(searchResults);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim()) {
      router.replace(`/search/${encodeURIComponent(query)}`, { scroll: false });
    } else {
      router.replace('/search', { scroll: false });
    }
    
    performSearch(query);
  };

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
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Search Products'}
          </h1>
        </div>
      </header>

      {/* Search Bar */}
      <div className="py-8 px-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-6 py-4 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-background"
            />
            <svg 
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {!hasSearched && !searchQuery ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-2 text-lg">
              Search for products
            </p>
            <p className="text-sm text-muted-foreground">
              Type in the search bar above to find products
            </p>
          </div>
        ) : isLoading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Searching for "{searchQuery}"...</p>
          </div>
        ) : results.length > 0 ? (
          <div>
            <p className="text-muted-foreground mb-8">
              Found {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary"
                >
                  <div className="h-40 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Product Image</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {result.category}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {result.description}
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
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-2 text-lg">
              No results found for &quot;{searchQuery}&quot;
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Try different keywords or check for spelling mistakes
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setHasSearched(false);
                setResults([]);
                router.replace('/search', { scroll: false });
              }}
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>
    </div>
  );
}