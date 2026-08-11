import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taitranhtg.vercel.app";
const socialPreview = "/img/taitran-pro-1.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: ["Tài Trần", "HTG Investments", "đầu tư có trách nhiệm", "quản trị rủi ro", "nhà đầu tư Việt"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.brand,
    images: [{ url: socialPreview, width: 3062, height: 3331, alt: "Tài Trần HTG - Đồng hành cùng nhà đầu tư" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: [socialPreview],
  },
  icons: {
    icon: [{ url: "/img/new-logo-htg.jpg", type: "image/jpeg", sizes: "1254x1254" }],
    shortcut: "/img/new-logo-htg.jpg",
    apple: "/img/new-logo-htg.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#063e2b",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
