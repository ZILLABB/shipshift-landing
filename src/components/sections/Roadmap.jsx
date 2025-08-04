import { motion } from 'motion/react';
import { CheckCircleIcon, ClockIcon, PlayIcon } from '@heroicons/react/24/outline';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Platform Launch',
      description: 'Core platform launch with basic shipping functionality and carrier network.',
      achievements: [
        'Web platform launched',
        'Mobile app released',
        'Initial carrier partnerships',
        '1,000+ early users onboarded'
      ]
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      title: 'Enhanced Features',
      description: 'Advanced tracking, international shipping, and business tools.',
      achievements: [
        'Real-time tracking system',
        'International shipping to 50+ countries',
        'Business dashboard',
        'API v1.0 release'
      ]
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      title: 'Scale & Optimization',
      description: 'Platform optimization, expanded carrier network, and advanced analytics.',
      achievements: [
        'AI-powered route optimization',
        '200+ carrier partners',
        'Advanced analytics dashboard',
        'Enterprise solutions'
      ]
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      title: 'Global Expansion',
      description: 'Worldwide coverage, advanced automation, and marketplace features.',
      achievements: [
        'Global shipping coverage',
        'Automated customs handling',
        'Carrier marketplace',
        'White-label solutions'
      ]
    },
    {
      quarter: 'Q1 2025',
      status: 'planned',
      title: 'Innovation & AI',
      description: 'Next-generation features powered by artificial intelligence and machine learning.',
      achievements: [
        'Predictive delivery analytics',
        'Smart packaging recommendations',
        'Autonomous delivery integration',
        'Carbon footprint tracking'
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'planned',
      title: 'Ecosystem Growth',
      description: 'Platform ecosystem expansion with third-party integrations and partnerships.',
      achievements: [
        'E-commerce platform integrations',
        'Third-party developer program',
        'Logistics marketplace',
        'Sustainability initiatives'
      ]
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

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
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
            Our <span className="text-gradient-premium">Roadmap</span>
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our journey as we continue to innovate and expand our logistics platform 
            to serve customers worldwide.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} flex items-center justify-center flex-shrink-0`}>
                  {getStatusIcon(item.status)}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-olive-600 bg-olive-100 px-3 py-1 rounded-full">
                        {item.quarter}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' :
                        item.status === 'in-progress' ? 'bg-olive-100 text-olive-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status === 'completed' ? 'Completed' :
                         item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                    
                    <h3 className="text-subheading text-xl mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-body text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            item.status === 'completed' ? 'bg-green-500' :
                            item.status === 'in-progress' ? 'bg-olive-600' :
                            'bg-gray-400'
                          }`}></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-subheading text-xl text-center mb-8 text-gray-900">
            Progress So Far
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-olive-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-olive-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Carrier Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-olive-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-olive-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Delivery Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
