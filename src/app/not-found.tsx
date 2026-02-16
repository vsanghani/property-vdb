import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 px-4">
            <div className="glass-card p-10 rounded-2xl max-w-md w-full space-y-6">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit">
                    <SearchX className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-5xl font-bold font-outfit text-primary">404</h2>
                    <p className="text-xl font-semibold font-outfit">Page not found</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>
                <Link href="/">
                    <Button className="gap-2">
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
