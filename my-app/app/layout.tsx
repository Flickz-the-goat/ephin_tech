import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Endorphin Tech",
  description:
    "Technology, Strategy, Velocity. Endorphin Technologies specializes in innovative technology solutions and strategic consulting for modern businesses.",
  keywords: [
    "technology",
    "strategy",
    "innovation",
    "consulting",
    "digital transformation",
    "AI",
    "startup growth",
    "business technology",
  ],
  authors: [{ name: "Endorphin Technologies" }],
  creator: "Endorphin Technologies",
  publisher: "Endorphin Technologies",
  robots: "index, follow",
  openGraph: {
    title: "Endorphin Technologies",
    description:
      "Technology, Strategy, Velocity. Innovative technology solutions and strategic consulting for modern businesses.",
    url: "https://endorphintech.com",
    siteName: "Endorphin Technologies",
    images: [
      {
        url: "/nav-logo.png",
        width: 1200,
        height: 630,
        alt: "Endorphin Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endorphin Technologies",
    description:
      "Technology, Strategy, Velocity. Innovative technology solutions and strategic consulting.",
    images: ["/nav-logo.png"],
  },
  icons: {
    icon: "/nav-logo.png",
    shortcut: "/nav-logo.png",
    apple: "/nav-logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
