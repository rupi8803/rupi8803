import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onLoad", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    return unsub;
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
}
