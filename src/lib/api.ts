
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

/**
 * Search properties by matching query against street, suburb, or postcode.
 * Case-insensitive partial match.
 */
export async function searchProperties(query: string): Promise<Property[]> {
  // Simulate a small network delay for realism
  await new Promise((resolve) => setTimeout(resolve, 200));

  if (!query.trim()) return HOBART_PROPERTIES;

  const q = query.toLowerCase().trim();

  return HOBART_PROPERTIES.filter((p) => {
    const street = p.address.street.toLowerCase();
    const suburb = p.address.suburb.toLowerCase();
    const postcode = p.address.postcode;
    return street.includes(q) || suburb.includes(q) || postcode.includes(q);
  });
}

/**
 * Return the 8 most recently sold properties (by last sale date).
 */
export async function getRecentDeals(): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const sorted = [...HOBART_PROPERTIES].sort((a, b) => {
    const dateA = new Date(a.saleHistory[0].date).getTime();
    const dateB = new Date(b.saleHistory[0].date).getTime();
    return dateB - dateA;
  });

  return sorted.slice(0, 8);
}

/**
 * Look up a single property by its ID.
 */
export async function getPropertyById(id: string): Promise<Property | null> {
  return HOBART_PROPERTIES.find((p) => p.id === id) ?? null;
}

/**
 * Compute suburb-level stats: median price, total listings, price range.
 * Returns null if no properties match the given suburb.
 */
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

/**
 * Get matching suburb names for autocomplete suggestions.
 */
export function getSuburbSuggestions(query: string): string[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return HOBART_SUBURBS.filter((s) => s.toLowerCase().includes(q));
}
