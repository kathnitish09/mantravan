import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MANTRA VAN | Where Every Mantra Becomes a Journey Within",
  description:
    "Enter the sacred mystical forest of Mantra Van. Discover ancient spiritual wisdom, synchronized Hanuman Chalisa scroll, 108 Jaap meditation, sacred aartis, and peaceful mantras.",
  metadataBase: new URL("https://www.mantravan.in"),
  alternates: {
    canonical: "https://www.mantravan.in",
  },
  keywords: [
    "Mantra Van",
    "Hanuman Chalisa",
    "Sita Ram Jaap",
    "Om Namah Shivaya",
    "108 Jaap Counter",
    "Sacred Forest Meditation",
    "Ganesh Aarti",
    "Devotional Mantras",
    "Chalisas",
    "Aartis",
    "Sanatan Dharma Wisdom",
  ],
  authors: [{ name: "Mantra Van" }],
  openGraph: {
    title: "MANTRA VAN | Where Every Mantra Becomes a Journey Within",
    description:
      "A mystical sacred forest sanctuary for ancient mantras, synchronized chalisa manuscripts, 108 jaap counters, and dhyan meditation.",
    url: "https://www.mantravan.in",
    siteName: "MANTRA VAN",
    images: [
      {
        url: "/og-mantravan.jpg",
        width: 1200,
        height: 630,
        alt: "MANTRA VAN - Sacred Forest Devotional Journey",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MANTRA VAN — Where Every Mantra Becomes a Journey Within",
    description:
      "Explore ancient mantras, royal chalisa manuscripts, and serene 108 japa counters in a cinematic sacred forest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-van-green-950 text-[#edebe8] font-body selection:bg-van-gold-500/30 selection:text-van-gold-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
