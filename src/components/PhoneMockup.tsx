'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PhoneMockup = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrollPercent = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;
    setScrollPosition(scrollPercent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto"
    >
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[570px]">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] shadow-2xl p-3">
          {/* Screen Bezel */}
          <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10 flex items-center justify-center">
              <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
            </div>

            {/* Screen Content - Scrollable */}
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="w-full h-full overflow-y-scroll scrollbar-hide bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50"
            >
              {/* Mini Navigation */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md px-4 py-3 shadow-sm z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">K</span>
                    </div>
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Karssoft
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Mini Hero */}
              <div className="px-4 py-8 text-center">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-semibold mb-3">
                  PREMIUM SOLUTIONS
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                  Build Your Digital
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Empire Today
                  </span>
                </h1>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Transform your business with cutting-edge solutions
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-lg">
                  Get Started
                </button>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-[9px] text-gray-600">Projects</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                    <div className="text-[9px] text-gray-600">Clients</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</div>
                    <div className="text-[9px] text-gray-600">Quality</div>
                  </div>
                </div>
              </div>

              {/* Mini Services */}
              <div className="px-4 py-6 bg-white">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-semibold">
                    SERVICES
                  </span>
                  <h2 className="text-lg font-bold mt-2 text-gray-900">What We Offer</h2>
                </div>
                <div className="space-y-3">
                  {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 shadow-sm">
                      <div className="text-2xl mb-1">🎨</div>
                      <h3 className="text-xs font-bold text-gray-900 mb-1">{service}</h3>
                      <p className="text-[10px] text-gray-600">Modern solutions for your business</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Portfolio */}
              <div className="px-4 py-6">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-[10px] font-semibold">
                    PORTFOLIO
                  </span>
                  <h2 className="text-lg font-bold mt-2 text-gray-900">Our Work</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-24 bg-gray-200 relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop" 
                        alt="Expense Tracker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold text-gray-900">Expense Tracker</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-24 bg-gray-200 relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=200&fit=crop" 
                        alt="E-commerce"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold text-gray-900">E-commerce</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-24 bg-gray-200 relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" 
                        alt="Restaurant"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold text-gray-900">Restaurant</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-24 bg-gray-200 relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop" 
                        alt="Real Estate"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold text-gray-900">Real Estate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Contact */}
              <div className="px-4 py-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
                <h2 className="text-lg font-bold mb-2">Ready to Start?</h2>
                <p className="text-xs mb-4 opacity-90">Let&apos;s build something amazing together</p>
                <button className="px-4 py-2 bg-white text-blue-600 text-xs font-semibold rounded-lg shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Scrollbar Indicator */}
            <div className="absolute right-1 top-8 bottom-2 w-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
                style={{ height: `${Math.max(10, scrollPosition)}%` }}
                initial={{ height: '10%' }}
              />
            </div>
          </div>

          {/* Side Buttons */}
          <div className="absolute right-0 top-20 space-y-2">
            <div className="w-1 h-12 bg-gray-700 rounded-l"></div>
            <div className="w-1 h-8 bg-gray-700 rounded-l"></div>
          </div>
          <div className="absolute left-0 top-24">
            <div className="w-1 h-16 bg-gray-700 rounded-r"></div>
          </div>

          {/* Bottom Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Floating Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap"
        >
          <p className="text-sm text-gray-500 font-medium">👆 Scroll to explore</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
