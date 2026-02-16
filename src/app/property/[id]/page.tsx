import { getPropertyById } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Car, Maximize, ArrowLeft, Calendar, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapboxMap from "@/components/MapboxMap";

interface PropertyPageProps {
    params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
    const { id } = await params;
    const property = await getPropertyById(id);

    if (!property) {
        notFound();
    }

    const pricePercentage = Math.round(
        ((property.valuation.current - property.valuation.range.low) /
            (property.valuation.range.high - property.valuation.range.low)) * 100
    );

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Back navigation */}
            <Link
                href={`/search?q=${encodeURIComponent(property.address.suburb)}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to {property.address.suburb}
            </Link>

            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                    src={property.imageUrl}
                    alt={`Property at ${property.address.street}`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/40 text-sm font-medium">
                            <MapPin className="h-3.5 w-3.5" />
                            {property.address.suburb}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                            {property.saleHistory[0].type}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-outfit drop-shadow-lg">
                        {property.address.street}
                    </h1>
                    <p className="text-white/80 text-lg mt-1">
                        {property.address.suburb}, {property.address.state} {property.address.postcode}
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column — Details */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Price + Features */}
                    <div className="glass-card p-6 rounded-xl space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current Valuation</p>
                                <p className="text-4xl font-bold text-primary font-outfit">
                                    ${property.valuation.current.toLocaleString()}
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                {[
                                    { icon: Bed, label: `${property.features.bedrooms} Bed` },
                                    { icon: Bath, label: `${property.features.bathrooms} Bath` },
                                    { icon: Car, label: `${property.features.parking} Car` },
                                    { icon: Maximize, label: `${property.features.landSize}m²` },
                                ].map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex flex-col items-center gap-1 px-4 py-2 bg-muted/30 rounded-lg">
                                        <Icon className="h-5 w-5 text-muted-foreground" />
                                        <span className="text-xs font-medium">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Valuation Range Bar */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>${property.valuation.range.low.toLocaleString()}</span>
                                <span className="font-medium text-foreground">Valuation Range</span>
                                <span>${property.valuation.range.high.toLocaleString()}</span>
                            </div>
                            <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-700"
                                    style={{ width: `${pricePercentage}%` }}
                                />
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground shadow-lg transition-all duration-700"
                                    style={{ left: `calc(${pricePercentage}% - 8px)` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sale History Timeline */}
                    <div className="glass-card p-6 rounded-xl">
                        <h2 className="text-xl font-bold font-outfit flex items-center gap-2 mb-6">
                            <Calendar className="h-5 w-5 text-primary" />
                            Sale History
                        </h2>
                        <div className="space-y-0">
                            {property.saleHistory.map((sale, i) => (
                                <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                                    {/* Timeline line */}
                                    {i < property.saleHistory.length - 1 && (
                                        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
                                    )}
                                    {/* Dot */}
                                    <div className={`relative z-10 mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${i === 0 ? "border-primary bg-primary/20" : "border-muted-foreground/30 bg-muted/20"}`}>
                                        <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-muted-foreground/50"}`} />
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <div>
                                            <p className="font-semibold flex items-center gap-2">
                                                <DollarSign className="h-4 w-4 text-primary" />
                                                ${sale.price.toLocaleString()}
                                            </p>
                                            <p className="text-sm text-muted-foreground">{sale.type}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {new Date(sale.date).toLocaleDateString("en-AU", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column — Map + Actions */}
                <div className="space-y-6">
                    {/* Mini map */}
                    <div className="glass-card p-4 rounded-xl overflow-hidden">
                        <h3 className="text-sm font-semibold font-outfit mb-3 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Location
                        </h3>
                        <div className="h-[250px] rounded-xl overflow-hidden">
                            <MapboxMap properties={[property]} />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-card p-5 rounded-xl space-y-3">
                        <Link href={`/search?q=${encodeURIComponent(property.address.suburb)}`} className="block">
                            <Button className="w-full gap-2" variant="default">
                                View all {property.address.suburb} properties
                            </Button>
                        </Link>
                        <Link href="/map" className="block">
                            <Button className="w-full gap-2" variant="outline">
                                Open full map
                            </Button>
                        </Link>
                    </div>

                    {/* Metadata */}
                    <div className="glass-card p-5 rounded-xl text-sm text-muted-foreground space-y-2">
                        <div className="flex justify-between">
                            <span>Property ID</span>
                            <span className="font-mono text-foreground">{property.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Last Updated</span>
                            <span className="text-foreground">
                                {new Date(property.valuation.lastUpdated).toLocaleDateString("en-AU")}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Postcode</span>
                            <span className="text-foreground">{property.address.postcode}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
