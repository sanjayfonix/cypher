"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
    useEffect(() => {
        // Handle hash navigation on page load
        const hash = window.location.hash.substring(1);
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 80;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        }
    }, []);

    return null;
}
