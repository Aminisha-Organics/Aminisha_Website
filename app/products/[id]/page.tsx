"use client";
import React, { use } from 'react';
import Link from "next/link";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { log } from 'console';

interface PageProps {
  params: Promise<{ id: string }>;
}

function ProductDetail({ params }: PageProps) {
  let productName: any = use(params);
  productName = productName.id;

  interface ProductType {
  name: string;
  formula: string;
  density: string;
  image: string;
  description: string;
  breadcrumb: string;
}
  
  const productData: ProductType[] = [];

  // const productData = {
    let ammonium: ProductType = {
      name: 'Ammonium Persulfate (crystalline)',
      formula: '(NH₄)₂S₂O₈',
      density: '1.98 g/cc',
      image:
        'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Ammonium Persulfate is a white, crystalline, odourless salt used as an initiator for polymerization and as a strong oxidizing agent in many applications.',
      breadcrumb: 'Ammonium Persulfate'
    }
    let sodium: ProductType = {
      name: 'Sodium Persulfate (crystalline)',
      formula: 'Na₂S₂O₈',
      density: '2.59 g/cc',
      image:
        'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description:
        'Sodium Persulfate is a white, crystalline, odourless salt used as an initiator for polymerization and as a strong oxidizing agent in many industries.',
      breadcrumb: 'Sodium Persulfate'
    }
  // };
  productData.push(ammonium);
  productData.push(sodium);

  let ind = productName === 'ammonium-persulfate' ? 0 : 1;
  const currentProduct = productData[ind];
    console.log(currentProduct);
    
  // Specifications
  const specifications = [
    { property: 'Molecular Weight', value: productName === 'ammonium-persulfate' ? '228.20 g/mol' : '238.10 g/mol' },
    { property: 'Density', value: currentProduct.density },
    { property: 'Solubility', value: 'Highly soluble in water' },
    { property: 'Appearance', value: 'White crystalline powder' },
    { property: 'Purity', value: productName === 'ammonium-persulfate' ? '≥ 98.0%' : '≥ 98.5%' },
    { property: 'pH (10% solution)', value: '3.0 - 4.0' },
    { property: 'Iron', value: productName === 'ammonium-persulfate' ? '0.0005% w/w max' : '0.001% w/w max' },
    { property: 'Chloride and chlorate (as CL)', value: productName === 'ammonium-persulfate' ? '0.002% w/w max' : '0.005% w/w max' },
    { property: 'Moisture', value: productName === 'ammonium-persulfate' ? '0.10% w/w max' : '0.05% w/w max' }
  ];

  // Applications
  const applications = [
    'Polymerization initiator for acrylic monomers',
    'Electronics industry for PCB manufacturing',
    'Textile industry for desizing and bleaching',
    'Water treatment and purification',
    'Hair bleaching in cosmetic industry',
    'Industrial cleaning applications',
    'Soil remediation processes',
    'Oil recovery enhancement'
  ];

  // Features
  const features = [
    'High purity grade available',
    'Excellent thermal stability',
    'Fast dissolution rate',
    'Consistent quality',
    'Cost-effective solution',
    'Environmentally friendly',
    'Long shelf life',
    'Easy handling and storage'
  ];

  return (
    <>
      

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="text-center">
              <h1 className="text-2xl lg:text-4xl md:text-6xl font-bold mb-4">{currentProduct.name}</h1>
              <p className="text-xl text-gray-300 mb-8">High-Quality Chemical Solution</p>
              <div className="flex items-center justify-center space-x-2 mt-8">
                <div className="bg-white rounded-lg px-6 py-3">
                  <nav className="flex items-center space-x-2 text-sm">
                    <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="/products" className="text-blue-600 hover:underline">Products</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-600 font-medium">{currentProduct.breadcrumb}</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full rounded-lg shadow-lg"
                  width={1200}
                  height={600}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{currentProduct.name}</h2>
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Formula: {currentProduct.formula}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {currentProduct.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Density</h3>
                    <p className="text-gray-600">{currentProduct.density}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Appearance</h3>
                    <p className="text-gray-600">White crystalline powder</p>
                  </div>
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(currentProduct.name)}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Detailed specifications and properties of our high-quality {currentProduct.name.toLowerCase()}.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Property</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {specifications.map((spec, index) =>
                      currentProduct.name === 'Sodium Persulfate' && spec.property === 'pH (10% solution)'
                        ? null
                        : (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-900">{spec.property}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Applications</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our {currentProduct.name.toLowerCase()} serves diverse industries with reliable performance and exceptional results.
                </p>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Features</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Why choose our {currentProduct.name.toLowerCase()} for your industrial applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging & Storage */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Packaging & Storage</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Packaging Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 25 kg HDPE bags with inner liner</li>
                  <li>• 50 kg HDPE bags with inner liner</li>
                  <li>• 500 kg flexible intermediate bulk containers (FIBC)</li>
                  <li>• 1000 kg flexible intermediate bulk containers (FIBC)</li>
                  <li>• Custom packaging available upon request</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Storage Instructions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Store in cool, dry, well-ventilated area</li>
                  <li>• Keep away from heat and direct sunlight</li>
                  <li>• Protect from moisture and humidity</li>
                  <li>• Keep containers tightly closed</li>
                  <li>• Separate from incompatible materials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our technical team for product specifications, pricing, and delivery information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/contact?product=${encodeURIComponent(currentProduct.name)}`}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Request Quote
              </Link>

              <Link
                href="/products"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
