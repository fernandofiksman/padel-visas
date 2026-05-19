import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://padelvisas.com"),
  title: {
    default: "Padel Visas | U.S. Visas for Padel Professionals",
    template: "%s | Padel Visas"
  },
  description:
    "Premium U.S. immigration counsel for padel players, coaches, club directors, tournament professionals, academy owners, creators, trainers, and brands.",
  openGraph: {
    title: "Padel Visas | U.S. Visas for Padel Professionals",
    description:
      "Helping players, coaches, and industry professionals build their future in the United States.",
    url: "https://padelvisas.com",
    siteName: "Padel Visas",
    images: [
      {
        url: "/images/hero-padel-court.png",
        width: 1200,
        height: 630,
        alt: "Padel player on a premium court"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Visas | U.S. Visas for Padel Professionals",
    description:
      "Helping players, coaches, and industry professionals build their future in the United States.",
    images: ["/images/hero-padel-court.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#FBF8F1"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
