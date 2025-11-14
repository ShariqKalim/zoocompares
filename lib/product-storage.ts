interface ComparisonProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  icon: string;
  createdAt: string;
  colorTheme?: string;
}

const STORAGE_KEY = 'comparizon_products';
const AUTH_KEY = 'comparizon_admin_auth';

// Simple encryption to obfuscate token (not cryptographically secure)
const encode = (str: string) => Buffer.from(str).toString('base64');
const decode = (str: string) => Buffer.from(str, 'base64').toString('utf-8');

// Get all products (default + custom)
export function getProducts(): ComparisonProduct[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  
  if (!stored) {
    return [];
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

// Add new product
export function addProduct(product: Omit<ComparisonProduct, 'id' | 'createdAt'>) {
  if (typeof window === 'undefined') return null;
  
  const products = getProducts();
  const newProduct: ComparisonProduct = {
    ...product,
    id: `product_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  
  products.push(newProduct);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  return newProduct;
}

// Delete product
export function deleteProduct(id: string) {
  if (typeof window === 'undefined') return;
  
  const products = getProducts().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

// Update product
export function updateProduct(id: string, updates: Partial<Omit<ComparisonProduct, 'id' | 'createdAt'>>) {
  if (typeof window === 'undefined') return undefined;
  
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return products[index];
  }
  return undefined;
}

// Get product by slug
export function getProductBySlug(slug: string): ComparisonProduct | undefined {
  return getProducts().find(p => p.slug === slug);
}

// Authentication
export function setAdminAuth(token: string) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(AUTH_KEY, encode(token));
}

export function getAdminAuth(): string | null {
  if (typeof window === 'undefined') return null;
  
  const token = localStorage.getItem(AUTH_KEY);
  return token ? decode(token) : null;
}

export function clearAdminAuth() {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(AUTH_KEY);
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  const token = getAdminAuth();
  return token === 'admin_authenticated_token_12345';
}
