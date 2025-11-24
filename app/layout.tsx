import Header from "../component/Header";
import Footer from "../component/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title:
    "Ammonium Persulphate and Sodium Ammonium Persulphate Supplier in India | Aminisha Organics",
  description:
    "Aminisha Organics LLP an Ammonium Persulphate supplier and Sodium Persulphate supplier in india manufacturing & supplying to customers around the world.",
  alternates: {
    canonical: "https://aminishaorganics.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FYNPRH9XKL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FYNPRH9XKL');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
