"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/ui/splash-screen";

const HOME_IMAGE_SRCS = [
  "/images/appointment_system.png",
  "/images/aniquinch_ecommerce.png",
  "/images/banking_system.png",
  "/images/huefit_web.png",
  "/images/peer_to_peer_delivery_system.png",
  "/images/zentry_hris.png",
];

// Simple image preloader utility
function preloadImages(srcs: string[]): Promise<void[]> {
  if (typeof window === "undefined") return Promise.resolve([]); // SSR safe
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't block on fail
          img.src = src;
        }),
    ),
  );
}

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const inRoot = pathname === "/";

  const [showSplash, setShowSplash] = useState(inRoot);
  const [assetsReady, setAssetsReady] = useState(!inRoot);

  useEffect(() => {
    if (!inRoot) {
      setShowSplash(false);
      setAssetsReady(true);
      return;
    }

    let isMounted = true;
    async function loadAssets() {
      // Wait a tick for hydration
      await new Promise((r) => setTimeout(r, 80));
      await preloadImages(HOME_IMAGE_SRCS);
      if (isMounted) setAssetsReady(true);
    }
    loadAssets();
    return () => {
      isMounted = false;
    };
  }, [inRoot]);

  // Show splash if we're on root ("/") and not done prepping assets yet
  if (showSplash || !assetsReady) {
    return <SplashScreen onSlideEnd={() => setShowSplash(false)} />;
  }

  // Main app/page children
  return <>{children}</>;
}
