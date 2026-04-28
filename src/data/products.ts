export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  details: string[];
  image: string;
  inStock: boolean;
  featured: boolean;
  sizes?: string[];
}

export const products: Product[] = [
  // ──── MERCH ────
  {
    id: 'merch-001',
    slug: 'menco-shirts-and-hats',
    name: 'Menco Shirts & Hats',
    price: 25.0,
    category: 'Merch',
    description:
      'Menco Motorsports branded tees, hoodies, and snapback hats. Black with red logo. Rep the brand.',
    details: [
      'Tees, hoodies, and snapback hats available',
      'Black with red Menco Motorsports logo',
      'Tees and hoodies available in S, M, L, XL, 2XL',
      'Pay on pickup at the shop',
    ],
    image: '/favicon.svg',
    inStock: true,
    featured: true,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  // ──── PARTS ────
  {
    id: 'parts-001',
    slug: 'menco-branded-oil-filter-cover',
    name: 'Branded Oil Filter Cover',
    price: 0,
    category: 'Parts',
    description:
      'Menco Motorsports branded oil filter cover. Custom machined, fits common diesel applications. Contact for pricing and fitment.',
    details: [
      'Custom machined oil filter cover',
      'Menco Motorsports branding',
      'Fits common diesel applications',
      'Contact shop for pricing and fitment details',
    ],
    image: '/favicon.svg',
    inStock: true,
    featured: true,
  },
  // ──── MISC ────
  {
    id: 'misc-001',
    slug: 'menco-misc',
    name: 'More Coming Soon',
    price: 0,
    category: 'Misc.',
    description:
      'More parts, gear, and accessories coming soon. Follow us on Facebook or contact the shop for the latest.',
    details: [
      'New products added regularly',
      'Follow us on Facebook for announcements',
      'Call the shop for special requests',
    ],
    image: '/favicon.svg',
    inStock: false,
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = [...new Set(products.map((p) => p.category))];
