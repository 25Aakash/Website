'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Karssoft
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transforming businesses with cutting-edge web applications and stunning digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Mobile Apps</li>
              <li className="text-gray-300">UI/UX Design</li>
              <li className="text-gray-300">E-commerce</li>
              <li className="text-gray-300">SEO Optimization</li>
              <li className="text-gray-300">Cloud Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:karssoft1@gmail.com" className="hover:text-blue-400 transition-colors">
                  karssoft1@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+918476976540" className="hover:text-blue-400 transition-colors">
                  +91 8476976540
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Mathura, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Karssoft. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
