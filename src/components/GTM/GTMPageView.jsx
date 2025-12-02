"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GTMPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: pathname,
    });
  }, [pathname]);

  return null;
}
