import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  MapPinIcon,
  TruckIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: UserGroupIcon,
      title: 'Join a Local Colony',
      description: 'Find a colony in your area and choose your role - whether you want to provide storage, transport packages, or simply send and receive shipments.',
      details: ['Browse nearby colonies', 'Select your preferred role', 'Complete verification process', 'Start earning immediately']
    },
    {
      step: 2,
      icon: MapPinIcon,
      title: 'Smart Route Matching',
      description: 'Our system automatically matches packages with community members who are already traveling along the required routes.',
      details: ['AI-powered route optimization', 'Real-time matching system', 'Efficient delivery chains', 'Reduced travel time']
    },
    {
      step: 3,
      icon: TruckIcon,
      title: 'Secure Package Handoffs',
      description: 'Packages move through the network via verified community members, with each transfer tracked and secured by smart contracts.',
      details: ['Verified member network', 'Blockchain tracking', 'Automated insurance', 'Secure handoff protocols']
    },
    {
      step: 4,
      icon: CurrencyDollarIcon,
      title: 'Earn Tokens & Rewards',
      description: 'Get rewarded with tokens for every contribution you make to the network, whether storing, transporting, or facilitating deliveries.',
      details: ['Instant token rewards', 'Performance bonuses', 'Community recognition', 'Scalable earnings']
    }
  ];

  const benefits = [
    {
      icon: CheckCircleIcon,
      title: 'Lower Costs',
      description: 'Save 40-60% compared to traditional shipping by utilizing existing travel routes.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Faster Delivery',
      description: 'Packages move through optimized community routes, often faster than traditional carriers.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint by maximizing existing transportation efficiency.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Community Building',
      description: 'Strengthen local communities while earning income through mutual assistance.'
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
            How <span className="text-gradient-premium">ShipShift</span> Works
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our decentralized logistics network connects community members to create 
            a more efficient, affordable, and sustainable way to ship packages.
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-olive-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="w-8 h-8 bg-olive-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </span>
                        <h3 className="text-subheading text-xl text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-body text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-olive-600 rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Why Choose Our Network?
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of community-powered logistics that benefits everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-olive-50 to-white rounded-xl border border-olive-100 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-olive-600" />
                </div>
                <h4 className="text-subheading text-lg mb-2 text-gray-900">{benefit.title}</h4>
                <p className="text-body text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-olive-600 to-olive-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4">
              Ready to Transform Your Shipping Experience?
            </h3>
            <p className="text-lg text-olive-100 mb-8 max-w-2xl mx-auto">
              Join thousands of community members who are already saving money and earning tokens 
              through our revolutionary logistics network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-3 bg-white text-olive-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                Join a Colony
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-olive-300 text-white rounded-lg hover:bg-olive-600 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
