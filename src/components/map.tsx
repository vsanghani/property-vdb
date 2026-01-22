"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Property } from "@/lib/api";
import { Icon } from "leaflet";
import Link from "next/link";
import { useEffect, useState } from "react";

// Fix for default marker icon in Leaflet with Next.js
const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface MapProps {
    properties: Property[];
}

export default function Map({ properties }: MapProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="h-[calc(100vh-8rem)] w-full rounded-2xl overflow-hidden border border-border shadow-xl">
            <MapContainer
                center={[-42.8821, 147.3272]}
                zoom={13}
                scrollWheelZoom={true}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {properties.map((property) => (
                    <Marker
                        key={property.id}
                        position={[property.coordinates.lat, property.coordinates.lng]}
                        icon={customIcon}
                    >
                        <Popup className="glass-popup">
                            <div className="min-w-[200px]">
                                <h3 className="font-bold text-sm">{property.address.street}</h3>
                                <p className="text-xs text-muted-foreground">{property.address.suburb}</p>
                                <div className="mt-2 font-bold text-primary">
                                    ${property.valuation.current.toLocaleString()}
                                </div>
                                <Link href={`/search?q=${encodeURIComponent(property.address.street)}`} className="text-xs text-blue-500 hover:underline mt-1 block">
                                    View Details
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
