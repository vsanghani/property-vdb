import { SearchInput } from "@/components/search-input";
import { GlassCard } from "@/components/ui/glass-card";
import { TrendingUp, Map as MapIcon, ShieldCheck } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-12 text-center">
            <div className="space-y-6 max-w-4xl relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    Validating value in <br />
                    <span className="text-gradient">Hobart, Tasmania</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    Discover accurate property valuations, past sales history, and market insights powered by local data.
                </p>

                <div className="pt-8 w-full">
                    <SearchInput />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
                <FeatureCard
                    icon={<TrendingUp className="h-8 w-8 text-primary" />}
                    title="Market Trends"
                    description="Real-time analysis of property values across Hobart's suburbs."
                />
                <FeatureCard
                    icon={<MapIcon className="h-8 w-8 text-purple-500" />}
                    title="Interactive Map"
                    description="Visualise property prices and hotspots on our detailed heatmap."
                />
                <FeatureCard
                    icon={<ShieldCheck className="h-8 w-8 text-teal-500" />}
                    title="Trusted Data"
                    description="Sourced from reliable government databases and recent sales."
                />
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <GlassCard className="flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </GlassCard>
    );
}
