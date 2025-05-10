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
  // start “showing” the splash by default
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (pathname !== "/") return;

    // detect “back/forward” navigations
    const [navEntry] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    if (navEntry?.type === "back_forward") {
      // skip splash on client back/forward
      setShowSplash(false);
    } else {
      // on initial load or full reload, keep splash (already true)
    }
  }, [pathname]);

  if (showSplash) {
    return (
      <SplashScreen
        onSlideEnd={() => {
          // once animation ends, reveal the page
          setShowSplash(false);
        }}
      />
    );
  }

  return <>{children}</>;
}
