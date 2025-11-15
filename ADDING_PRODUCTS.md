# How to Add More Comparison Products

All products are now hardcoded in the application. To add more products to zoocompares, follow these simple steps:

## Location
Open the file: `lib/product-storage.ts`

## Steps to Add a New Product

1. Find the `DEFAULT_PRODUCTS` array (around line 5-40)
2. Copy one of the existing product objects
3. Add your new product object to the array
4. Update the following fields:

### Required Fields

\`\`\`typescript
{
  id: 'default_your_product',        // Must be unique, use format: default_product_name
  name: 'Your Product Name',          // Display name (e.g., "Credit Cards")
  description: 'Short description',   // Brief description shown on card
  imageUrl: '/your-image.jpg',        // Image path (place in /public folder)
  slug: 'your-product',               // URL slug (e.g., "credit-cards")
  icon: 'IconName',                   // Icon from lucide-react library
  colorTheme: 'blue',                 // Color theme (see options below)
  createdAt: '2024-01-01T00:00:00.000Z',
}
\`\`\`

### Available Color Themes
- `blue` - Blue theme
- `green` - Green theme
- `purple` - Purple theme
- `orange` - Orange theme
- `pink` - Pink theme
- `indigo` - Indigo theme
- `red` - Red theme
- `yellow` - Yellow theme
- `teal` - Teal theme
- `cyan` - Cyan theme

### Available Icons
Check `lib/icon-library.ts` for the complete list of 80+ available icons including:
- Business: Briefcase, Building, TrendingUp, DollarSign, CreditCard
- Technology: Smartphone, Laptop, Monitor, Cpu, Database
- Communication: Mail, MessageSquare, Phone, Video, Wifi
- And many more...

## Example: Adding a Credit Card Comparison

\`\`\`typescript
{
  id: 'default_credit_cards',
  name: 'Credit Cards',
  description: 'Compare the best credit cards with rewards and cashback',
  imageUrl: '/credit-cards.jpg',
  slug: 'credit-cards',
  icon: 'CreditCard',
  colorTheme: 'orange',
  createdAt: '2024-01-01T00:00:00.000Z',
},
\`\`\`

## After Adding a Product

1. Save the file
2. The new product will automatically appear on the homepage
3. A new page will be created at `/your-product-slug`
4. No restart needed - changes take effect immediately in development

## Current Default Products

1. Web Hosting (blue theme, Globe icon)
2. VPN (green theme, Shield icon)
3. Demat Accounts (purple theme, TrendingUp icon)

---

**Note**: All products are visible to everyone immediately after deployment. No database or admin panel needed.
