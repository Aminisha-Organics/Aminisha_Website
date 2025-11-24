// import "../styles/globals.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./globals.css";

export const metadata = {
  title: "Ammonium Persulphate and Sodium Ammonium Persulphate Supplier in India | Aminisha Organics",
  description: "Aminisha Organics LLP an Ammonium Persulphate supplier and Sodium Persulphate supplier in india manufacturing & supplying to customers around the world.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
