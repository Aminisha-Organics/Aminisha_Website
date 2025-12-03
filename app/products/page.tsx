import React from 'react';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import Script from 'next/script';

const Products: React.FC = () => {
  return (
    <>
    <Script id="products-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            // Organization Schema
            {
              "@type": "Organization",
              "@id": "https://aminishaorganics.com/#organization",
              "name": "Aminisha Organics LLP",
              "url": "https://aminishaorganics.com",
              "logo": "https://aminishaorganics.com/logo.png",
              "description":
                "Aminisha Organics LLP is India's trusted manufacturer of high-purity persulfates including Ammonium Persulfate (APS) and Sodium Persulfate (SPS).",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-0000000000",
                "contactType": "customer service",
                "areaServed": "IN"
              }
            },

            // Breadcrumb Schema
            {
              "@type": "BreadcrumbList",
              "@id": "https://aminishaorganics.com/products/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://aminishaorganics.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://aminishaorganics.com/products"
                }
              ]
            },

            // Product 1 — Ammonium Persulfate
            {
              "@type": "Product",
              "@id": "https://aminishaorganics.com/products/ammonium-persulfate-in-india/#product",
              "name": "Ammonium Persulfate (APS)",
              "description":
                "High-purity Ammonium Persulfate (APS) manufactured in India. Widely used in polymerization, bleaching, electronics, and water treatment.",
              "brand": {
                "@type": "Brand",
                "name": "Aminisha Organics LLP"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "Aminisha Organics LLP"
              },
              "url": "https://aminishaorganics.com/products/ammonium-persulfate-in-india",
              "sku": "APS-INDIA",
              "category": "Chemicals",
              "image": "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "https://aminishaorganics.com/products/ammonium-persulfate-in-india",
                "price": "0"
              }
            },

            // Product 2 — Sodium Persulfate
            {
              "@type": "Product",
              "@id": "https://aminishaorganics.com/products/sodium-persulfate-in-india/#product",
              "name": "Sodium Persulfate (SPS)",
              "description":
                "High-purity Sodium Persulfate (SPS) manufactured in India. Commonly used in polymerization, soil remediation, surface cleaning, and electronics.",
              "brand": {
                "@type": "Brand",
                "name": "Aminisha Organics LLP"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "Aminisha Organics LLP"
              },
              "url": "https://aminishaorganics.com/products/sodium-persulfate-in-india",
              "sku": "SPS-INDIA",
              "category": "Chemicals",
              "image": "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "https://aminishaorganics.com/products/sodium-persulfate-in-india",
                "price": "0"
              }
            }
          ]
        })}
    </Script>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Products</h2>
            <h1 className="text-xl text-gray-300 mb-8">Check out our best product and solutions</h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ammonium Persulfate */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Ammonium Persulfate"
                className="w-full h-64 object-cover"
                width={1200}
                height={600}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ammonium Persulfate</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ammonium Persulfate is a white, crystalline, odourless salt with a density of 1.98 g/cc. It is used as an initiator (source of free radicals) for the polymerization of monomers and as a strong oxidizing agent in many applications.
                </p>
                <Link
                  href="/products/ammonium-persulfate-in-india"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sodium Persulfate */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Sodium Persulfate"
                className="w-full h-64 object-cover"
                width={1200}
                height={600}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Sodium Persulfate</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sodium Persulfate is a white, crystalline, odourless salt or powder with the density of 2.59 g/cc. It is used as initiator for the Polymerization of monomers and as a strong oxidizing agent in many applications.
                </p>
                <Link
                  href="/products/sodium-persulfate-in-india"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our persulfate products serve a wide range of industries and applications, delivering reliable performance and exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Polymerization</h3>
              <p className="text-gray-600">
                Used as initiators for polymerization reactions in the production of various polymers and synthetic materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Electronics</h3>
              <p className="text-gray-600">
                Essential for PCB manufacturing and electronic component production processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Textile Industry</h3>
              <p className="text-gray-600">
                Used in textile processing and dyeing applications for optimal results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Water Treatment</h3>
              <p className="text-gray-600">
                Effective oxidizing agent for water treatment and purification processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Cosmetics</h3>
              <p className="text-gray-600">
                Safe and effective ingredient in hair bleaching and cosmetic formulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Industrial Cleaning</h3>
              <p className="text-gray-600">
                Powerful oxidizing agent for industrial cleaning and surface treatment applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our technical team is ready to help you find the perfect solution for your specific requirements.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export const metadata = {
  title: "Persulfate Products in India | Ammonium & Sodium Persulfate | Aminisha Organics LLP",
  description:
    "Explore persulfate products from Aminisha Organics. We manufacture Ammonium Persulfate(APS) and Sodium Persulfate(SPS) for polymerization, electronics, textiles, water treatment, and industrial applications.",
  keywords: [
    "persulfate products India",
    "Ammonium Persulfate supplier",
    "Sodium Persulfate manufacturer",
    "APS manufacturer India",
    "SPS supplier India",
    "persulfate chemicals India",
    "Aminisha Organics products"
  ],
  alternates: {
    canonical: "https://aminishaorganics.com/products",
  },
};


export default Products;