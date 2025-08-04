import { motion } from 'motion/react';
import { 
  TruckIcon, 
  ClockIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  CubeIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const userRoles = [
    {
      icon: BuildingOfficeIcon,
      title: 'Colony Owner',
      description: 'Start and manage a ShipShift Colony in your area with admin privileges.',
      features: ['Colony Owner Tokens', 'Minimum signatory requirements', 'Network governance', 'Revenue sharing'],
      tokenType: 'Colony Owner Tokens'
    },
    {
      icon: CubeIcon,
      title: 'Reserve Operator',
      description: 'Provide secure storage space for temporary package holding.',
      features: ['Storage space rental', 'Package security', 'Flexible hours', 'Token rewards'],
      tokenType: 'Colony Reserve Operator Tokens'
    },
    {
      icon: TruckIcon,
      title: 'Dispatch Operator',
      description: 'Transport packages along your daily commute routes.',
      features: ['Route optimization', 'Flexible pickup/delivery', 'Earn while commuting', 'Real-time coordination'],
      tokenType: 'Colony Dispatcher Tokens'
    },
    {
      icon: GlobeAltIcon,
      title: 'Participants',
      description: 'Join as a requester, recipient, holder, or performer in the network.',
      features: ['Multiple participation types', 'Collateral system', 'Service payments', 'Community benefits'],
      tokenType: 'Participation Rewards'
    }
  ];

  const colonyFeatures = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Steps System',
      description: 'Multi-step delivery processes with combinable constraints for complex routes.'
    },
    {
      icon: ChartBarIcon,
      title: 'Collabo Templates',
      description: 'Create, store, and reuse delivery chain templates for efficient operations.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Smart Contracts',
      description: 'Automated collateral and payment systems ensure secure transactions.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Colony Governance',
      description: 'Democratic decision-making and revenue sharing within each colony.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Colony <span className="text-gradient-premium">Ecosystem</span>
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our decentralized logistics network where community members earn tokens by helping
            transport packages along their daily routes. Choose your role and start earning.
          </p>
        </motion.div>

        {/* User Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {userRoles.map((role, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <role.icon className="w-6 h-6 text-olive-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-subheading text-xl text-gray-900">{role.title}</h3>
                    <span className="text-xs bg-olive-100 text-olive-700 px-2 py-1 rounded-full">
                      {role.tokenType}
                    </span>
                  </div>
                  <p className="text-body text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                  <ul className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-olive-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Solutions */}
        <motion.div
          className="bg-gradient-to-br from-olive-50 to-white rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Colony Features
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Advanced features that make our decentralized logistics network efficient, secure, and profitable for all participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colonyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-olive-100 text-center hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-olive-600" />
                </div>
                <h4 className="text-subheading text-lg mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-body text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4">
              Ready to Join a Colony?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of community members already earning tokens through our decentralized logistics network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200">
                Find a Colony
              </button>
              <button className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Start a Colony
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
