'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Section {
  title: string;
  subtitle: string;
  leftContent: {
    heading: string;
    points: string[];
    color: string;
  };
  rightContent: {
    heading: string;
    points: string[];
    color: string;
  };
}

const sections: Section[] = [
  {
    title: 'Before & After',
    subtitle: 'Transform Your Digital Presence',
    leftContent: {
      heading: 'Traditional Approach',
      points: [
        'Outdated design patterns',
        'Slow loading times',
        'Poor mobile experience',
        'Limited functionality',
        'High maintenance costs',
      ],
      color: 'from-red-500 to-orange-500',
    },
    rightContent: {
      heading: 'Our Modern Solution',
      points: [
        'Cutting-edge UI/UX design',
        'Lightning-fast performance',
        'Mobile-first responsive',
        'Advanced features & integrations',
        'Easy to maintain & scale',
      ],
      color: 'from-blue-500 to-purple-500',
    },
  },
  {
    title: 'Development Process',
    subtitle: 'From Concept to Launch',
    leftContent: {
      heading: 'Planning & Design',
      points: [
        'Requirements gathering',
        'User research & personas',
        'Wireframing & prototyping',
        'Design system creation',
        'Client feedback & iterations',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    rightContent: {
      heading: 'Build & Deploy',
      points: [
        'Agile development sprints',
        'Continuous testing & QA',
        'Performance optimization',
        'Security implementation',
        'Launch & ongoing support',
      ],
      color: 'from-green-500 to-teal-500',
    },
  },
  {
    title: 'Technology Stack',
    subtitle: 'Powered by Modern Tools',
    leftContent: {
      heading: 'Frontend Excellence',
      points: [
        'React & Next.js',
        'TypeScript for type safety',
        'Tailwind CSS styling',
        'Framer Motion animations',
        'Progressive Web Apps',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    rightContent: {
      heading: 'Backend Power',
      points: [
        'Node.js & Express',
        'PostgreSQL & MongoDB',
        'GraphQL & REST APIs',
        'AWS & Cloud deployment',
        'Microservices architecture',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  },
];

interface DividedSectionProps {
  section: Section;
  index: number;
}

const DividedSection = ({ section, index }: DividedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Alternate animation direction based on index
  const isEven = index % 2 === 0;
  
  const leftY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isEven ? [200, 0, -100] : [-200, 0, 100]
  );
  
  const rightY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isEven ? [-200, 0, 100] : [200, 0, -100]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 relative">
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6"
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            {section.title}
          </h3>
          <p className="text-xl md:text-2xl text-gray-600">
            {section.subtitle}
          </p>
        </div>

        {/* Divided Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
          {/* Left Side */}
          <motion.div
            style={{ y: leftY }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border border-gray-100">
              <div
                className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${section.leftContent.color} text-white font-bold mb-6 text-lg`}
              >
                {section.leftContent.heading}
              </div>
              <ul className="space-y-5">
                {section.leftContent.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-4 text-gray-700"
                  >
                    <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0 font-bold text-gray-600">
                      {idx + 1}
                    </span>
                    <span className="text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            style={{ y: rightY }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border border-gray-100">
              <div
                className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${section.rightContent.color} text-white font-bold mb-6 text-lg`}
              >
                {section.rightContent.heading}
              </div>
              <ul className="space-y-5">
                {section.rightContent.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-4 text-gray-700"
                  >
                    <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 font-bold text-white">
                      ✓
                    </span>
                    <span className="text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-96 bg-gradient-to-b from-transparent via-gray-300 to-transparent pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

const DividedSlider = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="text-center">
          <span className="section-badge">Our Process</span>
          <h2 className="section-title mt-4">
            See The
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Difference We Make
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Scroll down to explore our approach</p>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <DividedSection key={index} section={section} index={index} />
      ))}
    </section>
  );
};

export default DividedSlider;
