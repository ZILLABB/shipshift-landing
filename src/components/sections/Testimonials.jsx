import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../../contexts/CurrencyContext';
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
  BuildingOfficeIcon,
  TruckIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { convertPrice } = useCurrency();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Colony Owner',
      location: 'San Francisco, CA',
      avatar: 'SC',
      roleIcon: BuildingOfficeIcon,
      rating: 5,
      quote: "Starting a ShipShift colony in my neighborhood has been incredibly rewarding. I've built a thriving community of 200+ members and earn consistent income while helping my neighbors save on shipping costs.",
      stats: {
        earnings: convertPrice(1800) + '/month',
        members: '200+ colony members',
        satisfaction: '98% member satisfaction'
      },
      highlight: 'Manages the largest colony in Northern California'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Dispatch Operator',
      location: 'Austin, TX',
      avatar: 'MR',
      roleIcon: TruckIcon,
      rating: 5,
      quote: `I was already commuting from downtown to the airport daily for work. Now I earn an extra ${convertPrice(800)} per month just by carrying packages along my route. It's literally money for doing what I was already doing!`,
      stats: {
        earnings: convertPrice(800) + '/month',
        packages: '150+ packages delivered',
        rating: '4.9/5 customer rating'
      },
      highlight: 'Top-rated dispatch operator in Texas'
    },
    {
      id: 3,
      name: 'Jennifer Park',
      role: 'Reserve Operator',
      location: 'Seattle, WA',
      avatar: 'JP',
      roleIcon: CubeIcon,
      rating: 5,
      quote: `I converted my garage into a secure package storage facility. It's perfect passive income - I earn ${convertPrice(600)} monthly just for providing safe storage space while packages wait for pickup.`,
      stats: {
        earnings: convertPrice(600) + '/month',
        storage: '50 package capacity',
        uptime: '99.8% availability'
      },
      highlight: 'Highest-rated storage facility in the Pacific Northwest'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Small Business Owner',
      location: 'Chicago, IL',
      avatar: 'DK',
      roleIcon: BuildingOfficeIcon,
      rating: 5,
      quote: "ShipShift has transformed my e-commerce business. I save 50% on shipping costs and my customers love the faster delivery times. The community aspect makes it feel personal and trustworthy.",
      stats: {
        savings: '50% cost reduction',
        speed: '2x faster delivery',
        growth: '40% business growth'
      },
      highlight: 'Grew online business by 40% using ShipShift'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Frequent Shipper',
      location: 'Miami, FL',
      avatar: 'LT',
      roleIcon: UserIcon,
      rating: 5,
      quote: "As someone who ships packages weekly to family across the country, ShipShift has been a game-changer. Lower costs, faster delivery, and I love supporting my local community.",
      stats: {
        savings: convertPrice(200) + '/month saved',
        packages: '50+ packages shipped',
        speed: 'Same-day local delivery'
      },
      highlight: `Saves over ${convertPrice(2400)} annually on shipping`
    }
  ];

  const stats = [
    { label: 'Average Savings', value: '45%', description: 'compared to traditional shipping' },
    { label: 'Customer Satisfaction', value: '98%', description: 'would recommend to friends' },
    { label: 'Delivery Success Rate', value: '99.4%', description: 'packages delivered successfully' },
    { label: 'Community Growth', value: '300%', description: 'year-over-year member increase' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display text-3xl lg:text-4xl mb-6 text-gray-900">
            Success Stories from Our <span className="text-gradient-premium">Community</span>
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from real community members who are earning income and saving money 
            through our decentralized logistics network.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-olive-50 to-white rounded-2xl p-8 lg:p-12 border border-olive-100 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-olive-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {currentData.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{currentData.name}</h3>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <currentData.roleIcon className="w-4 h-4" />
                        <span className="text-sm">{currentData.role}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm">{currentData.location}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <StarSolidIcon
                            key={i}
                            className={`w-4 h-4 ${i < currentData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <svg className="w-8 h-8 text-olive-300 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    <blockquote className="text-lg text-gray-700 leading-relaxed pl-6 italic">
                      "{currentData.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-6 p-4 bg-olive-100 rounded-lg">
                    <div className="text-sm font-medium text-olive-800 mb-1">
                      {currentData.highlight}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="space-y-4">
                      {Object.entries(currentData.stats).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-semibold text-olive-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-olive-600 transition-colors duration-200"
              >
                <ChevronLeftIcon className="w-5 h-5" />
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-olive-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-olive-600 transition-colors duration-200"
              >
                <span>Next</span>
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Proven Results Across Our Network
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              These numbers represent real outcomes from our growing community of users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-olive-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-olive-600 to-olive-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-olive-100 mb-8 max-w-2xl mx-auto">
              Join thousands of community members who are already transforming their 
              relationship with shipping and logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-olive-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center font-medium"
              >
                Start Your Journey
              </Link>
              <Link
                to="/about-us"
                className="px-8 py-3 border border-olive-300 text-white rounded-lg hover:bg-olive-600 transition-colors duration-200 text-center"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
