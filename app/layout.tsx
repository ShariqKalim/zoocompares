import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'zoocompares - Smart Product Comparison & Reviews | Best Online Comparison Tool',
  description: 'Compare products side-by-side with zoocompares. Find the best deals, prices, features, and reviews for web hosting, VPN, trading accounts, and 50+ product categories. Make informed buying decisions instantly.',
  keywords: 'product comparison, price comparison, product reviews, best deals, online shopping, comparison tool, features comparison',
  authors: [{ name: 'zoocompares Team' }],
  creator: 'zoocompares',
  publisher: 'zoocompares',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zoocompares.com',
    title: 'zoocompares - Smart Product Comparison Platform',
    description: 'Find the best products with intelligent side-by-side comparisons. Compare 1000+ products across 50+ categories.',
    siteName: 'zoocompares',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zoocompares - Smart Product Comparison',
    description: 'Compare products and find the perfect match for your needs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            'name': 'zoocompares',
            'description': 'Smart product comparison platform for finding the best deals and reviews',
            'url': 'https://zoocompares.com',
            'applicationCategory': 'Shopping',
            'offers': {
              '@type': 'AggregateOffer',
              'priceCurrency': 'USD',
              'price': '0',
              'url': 'https://zoocompares.com',
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.8',
              'ratingCount': '100000',
            },
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'zoocompares',
            'url': 'https://zoocompares.com',
            'logo': 'https://zoocompares.com/logo.png',
            'sameAs': [
              'https://www.facebook.com/zoocompares',
              'https://twitter.com/zoocompares',
              'https://linkedin.com/company/zoocompares',
            ],
          })
        }} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
