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
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    // Look at the Navigation Timing entry
    const [navEntry] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    // If user came here via back/forward (i.e. client-side routing), skip splash
    if (navEntry?.type === "back_forward") {
      return;
    }

    // Otherwise (initial navigate OR reload), show it
    setShowSplash(true);
  }, [pathname]);

  if (showSplash) {
    return (
      <SplashScreen
        onSlideEnd={() => {
          setShowSplash(false);
        }}
      />
    );
  }

  return <>{children}</>;
}
