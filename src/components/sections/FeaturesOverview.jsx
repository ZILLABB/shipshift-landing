import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const FeaturesOverview = () => {
  const coreFeatures = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms automatically match packages with the most efficient routes and available community members.',
      benefits: ['Optimal route planning', 'Real-time optimization', 'Cost reduction', 'Faster delivery times']
    },
    {
      icon: MapPinIcon,
      title: 'Real-Time Tracking',
      description: 'Track your packages every step of the way with blockchain-powered transparency and live updates.',
      benefits: ['Live GPS tracking', 'Blockchain verification', 'Delivery notifications', 'Complete transparency']
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Token Rewards System',
      description: 'Earn tokens for every contribution to the network, from storage to transportation to successful deliveries.',
      benefits: ['Instant rewards', 'Performance bonuses', 'Scalable earnings', 'Community recognition']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Smart Contract Security',
      description: 'Automated contracts ensure secure transactions, dispute resolution, and guaranteed payments.',
      benefits: ['Automated payments', 'Dispute resolution', 'Fraud protection', 'Trust building']
    }
  ];

  const platformFeatures = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile-First Design',
      description: 'Manage your shipments and earnings on the go with our intuitive mobile app.',
      highlight: 'Available on iOS & Android'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Scheduling',
      description: 'Work when you want, how you want. Set your own availability and preferences.',
      highlight: '24/7 platform access'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Support',
      description: 'Get help from verified community members and dedicated support staff.',
      highlight: 'Live chat & forums'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard',
      description: 'Track your performance, earnings, and impact with detailed analytics.',
      highlight: 'Real-time insights'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Network',
      description: 'Access shipping services across 50+ countries through our expanding network.',
      highlight: 'International coverage'
    },
    {
      icon: BoltIcon,
      title: 'Instant Notifications',
      description: 'Stay updated with real-time alerts about packages, earnings, and opportunities.',
      highlight: 'Push notifications'
    }
  ];

  const uniqueFeatures = [
    {
      title: 'Steps System',
      description: 'Create complex, multi-step delivery chains with combinable constraints for sophisticated routing.',
      icon: '🔗',
      details: 'Perfect for international shipments or packages requiring multiple handoffs'
    },
    {
      title: 'Collabo Templates',
      description: 'Save and reuse successful delivery patterns to optimize recurring shipments.',
      icon: '📋',
      details: 'Build a library of efficient routes and share best practices'
    },
    {
      title: 'Colony Governance',
      description: 'Participate in democratic decision-making within your local colony community.',
      icon: '🗳️',
      details: 'Vote on policies, rates, and community initiatives'
    },
    {
      title: 'Dynamic Pricing',
      description: 'Fair, transparent pricing that adjusts based on demand, distance, and complexity.',
      icon: '💰',
      details: 'Always competitive rates with no hidden fees'
    }
  ];

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
            Powerful Features for <span className="text-gradient-premium">Modern Logistics</span>
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge technology with community collaboration 
            to deliver features that traditional shipping simply can't match.
          </p>
        </motion.div>

        {/* Core Features */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Core Platform Features
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              The foundation of our decentralized logistics ecosystem, designed for efficiency and trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-olive-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-subheading text-xl mb-3 text-gray-900">{feature.title}</h4>
                    <p className="text-body text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-olive-600 rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Platform Features Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Platform Capabilities
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage shipments, track earnings, and connect with your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-olive-600" />
                </div>
                <h4 className="text-subheading text-lg mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-body text-gray-600 text-sm mb-3">{feature.description}</p>
                <div className="inline-block px-3 py-1 bg-olive-100 text-olive-700 text-xs rounded-full">
                  {feature.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Unique to ShipShift
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Innovative features that set us apart from traditional shipping and other platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-olive-50 to-white p-8 rounded-2xl border border-olive-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-subheading text-xl mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-body text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                    <p className="text-sm text-olive-700 italic">{feature.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-olive-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4">
              Experience the Future of Shipping
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't just take our word for it. Try our platform and experience 
              the difference that community-powered logistics can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center font-medium"
              >
                Start Using Features
              </Link>
              <Link
                to="/roadmap"
                className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                See What's Coming
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
