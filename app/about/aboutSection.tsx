"use client";
import Link from "next/link";
import { Phone, Award } from 'lucide-react';
import Image from "next/image";

export default function AboutUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aminisha Organics LLP",
    url: "https://aminishaorganics.com",
    logo: "https://aminishaorganics.com/logo.png",
    description:
      "Aminisha Organics LLP is a leading Indian manufacturer of high-purity Sodium Persulfate (SPS) and Ammonium Persulfate (APS).",
    foundingDate: "2000",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 9428323829",
        contactType: "Customer Support",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/aminisha-organics",
    ],
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-24 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
            <div className="flex items-center justify-center space-x-2 mt-8">
              <div className="bg-white rounded-lg px-6 py-3">
                <nav className="flex items-center space-x-2 text-sm">
                  <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-600 font-medium">About Us</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="lg:py-16 sm:py-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h1 className="text-blue-600 font-semibold text-sm uppercase tracking-wide">ABOUT AMINISHA ORGANICS</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Company Overview</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Aminisha Organics LLP is an Indian specialty chemical company focused on the development, manufacturing, and supply of high-purity persulfate chemicals — including Sodium Persulfate (SPS) and Ammonium Persulfate (APS).
                </p>
                <p className="leading-relaxed">
                  Our leadership team brings 25+ years of strong industrial experience in chemical process engineering, safety, and large-scale manufacturing.
                </p>
                <p className="leading-relaxed">
                  With proprietary electrochemical technology and a state-of-the-art campus located in western India, we prioritize quality, sustainability, and strict regulatory compliance across every batch we produce.
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Anytime</p>
                    <p className="font-semibold text-gray-900 cursor-pointer" onClick={() => window.location.href='tel:+919428323829'}>+91 9428323829</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Aminisha Organics manufacturing facility"
                className="w-full rounded-lg shadow-lg"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering high-quality chemical solutions backed by innovation, consistency, and customer-centric service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className='flex gap-5 items-center'>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To manufacture high-purity persulfate chemicals that meet global quality standards while ensuring safety, sustainability, and reliable supply to industries worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className='flex gap-5 items-center'>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized leader in persulfate manufacturing through innovation, superior quality, and responsible chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Aminisha Organics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our decades of expertise and cutting-edge manufacturing deliver unmatched reliability, quality, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Our production systems maintain strict quality control to ensure consistency in every persulfate batch.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                We serve industries across India and worldwide with dependable logistics and technical support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Our R&D initiatives enable continuous improvement and advanced solutions in persulfate chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our team and explore how Aminisha Organics can support your business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};