import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import { LocalizedText } from "@/components/localized-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DEFAULT_LOCALE, LANGUAGE_STORAGE_KEY } from "@/lib/i18n";
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
const initialLocaleScript = `
try {
  var locale = window.localStorage.getItem("${LANGUAGE_STORAGE_KEY}");
  if (locale !== "en" && locale !== "zh") locale = "${DEFAULT_LOCALE}";
  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
} catch (error) {
  document.documentElement.dataset.locale = "${DEFAULT_LOCALE}";
  document.documentElement.lang = "en";
}
`;

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
    locale: "en_US",
    type: "website",
    url: siteUrl
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: siteUrl ? { canonical: "/" } : undefined
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0A0908"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable} ${cormorant.variable} ${plexMono.variable}`} data-locale={DEFAULT_LOCALE} lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initialLocaleScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          <LocalizedText value={{ en: "Skip to content", zh: "跳到正文" }} />
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
