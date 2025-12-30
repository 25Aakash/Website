'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';
import PhoneMockup from './PhoneMockup';
import LaptopMockup from './LaptopMockup';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const rotatingTexts = [
    'Empire Today',
    'Future Now',
    'Success Story',
    'Dream Project'
  ];

  useEffect(() => {
    const currentPhrase = rotatingTexts[currentText];
    
    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 100); // Speed of typing
        return () => clearTimeout(timeout);
      } else {
        // Pause before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting animation
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Speed of deleting
        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="background-blur blur-top"></div>
        <div className="background-blur blur-bottom"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Premium Web Solutions
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Build Your Digital
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {displayedText}..
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Transform your business with cutting-edge web applications, stunning websites, 
              and modern solutions. We deliver <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">premium digital experiences</span> that convert 
              visitors into customers.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary group inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/#portfolio" className="btn-primary group inline-flex items-center">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              <div className="stat-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</span>
                </div>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div className="stat-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="stat-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</span>
                </div>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Device Mockups */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center min-h-[600px]"
          >
            {/* Show Phone on Desktop, Laptop on Mobile */}
            <div className="hidden lg:block">
              <PhoneMockup />
            </div>
            <div className="block lg:hidden">
              <LaptopMockup />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
