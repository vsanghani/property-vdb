export default function SearchLoading() {
    return (
        <div className="space-y-8">
            {/* Header skeleton */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-2">
                    <div className="h-8 w-56 bg-muted/30 rounded-lg animate-pulse" />
                    <div className="h-4 w-40 bg-muted/20 rounded-md animate-pulse" />
                </div>
                <div className="flex gap-4">
                    <div className="h-10 w-36 bg-muted/20 rounded-lg animate-pulse" />
                    <div className="h-10 w-64 bg-muted/20 rounded-full animate-pulse" />
                </div>
            </div>

            {/* Stats card skeleton */}
            <div className="glass-card p-6 rounded-xl">
                <div className="h-6 w-48 bg-muted/30 rounded-md animate-pulse mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-muted/20 rounded-lg animate-pulse" />
                            <div className="space-y-1.5">
                                <div className="h-3 w-20 bg-muted/20 rounded animate-pulse" />
                                <div className="h-6 w-28 bg-muted/30 rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Results grid skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="glass-card rounded-lg overflow-hidden">
                        <div className="h-48 bg-muted/20 animate-pulse" />
                        <div className="p-5 space-y-3">
                            <div className="h-5 w-3/4 bg-muted/30 rounded animate-pulse" />
                            <div className="h-4 w-1/2 bg-muted/20 rounded animate-pulse" />
                            <div className="grid grid-cols-4 gap-2 py-2">
                                {Array.from({ length: 4 }).map((_, j) => (
                                    <div key={j} className="h-10 bg-muted/15 rounded animate-pulse" />
                                ))}
                            </div>
                            <div className="flex justify-between pt-2">
                                <div className="h-3 w-24 bg-muted/15 rounded animate-pulse" />
                                <div className="h-3 w-20 bg-muted/20 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
