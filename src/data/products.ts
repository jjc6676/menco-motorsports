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
    slug: 'menco-logo-tee',
    name: 'Menco Logo Tee',
    price: 25.0,
    category: 'Merch',
    description:
      'Black tee with red Menco Motorsports crossed-pistons logo. Rep the brand.',
    details: [
      'Black cotton tee',
      'Red Menco Motorsports logo',
      'Available in S, M, L, XL, 2XL',
      'Pay on pickup at the shop',
    ],
    image: '/favicon.svg',
    inStock: true,
    featured: true,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: 'merch-003',
    slug: 'menco-snapback',
    name: 'Menco Snapback Hat',
    price: 30.0,
    category: 'Merch',
    description:
      'Black snapback hat with red Menco Motorsports logo. One size fits most.',
    details: [
      'Black snapback cap',
      'Red embroidered logo',
      'Adjustable snapback closure',
      'Pay on pickup at the shop',
    ],
    image: '/favicon.svg',
    inStock: true,
    featured: true,
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
