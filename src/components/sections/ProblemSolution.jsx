import { 
  ExclamationTriangleIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon,
  UserGroupIcon,
  LightBulbIcon,
  LinkIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Section from '../layout/Section';

const ProblemSolution = () => {
  const problems = [
    {
      icon: CurrencyDollarIcon,
      title: 'Fragmented Global Logistics',
      description: 'Global logistics is fragmented, expensive, and inaccessible to everyday users and micro-enterprises.',
      tech: 'No unified system linking digital currency with physical delivery'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Crypto Economy Disconnect',
      description: 'The crypto economy lacks real-world application beyond trading and speculation.',
      tech: 'Missing bridge between digital assets and physical services'
    },
    {
      icon: UserGroupIcon,
      title: 'Lack of Programmable Trust',
      description: 'No trustless system that links digital currency with physical delivery, security, and usability.',
      tech: 'Manual processes without cryptographic verification'
    }
  ];

  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'ShipShift AI Core',
      description: 'Self-optimizing delivery routing engine that unifies physical and digital economies.',
      tech: 'AI-powered logistics with delivery-backed token utility'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Self-Defending Protocol',
      description: 'Multi-layer security with real-time asset protection and fraud detection.',
      tech: 'Programmable trust with autonomous security layers'
    },
    {
      icon: LinkIcon,
      title: 'Work-to-Earn Economy',
      description: 'Utility-first model where users earn SST tokens through real logistics contributions.',
      tech: 'Fiat/crypto dual economy compatibility'
    }
  ];

  return (
    <Section variant="gray" id="protocol">
      <div className="text-center mb-16">
        <h2 className="text-heading text-3xl lg:text-4xl text-gray-900 mb-4">
          Bridging <span className="bg-gradient-to-r from-olive-600 to-claude-500 bg-clip-text text-transparent">Digital & Physical</span> Economies
        </h2>
        <p className="text-body text-xl text-gray-600 max-w-3xl mx-auto">
          ShipShift creates the first trustless operating system for global logistics,
          unifying crypto and physical delivery through programmable trust.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Problem Side */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-heading text-2xl text-gray-900 mb-4">Current Market Gaps</h3>
            <p className="text-body text-gray-600 mb-8">
              The global economy lacks a unified system connecting digital assets with physical services:
            </p>
          </div>

          <div className="space-y-6">
            {problems.map((problem, index) => (
              <Card key={index} className="group p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <problem.icon className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-subheading text-gray-900 mb-2">{problem.title}</h4>
                    <p className="text-body text-gray-600 text-sm leading-relaxed mb-2">{problem.description}</p>
                    <div className="text-xs text-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-mono inline-flex items-center px-2 py-1 rounded-full bg-red-50 text-red-700 font-medium">
                        {problem.tech}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Problem Stats */}
          <Card variant="gradient" className="p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-700">$4.7T</div>
                <div className="text-sm text-emerald-600">Global Logistics Market</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-700">85%</div>
                <div className="text-sm text-emerald-600">Underserved Markets</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Solution Side */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4">
              <LightBulbIcon className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-heading text-2xl text-gray-900 mb-4">How We're Different</h3>
            <p className="text-body text-gray-600 mb-8">
              We've built a better way to ship that puts customers first:
            </p>
          </div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="group p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-olive-500 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-olive-50 rounded-lg flex items-center justify-center group-hover:bg-olive-100 transition-colors">
                    <solution.icon className="h-5 w-5 text-olive-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-subheading text-gray-900 mb-2 group-hover:text-olive-700 transition-colors">{solution.title}</h4>
                    <p className="text-body text-gray-600 text-sm leading-relaxed mb-2">{solution.description}</p>
                    <div className="text-xs text-claude-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-mono inline-flex items-center px-2 py-1 rounded-full bg-claude-50 text-claude-700 font-medium">
                        {solution.tech}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Solution Benefits */}
          <Card className="p-6 bg-gradient-to-r from-olive-600 via-claude-500 to-olive-700 text-white">
            <h4 className="font-semibold mb-4">Technical Advantages</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Machine Learning Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Blockchain Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Microservices Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Automated Smart Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Decentralized Infrastructure</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSolution;
