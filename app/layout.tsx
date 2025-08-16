import "./globals.css";
import type { Metadata } from "next";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/buttons/WhatsAppButton";
import ScrollToTopButton from "@/components/buttons/ScrollToTopButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Edvenswa Ayurveda Hospital",
  description: "Holistic Ayurvedic Wellness Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body>
        <NavigationMenu />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-N0ZRDV5GYW`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-N0ZRDV5GYW');
              `,
            }}
          />
        <main>{children}
        
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
        
      </body>
    </html>
  );
}