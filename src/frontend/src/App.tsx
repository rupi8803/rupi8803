import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

// Pages
const HomePage = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.AboutPage })),
);
const ServicesPage = lazy(() =>
  import("./pages/Services").then((m) => ({ default: m.ServicesPage })),
);
const WebDesignPage = lazy(() =>
  import("./pages/services/WebDesign").then((m) => ({
    default: m.WebDesignPage,
  })),
);
const WebMaintenancePage = lazy(() =>
  import("./pages/services/WebMaintenance").then((m) => ({
    default: m.WebMaintenancePage,
  })),
);
const ITSupportPage = lazy(() =>
  import("./pages/services/ITSupport").then((m) => ({
    default: m.ITSupportPage,
  })),
);
const ManagedITPage = lazy(() =>
  import("./pages/services/ManagedIT").then((m) => ({
    default: m.ManagedITPage,
  })),
);
const POSSolutionsPage = lazy(() =>
  import("./pages/services/POSSolutions").then((m) => ({
    default: m.POSSolutionsPage,
  })),
);
const BackupRecoveryPage = lazy(() =>
  import("./pages/services/BackupRecovery").then((m) => ({
    default: m.BackupRecoveryPage,
  })),
);
const BusinessITPage = lazy(() =>
  import("./pages/BusinessIT").then((m) => ({ default: m.BusinessITPage })),
);
const PricingPage = lazy(() =>
  import("./pages/Pricing").then((m) => ({ default: m.PricingPage })),
);
const IndustriesPage = lazy(() =>
  import("./pages/Industries").then((m) => ({ default: m.IndustriesPage })),
);
const TradiesPage = lazy(() =>
  import("./pages/industries/Tradies").then((m) => ({
    default: m.TradiesPage,
  })),
);
const RetailPage = lazy(() =>
  import("./pages/industries/Retail").then((m) => ({ default: m.RetailPage })),
);
const MedicalPage = lazy(() =>
  import("./pages/industries/Medical").then((m) => ({
    default: m.MedicalPage,
  })),
);
const HospitalityPage = lazy(() =>
  import("./pages/industries/Hospitality").then((m) => ({
    default: m.HospitalityPage,
  })),
);
const PortfolioPage = lazy(() =>
  import("./pages/Portfolio").then((m) => ({ default: m.PortfolioPage })),
);
const BlogPage = lazy(() =>
  import("./pages/Blog").then((m) => ({ default: m.BlogPage })),
);
const ContactPage = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.ContactPage })),
);
const FAQPage = lazy(() =>
  import("./pages/FAQ").then((m) => ({ default: m.FAQPage })),
);
const FreeITAuditPage = lazy(() =>
  import("./pages/FreeITAudit").then((m) => ({ default: m.FreeITAuditPage })),
);

function PageLoader() {
  return (
    <div className="container py-20 space-y-4">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-5 w-1/2" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const webDesignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/web-design",
  component: WebDesignPage,
});
const webMaintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/website-maintenance",
  component: WebMaintenancePage,
});
const itSupportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/it-support",
  component: ITSupportPage,
});
const managedITRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/managed-it",
  component: ManagedITPage,
});
const posSolutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/pos-solutions",
  component: POSSolutionsPage,
});
const backupRecoveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/backup-recovery",
  component: BackupRecoveryPage,
});
const businessITRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/business-it-solutions",
  component: BusinessITPage,
});
const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});
const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: IndustriesPage,
});
const tradiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/tradies",
  component: TradiesPage,
});
const retailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/retail",
  component: RetailPage,
});
const medicalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/medical",
  component: MedicalPage,
});
const hospitalityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/hospitality",
  component: HospitalityPage,
});
const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQPage,
});
const freeITAuditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/free-it-audit",
  component: FreeITAuditPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  webDesignRoute,
  webMaintenanceRoute,
  itSupportRoute,
  managedITRoute,
  posSolutionsRoute,
  backupRecoveryRoute,
  businessITRoute,
  pricingRoute,
  industriesRoute,
  tradiesRoute,
  retailRoute,
  medicalRoute,
  hospitalityRoute,
  portfolioRoute,
  blogRoute,
  contactRoute,
  faqRoute,
  freeITAuditRoute,
]);

const router = createRouter({ routeTree, defaultPreload: "intent" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
