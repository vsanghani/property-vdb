"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import { searchPropertiesSync, getSuburbStats, type Property } from "@/lib/api";
import { PropertyCard } from "@/components/property-card";
import { SearchInput } from "@/components/search-input";
import { ExportButton } from "@/components/export-button";
import { SortFilterBar, type SortOption, type BedroomFilter } from "@/components/sort-filter-bar";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { AnimatedCounter } from "@/components/animated-counter";
import { sanitizeSearchQuery } from "@/lib/sanitize";
import { TrendingUp, Home, DollarSign, BarChart3 } from "lucide-react";

function SearchResults() {
    const searchParams = useSearchParams();
    const rawQuery = searchParams.get("q") ?? "";
    const query = sanitizeSearchQuery(rawQuery);

    const [sort, setSort] = useState<SortOption>("price-desc");
    const [bedroomFilter, setBedroomFilter] = useState<BedroomFilter>(0);

    const allResults = useMemo(() => searchPropertiesSync(query), [query]);
    const suburbStats = useMemo(() => (query ? getSuburbStats(query) : null), [query]);

    const filteredAndSorted = useMemo(() => {
        let results = [...allResults];

        // Bedroom filter
        if (bedroomFilter > 0) {
            results = results.filter((p) => p.features.bedrooms >= bedroomFilter);
        }

        // Sort
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
    }, [allResults, sort, bedroomFilter]);

    return (
        <div className="space-y-6">
            <AnimatedSection>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight font-outfit">Property Valuation</h1>
                        <p className="text-muted-foreground">
                            {filteredAndSorted.length} {filteredAndSorted.length === 1 ? "result" : "results"} found{query ? ` for "${query}"` : ""}
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-center">
                        <ExportButton data={filteredAndSorted} />
                        <SearchInput className="max-w-md" />
                    </div>
                </div>
            </AnimatedSection>

            {/* Suburb Stats Card */}
            {suburbStats && (
                <AnimatedSection delay={0.1}>
                    <div className="glass-card p-6 rounded-xl">
                        <h2 className="text-lg font-bold font-outfit flex items-center gap-2 mb-4">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            {suburbStats.suburb} Market Snapshot
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-primary/10 rounded-lg">
                                    <DollarSign className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Median Price</p>
                                    <p className="text-xl font-bold">
                                        <AnimatedCounter target={suburbStats.medianPrice} prefix="$" />
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-primary/10 rounded-lg">
                                    <Home className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Listings</p>
                                    <p className="text-xl font-bold">
                                        <AnimatedCounter target={suburbStats.totalListings} />
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-primary/10 rounded-lg">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Price Range</p>
                                    <p className="text-xl font-bold">
                                        ${(suburbStats.priceRange.low / 1000).toFixed(0)}k – ${(suburbStats.priceRange.high / 1000).toFixed(0)}k
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            )}

            {/* Sort + Filter Bar */}
            <SortFilterBar
                sort={sort}
                onSortChange={setSort}
                bedroomFilter={bedroomFilter}
                onBedroomChange={setBedroomFilter}
                resultCount={filteredAndSorted.length}
            />

            {filteredAndSorted.length === 0 ? (
                <AnimatedSection>
                    <div className="text-center py-20 bg-muted/20 rounded-xl">
                        <p className="text-xl text-muted-foreground">No properties found matching your criteria.</p>
                        <p className="text-sm text-muted-foreground mt-2">Try searching for a suburb like &quot;Sandy Bay&quot; or a postcode like &quot;7005&quot;</p>
                    </div>
                </AnimatedSection>
            ) : (
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={`${query}-${sort}-${bedroomFilter}`}>
                    {filteredAndSorted.map((property) => (
                        <StaggerItem key={property.id}>
                            <PropertyCard property={property} featured />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<SearchLoadingSkeleton />}>
            <SearchResults />
        </Suspense>
    );
}

function SearchLoadingSkeleton() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-2">
                    <div className="h-8 w-56 bg-muted/30 rounded-lg animate-pulse" />
                    <div className="h-4 w-40 bg-muted/20 rounded-md animate-pulse" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="glass-card rounded-lg overflow-hidden">
                        <div className="h-48 bg-muted/20 animate-pulse" />
                        <div className="p-5 space-y-3">
                            <div className="h-5 w-3/4 bg-muted/30 rounded animate-pulse" />
                            <div className="h-4 w-1/2 bg-muted/20 rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
