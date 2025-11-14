'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getProductBySlug } from '@/lib/product-storage';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProduct = getProductBySlug(slug);
    setProduct(foundProduct || null);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {product.description}
            </p>
          </div>

          {/* Placeholder Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  This is the page for: {product.name}
                </h2>
                <p className="text-muted-foreground text-lg">
                  Add your HTML/CSS/JS here to customize this comparison page.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6 space-y-2">
                <p className="text-sm font-mono text-muted-foreground">
                  <strong>Product Slug:</strong> {product.slug}
                </p>
                <p className="text-sm font-mono text-muted-foreground">
                  <strong>Product Name:</strong> {product.name}
                </p>
                <p className="text-sm font-mono text-muted-foreground">
                  <strong>Product ID:</strong> {product.id}
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  💡 <strong>Tip:</strong> You can customize this page with your own comparison table, product cards, filters, and more using Tailwind CSS, Bootstrap, or ShadCN components.
                </p>
              </div>

              <Link
                href="/admin"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Go to Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
