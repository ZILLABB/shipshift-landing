import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  CheckBadgeIcon,
  StarIcon,
  LockClosedIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const TrustIndicators = () => {
  const trustMetrics = [
    {
      icon: UserGroupIcon,
      number: '15,643',
      label: 'Verified Members',
      description: 'Background-checked community members across our network'
    },
    {
      icon: GlobeAltIcon,
      number: '128',
      label: 'Active Colonies',
      description: 'Local communities operating in major cities worldwide'
    },
    {
      icon: TrophyIcon,
      number: '67,891',
      label: 'Successful Deliveries',
      description: 'Packages delivered safely through our network'
    },
    {
      icon: StarIcon,
      number: '4.9/5',
      label: 'Average Rating',
      description: 'Customer satisfaction score from verified reviews'
    }
  ];

  const securityFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Insurance',
      description: 'Every package is automatically insured up to $5,000 with no additional cost.',
      features: ['Automatic coverage', 'No deductibles', 'Fast claims processing', 'Full replacement value']
    },
    {
      icon: CheckBadgeIcon,
      title: 'Member Verification',
      description: 'All community members undergo thorough background checks and identity verification.',
      features: ['Background screening', 'Identity verification', 'Reference checks', 'Ongoing monitoring']
    },
    {
      icon: LockClosedIcon,
      title: 'Blockchain Security',
      description: 'Smart contracts and blockchain technology ensure transparent, secure transactions.',
      features: ['Immutable tracking', 'Automated payments', 'Dispute resolution', 'Transparent records']
    },
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and real-time assistance for all users.',
      features: ['Live chat support', 'Emergency hotline', 'Community forums', 'Video tutorials']
    }
  ];

  const partnerships = [
    {
      name: 'TechCrunch',
      description: 'Featured as "Startup to Watch"',
      logo: 'TC'
    },
    {
      name: 'Forbes',
      description: 'Listed in "Future of Logistics"',
      logo: 'FB'
    },
    {
      name: 'Y Combinator',
      description: 'Alumni Network Member',
      logo: 'YC'
    },
    {
      name: 'Andreessen Horowitz',
      description: 'Backed by a16z',
      logo: 'A16Z'
    }
  ];

  const certifications = [
    {
      title: 'SOC 2 Type II',
      description: 'Security and availability controls certified',
      status: 'Certified'
    },
    {
      title: 'ISO 27001',
      description: 'Information security management certified',
      status: 'Certified'
    },
    {
      title: 'GDPR Compliant',
      description: 'European data protection regulation compliant',
      status: 'Compliant'
    },
    {
      title: 'PCI DSS',
      description: 'Payment card industry security standards',
      status: 'Level 1'
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
            Trusted by <span className="text-gradient-premium">Thousands</span> Worldwide
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to security, transparency, and community trust has made us 
            the preferred choice for decentralized logistics.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-olive-600" />
                </div>
                <div className="text-3xl font-bold text-olive-600 mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Enterprise-Grade Security
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Your packages and personal information are protected by multiple layers 
              of security and industry-leading practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
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
                    <feature.icon className="w-6 h-6 text-olive-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-subheading text-xl mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-body text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-olive-600 rounded-full mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships & Recognition */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Recognized by Industry Leaders
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Our innovative approach to logistics has earned recognition from 
              top publications and backing from leading investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold text-gray-600">
                  {partner.logo}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4 text-gray-900">
              Compliance & Certifications
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of security, privacy, and operational excellence 
              through rigorous certification processes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{cert.description}</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Trust CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-olive-600 to-olive-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-subheading text-2xl lg:text-3xl mb-4">
              Join a Network You Can Trust
            </h3>
            <p className="text-lg text-olive-100 mb-8 max-w-2xl mx-auto">
              With enterprise-grade security, comprehensive insurance, and a verified community, 
              your packages and personal information are always protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-olive-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center font-medium"
              >
                Get Started Safely
              </Link>
              <Link
                to="/privacy"
                className="px-8 py-3 border border-olive-300 text-white rounded-lg hover:bg-olive-600 transition-colors duration-200 text-center"
              >
                View Security Details
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
