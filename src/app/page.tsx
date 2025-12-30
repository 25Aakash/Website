import Image from 'next/image';
import Hero from '@/components/Hero';
import DividedSlider from '@/components/DividedSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Services</span>
            <h2 className="section-title mt-4">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Succeed Online
              </span>
            </h2>
            <p className="section-description mt-4">
              From concept to launch, we provide end-to-end solutions for your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites built with modern technologies. Responsive, fast, and optimized.',
                icon: '🎨',
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications that deliver exceptional experiences.',
                icon: '📱',
              },
              {
                title: 'SAAS Platforms',
                description: 'Scalable software-as-a-service solutions with robust architecture and modern UI/UX.',
                icon: '🚀',
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces designed to engage users and drive business results.',
                icon: '🎭',
              },
              {
                title: 'Backend Development',
                description: 'Robust server-side architecture, APIs, and database management for your applications.',
                icon: '⚙️',
              },
              {
                title: 'Maintenance & Support',
                description: 'Ongoing maintenance, updates, and technical support to keep your product running smoothly.',
                icon: '🛠️',
              },
            ].map((service, index) => (
              <div key={index} className="service-card group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divided Slider Section */}
      <DividedSlider />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Portfolio</span>
            <h2 className="section-title mt-4">
              Featured Projects &
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="section-description mt-4">
              Explore our latest work and see how we&apos;ve helped businesses transform digitally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expense Tracker */}
            <div className="project-card group">
              <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop" 
                  alt="Expense Tracker App"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Expense Tracker</h3>
                <p className="text-gray-600 mb-4">Personal finance management app with real-time tracking, budget insights, and expense analytics.</p>
              </div>
            </div>

            {/* E-commerce Store */}
            <div className="project-card group">
              <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop" 
                  alt="E-commerce Platform"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">Full-featured online store with payment integration, inventory management, and admin dashboard.</p>
              </div>
            </div>

            {/* Restaurant Website */}
            <div className="project-card group">
              <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" 
                  alt="Restaurant Website"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Restaurant & Cafe</h3>
                <p className="text-gray-600 mb-4">Modern restaurant website with online menu, table reservations, and delivery integration.</p>
              </div>
            </div>

            {/* Real Estate */}
            <div className="project-card group">
              <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" 
                  alt="Real Estate Portal"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Real Estate Portal</h3>
                <p className="text-gray-600 mb-4">Property listing platform with advanced search filters, virtual tours, and agent management.</p>
              </div>
            </div>

            {/* Fitness Website */}
            <div className="project-card group">
              <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" 
                  alt="Fitness & Gym Website"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Fitness & Gym</h3>
                <p className="text-gray-600 mb-4">Fitness center website with class schedules, membership plans, and trainer booking system.</p>
              </div>
            </div>

            {/* SaaS Dashboard */}
            <div className="project-card group">
              <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="SaaS Dashboard"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">SaaS Dashboard</h3>
                <p className="text-gray-600 mb-4">Analytics dashboard with real-time data visualization, reporting, and team collaboration tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Pricing</span>
            <h2 className="section-title mt-4">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Starter', features: ['Responsive Website', 'Up to 5 Pages', 'Basic SEO', '1 Month Support'] },
              { name: 'Professional', features: ['Web Application', 'Up to 15 Pages', 'Advanced SEO', '3 Months Support', 'CMS Integration'], popular: true },
              { name: 'Enterprise', features: ['Full-Stack App', 'Unlimited Pages', 'Custom Features', '6 Months Support', 'API Development'] },
            ].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{plan.name}</h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={plan.popular ? 'btn-primary w-full text-center block' : 'btn-outline w-full text-center block'}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your
            <span className="block">Next Project?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let&apos;s transform your ideas into reality. Get in touch today for a free consultation.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all">
            Start Your Project →
          </a>
        </div>
      </section>
    </main>
  );
}
