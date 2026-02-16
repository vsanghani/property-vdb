"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 px-4">
            <div className="glass-card p-10 rounded-2xl max-w-md w-full space-y-6">
                <div className="mx-auto p-4 bg-destructive/10 rounded-full w-fit">
                    <AlertTriangle className="h-10 w-10 text-destructive" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-outfit">Something went wrong</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        An unexpected error occurred. Please try again or return to the home page.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={reset} variant="default">
                        Try Again
                    </Button>
                    <Button onClick={() => window.location.href = "/"} variant="outline">
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
