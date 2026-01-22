export function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} ValuTAS. All rights reserved.</p>
                <p className="mt-1">
                    Data provided for generic/mock purposes only. Not financial advice.
                </p>
            </div>
        </footer>
    );
}
