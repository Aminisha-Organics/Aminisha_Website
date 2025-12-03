import About from "./aboutSection";
import Script from "next/script";

export const metadata = {
  title: "About Aminisha Organics LLP | Leading Persulfate Manufacturer in India",
  description:
    "Aminisha Organics LLP is India’s trusted supplier of high-purity Ammonium Persulfate (APS) and Sodium Persulfate (SPS), backed by 25+ years of expertise and global reach.",
  keywords:
    "About Aminisha Organics, persulfate manufacturer India, sodium persulfate supplier, ammonium persulfate supplier, APS manufacturer, SPS manufacturer",
  alternates: {
    canonical: "https://aminishaorganics.com/about",
  },
};

export default function Page() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Aminisha Organics LLP",
    url: "https://aminishaorganics.com/about",
    description:
      "Aminisha Organics LLP is an Indian specialty chemical company focused on high-purity persulfate manufacturing and global distribution.",
    mainEntity: {
      "@type": "Organization",
      name: "Aminisha Organics LLP",
      url: "https://aminishaorganics.com",
      logo: "https://aminishaorganics.com/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9428323829",
          contactType: "customer service",
          areaServed: "IN",
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <About />
    </>
  );
}
