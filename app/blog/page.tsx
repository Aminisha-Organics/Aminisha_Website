export const metadata = {
  title: "Persulfates in India – Uses, Market Demand & Supplier Guide | Aminisha Organics",
  description:
    "Learn about Ammonium Persulfate (APS) and Sodium Persulfate (SPS) in India, their industrial uses, market demand, and why Aminisha Organics is a trusted supplier.",
  alternates: {
    canonical: "https://www.aminishaorganics.com/blog",
  },
};

export default function PersulfateBlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Persulfates in India – Complete Guide to APS & SPS",
    description:
      "A complete guide explaining the uses, applications, and market demand of Ammonium Persulfate (APS) and Sodium Persulfate (SPS) in India.",
    author: {
      "@type": "Organization",
      name: "Aminisha Organics LLP",
      url: "https://www.aminishaorganics.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Aminisha Organics LLP",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aminishaorganics.com/logo.png",
      },
    },
    mainEntityOfPage: "https://www.aminishaorganics.com/blog",
  };
  return (
    <div className="min-h-screen bg-white">
      {/* BLOG HEADER */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Persulfates in India - Complete Guide to APS & SPS
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          A detailed industry-focused blog covering Ammonium Persulfate (APS) and Sodium Persulfate (SPS), 
          including applications, demand, manufacturing, and sourcing in India.
        </p>
      </header>

      {/* BLOG BODY */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro section */}
        <section className="mb-10">
          <p className="text-lg leading-relaxed text-gray-700">
            Persulfates — including <strong>Ammonium Persulfate (APS)</strong> and <strong>Sodium Persulfate (SPS)</strong> —
            are essential oxidizing agents used across multiple industries in India. 
            Their stable oxidizing nature, high purity, and predictable reaction profile make them important chemicals 
            in polymerization, electronics, water treatment, and various industrial processes.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Persulfates?</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Persulfates are inorganic salts containing the persulfate ion (S₂O₈²⁻). 
            They act as strong oxidizers and radical initiators. The two most widely used persulfates in India are:
          </p>

          <ul className="list-disc ml-8 mt-4 text-gray-700 leading-relaxed">
            <li><strong>Ammonium Persulfate (APS):</strong> Commonly used in polymerization, etching, textiles, and cosmetics.</li>
            <li><strong>Sodium Persulfate (SPS):</strong> Preferred for electronics, cleaning agents, and environmental remediation.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industrial Applications in India</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The demand for APS and SPS in India has grown significantly due to their versatility. 
            Below are the major industry segments using persulfates:
          </p>

          <ul className="list-disc ml-8 mt-4 text-gray-700 space-y-2 leading-relaxed">
            <li><strong>Polymerization:</strong> Initiator for ABS, PVC, synthetic rubber, and emulsion polymers.</li>
            <li><strong>Electronics:</strong> Etching of printed circuit boards (PCBs).</li>
            <li><strong>Water Treatment:</strong> Oxidation of organic contaminants.</li>
            <li><strong>Textiles:</strong> Bleaching and desizing processes.</li>
            <li><strong>Cosmetics:</strong> Hair bleaching formulations.</li>
            <li><strong>Soil Remediation:</strong> Destruction of hydrocarbons using sulfate radicals.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Demand for Persulfates in India</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            India is one of the fastest-growing persulfate markets due to expanding electronics manufacturing,
            increased demand for polymers, and stricter environmental treatment standards.
          </p>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            The market is expected to grow steadily over the next decade, driven by:
          </p>

          <ul className="list-disc ml-8 mt-4 text-gray-700 space-y-2 leading-relaxed">
            <li>Government focus on electronics production (Make in India initiative)</li>
            <li>Growth in water treatment plants and environmental cleanup</li>
            <li>Rising polymer production for packaging and automotive industries</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aminisha Organics?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Aminisha Organics is a trusted manufacturer and supplier of high-purity APS and SPS in India with global shipping capability. 
            We supply material with purity greater than 98.5% along with COA, SDS, and batch-wise test reports.
          </p>

          <ul className="list-disc ml-8 mt-4 text-gray-700 space-y-2 leading-relaxed">
            <li>High-purity industrial grade persulfates</li>
            <li>Consistent quality and on-time delivery</li>
            <li>Custom packaging options (25 kg, 50 kg, jumbo bags)</li>
            <li>Technical support for applications and formulation</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="my-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            Need APS or SPS in India?
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Contact Aminisha Organics for high-quality ammonium persulfate and sodium persulfate at competitive pricing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Get a Quote
          </a>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
