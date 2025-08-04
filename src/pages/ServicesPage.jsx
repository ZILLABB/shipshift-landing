import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../contexts/CurrencyContext';
import { 
  BuildingOfficeIcon,
  CubeIcon,
  TruckIcon,
  UserGroupIcon,
  HomeIcon,
  CheckIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ServicesPage = () => {
  const [selectedRole, setSelectedRole] = useState('colony-owner');
  const { convertPrice } = useCurrency();

  const userRoles = {
    'colony-owner': {
      title: 'Colony Owner',
      icon: BuildingOfficeIcon,
      description: 'Start and manage a ShipShift Colony in your area with administrative privileges and governance rights.',
      tokenType: 'Colony Owner Tokens',
      pricing: 'Revenue Share Model',
      requirements: [
        'Minimum 5 community signatories',
        'Local business registration',
        'Community leadership experience',
        'Commitment to network governance'
      ],
      benefits: [
        'Colony Owner Tokens with governance rights',
        'Revenue sharing from all colony operations',
        'Administrative control over colony policies',
        'Priority access to new features',
        'Direct support from ShipShift team',
        'Network expansion opportunities'
      ],
      responsibilities: [
        'Recruit and onboard colony members',
        'Facilitate community governance decisions',
        'Ensure compliance with network standards',
        'Resolve disputes and conflicts',
        'Coordinate with other colony owners',
        'Maintain colony reputation and performance'
      ],
      earnings: convertPrice(850) + '-' + convertPrice(2000) + '/month',
      timeCommitment: '10-15 hours/week'
    },
    'reserve-operator': {
      title: 'Reserve Operator',
      icon: CubeIcon,
      description: 'Provide secure storage space for temporary package holding and earn tokens for your contribution.',
      tokenType: 'Colony Reserve Operator Tokens',
      pricing: 'Per Package Stored',
      requirements: [
        'Secure storage space (minimum 50 sq ft)',
        'Reliable internet connection',
        'Available during business hours',
        'Background check clearance'
      ],
      benefits: [
        'Colony Reserve Operator Tokens',
        'Flexible working hours',
        'Passive income from storage',
        'Insurance coverage for stored items',
        'Community recognition and reputation',
        'Scalable earning potential'
      ],
      responsibilities: [
        'Secure package storage and handling',
        'Maintain storage facility standards',
        'Coordinate pickup and delivery schedules',
        'Update package status in real-time',
        'Ensure package security and integrity',
        'Communicate with dispatch operators'
      ],
      earnings: convertPrice(300) + '-' + convertPrice(900) + '/month',
      timeCommitment: '5-10 hours/week'
    },
    'dispatch-operator': {
      title: 'Dispatch Operator',
      icon: TruckIcon,
      description: 'Transport packages along your daily commute routes and earn tokens for every successful delivery.',
      tokenType: 'Colony Dispatcher Tokens',
      pricing: 'Per Delivery + Distance',
      requirements: [
        'Valid driver\'s license',
        'Reliable transportation (car, bike, etc.)',
        'Regular commute routes',
        'Mobile device with GPS'
      ],
      benefits: [
        'Colony Dispatcher Tokens',
        'Earn while commuting',
        'Flexible route selection',
        'Real-time route optimization',
        'Fuel cost compensation',
        'Performance bonuses'
      ],
      responsibilities: [
        'Safe and timely package transport',
        'Follow optimized delivery routes',
        'Maintain communication with recipients',
        'Update delivery status in real-time',
        'Handle packages with care',
        'Coordinate with reserve operators'
      ],
      earnings: convertPrice(400) + '-' + convertPrice(1200) + '/month',
      timeCommitment: 'During commute hours'
    },
    'participant': {
      title: 'Participant',
      icon: UserGroupIcon,
      description: 'Send and receive packages through the network while earning participation rewards.',
      tokenType: 'Participation Rewards',
      pricing: 'Pay-per-use + Rewards',
      requirements: [
        'Valid identification',
        'Verified address',
        'Payment method',
        'Community agreement acceptance'
      ],
      benefits: [
        'Participation reward tokens',
        'Access to colony network',
        'Discounted shipping rates',
        'Community support and benefits',
        'Priority customer service',
        'Referral bonuses'
      ],
      responsibilities: [
        'Provide accurate shipping information',
        'Be available for package receipt',
        'Rate and review service quality',
        'Follow community guidelines',
        'Report any issues promptly',
        'Participate in community governance'
      ],
      earnings: convertPrice(100) + '-' + convertPrice(300) + '/month',
      timeCommitment: 'As needed'
    }
  };

  const pricingComparison = [
    {
      feature: 'Local Delivery (under 10 miles)',
      traditional: convertPrice(15) + '-' + convertPrice(25),
      shipshift: convertPrice(8) + '-' + convertPrice(12),
      savings: '40-50%'
    },
    {
      feature: 'Same-day Delivery',
      traditional: convertPrice(25) + '-' + convertPrice(50),
      shipshift: convertPrice(12) + '-' + convertPrice(20),
      savings: '50-60%'
    },
    {
      feature: 'International Shipping',
      traditional: convertPrice(50) + '-' + convertPrice(150),
      shipshift: convertPrice(25) + '-' + convertPrice(75),
      savings: '40-50%'
    },
    {
      feature: 'Package Insurance',
      traditional: convertPrice(5) + '-' + convertPrice(15) + ' extra',
      shipshift: 'Included',
      savings: '100%'
    }
  ];

  const colonyFeatures = [
    {
      icon: ClockIcon,
      title: 'Steps System',
      description: 'Multi-step delivery processes with combinable constraints for complex routes and scheduling.',
      benefits: ['Flexible routing', 'Complex delivery chains', 'Time-based constraints', 'Multi-stop optimization']
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Collabo Templates',
      description: 'Create, store, and reuse delivery chain templates for efficient repeated operations.',
      benefits: ['Template library', 'Reusable workflows', 'Efficiency optimization', 'Best practice sharing']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Smart Contracts',
      description: 'Automated collateral and payment systems ensure secure transactions for all participants.',
      benefits: ['Automated payments', 'Dispute resolution', 'Transparent processes', 'Trust building']
    },
    {
      icon: UserGroupIcon,
      title: 'Colony Governance',
      description: 'Democratic decision-making and revenue sharing within each colony community.',
      benefits: ['Community voting', 'Revenue sharing', 'Policy setting', 'Collective ownership']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-max section-padding py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-olive-600 flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Services</span>
          </nav>
        </div>
      </div>

      <div className="container-max section-padding py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display text-3xl lg:text-4xl mb-6 text-gray-900">
            Colony <span className="text-gradient-premium">Ecosystem</span>
          </h1>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our decentralized logistics network where community members earn tokens by helping 
            transport packages along their daily routes. Choose your role and start earning.
          </p>
        </motion.div>

        {/* Role Selection Tabs */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {Object.entries(userRoles).map(([key, role]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${
                    selectedRole === key
                      ? 'bg-olive-100 text-olive-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {React.createElement(role.icon, { className: "w-5 h-5" })}
                  <span className="font-medium">{role.title}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Selected Role Details */}
        <motion.div
          key={selectedRole}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Role Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center">
                  {React.createElement(userRoles[selectedRole].icon, { className: "w-6 h-6 text-olive-600" })}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {userRoles[selectedRole].title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {userRoles[selectedRole].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {userRoles[selectedRole].requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {userRoles[selectedRole].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <StarIcon className="w-4 h-4 text-olive-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userRoles[selectedRole].responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-olive-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {resp}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Role Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Role Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Token Type</div>
                  <div className="font-medium text-olive-600">{userRoles[selectedRole].tokenType}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Pricing Model</div>
                  <div className="font-medium text-gray-900">{userRoles[selectedRole].pricing}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Potential Earnings</div>
                  <div className="font-medium text-green-600">{userRoles[selectedRole].earnings}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Time Commitment</div>
                  <div className="font-medium text-gray-900">{userRoles[selectedRole].timeCommitment}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-olive-50 to-white rounded-xl p-6 border border-olive-100">
              <h3 className="font-semibold text-gray-900 mb-3">Ready to Get Started?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Join thousands of community members already earning through our decentralized network.
              </p>
              <Link
                to="/signup"
                className="block w-full px-4 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center"
              >
                Apply for This Role
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Pricing Comparison */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose ShipShift?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our community-powered pricing with traditional shipping services.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Service</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Traditional</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-olive-600">ShipShift</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-green-600">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingComparison.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{item.feature}</td>
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

        {/* Colony Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Advanced Colony Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful tools that make our decentralized logistics network efficient, secure, and profitable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {colonyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-olive-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-xs text-gray-500">
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
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-olive-900 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Ready to Join the Revolution?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the world's first decentralized logistics ecosystem and start earning tokens today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center"
              >
                Join a Colony
              </Link>
              <Link
                to="/faq"
                className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
