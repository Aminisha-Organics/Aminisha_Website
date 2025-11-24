"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  ChevronDown,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: String) => pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>AMINISHA ORGANICS LLP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@aminishaorganics.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo/Aminisha short Logo.png"
                alt="Aminisha Organics"
                className="w-12 h-12 rounded-full object-cover"
                width={48}
                height={48}
              />
              <div>
                <h2 className="text-md font-bold text-green-600">
                  Aminisha <br></br>Organics
                </h2>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg ${
                  isActive("/") ? "text-blue-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg ${
                  isActive("/about") ? "text-blue-600" : ""
                }`}
              >
                About Us
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg ${
                    pathname.includes("/products")
                      ? "text-blue-600"
                      : ""
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* for me */}
                {/* Invisible bridge to cover the gap (same width as menu) */}
                <div
                  className="absolute left-0 top-full w-64 h-2"
                  onMouseEnter={() => setIsProductsOpen(true)}
                />

                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-4">
                    <Link
                      href="/products/ammonium-persulfate?product=ammonium"
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Ammonium Persulfate
                    </Link>
                    <Link
                      href="/products/sodium-persulfate?product=sodium"
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Sodium Persulfate
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/certifications"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg ${
                  isActive("/certifications") ? "text-blue-600" : ""
                }`}
              >
                Certifications
              </Link>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg ${
                  isActive("/contact") ? "text-blue-600" : ""
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Call Anytime Button */}
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-lg" />
              <span className="text-lg">9428323829</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 border-t pt-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    isActive("/") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    isActive("/about") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/products/ammonium-persulfate?product=ammonium"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ammonium Persulfate
                </Link>
                <Link
                  href="/products/sodium-persulfate?product=sodium"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sodium Persulfate
                </Link>
                <Link
                  href="/certifications"
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    isActive("/certifications") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  href="/contact"
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    isActive("/contact") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="flex items-center gap-3 bg-white border border-blue-600 text-blue-600 px-5 py-2 rounded-xl shadow-sm">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-semibold">Call Anytime</div>
                    <div className="text-xs text-gray-500">+91 9428323829</div>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
