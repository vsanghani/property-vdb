import { getRecentDeals } from "@/lib/api";
import { MapWrapper } from "@/components/map-wrapper";

export default async function MapPage() {
    // Loading all recent deals to populate map
    const properties = await getRecentDeals();

    return (
        <div className="space-y-4 h-full">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Property Map</h1>
                    <p className="text-muted-foreground">Heatmap of property values in Hobart</p>
                </div>
            </div>
            <MapWrapper properties={properties} />
        </div>
    );
}
