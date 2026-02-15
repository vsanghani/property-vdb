import { Property } from "./api";

/**
 * Curated dataset of ~50 realistic Hobart properties.
 * Coordinates, postcodes, and price ranges are suburb-accurate.
 */
export const HOBART_PROPERTIES: Property[] = [
  // ── BATTERY POINT (7004) ─────────────────────────────────────────
  {
    id: "bp-001",
    address: { street: "12 Napoleon St", suburb: "Battery Point", state: "TAS", postcode: "7004" },
    valuation: { current: 1450000, range: { low: 1300000, high: 1600000 }, lastUpdated: "2025-12-10" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 620 },
    saleHistory: [
      { date: "2025-12-10", price: 1450000, type: "Sold" },
      { date: "2019-03-15", price: 980000, type: "Sold" },
    ],
    coordinates: { lat: -42.8900, lng: 147.3350 },
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "bp-002",
    address: { street: "5 De Witt St", suburb: "Battery Point", state: "TAS", postcode: "7004" },
    valuation: { current: 1780000, range: { low: 1600000, high: 1950000 }, lastUpdated: "2025-11-22" },
    features: { bedrooms: 5, bathrooms: 3, parking: 2, landSize: 800 },
    saleHistory: [
      { date: "2025-11-22", price: 1780000, type: "Sold" },
      { date: "2020-07-01", price: 1200000, type: "Sold" },
    ],
    coordinates: { lat: -42.8912, lng: 147.3320 },
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "bp-003",
    address: { street: "28 Hampden Rd", suburb: "Battery Point", state: "TAS", postcode: "7004" },
    valuation: { current: 1250000, range: { low: 1100000, high: 1400000 }, lastUpdated: "2025-10-05" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 450 },
    saleHistory: [
      { date: "2025-10-05", price: 1250000, type: "Sold" },
    ],
    coordinates: { lat: -42.8895, lng: 147.3310 },
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "bp-004",
    address: { street: "3 Kelly St", suburb: "Battery Point", state: "TAS", postcode: "7004" },
    valuation: { current: 920000, range: { low: 850000, high: 1050000 }, lastUpdated: "2025-09-18" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 320 },
    saleHistory: [
      { date: "2025-09-18", price: 920000, type: "Sold" },
      { date: "2017-11-20", price: 620000, type: "Sold" },
    ],
    coordinates: { lat: -42.8908, lng: 147.3340 },
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "bp-005",
    address: { street: "17 Cromwell St", suburb: "Battery Point", state: "TAS", postcode: "7004" },
    valuation: { current: 1650000, range: { low: 1500000, high: 1800000 }, lastUpdated: "2026-01-15" },
    features: { bedrooms: 4, bathrooms: 3, parking: 2, landSize: 710 },
    saleHistory: [
      { date: "2026-01-15", price: 1650000, type: "Sold" },
    ],
    coordinates: { lat: -42.8918, lng: 147.3325 },
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "bp-006",
    address: { street: "9 McGregor St", suburb: "Battery Point", state: "TAS", postcode: "7004" },
    valuation: { current: 1100000, range: { low: 1000000, high: 1250000 }, lastUpdated: "2025-08-30" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 480 },
    saleHistory: [
      { date: "2025-08-30", price: 1100000, type: "Sold" },
    ],
    coordinates: { lat: -42.8905, lng: 147.3360 },
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60",
  },

  // ── SANDY BAY (7005) ─────────────────────────────────────────────
  {
    id: "sb-001",
    address: { street: "45 Sandy Bay Rd", suburb: "Sandy Bay", state: "TAS", postcode: "7005" },
    valuation: { current: 1350000, range: { low: 1200000, high: 1500000 }, lastUpdated: "2025-12-01" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 680 },
    saleHistory: [
      { date: "2025-12-01", price: 1350000, type: "Sold" },
      { date: "2018-06-10", price: 870000, type: "Sold" },
    ],
    coordinates: { lat: -42.8960, lng: 147.3280 },
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sb-002",
    address: { street: "88 Churchill Ave", suburb: "Sandy Bay", state: "TAS", postcode: "7005" },
    valuation: { current: 980000, range: { low: 890000, high: 1100000 }, lastUpdated: "2025-11-15" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 550 },
    saleHistory: [
      { date: "2025-11-15", price: 980000, type: "Sold" },
    ],
    coordinates: { lat: -42.8985, lng: 147.3240 },
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sb-003",
    address: { street: "12 Waimea Ave", suburb: "Sandy Bay", state: "TAS", postcode: "7005" },
    valuation: { current: 1520000, range: { low: 1400000, high: 1650000 }, lastUpdated: "2026-01-20" },
    features: { bedrooms: 5, bathrooms: 3, parking: 2, landSize: 820 },
    saleHistory: [
      { date: "2026-01-20", price: 1520000, type: "Sold" },
      { date: "2021-04-05", price: 1100000, type: "Sold" },
    ],
    coordinates: { lat: -42.8970, lng: 147.3220 },
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sb-004",
    address: { street: "31 King St", suburb: "Sandy Bay", state: "TAS", postcode: "7005" },
    valuation: { current: 760000, range: { low: 680000, high: 850000 }, lastUpdated: "2025-07-22" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 400 },
    saleHistory: [
      { date: "2025-07-22", price: 760000, type: "Sold" },
    ],
    coordinates: { lat: -42.8950, lng: 147.3260 },
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sb-005",
    address: { street: "7 Regent St", suburb: "Sandy Bay", state: "TAS", postcode: "7005" },
    valuation: { current: 1180000, range: { low: 1050000, high: 1300000 }, lastUpdated: "2025-10-30" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 650 },
    saleHistory: [
      { date: "2025-10-30", price: 1180000, type: "Sold" },
    ],
    coordinates: { lat: -42.8975, lng: 147.3200 },
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sb-006",
    address: { street: "22 Marieville Esp", suburb: "Sandy Bay", state: "TAS", postcode: "7005" },
    valuation: { current: 2100000, range: { low: 1900000, high: 2300000 }, lastUpdated: "2026-02-01" },
    features: { bedrooms: 5, bathrooms: 4, parking: 3, landSize: 950 },
    saleHistory: [
      { date: "2026-02-01", price: 2100000, type: "Sold" },
      { date: "2022-05-12", price: 1650000, type: "Sold" },
    ],
    coordinates: { lat: -42.8935, lng: 147.3310 },
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
  },

  // ── HOBART CBD (7000) ─────────────────────────────────────────────
  {
    id: "hb-001",
    address: { street: "120 Liverpool St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 720000, range: { low: 650000, high: 800000 }, lastUpdated: "2025-11-28" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 0 },
    saleHistory: [
      { date: "2025-11-28", price: 720000, type: "Sold" },
    ],
    coordinates: { lat: -42.8794, lng: 147.3294 },
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "hb-002",
    address: { street: "55 Davey St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 850000, range: { low: 780000, high: 920000 }, lastUpdated: "2025-12-18" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 0 },
    saleHistory: [
      { date: "2025-12-18", price: 850000, type: "Sold" },
      { date: "2020-01-15", price: 590000, type: "Sold" },
    ],
    coordinates: { lat: -42.8830, lng: 147.3285 },
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "hb-003",
    address: { street: "33 Macquarie St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 680000, range: { low: 620000, high: 750000 }, lastUpdated: "2025-09-05" },
    features: { bedrooms: 2, bathrooms: 1, parking: 0, landSize: 0 },
    saleHistory: [
      { date: "2025-09-05", price: 680000, type: "Sold" },
    ],
    coordinates: { lat: -42.8810, lng: 147.3310 },
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "hb-004",
    address: { street: "78 Elizabeth St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 590000, range: { low: 530000, high: 650000 }, lastUpdated: "2025-08-12" },
    features: { bedrooms: 1, bathrooms: 1, parking: 0, landSize: 0 },
    saleHistory: [
      { date: "2025-08-12", price: 590000, type: "Sold" },
    ],
    coordinates: { lat: -42.8805, lng: 147.3265 },
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "hb-005",
    address: { street: "14 Campbell St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 925000, range: { low: 850000, high: 1000000 }, lastUpdated: "2026-01-08" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 180 },
    saleHistory: [
      { date: "2026-01-08", price: 925000, type: "Sold" },
      { date: "2019-09-22", price: 650000, type: "Sold" },
    ],
    coordinates: { lat: -42.8790, lng: 147.3275 },
    imageUrl: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "hb-006",
    address: { street: "42 Collins St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 780000, range: { low: 700000, high: 860000 }, lastUpdated: "2025-10-15" },
    features: { bedrooms: 2, bathrooms: 2, parking: 1, landSize: 0 },
    saleHistory: [
      { date: "2025-10-15", price: 780000, type: "Sold" },
    ],
    coordinates: { lat: -42.8818, lng: 147.3300 },
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "hb-007",
    address: { street: "6 Argyle St", suburb: "Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 650000, range: { low: 580000, high: 720000 }, lastUpdated: "2025-07-30" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 0 },
    saleHistory: [
      { date: "2025-07-30", price: 650000, type: "Sold" },
    ],
    coordinates: { lat: -42.8800, lng: 147.3250 },
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=60",
  },

  // ── NORTH HOBART (7000) ───────────────────────────────────────────
  {
    id: "nh-001",
    address: { street: "156 Elizabeth St", suburb: "North Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 750000, range: { low: 680000, high: 830000 }, lastUpdated: "2025-12-05" },
    features: { bedrooms: 3, bathrooms: 1, parking: 1, landSize: 450 },
    saleHistory: [
      { date: "2025-12-05", price: 750000, type: "Sold" },
      { date: "2018-02-28", price: 510000, type: "Sold" },
    ],
    coordinates: { lat: -42.8720, lng: 147.3190 },
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "nh-002",
    address: { street: "22 Federal St", suburb: "North Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 870000, range: { low: 790000, high: 950000 }, lastUpdated: "2026-01-12" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 580 },
    saleHistory: [
      { date: "2026-01-12", price: 870000, type: "Sold" },
    ],
    coordinates: { lat: -42.8710, lng: 147.3175 },
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "nh-003",
    address: { street: "9 Burnett St", suburb: "North Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 620000, range: { low: 560000, high: 690000 }, lastUpdated: "2025-08-20" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 380 },
    saleHistory: [
      { date: "2025-08-20", price: 620000, type: "Sold" },
    ],
    coordinates: { lat: -42.8735, lng: 147.3210 },
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "nh-004",
    address: { street: "41 Tasma St", suburb: "North Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 810000, range: { low: 740000, high: 880000 }, lastUpdated: "2025-11-02" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 520 },
    saleHistory: [
      { date: "2025-11-02", price: 810000, type: "Sold" },
      { date: "2020-06-18", price: 580000, type: "Sold" },
    ],
    coordinates: { lat: -42.8725, lng: 147.3200 },
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "nh-005",
    address: { street: "63 Letitia St", suburb: "North Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 690000, range: { low: 620000, high: 760000 }, lastUpdated: "2025-09-25" },
    features: { bedrooms: 3, bathrooms: 1, parking: 1, landSize: 440 },
    saleHistory: [
      { date: "2025-09-25", price: 690000, type: "Sold" },
    ],
    coordinates: { lat: -42.8715, lng: 147.3165 },
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "nh-006",
    address: { street: "18 Elphinstone Rd", suburb: "North Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 940000, range: { low: 860000, high: 1020000 }, lastUpdated: "2026-02-05" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 650 },
    saleHistory: [
      { date: "2026-02-05", price: 940000, type: "Sold" },
    ],
    coordinates: { lat: -42.8700, lng: 147.3185 },
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60",
  },

  // ── SOUTH HOBART (7004) ──────────────────────────────────────────
  {
    id: "sh-001",
    address: { street: "35 Cascade Rd", suburb: "South Hobart", state: "TAS", postcode: "7004" },
    valuation: { current: 820000, range: { low: 750000, high: 900000 }, lastUpdated: "2025-11-10" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 550 },
    saleHistory: [
      { date: "2025-11-10", price: 820000, type: "Sold" },
      { date: "2017-05-20", price: 520000, type: "Sold" },
    ],
    coordinates: { lat: -42.8920, lng: 147.3110 },
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sh-002",
    address: { street: "8 Anglesea St", suburb: "South Hobart", state: "TAS", postcode: "7004" },
    valuation: { current: 680000, range: { low: 610000, high: 750000 }, lastUpdated: "2025-10-20" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 420 },
    saleHistory: [
      { date: "2025-10-20", price: 680000, type: "Sold" },
    ],
    coordinates: { lat: -42.8935, lng: 147.3130 },
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sh-003",
    address: { street: "52 Macfarlane St", suburb: "South Hobart", state: "TAS", postcode: "7004" },
    valuation: { current: 950000, range: { low: 870000, high: 1050000 }, lastUpdated: "2026-01-28" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 700 },
    saleHistory: [
      { date: "2026-01-28", price: 950000, type: "Sold" },
    ],
    coordinates: { lat: -42.8945, lng: 147.3100 },
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sh-004",
    address: { street: "19 Wentworth St", suburb: "South Hobart", state: "TAS", postcode: "7004" },
    valuation: { current: 740000, range: { low: 670000, high: 820000 }, lastUpdated: "2025-09-12" },
    features: { bedrooms: 3, bathrooms: 1, parking: 1, landSize: 480 },
    saleHistory: [
      { date: "2025-09-12", price: 740000, type: "Sold" },
    ],
    coordinates: { lat: -42.8928, lng: 147.3145 },
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "sh-005",
    address: { street: "4 Degraves St", suburb: "South Hobart", state: "TAS", postcode: "7004" },
    valuation: { current: 1050000, range: { low: 960000, high: 1150000 }, lastUpdated: "2025-12-22" },
    features: { bedrooms: 4, bathrooms: 3, parking: 2, landSize: 780 },
    saleHistory: [
      { date: "2025-12-22", price: 1050000, type: "Sold" },
      { date: "2021-08-10", price: 780000, type: "Sold" },
    ],
    coordinates: { lat: -42.8940, lng: 147.3120 },
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60",
  },

  // ── WEST HOBART (7000) ───────────────────────────────────────────
  {
    id: "wh-001",
    address: { street: "27 Lansdowne Cres", suburb: "West Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 780000, range: { low: 710000, high: 860000 }, lastUpdated: "2025-11-30" },
    features: { bedrooms: 3, bathrooms: 2, parking: 1, landSize: 500 },
    saleHistory: [
      { date: "2025-11-30", price: 780000, type: "Sold" },
      { date: "2019-01-10", price: 530000, type: "Sold" },
    ],
    coordinates: { lat: -42.8760, lng: 147.3100 },
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "wh-002",
    address: { street: "14 Patrick St", suburb: "West Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 650000, range: { low: 590000, high: 720000 }, lastUpdated: "2025-08-05" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 350 },
    saleHistory: [
      { date: "2025-08-05", price: 650000, type: "Sold" },
    ],
    coordinates: { lat: -42.8770, lng: 147.3080 },
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "wh-003",
    address: { street: "38 Hill St", suburb: "West Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 890000, range: { low: 810000, high: 970000 }, lastUpdated: "2026-01-05" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 600 },
    saleHistory: [
      { date: "2026-01-05", price: 890000, type: "Sold" },
    ],
    coordinates: { lat: -42.8750, lng: 147.3120 },
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "wh-004",
    address: { street: "5 Goulburn St", suburb: "West Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 720000, range: { low: 650000, high: 790000 }, lastUpdated: "2025-10-08" },
    features: { bedrooms: 3, bathrooms: 1, parking: 1, landSize: 430 },
    saleHistory: [
      { date: "2025-10-08", price: 720000, type: "Sold" },
    ],
    coordinates: { lat: -42.8755, lng: 147.3090 },
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "wh-005",
    address: { street: "60 Warwick St", suburb: "West Hobart", state: "TAS", postcode: "7000" },
    valuation: { current: 830000, range: { low: 760000, high: 910000 }, lastUpdated: "2025-12-15" },
    features: { bedrooms: 3, bathrooms: 2, parking: 2, landSize: 580 },
    saleHistory: [
      { date: "2025-12-15", price: 830000, type: "Sold" },
      { date: "2020-03-22", price: 590000, type: "Sold" },
    ],
    coordinates: { lat: -42.8745, lng: 147.3070 },
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
  },

  // ── MOONAH (7009) ────────────────────────────────────────────────
  {
    id: "mn-001",
    address: { street: "15 Albert Rd", suburb: "Moonah", state: "TAS", postcode: "7009" },
    valuation: { current: 480000, range: { low: 430000, high: 530000 }, lastUpdated: "2025-12-08" },
    features: { bedrooms: 3, bathrooms: 1, parking: 1, landSize: 550 },
    saleHistory: [
      { date: "2025-12-08", price: 480000, type: "Sold" },
      { date: "2018-10-15", price: 320000, type: "Sold" },
    ],
    coordinates: { lat: -42.8480, lng: 147.3050 },
    imageUrl: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "mn-002",
    address: { street: "42 Main Rd", suburb: "Moonah", state: "TAS", postcode: "7009" },
    valuation: { current: 520000, range: { low: 470000, high: 580000 }, lastUpdated: "2025-11-18" },
    features: { bedrooms: 3, bathrooms: 2, parking: 2, landSize: 600 },
    saleHistory: [
      { date: "2025-11-18", price: 520000, type: "Sold" },
    ],
    coordinates: { lat: -42.8490, lng: 147.3070 },
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "mn-003",
    address: { street: "8 Springfield Ave", suburb: "Moonah", state: "TAS", postcode: "7009" },
    valuation: { current: 410000, range: { low: 370000, high: 460000 }, lastUpdated: "2025-09-30" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 450 },
    saleHistory: [
      { date: "2025-09-30", price: 410000, type: "Sold" },
    ],
    coordinates: { lat: -42.8470, lng: 147.3035 },
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "mn-004",
    address: { street: "29 Hopkins St", suburb: "Moonah", state: "TAS", postcode: "7009" },
    valuation: { current: 560000, range: { low: 510000, high: 620000 }, lastUpdated: "2026-01-25" },
    features: { bedrooms: 4, bathrooms: 2, parking: 1, landSize: 680 },
    saleHistory: [
      { date: "2026-01-25", price: 560000, type: "Sold" },
      { date: "2021-02-14", price: 400000, type: "Sold" },
    ],
    coordinates: { lat: -42.8500, lng: 147.3060 },
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "mn-005",
    address: { street: "55 Derwent Park Rd", suburb: "Moonah", state: "TAS", postcode: "7009" },
    valuation: { current: 445000, range: { low: 400000, high: 500000 }, lastUpdated: "2025-10-28" },
    features: { bedrooms: 3, bathrooms: 1, parking: 2, landSize: 520 },
    saleHistory: [
      { date: "2025-10-28", price: 445000, type: "Sold" },
    ],
    coordinates: { lat: -42.8510, lng: 147.3040 },
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=60",
  },

  // ── GLENORCHY (7010) ─────────────────────────────────────────────
  {
    id: "gl-001",
    address: { street: "18 Terry St", suburb: "Glenorchy", state: "TAS", postcode: "7010" },
    valuation: { current: 420000, range: { low: 380000, high: 470000 }, lastUpdated: "2025-12-12" },
    features: { bedrooms: 3, bathrooms: 1, parking: 2, landSize: 600 },
    saleHistory: [
      { date: "2025-12-12", price: 420000, type: "Sold" },
      { date: "2017-08-05", price: 275000, type: "Sold" },
    ],
    coordinates: { lat: -42.8310, lng: 147.2930 },
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "gl-002",
    address: { street: "65 Main Rd", suburb: "Glenorchy", state: "TAS", postcode: "7010" },
    valuation: { current: 380000, range: { low: 340000, high: 420000 }, lastUpdated: "2025-10-02" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 480 },
    saleHistory: [
      { date: "2025-10-02", price: 380000, type: "Sold" },
    ],
    coordinates: { lat: -42.8320, lng: 147.2950 },
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "gl-003",
    address: { street: "7 Tolosa St", suburb: "Glenorchy", state: "TAS", postcode: "7010" },
    valuation: { current: 510000, range: { low: 460000, high: 560000 }, lastUpdated: "2026-02-08" },
    features: { bedrooms: 4, bathrooms: 2, parking: 2, landSize: 720 },
    saleHistory: [
      { date: "2026-02-08", price: 510000, type: "Sold" },
    ],
    coordinates: { lat: -42.8295, lng: 147.2920 },
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "gl-004",
    address: { street: "33 Chapel St", suburb: "Glenorchy", state: "TAS", postcode: "7010" },
    valuation: { current: 450000, range: { low: 400000, high: 500000 }, lastUpdated: "2025-11-08" },
    features: { bedrooms: 3, bathrooms: 1, parking: 1, landSize: 550 },
    saleHistory: [
      { date: "2025-11-08", price: 450000, type: "Sold" },
      { date: "2019-04-30", price: 310000, type: "Sold" },
    ],
    coordinates: { lat: -42.8330, lng: 147.2940 },
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "gl-005",
    address: { street: "11 Barry St", suburb: "Glenorchy", state: "TAS", postcode: "7010" },
    valuation: { current: 365000, range: { low: 320000, high: 410000 }, lastUpdated: "2025-08-18" },
    features: { bedrooms: 2, bathrooms: 1, parking: 1, landSize: 420 },
    saleHistory: [
      { date: "2025-08-18", price: 365000, type: "Sold" },
    ],
    coordinates: { lat: -42.8340, lng: 147.2960 },
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "gl-006",
    address: { street: "48 Peltro St", suburb: "Glenorchy", state: "TAS", postcode: "7010" },
    valuation: { current: 490000, range: { low: 440000, high: 540000 }, lastUpdated: "2026-01-18" },
    features: { bedrooms: 3, bathrooms: 2, parking: 2, landSize: 650 },
    saleHistory: [
      { date: "2026-01-18", price: 490000, type: "Sold" },
    ],
    coordinates: { lat: -42.8305, lng: 147.2910 },
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=60",
  },
];

/**
 * All suburb names in the dataset — used for autocomplete.
 */
export const HOBART_SUBURBS = [
  "Battery Point",
  "Sandy Bay",
  "Hobart",
  "North Hobart",
  "South Hobart",
  "West Hobart",
  "Moonah",
  "Glenorchy",
] as const;

export type HobartSuburb = (typeof HOBART_SUBURBS)[number];
