import React from 'react';
import Link from "next/link";
import { Mail, MapPin, Phone} from 'lucide-react';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/Logo/Aminisha short Logo.png" 
                alt="Aminisha Organics" 
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-bold text-green-400">Aminisha Organics LLP</h3>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">
              The Aminisha Organics LLP of today is a result of the collective effort of our employees, suppliers, customers and management.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400">Call Anytime</p>
              <p className="text-lg font-semibold">+91 9428323829</p>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:pl-14">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/ammonium-persulfate-in-india" className="text-gray-300 hover:text-white transition-colors">Ammonium persulfate</Link></li>
              <li><Link href="/products/sodium-persulfate-in-india" className="text-gray-300 hover:text-white transition-colors">Sodium Persulfates</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p className="text-white">info@aminishaorganics.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 lg:w-1/4">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Locations</p>
                  <p className="text-white text-sm">
                    PLOT NO. DP/123 GIDC SAYKHA, TA. VAGRA, DIST. BHARUCH, GUJARAT - 392140
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2023 Copyrights by AMINISHA ORGANICS LLP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;