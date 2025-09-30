
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollUI from "../components/ScrollUI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global fonts
const headingFont = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  // Use metadataBase for absolute URLs in canonicals and OG
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com"),
  applicationName: "SMOvers Logistics Services",
  title: {
    default: "SMOvers Logistics Services",
    template: "%s | SMOvers Logistics",
  },
  description:
    "SMOvers provides domestic freight forwarding across the Philippines: FCL, LCL, flat rack, and breakbulk, with reliable routes and nationwide coverage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SMOvers Logistics",
    title: "SMOvers Logistics Services",
    description:
      "Domestic freight forwarding: FCL, LCL, flat rack, breakbulk. Nationwide routes in the Philippines.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "SMOvers Logistics freight forwarding across the Philippines",
      },
    ],
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMOvers Logistics Services",
    description:
      "Domestic freight forwarding across the Philippines: FCL, LCL, flat rack, and breakbulk.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SMOvers Logistics Services",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
              logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com") + "/logo.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+63-917-772-3701",
                  contactType: "customer service",
                  areaServed: "PH",
                  availableLanguage: ["English", "Filipino"],
                },
              ],
            }),
          }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SMOvers Logistics Services",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
            }),
          }}
        />
        <Navbar />
        <ScrollUI />
        {children}
      </body>
    </html>
  );
}
