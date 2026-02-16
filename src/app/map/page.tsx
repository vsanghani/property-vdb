"use client";

import { useMemo, useState } from "react";
import { getAllProperties, type Property } from "@/lib/api";
import { HOBART_SUBURBS } from "@/lib/data";
import MapboxMap from "@/components/MapboxMap";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapPage() {
    const allProperties = useMemo(() => getAllProperties(), []);
    const [selectedSuburb, setSelectedSuburb] = useState<string>("All");

    const filtered = useMemo(() => {
        if (selectedSuburb === "All") return allProperties;
        return allProperties.filter((p) => p.address.suburb === selectedSuburb);
    }, [allProperties, selectedSuburb]);

    return (
        <div className="space-y-4 h-[calc(100vh-140px)]">
            <AnimatedSection>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight font-outfit">Property Map</h1>
                        <p className="text-muted-foreground">
                            {filtered.length} {filtered.length === 1 ? "property" : "properties"} in {selectedSuburb === "All" ? "all suburbs" : selectedSuburb}
                        </p>
                    </div>

                    {/* Suburb filter */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                        <div className="flex gap-1 flex-wrap">
                            {["All", ...HOBART_SUBURBS].map((suburb) => (
                                <button
                                    key={suburb}
                                    onClick={() => setSelectedSuburb(suburb)}
                                    className="relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                                >
                                    {selectedSuburb === suburb && (
                                        <motion.div
                                            layoutId="map-suburb-pill"
                                            className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-lg"
                                            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${selectedSuburb === suburb ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                                        {suburb}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="h-full"
            >
                <MapboxMap properties={filtered} />
            </motion.div>
        </div>
    );
}
