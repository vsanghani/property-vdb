"use client";

import { Property } from "@/lib/api";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface ExportButtonProps {
    data: Property[];
    filename?: string;
}

export function ExportButton({ data, filename = "property-analysis.txt" }: ExportButtonProps) {
    const handleExport = () => {
        if (!data.length) return;

        let content = "VALUTAS PROPERTY ANALYSIS REPORT\n";
        content += "================================\n";
        content += `Date: ${new Date().toLocaleString()}\n\n`;

        data.forEach((prop, index) => {
            content += `PROPERTY #${index + 1}\n`;
            content += `Address: ${prop.address.street}, ${prop.address.suburb}, ${prop.address.state} ${prop.address.postcode}\n`;
            content += `Current Valuation: $${prop.valuation.current.toLocaleString()}\n`;
            content += `Valuation Range: $${prop.valuation.range.low.toLocaleString()} - $${prop.valuation.range.high.toLocaleString()}\n`;
            content += `Features: ${prop.features.bedrooms} Bed, ${prop.features.bathrooms} Bath, ${prop.features.parking} Car, ${prop.features.landSize}m²\n`;
            content += `Last Sold: ${prop.saleHistory[0].date} for $${prop.saleHistory[0].price.toLocaleString()} (${prop.saleHistory[0].type})\n`;
            content += "--------------------------------\n\n";
        });

        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <Button onClick={handleExport} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Analysis
        </Button>
    );
}
