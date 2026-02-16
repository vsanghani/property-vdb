import { searchProperties, getSuburbStats } from "@/lib/api";
import { PropertyCard } from "@/components/property-card";
import { SearchInput } from "@/components/search-input";
import { ExportButton } from "@/components/export-button";
import { sanitizeSearchQuery } from "@/lib/sanitize";
import { TrendingUp, Home, DollarSign, BarChart3 } from "lucide-react";

interface SearchPageProps {
    searchParams: Promise<{
        q?: string;
    }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q: rawQuery = "" } = await searchParams;
    const query = sanitizeSearchQuery(rawQuery);
    const results = await searchProperties(query);
    const suburbStats = query ? getSuburbStats(query) : null;

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight font-outfit">Property Valuation</h1>
                    <p className="text-muted-foreground">
                        {results.length} {results.length === 1 ? "result" : "results"} found{query ? ` for "${query}"` : ""}
                    </p>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-center">
                    <ExportButton data={results} />
                    <SearchInput className="max-w-md" />
                </div>
            </div>

            {/* Suburb Stats Card */}
            {suburbStats && (
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
                                <p className="text-xl font-bold">${suburbStats.medianPrice.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-primary/10 rounded-lg">
                                <Home className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Listings</p>
                                <p className="text-xl font-bold">{suburbStats.totalListings}</p>
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
            )}

            {results.length === 0 ? (
                <div className="text-center py-20 bg-muted/20 rounded-xl">
                    <p className="text-xl text-muted-foreground">No properties found matching your criteria.</p>
                    <p className="text-sm text-muted-foreground mt-2">Try searching for a suburb like &quot;Sandy Bay&quot; or a postcode like &quot;7005&quot;</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((property) => (
                        <PropertyCard key={property.id} property={property} featured />
                    ))}
                </div>
            )}
        </div>
    );
}
