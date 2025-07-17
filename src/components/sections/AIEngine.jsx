import { CpuChipIcon, ChartBarIcon, ClockIcon, MapIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const AIEngine = () => {
  const aiFeatures = [
    {
      icon: CpuChipIcon,
      title: 'Self-Optimizing Routing',
      description: 'Neural networks continuously learn and adapt to optimize delivery routes in real-time',
      metrics: ['60% Cost Reduction', '3x Faster Delivery', '99.9% Accuracy'],
      tech: 'Machine Learning Algorithms'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'AI predicts demand patterns, traffic conditions, and optimal resource allocation',
      metrics: ['Real-time Forecasting', 'Dynamic Pricing', 'Resource Optimization'],
      tech: 'Advanced Analytics Engine'
    },
    {
      icon: MapIcon,
      title: 'Global Network Intelligence',
      description: 'Intelligent coordination across multiple logistics networks and service providers',
      metrics: ['Multi-Modal Transport', 'Cross-Border Optimization', 'Network Redundancy'],
      tech: 'Distributed AI Coordination'
    }
  ];

  const engineComponents = [
    {
      icon: BoltIcon,
      title: 'ShipShift AI Core',
      description: 'The central intelligence system that powers all logistics operations',
      features: [
        'Real-time route optimization',
        'Dynamic pricing algorithms',
        'Fraud detection systems',
        'Performance analytics'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Wallet OS Integration',
      description: 'Multi-chain wallet with embedded AI defense triggers and automation',
      features: [
        'Self-defending mechanisms',
        'Automated token management',
        'Cross-chain compatibility',
        'Real-time threat detection'
      ]
    },
    {
      icon: ClockIcon,
      title: 'Compliance Layer',
      description: 'AI-powered compliance monitoring and regulatory adaptation',
      features: [
        'KYC automation for fiat bridges',
        'Regulatory compliance monitoring',
        'Risk assessment algorithms',
        'Audit trail generation'
      ]
    }
  ];

  const performanceMetrics = [
    {
      label: 'Route Optimization',
      value: '60%',
      description: 'Cost Reduction',
      icon: '🎯'
    },
    {
      label: 'Processing Speed',
      value: '<100ms',
      description: 'Response Time',
      icon: '⚡'
    },
    {
      label: 'Network Uptime',
      value: '99.9%',
      description: 'Availability',
      icon: '🛡️'
    },
    {
      label: 'AI Accuracy',
      value: '99.5%',
      description: 'Prediction Rate',
      icon: '🧠'
    }
  ];

  return (
    <Section id="ai-engine" className="bg-white">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          AI Technology
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-gradient">ShipShift AI Core</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced artificial intelligence that powers self-optimizing delivery routing, 
          predictive analytics, and autonomous logistics management.
        </p>
      </div>

      {/* AI Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {aiFeatures.map((feature, index) => (
          <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-olive-100 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-olive-200 transition-colors">
                <feature.icon className="h-10 w-10 text-olive-600" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-xs text-olive-600 bg-olive-50 px-3 py-1 rounded-full inline-block mb-4">
                  {feature.tech}
                </div>
              </div>

              <div className="space-y-2">
                {feature.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-olive-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Engine Components */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Engine Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineComponents.map((component, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <component.icon className="h-6 w-6 text-olive-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{component.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-1">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-olive-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-gray-50 to-olive-50 rounded-2xl p-8 mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Performance Metrics</h3>
          <p className="text-gray-600">Real-time performance indicators of our AI logistics engine</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{metric.icon}</div>
              <div className="text-3xl font-bold text-olive-600 mb-1">
                {metric.value}
              </div>
              <div className="font-medium text-gray-900 text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Architecture */}
      <Card className="p-8 bg-gradient-to-r from-olive-600 to-olive-700 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Architecture</h3>
        <p className="text-olive-100 mb-6 max-w-2xl mx-auto">
          Built on scalable microservices architecture with 99.9% uptime SLA, 
          real-time processing capabilities, and enterprise security standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-bold mb-1">Microservices</div>
            <div className="text-olive-100 text-sm">Scalable Architecture</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">Real-time</div>
            <div className="text-olive-100 text-sm">Processing Engine</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">Enterprise</div>
            <div className="text-olive-100 text-sm">Security Standards</div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default AIEngine;
