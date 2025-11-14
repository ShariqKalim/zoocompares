'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  setAdminAuth,
  getAdminAuth,
  clearAdminAuth,
  isAdminAuthenticated,
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from '@/lib/product-storage';
import { ICON_TYPES } from '@/lib/icon-library';

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2-2V6a2 2 0 002-2h11a2 2 0 002 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    slug: '',
    icon: 'Globe',
    colorTheme: 'blue',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const colorThemes = [
    { value: 'blue', label: 'Blue', bg: 'bg-blue-50 dark:bg-blue-950', text: 'text-blue-600 dark:text-blue-400' },
    { value: 'green', label: 'Green', bg: 'bg-green-50 dark:bg-green-950', text: 'text-green-600 dark:text-green-400' },
    { value: 'purple', label: 'Purple', bg: 'bg-purple-50 dark:bg-purple-950', text: 'text-purple-600 dark:text-purple-400' },
    { value: 'orange', label: 'Orange', bg: 'bg-orange-50 dark:bg-orange-950', text: 'text-orange-600 dark:text-orange-400' },
    { value: 'pink', label: 'Pink', bg: 'bg-pink-50 dark:bg-pink-950', text: 'text-pink-600 dark:text-pink-400' },
    { value: 'indigo', label: 'Indigo', bg: 'bg-indigo-50 dark:bg-indigo-950', text: 'text-indigo-600 dark:text-indigo-400' },
    { value: 'red', label: 'Red', bg: 'bg-red-50 dark:bg-red-950', text: 'text-red-600 dark:text-red-400' },
    { value: 'yellow', label: 'Yellow', bg: 'bg-yellow-50 dark:bg-yellow-950', text: 'text-yellow-600 dark:text-yellow-400' },
    { value: 'teal', label: 'Teal', bg: 'bg-teal-50 dark:bg-teal-950', text: 'text-teal-600 dark:text-teal-400' },
    { value: 'cyan', label: 'Cyan', bg: 'bg-cyan-50 dark:bg-cyan-950', text: 'text-cyan-600 dark:text-cyan-400' },
  ];

  useEffect(() => {
    const authenticated = isAdminAuthenticated();
    setIsLoggedIn(authenticated);
    if (authenticated) {
      setProducts(getProducts());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'admin' && password === 'admin123') {
      setAdminAuth('admin_authenticated_token_12345');
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
      setProducts(getProducts());
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    clearAdminAuth();
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      slug: '',
      icon: 'Globe',
      colorTheme: 'blue',
    });
    setEditingId(null);
  };

  const handleEditProduct = (product: any) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      description: product.description,
      slug: product.slug,
      icon: product.icon,
      colorTheme: product.colorTheme || 'blue',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.description || !formData.slug) {
        throw new Error('Please fill in all required fields');
      }

      if (editingId) {
        const existingProduct = products.find(p => p.id === editingId);
        if (existingProduct && existingProduct.slug !== formData.slug) {
          if (products.some(p => p.slug === formData.slug && p.id !== editingId)) {
            throw new Error('A product with this slug already exists');
          }
        }

        if (!/^[a-z0-9-]+$/.test(formData.slug)) {
          throw new Error('Slug can only contain lowercase letters, numbers, and hyphens');
        }

        updateProduct(editingId, {
          name: formData.name,
          description: formData.description,
          slug: formData.slug,
          icon: formData.icon,
          colorTheme: formData.colorTheme,
        });

        alert(`Product "${formData.name}" updated successfully!`);
      } else {
        if (products.some(p => p.slug === formData.slug)) {
          throw new Error('A product with this slug already exists');
        }

        if (!/^[a-z0-9-]+$/.test(formData.slug)) {
          throw new Error('Slug can only contain lowercase letters, numbers, and hyphens');
        }

        addProduct({
          name: formData.name,
          description: formData.description,
          slug: formData.slug,
          icon: formData.icon,
          colorTheme: formData.colorTheme,
        });

        alert(`Product "${formData.name}" added successfully!`);
      }

      setProducts(getProducts());
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save product');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setProducts(getProducts());
    setShowDeleteConfirm(null);
    alert('Product deleted successfully!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
              <p className="text-muted-foreground">Sign in to manage comparison products</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center mb-4">Demo credentials:</p>
              <p className="text-xs text-muted-foreground text-center">Username: <strong>admin</strong></p>
              <p className="text-xs text-muted-foreground text-center">Password: <strong>admin123</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeftIcon />
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Product Management</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-destructive border border-destructive rounded-lg hover:bg-destructive/10 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto">
              <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <PlusIcon />
                {editingId ? 'Edit Product' : 'Add Product'}
              </h2>

              <form onSubmit={handleSaveProduct} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Category Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Web Hosting"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description..."
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    placeholder="e.g., web-hosting"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">/{formData.slug}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Icon Type ({ICON_TYPES.length}+ available)
                  </label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {ICON_TYPES.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Color Theme
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {colorThemes.map((theme) => (
                      <button
                        key={theme.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, colorTheme: theme.value })}
                        className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                          formData.colorTheme === theme.value
                            ? `border-primary ring-2 ring-primary ring-offset-2`
                            : 'border-border hover:border-primary/50'
                        }`}
                        title={theme.label}
                      >
                        <div className={`w-full h-8 rounded-md ${theme.bg}`}></div>
                        <p className="text-xs font-medium text-foreground mt-1 text-center">{theme.label}</p>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Selected: <span className="font-semibold capitalize">{formData.colorTheme}</span></p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Saving...' : editingId ? 'Update' : 'Add'}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex-1 bg-muted text-foreground py-2 rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Products List Section */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-bold text-foreground mb-6">
                Products ({products.length})
              </h2>

              <div className="space-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 border border-border rounded-lg bg-background hover:bg-muted transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-12 h-12 rounded object-cover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`M12 4v16m8-8H4`}></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {product.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          /{product.slug}
                        </p>
                      </div>
                      <div className="flex-shrink-0 flex gap-2">
                        <Link
                          href={`/${product.slug}`}
                          className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          title="View page"
                        >
                          <EyeIcon />
                        </Link>
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          title="Edit product"
                        >
                          <EditIcon />
                        </button>
                        <div className="relative">
                          {showDeleteConfirm === product.id ? (
                            <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg p-3 whitespace-nowrap z-10">
                              <p className="text-sm text-foreground font-medium mb-2">Delete this product?</p>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="px-2 py-1 bg-destructive text-destructive-foreground rounded text-xs font-medium hover:bg-destructive/90"
                                >
                                  Delete
                                </button>
                                <button
                                  onClick={() => setShowDeleteConfirm(null)}
                                  className="px-2 py-1 bg-muted text-foreground rounded text-xs font-medium hover:bg-muted/80"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => setShowDeleteConfirm(product.id)}
                              className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                              title="Delete product"
                            >
                              <TrashIcon />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
