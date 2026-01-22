import { Property } from "@/lib/api";
import { GlassCard } from "./ui/glass-card";
import { Bed, Bath, Car, Maximize } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
    property: Property;
    featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
    return (
        <GlassCard className="overflow-hidden p-0 h-full flex flex-col group hover:border-primary/50 transition-colors duration-300">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={property.imageUrl}
                    alt={`Property at ${property.address.street}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                    {property.saleHistory[0].type}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1 gap-4">
                <div>
                    <h3 className="text-lg font-semibold line-clamp-1">
                        {property.address.street}, {property.address.suburb}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        {property.address.postcode} {property.address.state}
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.features.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.features.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Car className="h-4 w-4" />
                        <span>{property.features.parking}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        <span>{property.features.landSize}m²</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs text-muted-foreground">Est. Value</p>
                            <p className="text-xl font-bold text-primary">
                                ${property.valuation.current.toLocaleString()}
                            </p>
                        </div>
                        {featured && (
                            <div className="text-right">
                                <p className="text-xs text-muted-foreground">Last Sold</p>
                                <p className="font-medium">${property.saleHistory[0].price.toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </GlassCard>
    );
}
