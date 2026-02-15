"use client";

import { useEffect, useState, useMemo } from "react";
import Map, { Marker, Popup, NavigationControl, FullscreenControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Property } from "@/lib/api";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface MapboxMapProps {
    properties: Property[];
}

/**
 * Compute bounds [minLng, minLat, maxLng, maxLat] for a set of properties.
 * Returns a viewport that fits all markers with comfortable padding.
 */
function computeViewport(properties: Property[]) {
    if (properties.length === 0) {
        return { latitude: -42.8821, longitude: 147.3272, zoom: 13, pitch: 45 };
    }

    const lats = properties.map((p) => p.coordinates.lat);
    const lngs = properties.map((p) => p.coordinates.lng);

    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;

    // Approximate zoom from the lat/lng spread
    const latSpread = maxLat - minLat;
    const lngSpread = maxLng - minLng;
    const spread = Math.max(latSpread, lngSpread);

    let zoom = 13;
    if (spread > 0.08) zoom = 11;
    else if (spread > 0.04) zoom = 12;
    else if (spread > 0.02) zoom = 13;
    else if (spread > 0.005) zoom = 14;
    else zoom = 15;

    return { latitude: centerLat, longitude: centerLng, zoom, pitch: 45 };
}

export default function MapboxMap({ properties }: MapboxMapProps) {
    const [mounted, setMounted] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    const viewport = useMemo(() => computeViewport(properties), [properties]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <Map
                initialViewState={viewport}
                style={{ width: "100%", height: "100%" }}
                mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            >
                <NavigationControl position="top-right" />
                <FullscreenControl position="top-right" />

                {properties.map((property) => (
                    <Marker
                        key={property.id}
                        longitude={property.coordinates.lng}
                        latitude={property.coordinates.lat}
                        anchor="bottom"
                        onClick={(e) => {
                            e.originalEvent.stopPropagation();
                            setSelectedProperty(property);
                        }}
                    >
                        <div className="cursor-pointer group relative">
                            <div className="absolute -inset-2 bg-primary/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            <MapPin className="h-8 w-8 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.8)] transform transition-transform hover:scale-110" />
                        </div>
                    </Marker>
                ))}

                {selectedProperty && (
                    <Popup
                        longitude={selectedProperty.coordinates.lng}
                        latitude={selectedProperty.coordinates.lat}
                        anchor="top"
                        onClose={() => setSelectedProperty(null)}
                        closeButton={false}
                        className="glass-popup"
                        offset={20}
                    >
                        <div className="glass-panel p-4 rounded-xl min-w-[240px] text-left">
                            <h3 className="font-bold text-lg text-foreground mb-1">{selectedProperty.address.street}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                {selectedProperty.address.suburb}, {selectedProperty.address.state} {selectedProperty.address.postcode}
                            </p>

                            <div className="flex items-center justify-between mb-3">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Current Value</span>
                                    <span className="font-bold text-primary text-lg">
                                        ${selectedProperty.valuation.current.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <Link
                                href={`/search?q=${encodeURIComponent(selectedProperty.address.suburb)}`}
                                className="block w-full text-center py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-colors border border-primary/20"
                            >
                                View {selectedProperty.address.suburb} Properties
                            </Link>
                        </div>
                    </Popup>
                )}
            </Map>

            {/* Overlay gradient for seamless blending */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
}
