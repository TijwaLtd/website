import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fivewellafrica.com'),
  title: {
    template: '%s | FiveWell Africa',
    default: 'FiveWell Africa | Agriculture Consulting for a Thriving Continent',
  },
  description: 'Expert agriculture consulting and agribusiness advisory services to boost productivity and sustainability across Africa.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'FiveWell Africa | Agriculture Consulting for a Thriving Continent',
    description: 'Expert agriculture consulting and agribusiness advisory services to boost productivity and sustainability across Africa.',
    url: 'https://fivewellafrica.com',
    siteName: 'FiveWell Africa',
    images: [
      {
        url: '/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiveWell Africa | Agriculture Consulting for a Thriving Continent',
    description: 'Expert agriculture consulting and agribusiness advisory services to boost productivity and sustainability across Africa.',
    images: ['/og-image.png'], // Must be an absolute URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://fivewellafrica.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fivewellafrica.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <Navbar />
        <main >{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
