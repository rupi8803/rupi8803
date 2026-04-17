import { useEffect, useState } from "react";

/**
 * TopProgressBar — slim 2px amber progress bar at the very top of the viewport.
 * On mount: animates from 0% → 80% over ~400ms (simulates loading).
 * On unmount: the bar is already removed, so no tear-down needed.
 * Usage: render as the Suspense fallback in App.tsx.
 */
export function TopProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Start the bar quickly
    const startTimer = requestAnimationFrame(() => {
      setWidth(15);
    });

    // Ease up to ~80% while the lazy chunk loads
    const growTimer = setTimeout(() => setWidth(80), 80);

    // Slow crawl toward 92% — never reaching 100% until unmount
    const crawlTimer = setTimeout(() => setWidth(92), 1200);

    return () => {
      cancelAnimationFrame(startTimer);
      clearTimeout(growTimer);
      clearTimeout(crawlTimer);
    };
  }, []);

  return (
    <div
      aria-label="Page loading"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${width}%`,
        background: "oklch(0.68 0.18 60)",
        zIndex: 9999,
        transition:
          width === 15
            ? "width 80ms linear"
            : width === 80
              ? "width 320ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "width 800ms cubic-bezier(0.1, 0, 0.2, 1)",
        boxShadow: "0 0 8px oklch(0.68 0.18 60 / 0.6)",
        borderRadius: "0 2px 2px 0",
      }}
    />
  );
}
