"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { getSuburbSuggestions } from "@/lib/api";

export function SearchInput({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close suggestions on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setActiveIndex(-1);
    if (value.trim().length >= 2) {
      const matches = getSuburbSuggestions(value);
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      setShowSuggestions(false);
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleSelectSuggestion = (suburb: string) => {
    setQuery(suburb);
    setShowSuggestions(false);
    router.push(`/search?q=${encodeURIComponent(suburb)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={wrapperRef} className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by suburb, street, or postcode..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0) setShowSuggestions(true);
            }}
            className="w-full h-14 pl-12 pr-32 rounded-full glass-input text-lg placeholder:text-muted-foreground/70"
          />
          <Button
            type="submit"
            size="lg"
            className="absolute right-1 top-1 bottom-1 rounded-full px-8"
          >
            Search
          </Button>
        </div>
      </form>

      {/* Autocomplete dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10">
          {suggestions.map((suburb, i) => (
            <button
              key={suburb}
              onClick={() => handleSelectSuggestion(suburb)}
              className={cn(
                "w-full text-left px-5 py-3 text-sm font-medium transition-colors flex items-center gap-3",
                i === activeIndex
                  ? "bg-primary/15 text-primary"
                  : "text-foreground hover:bg-muted/50"
              )}
            >
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <span>{suburb}</span>
              <span className="ml-auto text-xs text-muted-foreground">Suburb</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
