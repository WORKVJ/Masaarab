import type { Metadata } from "next";
import { Orbitron, Outfit, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron-family",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Masar Arabia | Leading Supplier of Industrial Solutions in Saudi Arabia",
  description: "Discover Masar Arabia’s comprehensive range of industrial solutions—from FRP gratings and cooling towers to chemical supplies, water treatment plants, and instrumentation. Trusted across Saudi Arabia.",
  keywords: [
    "Masar Arabia",
    "Cooling Towers Saudi Arabia",
    "FRP Gratings KSA",
    "Water Treatment Systems Riyadh",
    "Industrial Chemicals Jeddah",
    "Mechanical Valves Dammam",
    "SABIC vendor",
    "Saudi Aramco industrial supplier"
  ],
  authors: [{ name: "Masar Arabia Engineering" }],
  openGraph: {
    title: "Masar Arabia | Industrial Solutions & Technologies",
    description: "Certified supplier of Cooling Towers, FRP, Water Treatment, and Heavy Industrial Components across Saudi Arabia.",
    url: "https://masararabia.com/",
    siteName: "Masar Arabia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${orbitron.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-orange-500 selection:text-white font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(var reg of registrations) {
                      reg.unregister();
                    }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var name of names) {
                      caches.delete(name);
                    }
                  });
                }
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
