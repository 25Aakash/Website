'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const LaptopMockup = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto max-w-sm"
    >
      {/* Laptop Frame */}
      <div className="relative">
        {/* Screen */}
        <div className="bg-gray-900 rounded-t-2xl p-2 shadow-2xl">
          {/* Bezel */}
          <div className="bg-black rounded-lg p-1">
            {/* Screen Content */}
            <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 rounded-lg overflow-hidden h-[280px]">
              {/* Mini Navigation */}
              <div className="bg-white/90 backdrop-blur-md px-3 py-2 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">K</span>
                  </div>
                  <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Karssoft
                  </span>
                </div>
                <div className="flex space-x-2 text-[9px] text-gray-600">
                  <span>Home</span>
                  <span>Services</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Hero Section */}
              <div className="px-4 py-6 text-center">
                <div className="inline-block px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-[8px] font-semibold mb-2">
                  PREMIUM SOLUTIONS
                </div>
                <h1 className="text-base font-bold text-gray-900 mb-1">
                  Build Your Digital
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Empire Today
                  </span>
                </h1>
                <p className="text-[10px] text-gray-600 mb-3 max-w-xs mx-auto">
                  Transform your business with cutting-edge solutions
                </p>
                <button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-semibold rounded-lg shadow-lg">
                  Get Started
                </button>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {['5+ Projects', '10+ Clients', '100% Quality'].map((stat, i) => (
                    <div key={i} className="bg-white rounded-lg p-2 shadow-sm">
                      <div className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.split(' ')[0]}
                      </div>
                      <div className="text-[8px] text-gray-600">{stat.split(' ')[1]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Preview */}
              <div className="px-4 pb-4 bg-white">
                <div className="grid grid-cols-3 gap-2">
                  {['Web Dev', 'Mobile', 'Design'].map((service, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2 text-center">
                      <div className="text-lg">🎨</div>
                      <div className="text-[9px] font-bold text-gray-900">{service}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Webcam */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
        </div>

        {/* Base */}
        <div className="relative">
          {/* Keyboard Base */}
          <div className="h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg"></div>
          {/* Bottom */}
          <div className="h-1 bg-gray-400 rounded-b-2xl shadow-lg"></div>
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-black/20 blur-xl rounded-full"></div>
      </div>

      {/* Floating Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap"
      >
        <p className="text-xs text-gray-500 font-medium">💻 Desktop View</p>
      </motion.div>
    </motion.div>
  );
};

export default LaptopMockup;
