
  import { Analytics } from "@vercel/analytics/next";
  import { Metadata, Viewport } from "next";
  import { Geist as FontSans } from "next/font/google";
  import { Toaster } from "@/components/ui/sonner";
  import TailwindIndicator from "@/components/ui/tailwind-indicator";
  import { AUTHOR, FAVICONS, HEAD, KEYWORDS, OPEN_GRAPH } from "@/config/seo";
  import { cn, getBaseUrl } from "@/lib/utils";
  import { HeadType } from "@/types";
  import "@/styles/tailwind.css";

  // ============================================================================
  // SEO CONFIGURATION VALIDATION
  // ============================================================================

  /**
   * Validates SEO configuration to ensure all required fields are present.
   * This helps catch missing or incomplete SEO setup early in development.
   */
  const validateSEOConfig = () => {
    if (!HEAD || HEAD.length === 0) {
      console.error("⚠️ HEAD configuration is missing or empty");
    }
    if (!KEYWORDS || KEYWORDS.length === 0) {
      console.warn("🔍 No keywords defined for SEO");
    }
    if (!AUTHOR || !AUTHOR.name) {
      console.error("❌ Author information is missing");
    }
    if (!FAVICONS || !FAVICONS.icon || FAVICONS.icon.length === 0) {
      console.warn("🖼️ No favicons configured");
    }
    if (!OPEN_GRAPH || !OPEN_GRAPH.image || !OPEN_GRAPH.twitterImage) {
      console.error("📱 OpenGraph configuration is incomplete");
    }
  };

  // Run validation
  validateSEOConfig();

  // ============================================================================
  // PAGE CONFIGURATION
  // ============================================================================

  const PAGE = "Home";
  const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

  // ============================================================================
  // FONT CONFIGURATION
  // ============================================================================

  const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
  });

  // ============================================================================
  // VIEWPORT CONFIGURATION
  // ============================================================================

  export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
  };

  // ============================================================================
  // METADATA CONFIGURATION
  // ============================================================================

  export const metadata: Metadata = {
    // Basic metadata
    title: page.title,
    generator: AUTHOR.name,
    applicationName: page.title,
    description: page.description,
    referrer: "origin-when-cross-origin",
    keywords: (KEYWORDS ?? []).join(", "),

    // Author information
    authors: [
      {
        name: AUTHOR.name,
        url: AUTHOR.twitterUrl,
      },
    ],
    creator: AUTHOR.name,
    publisher: AUTHOR.name,

    // URL configurations
    metadataBase: new URL(getBaseUrl()),
    alternates: {
      canonical: getBaseUrl(),
      types: {
        "application/rss+xml": `${getBaseUrl("/rss.xml")}`,
      },
      languages: {
        "en-US": getBaseUrl(),
        "x-default": getBaseUrl(),
      },
    },

    // Apple web app configuration
    appleWebApp: {
      title: page.title,
      statusBarStyle: "default",
      capable: true,
    },

    // Search engine configuration
    robots: {
      index: true,
      follow: true,
    },

    // Favicon configuration
    icons: FAVICONS,

    // OpenGraph metadata for social media sharing
    openGraph: {
      type: "website",
      locale: "en",
      url: getBaseUrl(),
      title: page.title,
      description: page.description,
      siteName: page.title,
      images: [
        {
          url: OPEN_GRAPH.image,
          width: 1200,
          height: 630,
          alt: page.title,
          type: "image/png",
        },
      ],
    },

    // Twitter card metadata
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      site: AUTHOR.twitterAddress,
      images: [
        {
          url: OPEN_GRAPH.twitterImage,
          width: 1200,
          height: 675,
          alt: page.title,
          type: "image/png",
        },
      ],
      creator: AUTHOR.twitterAddress,
    },
  };

  // ============================================================================
  // ROOT LAYOUT COMPONENT
  // ============================================================================

  interface RootLayoutProps {
    children: React.ReactNode;
  }

  export default function RootLayout({ children }: RootLayoutProps) {
    return (
      <html
        lang="en"
        className="h-full scroll-smooth"
        suppressHydrationWarning={true}
      >
        <body
          className={cn(
            "bg-white antialiased selection:bg-blue-500 selection:text-white",
            fontSans.variable,
          )}
          suppressHydrationWarning={true}
        >
          {/* Main content */}
          {children}

          {/* Analytics and utilities */}
          <Analytics />
          <TailwindIndicator />
          <Toaster />
        </body>
      </html>
    );
  }
