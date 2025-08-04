import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  PlayIcon,
  HomeIcon,
  CalendarIcon,
  TrophyIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CpuChipIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const RoadmapPage = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(null);

  const roadmapData = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Foundation & Launch',
      description: 'Core platform development and initial colony network establishment.',
      progress: 100,
      achievements: [
        'Web platform launched with core functionality',
        'Mobile app released for iOS and Android',
        'First 10 colonies established in major cities',
        'Initial carrier partnerships secured',
        '1,000+ early adopters onboarded',
        'Basic token economy implemented'
      ],
      metrics: {
        'Active Colonies': '12',
        'Registered Users': '1,247',
        'Packages Delivered': '3,456',
        'Success Rate': '98.5%'
      }
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      title: 'Enhanced Features & Growth',
      description: 'Advanced tracking, international capabilities, and business tools.',
      progress: 100,
      achievements: [
        'Real-time blockchain tracking system',
        'International shipping to 25+ countries',
        'Business dashboard and analytics',
        'API v1.0 release for developers',
        'Smart contract automation',
        'Community governance tools'
      ],
      metrics: {
        'Active Colonies': '45',
        'Registered Users': '5,892',
        'Packages Delivered': '18,234',
        'Success Rate': '99.1%'
      }
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      title: 'Scale & Optimization',
      description: 'Platform optimization, expanded network, and advanced analytics.',
      progress: 75,
      achievements: [
        'AI-powered route optimization engine',
        '100+ carrier partners across 6 countries',
        'Advanced analytics and reporting dashboard',
        'Enterprise solutions and white-label options',
        'Steps and Collaborative features implementation',
        'Enhanced security and fraud detection'
      ],
      metrics: {
        'Active Colonies': '128',
        'Registered Users': '15,643',
        'Packages Delivered': '67,891',
        'Success Rate': '99.4%'
      }
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      title: 'Global Expansion',
      description: 'Worldwide coverage, advanced automation, and marketplace features.',
      progress: 0,
      achievements: [
        'Global shipping coverage (50+ countries)',
        'Automated customs and regulatory handling',
        'Carrier marketplace and bidding system',
        'White-label solutions for enterprises',
        'Advanced dispute resolution system',
        'Carbon footprint tracking and offsetting'
      ],
      metrics: {
        'Target Colonies': '300+',
        'Target Users': '50,000+',
        'Target Countries': '50+',
        'Target Success Rate': '99.8%'
      }
    },
    {
      quarter: 'Q1 2025',
      status: 'planned',
      title: 'Innovation & AI',
      description: 'Next-generation features powered by artificial intelligence.',
      progress: 0,
      achievements: [
        'Predictive delivery analytics and optimization',
        'Smart packaging recommendations',
        'Autonomous delivery integration pilots',
        'Advanced machine learning route optimization',
        'Personalized user experience engine',
        'Sustainability impact measurement tools'
      ],
      metrics: {
        'Target Colonies': '500+',
        'Target Users': '100,000+',
        'AI Optimization': '95%+',
        'Carbon Reduction': '40%+'
      }
    },
    {
      quarter: 'Q2 2025',
      status: 'planned',
      title: 'Ecosystem Maturity',
      description: 'Platform ecosystem expansion and third-party integrations.',
      progress: 0,
      achievements: [
        'E-commerce platform integrations (Shopify, WooCommerce)',
        'Third-party developer program launch',
        'Logistics marketplace with 1000+ providers',
        'Sustainability certification program',
        'Advanced tokenomics and DeFi integration',
        'Global regulatory compliance framework'
      ],
      metrics: {
        'Target Colonies': '1,000+',
        'Target Users': '250,000+',
        'Platform Integrations': '100+',
        'Developer Partners': '500+'
      }
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <ClockIcon className="w-6 h-6 text-olive-600" />;
      default:
        return <PlayIcon className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-200';
      case 'in-progress':
        return 'bg-olive-100 border-olive-200';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Planned';
    }
  };

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
            <span className="text-gray-900">Roadmap</span>
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
          <div className="flex items-center justify-center mb-4">
            <CalendarIcon className="w-8 h-8 text-olive-600 mr-3" />
            <h1 className="text-display text-3xl lg:text-4xl text-gray-900">
              Development <span className="text-gradient-premium">Roadmap</span>
            </h1>
          </div>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our journey as we build the world's first decentralized logistics ecosystem. 
            Track our progress, milestones, and upcoming features.
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
            <TrophyIcon className="w-6 h-6 text-olive-600 mr-2" />
            Current Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-olive-600 mb-2">128</div>
              <div className="text-sm text-gray-600">Active Colonies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-olive-600 mb-2">15.6K</div>
              <div className="text-sm text-gray-600">Registered Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-olive-600 mb-2">67.9K</div>
              <div className="text-sm text-gray-600">Packages Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-olive-600 mb-2">99.4%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block"></div>
          
          <div className="space-y-8">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} flex items-center justify-center flex-shrink-0 hidden lg:flex`}>
                  {getStatusIcon(item.status)}
                </div>

                {/* Content Card */}
                <div className="lg:ml-24 lg:-mt-16">
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <span className="text-sm font-medium text-olive-600 bg-olive-100 px-3 py-1 rounded-full">
                          {item.quarter}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.status === 'completed' ? 'bg-green-100 text-green-700' :
                          item.status === 'in-progress' ? 'bg-olive-100 text-olive-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {getStatusText(item.status)}
                        </span>
                      </div>
                      
                      {item.status === 'in-progress' && (
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-olive-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{item.progress}%</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start text-sm text-gray-600">
                              <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                                item.status === 'completed' ? 'bg-green-500' :
                                item.status === 'in-progress' ? 'bg-olive-600' :
                                'bg-gray-400'
                              }`}></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {item.status === 'completed' ? 'Final Metrics' : 'Target Metrics'}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-semibold text-olive-600">{value}</div>
                              <div className="text-xs text-gray-600">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-olive-50 to-white rounded-2xl p-8 border border-olive-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <RocketLaunchIcon className="w-12 h-12 text-olive-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Beyond 2025: Our Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're building toward a future where decentralized logistics becomes the global standard, 
              creating sustainable economic opportunities for communities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-olive-100">
              <GlobeAltIcon className="w-8 h-8 text-olive-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-sm text-gray-600">10,000+ colonies across 100+ countries</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-olive-100">
              <CpuChipIcon className="w-8 h-8 text-olive-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-sm text-gray-600">Fully autonomous logistics optimization</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-olive-100">
              <UserGroupIcon className="w-8 h-8 text-olive-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Community Owned</h3>
              <p className="text-sm text-gray-600">1M+ active community participants</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Be Part of the Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Join our growing community and help shape the future of decentralized logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center"
              >
                Join a Colony
              </Link>
              <Link
                to="/about-us"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
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

export default RoadmapPage;
