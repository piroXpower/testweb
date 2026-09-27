import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name.en} | ${siteConfig.tagline.en}`,
    template: `%s | ${siteConfig.name.en}`
  },
  description: siteConfig.description.en,
  keywords: [
    'Gold Jewellery Godda',
    'BIS Hallmark Gold Jharkhand',
    'Vedic Gemstones',
    'Certified Pukhraj Neelam',
    'Silver Jewellery Mahagama',
    'Astrology Consultation',
    'Swarnalankar',
    'Wedding Jewellery Godda'
  ],
  authors: [{ name: siteConfig.name.en }],
  creator: siteConfig.name.en,
  publisher: siteConfig.name.en,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    url: `https://${siteConfig.domain}`,
    title: siteConfig.name.en,
    description: siteConfig.description.en,
    siteName: siteConfig.name.en,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name.en
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name.en,
    description: siteConfig.description.en,
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": siteConfig.name.en,
              "image": `https://${siteConfig.domain}/og-image.jpg`,
              "description": siteConfig.description.en,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
                "addressLocality": siteConfig.address.city,
                "addressRegion": siteConfig.address.state,
                "postalCode": siteConfig.address.pincode,
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": siteConfig.coordinates.lat,
                "longitude": siteConfig.coordinates.lng
              },
              "telephone": siteConfig.contact.phone,
              "priceRange": "₹₹₹",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "paymentAccepted": "Cash, Credit Card, UPI, Debit Card",
              "currenciesAccepted": "INR"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
