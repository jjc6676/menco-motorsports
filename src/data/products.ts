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
}

export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'banks-power-pack-6-7-powerstroke',
    name: 'Banks Power Pack — 6.7L Powerstroke',
    price: 1249.0,
    category: 'Performance Upgrades',
    description:
      'Complete Banks Power Pack system for 2011–2022 Ford 6.7L Powerstroke. Includes iDash DataMonster gauge, Ram-Air intake, and Monster exhaust. Gains up to 97 HP and 205 lb-ft torque.',
    details: [
      'Up to 97 HP and 205 lb-ft torque gain',
      'Includes Banks iDash DataMonster',
      'Ram-Air cold air intake system',
      'Monster 4" stainless exhaust',
      'Fits 2011–2022 Ford F-250/F-350 6.7L',
      'Compliant with 50-state emissions laws',
    ],
    image: 'https://placehold.co/800x600/111111/cc0000?text=Banks+Power+Pack',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-002',
    slug: 'aem-dryflow-air-filter-lb7-duramax',
    name: 'AEM DryFlow Air Filter — LB7 Duramax',
    price: 89.99,
    category: 'Filters',
    description:
      'AEM DryFlow high-performance air filter for 2001–2004 GM 6.6L LB7 Duramax. Oil-free design, washable and reusable. Improves airflow and protects your turbo.',
    details: [
      'Fits 2001–2004 GM 6.6L LB7 Duramax',
      'Oil-free DryFlow filter media',
      'Washable and reusable — no oiling kits',
      'Up to 15% more airflow than stock',
      'Direct OEM replacement fit',
      '100,000-mile limited warranty',
    ],
    image: 'https://placehold.co/800x600/111111/cc0000?text=AEM+DryFlow+Filter',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-003',
    slug: 'edge-insight-cts3-monitor',
    name: 'Edge Insight CTS3 Monitor',
    price: 379.0,
    category: 'Gauges & Monitors',
    description:
      'Edge CTS3 digital gauge monitor. 5-inch touchscreen, real-time diagnostics, DTC code reading/clearing. Compatible with all 1996+ OBD-II diesel trucks.',
    details: [
      '5-inch high-resolution touchscreen',
      'Reads and clears OBD-II/DTC codes',
      'Monitors 50+ parameters simultaneously',
      'Compatible with all 1996+ OBD-II trucks',
      'Includes EAS Universal Sensor Input',
      'Lifetime free firmware updates',
    ],
    image: 'https://placehold.co/800x600/111111/cc0000?text=Edge+CTS3+Monitor',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-004',
    slug: 'industrial-injection-reman-injector-6-7-cummins',
    name: 'Industrial Injection Reman Injector — 6.7 Cummins',
    price: 329.0,
    category: 'Fuel System',
    description:
      'Remanufactured Cummins 6.7L injector from Industrial Injection. Each unit is flow-tested, calibrated, and backed by a 12-month unlimited-mileage warranty.',
    details: [
      'Fits 2007.5–2018 Dodge 6.7L Cummins',
      'Flow-tested and calibrated to factory spec',
      'New solenoid, nozzle, and all internal seals',
      '12-month / unlimited-mileage warranty',
      'Sold individually — price per injector',
      'Core return required (credit applied)',
    ],
    image: 'https://placehold.co/800x600/111111/cc0000?text=Reman+Injector',
    inStock: true,
    featured: false,
  },
  {
    id: 'prod-005',
    slug: 'fass-titanium-series-fuel-lift-pump',
    name: 'FASS Titanium Series Fuel Lift Pump',
    price: 799.0,
    category: 'Fuel System',
    description:
      'FASS Titanium Series lift pump and filtration system. Provides clean, consistent fuel supply to your CP3 or CP4. Extends injector and pump life dramatically.',
    details: [
      'Flows 165 GPH at 15 PSI',
      'Two-stage fuel filtration (water separator + 3-micron)',
      'Replaces stock lift pump or mounts externally',
      'Compatible with Cummins, Duramax, Powerstroke',
      'Stainless steel housing',
      '3-year / 300,000-mile warranty',
    ],
    image: 'https://placehold.co/800x600/111111/cc0000?text=FASS+Lift+Pump',
    inStock: false,
    featured: false,
  },
  {
    id: 'prod-006',
    slug: 'sinister-diesel-egr-delete-kit-6-4-powerstroke',
    name: 'Sinister Diesel EGR Delete Kit — 6.4 Powerstroke',
    price: 219.0,
    category: 'Performance Upgrades',
    description:
      'Sinister Diesel EGR delete kit for 2008–2010 Ford 6.4L Powerstroke. Includes intake and oil cooler delete plates, coolant reroute kit, and all hardware.',
    details: [
      'Fits 2008–2010 Ford 6.4L Powerstroke',
      'Billet aluminum delete plates',
      'Coolant reroute kit included',
      'Reduces coolant temps and oil contamination',
      'All hardware and instructions included',
      'Off-road / competition use only',
    ],
    image: 'https://placehold.co/800x600/111111/cc0000?text=EGR+Delete+Kit',
    inStock: true,
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
