
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

const SUBURBS = ["Hobart", "Sandy Bay", "Battery Point", "North Hobart", "South Hobart", "West Hobart", "Moonah", "Glenorchy"];
const STREETS = ["Liverpool St", "Davey St", "Macquarie St", "Sandy Bay Rd", "Elizabeth St", "Argyle St", "Campbell St", "Collins St"];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function searchProperties(query: string): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const results: Property[] = Array.from({ length: 5 }).map((_, i) => ({
    id: `prop-${i}-${Date.now()}`,
    address: {
      street: `${getRandomInt(1, 200)} ${getRandomElement(STREETS)}`,
      suburb: query.length > 3 ? query : getRandomElement(SUBURBS),
      state: "TAS",
      postcode: "7000",
    },
    valuation: {
      current: getRandomInt(500000, 2500000),
      range: {
        low: 500000,
        high: 2500000
      },
      lastUpdated: new Date().toISOString()
    },
    features: {
      bedrooms: getRandomInt(2, 5),
      bathrooms: getRandomInt(1, 3),
      parking: getRandomInt(0, 2),
      landSize: getRandomInt(300, 1200)
    },
    saleHistory: [
      {
        date: "2020-05-15",
        price: getRandomInt(400000, 1500000),
        type: "Sold"
      }
    ],
    coordinates: {
      lat: -42.8821 + (Math.random() - 0.5) * 0.05,
      lng: 147.3272 + (Math.random() - 0.5) * 0.05
    },
    imageUrl: `https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60`
  }));

  return results;
}

export async function getRecentDeals(): Promise<Property[]> {
  return searchProperties("Hobart");
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const props = await searchProperties("Hobart");
  return props[0];
}
