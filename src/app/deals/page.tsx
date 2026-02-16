"use client";

import { useMemo, useState } from "react";
import { getRecentDealsSync, type Property } from "@/lib/api";
import { PropertyCard } from "@/components/property-card";
import { SortFilterBar, type SortOption, type BedroomFilter } from "@/components/sort-filter-bar";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";

export default function DealsPage() {
    const deals = useMemo(() => getRecentDealsSync(), []);
    const [sort, setSort] = useState<SortOption>("newest");
    const [bedroomFilter, setBedroomFilter] = useState<BedroomFilter>(0);

    const filteredAndSorted = useMemo(() => {
        let results = [...deals];

        if (bedroomFilter > 0) {
            results = results.filter((p) => p.features.bedrooms >= bedroomFilter);
        }

        switch (sort) {
            case "price-asc":
                results.sort((a, b) => a.valuation.current - b.valuation.current);
                break;
            case "price-desc":
                results.sort((a, b) => b.valuation.current - a.valuation.current);
                break;
            case "newest":
                results.sort((a, b) => {
                    const da = new Date(a.saleHistory[0].date).getTime();
                    const db = new Date(b.saleHistory[0].date).getTime();
                    return db - da;
                });
                break;
            case "name":
                results.sort((a, b) => a.address.street.localeCompare(b.address.street));
                break;
        }

        return results;
    }, [deals, sort, bedroomFilter]);

    return (
        <div className="space-y-6">
            <AnimatedSection>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight font-outfit">Recent Property Deals</h1>
                    <p className="text-muted-foreground">
                        Latest property transactions and listings in Hobart.
                    </p>
                </div>
            </AnimatedSection>

            <SortFilterBar
                sort={sort}
                onSortChange={setSort}
                bedroomFilter={bedroomFilter}
                onBedroomChange={setBedroomFilter}
                resultCount={filteredAndSorted.length}
            />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={`${sort}-${bedroomFilter}`}>
                {filteredAndSorted.map((property) => (
                    <StaggerItem key={property.id}>
                        <PropertyCard property={property} featured />
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
