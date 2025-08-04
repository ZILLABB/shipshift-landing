import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../../contexts/CurrencyContext';
import { 
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Benefits = () => {
  const { convertPrice } = useCurrency();

  const userBenefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Earn While You Travel',
      description: 'Turn your daily commute into income by transporting packages along routes you already take.',
      stats: convertPrice(300) + '-' + convertPrice(1200) + '/month',
      highlight: 'Average earnings for active dispatch operators'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Schedule',
      description: 'Work on your own terms. Choose when and how often you want to participate in the network.',
      stats: '5-15 hours/week',
      highlight: 'Typical time commitment for most roles'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Protected',
      description: 'All transactions are protected by smart contracts and automatic insurance coverage.',
      stats: '99.9%',
      highlight: 'Success rate with full protection'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Support',
      description: 'Join a network of verified, trusted community members who help each other succeed.',
      stats: '15,000+',
      highlight: 'Active community members worldwide'
    }
  ];

  const businessBenefits = [
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      description: 'Access shipping services in over 50 countries through our expanding colony network.',
      feature: 'International shipping made simple'
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Savings',
      description: 'Reduce shipping costs by 40-60% compared to traditional carriers.',
      feature: 'Transparent, competitive pricing'
    },
    {
      icon: HeartIcon,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint by utilizing existing transportation routes.',
      feature: 'Sustainable logistics solution'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation',
      description: 'Be part of the future of logistics with cutting-edge technology.',
      feature: 'AI-powered optimization'
    }
  ];

  const comparisonData = [
    {
      feature: 'Local Delivery (under 10 miles)',
      traditional: convertPrice(15) + '-' + convertPrice(25),
      shipshift: convertPrice(8) + '-' + convertPrice(12),
      savings: '40-50% savings'
    },
    {
      feature: 'Same-day Delivery',
      traditional: convertPrice(25) + '-' + convertPrice(50),
      shipshift: convertPrice(12) + '-' + convertPrice(20),
      savings: '50-60% savings'
    },
    {
      feature: 'International Shipping',
      traditional: convertPrice(50) + '-' + convertPrice(150),
      shipshift: convertPrice(25) + '-' + convertPrice(75),
      savings: '40-50% savings'
    },
    {
      feature: 'Package Insurance',
      traditional: convertPrice(5) + '-' + convertPrice(15) + ' extra',
      shipshift: 'Included',
      savings: '100% savings'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Why Join the <span className="text-gradient-premium">ShipShift Network</span>?
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the benefits of being part of a community-powered logistics ecosystem 
            that rewards participation and creates value for everyone.
          </p>
        </motion.div>

        {/* User Benefits */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Benefits for Community Members
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to earn extra income or save on shipping costs, 
              our network offers something valuable for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-olive-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-subheading text-xl mb-2 text-gray-900">{benefit.title}</h4>
                    <p className="text-body text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="bg-olive-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-olive-600 mb-1">{benefit.stats}</div>
                      <div className="text-sm text-olive-700">{benefit.highlight}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              ShipShift vs Traditional Shipping
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              See how our community-powered approach compares to traditional shipping services.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-olive-50 to-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Traditional Shipping</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-olive-600">ShipShift Network</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Your Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{item.traditional}</td>
                      <td className="px-6 py-4 text-sm text-center font-medium text-olive-600">{item.shipshift}</td>
                      <td className="px-6 py-4 text-sm text-center font-medium text-green-600">{item.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Business Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Built for the Future
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with community collaboration 
              to create a sustainable logistics solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-olive-600" />
                </div>
                <h4 className="text-subheading text-lg mb-2 text-gray-900">{benefit.title}</h4>
                <p className="text-body text-gray-600 text-sm mb-3">{benefit.description}</p>
                <div className="text-xs text-olive-600 font-medium">{benefit.feature}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-olive-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4">
              Experience the Benefits Today
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing community and start enjoying the benefits of decentralized logistics. 
              Whether you want to earn tokens or save on shipping, we have a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center font-medium"
              >
                Get Started Now
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Explore Roles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
