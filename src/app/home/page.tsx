"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
    const [showComponent, setShowComponent] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowComponent(false), 4000); // Hide after 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative h-screen">
            {/* Hide main content while HeroSection is visible */}
            {!showComponent && <div className="pt-[50px]">Home page</div>}

            <AnimatePresence>
                {showComponent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
                    >
                        <HeroSection />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
