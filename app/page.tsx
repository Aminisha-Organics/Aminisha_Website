import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title:
    "Ammonium Persulfate (APS) & Sodium Persulfate (SPS) Supplier in India | Aminisha Organics",
  description:
    "Aminisha Organics supplies high-purity Ammonium Persulfate (APS) and Sodium Persulfate (SPS) across India. Read about applications, grades, packaging and request a quote.",
  keywords:
    "Ammonium Persulfate in India, APS in India, Sodium Persulfate in India, SPS in India, Persulfate supplier India, Persulphate India",
  alternates: {
    canonical: "https://www.aminishaorganics.com/",
  },
};

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aminisha Organics LLP",
    url: "https://www.aminishaorganics.com",
    logo: "https://www.aminishaorganics.com/logo.png",
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9428323829",
        contactType: "sales",
        areaServed: "IN",
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Ammonium Persulfate (APS)",
        description:
          "Ammonium Persulfate (APS) — high-purity (>98.5%) oxidizer used as a polymerization initiator, PCB etchant, and bleaching agent. Available in 25kg, 50kg and jumbo packaging.",
        url: "https://www.aminishaorganics.com/products/ammonium-persulfate-in-india",
        brand: "Aminisha Organics",
        sku: "APS-IND-001",
        aggregateRating: {
          "@type": "AggregateRating",
          "ratingValue": 4.4,
          "reviewCount": 89
        }
      },
      {
        "@type": "Product",
        name: "Sodium Persulfate (SPS)",
        description:
          "Sodium Persulfate (SPS) — strong oxidizer preferred for electronics etching, surface activation, and remediation. High-purity grades available for industrial use.",
        url: "https://www.aminishaorganics.com/products/sodium-persulfate-in-india",
        brand: "Aminisha Organics",
        sku: "SPS-IND-001",
        aggregateRating: {
          "@type": "AggregateRating",
          "ratingValue": 4.2,
          "reviewCount": 89
        }
      },
    ],
  };

  return (
    <main className="bg-white text-gray-800">
      {/* JSON-LD: Organization + Product */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* HERO */}
      <section className="relative">
        <div className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center" style={{
          backgroundImage: `url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&fit=crop')`
        }}>
          <div className="backdrop-brightness-55 w-full h-full flex items-center">
            <div className="max-w-6xl mx-auto px-1 py-16 text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Ammonium Persulfate & Sodium Persulfate manufacturer in India
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                High-purity persulfates for polymers, electronics, water treatment and industrial applications — certified COA, SDS and reliable bulk supply across India.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/products"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-semibold"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Purity & Quality</h2>
            <p className="text-sm text-gray-600">
              We manufacture and supply APS & SPS with industry-leading purity ({">"}98.5%) and full batch COA to ensure consistent performance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Industrial Packaging</h2>
            <p className="text-sm text-gray-600">
              Flexible packaging: 25/50 kg bags, jumbo bags and custom options for export-ready shipments.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Technical Support</h2>
            <p className="text-sm text-gray-600">
              Application guidance for polymerization, etching, bleaching and remediation from our technical team.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT / OVERVIEW */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Overview of Aminisha Organics LLP
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Aminisha Organics LLP is a India-based specialty chemical manufacturer focusing on high-purity
              persulfates for industrial use. Our products—Ammonium Persulfate (APS) and Sodium Persulfate (SPS)—
              serve customers in polymer, electronics, textiles, cosmetics and environmental sectors.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We prioritize consistent quality, regulatory compliance, and timely distribution across India and for export.
            </p>

            <div className="flex gap-4 mt-6">
              <Link href="/about" className="text-blue-600 font-semibold">
                Learn more about us →
              </Link>
              <Link href="/contact" className="text-blue-600 font-semibold">
                Contact Sales →
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            {/* Using <img> so remote domain doesn't require next.config.js changes */}
            <Image
              src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
              alt="Aminisha Organics manufacturing overview"
              className="w-full h-64 object-cover"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS HIGHLIGHT */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h3>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Ammonium Persulfate (APS) - supplier India"
                className="w-full h-44 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Ammonium Persulfate (APS)</h4>
                <p className="text-gray-600 mb-4">
                  High-purity Ammonium Persulfate for polymerization initiators, PCB etching and bleaching applications. Available in industrial packaging with COA & SDS.
                </p>
                <Link href="/products/ammonium-persulfate-in-india" className="text-blue-600 font-semibold">
                  Read product details →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Sodium Persulfate (SPS) - supplier India"
                className="w-full h-44 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Sodium Persulfate (SPS)</h4>
                <p className="text-gray-600 mb-4">
                  Sodium Persulfate with strong oxidizing power for electronics, surface activation and remediation. Export-ready packaging available.
                </p>
                <Link href="/products/sodium-persulfate-in-india" className="text-blue-600 font-semibold">
                  Read product details →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Polymer & Plastics</h5>
              <p className="text-sm text-gray-600">Initiators, crosslinking & processing aids</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Electronics</h5>
              <p className="text-sm text-gray-600">PCB etching, surface cleaning</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Textiles & Dyes</h5>
              <p className="text-sm text-gray-600">Bleaching, desizing</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h5 className="font-semibold">Water Treatment</h5>
              <p className="text-sm text-gray-600">Oxidation & remediation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to source high-quality persulfates?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact our sales team for samples, COA, SDS and bulk pricing. We ship across India and internationally with export compliant documentation.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-semibold">
            Request a Quote
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Read Our Latest Blogs</h2>
    <p className="text-gray-600 mb-8">
      Insights on persulfate chemistry, applications, and industry updates.
    </p>
    <Link
      href="/blog"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center"
    >
      Visit Blog
    </Link>
  </div>
</section>
    </main>
  );
}
