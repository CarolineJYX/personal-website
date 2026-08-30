import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import { DEFAULT_ROUTE_LOCALE, isLocale } from "@/lib/i18n";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteTitle = "Caroline Xia | AI Product Manager Portfolio";
const siteDescription = "Caroline Xia's AI product portfolio across agent systems, model evaluation, context engineering, multimodal AI, and AI hardware products.";
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteTitle,
    template: "%s | Caroline Xia"
  },
  description: siteDescription,
  applicationName: "Caroline Xia Portfolio",
  authors: [{ name: "Caroline Xia" }],
  creator: "Caroline Xia",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Caroline Xia Portfolio",
    locale: "zh_CN",
    type: "website",
    url: siteUrl
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0A0908"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestedLocale = headers().get("x-site-locale");
  const locale = isLocale(requestedLocale) ? requestedLocale : DEFAULT_ROUTE_LOCALE;

  return (
    <html className={`${inter.variable} ${cormorant.variable} ${plexMono.variable}`} lang={locale === "zh" ? "zh-CN" : "en"}>
      <body>{children}</body>
    </html>
  );
}
