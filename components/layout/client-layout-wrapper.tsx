"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/ui/splash-screen";

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const inRoot = pathname === "/";

  // 1. ALWAYS call hooks at the top
  const [showSplash, setShowSplash] = useState(inRoot);

  useEffect(() => {
    // if we’re not on “/”, immediately hide
    if (!inRoot) {
      setShowSplash(false);
      return;
    }

    // only on “/” do we inspect the navigation type
    const [navEntry] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    if (navEntry?.type === "back_forward") {
      setShowSplash(false);
    }
    // else on full reload we leave showSplash true
  }, [inRoot]);

  // 2. now conditionally render the splash
  if (showSplash) {
    return (
      <SplashScreen
        onSlideEnd={() => {
          setShowSplash(false);
        }}
      />
    );
  }

  // 3. or your actual page
  return <>{children}</>;
}
