"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    formatter?: (n: number) => string;
}

export function AnimatedCounter({
    target,
    duration = 1.2,
    prefix = "",
    suffix = "",
    className,
    formatter,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const startTime = performance.now();
        const startValue = 0;

        function tick(now: number) {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startValue + (target - startValue) * eased);
            setValue(current);

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    }, [isInView, target, duration]);

    const display = formatter ? formatter(value) : value.toLocaleString();

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
        >
            {prefix}{display}{suffix}
        </motion.span>
    );
}
