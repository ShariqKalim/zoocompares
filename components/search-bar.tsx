'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { getProducts } from '@/lib/product-storage';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load products on mount
  useEffect(() => {
    setIsClient(true);
    setProducts(getProducts());
  }, []);

  // Generate suggestions based on query - FIXED: No default suggestions
  useEffect(() => {
    if (products.length === 0) return;

    if (query.trim() === '') {
      // Show NO suggestions when query is empty
      setSuggestions([]);
      setIsOpen(false);
    } else {
      // Only show suggestions when user types
      const filtered = products.filter(
        (product) => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          (product.description && product.description.toLowerCase().includes(query.toLowerCase())) ||
          (product.category && product.category.toLowerCase().includes(query.toLowerCase()))
      );
      setSuggestions(filtered.slice(0, 6));
      setIsOpen(filtered.length > 0 && query.trim().length > 0);
    }
  }, [query, products]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (product: any) => {
    router.push(`/${product.slug}`);
    setQuery('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      // Navigate to search results page on Enter
      router.push(`/search/${encodeURIComponent(query.trim())}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Only open dropdown if there's actual text
    if (value.trim() === '') {
      setIsOpen(false);
    }
  };

  const handleInputFocus = () => {
    // Only open dropdown if there are suggestions (user has typed something)
    if (query.trim() !== '' && suggestions.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          placeholder="Compare laptops, phones, services..."
          className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Dropdown Suggestions - Only show when user has typed and there are results */}
      {isClient && isOpen && query.trim() !== '' && suggestions.length > 0 && (
        <div className="absolute top-full mt-3 w-full bg-background border border-border rounded-lg shadow-lg z-10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-2 text-xs font-medium text-muted-foreground border-b border-border">
            Search Results
          </div>
          <ul className="py-2">
            {suggestions.map((product) => (
              <li key={product.id}>
                <button
                  onClick={() => handleSearch(product)}
                  className="w-full text-left px-4 py-3 hover:bg-muted flex items-center gap-3 transition-colors"
                >
                  <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div>
                    <div className="text-foreground text-sm font-medium">{product.name}</div>
                    {product.description && (
                      <div className="text-muted-foreground text-xs line-clamp-1">{product.description}</div>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
          {suggestions.length > 0 && (
            <div className="px-4 py-2 border-t border-border">
              <button
                onClick={() => {
                  router.push(`/search/${encodeURIComponent(query.trim())}`);
                  setQuery('');
                  setIsOpen(false);
                }}
                className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium py-2"
              >
                View all results for "{query}"
              </button>
            </div>
          )}
        </div>
      )}

      {/* Show message when no results found */}
      {isClient && isOpen && query.trim() !== '' && suggestions.length === 0 && (
        <div className="absolute top-full mt-3 w-full bg-background border border-border rounded-lg shadow-lg z-10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 text-center">
            <div className="text-muted-foreground text-sm">
              No results found for "{query}"
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Try different keywords
            </div>
          </div>
        </div>
      )}
    </div>
  );
}