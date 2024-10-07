import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Painters Marketplace | Top Painters in Virginia',
  description: 'Find skilled painters in Virginia for your home or business projects. Get free quotes, read reviews, and hire the best local painters in VA.',
  keywords: 'painters Virginia, VA painting services, home improvement Virginia, professional painters VA, interior painting Virginia, exterior painting Virginia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Painters Marketplace",
            "description": "Find and hire top professional painters in Virginia",
            "areaServed": {
              "@type": "State",
              "name": "Virginia"
            },
            "serviceType": ["Interior Painting", "Exterior Painting", "Commercial Painting", "Residential Painting"],
          })
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}