"use client";

import { motion } from "framer-motion";
import { ArrowUpDown, Bed } from "lucide-react";

export type SortOption = "price-asc" | "price-desc" | "newest" | "name";
export type BedroomFilter = 0 | 1 | 2 | 3 | 4 | 5;

interface SortFilterBarProps {
    sort: SortOption;
    onSortChange: (s: SortOption) => void;
    bedroomFilter: BedroomFilter;
    onBedroomChange: (b: BedroomFilter) => void;
    resultCount: number;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
    { value: "price-desc", label: "Price ↓" },
    { value: "price-asc", label: "Price ↑" },
    { value: "newest", label: "Newest" },
    { value: "name", label: "Name A-Z" },
];

const BEDROOM_OPTIONS: { value: BedroomFilter; label: string }[] = [
    { value: 0, label: "Any" },
    { value: 1, label: "1+" },
    { value: 2, label: "2+" },
    { value: 3, label: "3+" },
    { value: 4, label: "4+" },
    { value: 5, label: "5+" },
];

export function SortFilterBar({
    sort,
    onSortChange,
    bedroomFilter,
    onBedroomChange,
    resultCount,
}: SortFilterBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
            {/* Sort */}
            <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="flex gap-1">
                    {SORT_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => onSortChange(opt.value)}
                            className="relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                        >
                            {sort === opt.value && (
                                <motion.div
                                    layoutId="sort-pill"
                                    className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-lg"
                                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                                />
                            )}
                            <span className={`relative z-10 ${sort === opt.value ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                                {opt.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-border" />

            {/* Bedroom Filter */}
            <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="flex gap-1">
                    {BEDROOM_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => onBedroomChange(opt.value)}
                            className="relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                        >
                            {bedroomFilter === opt.value && (
                                <motion.div
                                    layoutId="bed-pill"
                                    className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-lg"
                                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                                />
                            )}
                            <span className={`relative z-10 ${bedroomFilter === opt.value ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                                {opt.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Result count */}
            <div className="sm:ml-auto text-xs text-muted-foreground">
                {resultCount} {resultCount === 1 ? "property" : "properties"}
            </div>
        </motion.div>
    );
}
