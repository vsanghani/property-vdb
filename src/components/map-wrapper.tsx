"use client";

import dynamic from "next/dynamic";
import { Property } from "@/lib/api";

const Map = dynamic(() => import("@/components/map"), {
    ssr: false,
    loading: () => (
        <div className="h-[calc(100vh-8rem)] w-full flex items-center justify-center bg-muted/20 rounded-2xl animate-pulse">
            <p className="text-muted-foreground">Loading Map...</p>
        </div>
    )
});

interface MapWrapperProps {
    properties: Property[];
}

export function MapWrapper({ properties }: MapWrapperProps) {
    return <Map properties={properties} />;
}
