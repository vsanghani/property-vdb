
import { HOBART_PROPERTIES, HOBART_SUBURBS } from "./data";

export interface Property {
  id: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  valuation: {
    current: number;
    range: {
      low: number;
      high: number;
    };
    lastUpdated: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    parking: number;
    landSize: number;
  };
  saleHistory: SaleRecord[];
  coordinates: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
}

export interface SaleRecord {
  date: string;
  price: number;
  type: string;
}

export interface SuburbStats {
  suburb: string;
  medianPrice: number;
  totalListings: number;
  priceRange: { low: number; high: number };
}

// ── Async versions (legacy, still used by server components) ────────

export async function searchProperties(query: string): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return searchPropertiesSync(query);
}

export async function getRecentDeals(): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getRecentDealsSync();
}

export async function getPropertyById(id: string): Promise<Property | null> {
  return getPropertyByIdSync(id);
}

// ── Sync versions (for client components — no delay) ────────────────

export function searchPropertiesSync(query: string): Property[] {
  if (!query.trim()) return HOBART_PROPERTIES;

  const q = query.toLowerCase().trim();

  return HOBART_PROPERTIES.filter((p) => {
    const street = p.address.street.toLowerCase();
    const suburb = p.address.suburb.toLowerCase();
    const postcode = p.address.postcode;
    return street.includes(q) || suburb.includes(q) || postcode.includes(q);
  });
}

export function getRecentDealsSync(): Property[] {
  const sorted = [...HOBART_PROPERTIES].sort((a, b) => {
    const dateA = new Date(a.saleHistory[0].date).getTime();
    const dateB = new Date(b.saleHistory[0].date).getTime();
    return dateB - dateA;
  });

  return sorted.slice(0, 8);
}

export function getPropertyByIdSync(id: string): Property | null {
  return HOBART_PROPERTIES.find((p) => p.id === id) ?? null;
}

export function getAllProperties(): Property[] {
  return HOBART_PROPERTIES;
}

// ── Stats & suggestions ─────────────────────────────────────────────

export function getSuburbStats(suburbQuery: string): SuburbStats | null {
  const q = suburbQuery.toLowerCase().trim();

  const matching = HOBART_PROPERTIES.filter(
    (p) => p.address.suburb.toLowerCase() === q
  );

  if (matching.length === 0) return null;

  const prices = matching.map((p) => p.valuation.current).sort((a, b) => a - b);
  const mid = Math.floor(prices.length / 2);
  const medianPrice =
    prices.length % 2 === 0
      ? Math.round((prices[mid - 1] + prices[mid]) / 2)
      : prices[mid];

  return {
    suburb: matching[0].address.suburb,
    medianPrice,
    totalListings: matching.length,
    priceRange: {
      low: prices[0],
      high: prices[prices.length - 1],
    },
  };
}

export function getSuburbSuggestions(query: string): string[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return HOBART_SUBURBS.filter((s) => s.toLowerCase().includes(q));
}

