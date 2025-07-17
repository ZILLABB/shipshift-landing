import { 
  UserGroupIcon, 
  ChartBarIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  CpuChipIcon,
  TruckIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Section from '../layout/Section';

const TeamMetrics = () => {
  const coreTeam = [
    {
      role: 'Protocol Architect',
      alias: 'CryptoNomad',
      background: 'Former lead architect of LayerZero bridges',
      expertise: ['Cross-chain protocols', 'DeFi infrastructure', 'Security architecture'],
      icon: CpuChipIcon
    },
    {
      role: 'Logistics Operations',
      alias: 'Tolu A.',
      background: 'Ex-GIG logistics operations lead',
      expertise: ['Supply chain optimization', 'African markets', 'Operations scaling'],
      icon: TruckIcon
    },
    {
      role: 'AI Systems Lead',
      alias: 'Kai W.',
      background: 'Built adaptive AI logistics stack for Southeast Asia\'s MicroFreight',
      expertise: ['Machine learning', 'Route optimization', 'Predictive analytics'],
      icon: ChartBarIcon
    }
  ];

  const advisoryCouncil = [
    {
      area: 'DeFi Regulatory Framework',
      region: 'Kenya',
      contribution: 'Sandbox regulatory framework design'
    },
    {
      area: 'Tokenized Asset Law',
      region: 'European Union',
      contribution: 'Legal compliance modeling'
    },
    {
      area: 'Layer-1 Protocol Design',
      region: 'Global',
      contribution: 'DAO governance architecture'
    }
  ];

  const paceSettingMetrics = [
    {
      metric: 'TDR',
      name: 'Trustless Delivery Rate',
      description: '% of transactions completed without dispute, verified by blockchain and real-time delivery confirmation',
      currentValue: '99.2%',
      target: '99.5%',
      icon: CheckCircleIcon,
      color: 'text-green-600'
    },
    {
      metric: 'SDEI',
      name: 'Self-Defense Efficiency Index',
      description: '% of liquidity retained vs attempted exploit attempts over time',
      currentValue: '100%',
      target: '100%',
      icon: ShieldCheckIcon,
      color: 'text-blue-600'
    },
    {
      metric: 'WEAR',
      name: 'Work-Earn Activation Ratio',
      description: 'Number of token earners vs total circulating tokens — proving utility over speculation',
      currentValue: '73%',
      target: '80%',
      icon: UserGroupIcon,
      color: 'text-purple-600'
    },
    {
      metric: 'GRT',
      name: 'Governance Responsiveness Time',
      description: 'Average time from proposal submission to decision enactment, with real usage benchmarks',
      currentValue: '4.2 days',
      target: '3.0 days',
      icon: ClockIcon,
      color: 'text-orange-600'
    }
  ];

  const industryBenchmarks = [
    {
      category: 'Traditional Logistics',
      metrics: {
        'Delivery Success Rate': '94%',
        'Cost Efficiency': 'Baseline',
        'Transparency': 'Limited',
        'Dispute Resolution': '7-14 days'
      }
    },
    {
      category: 'ShipShift Protocol',
      metrics: {
        'Delivery Success Rate': '99.2%',
        'Cost Efficiency': '60% reduction',
        'Transparency': 'Full blockchain',
        'Dispute Resolution': '< 24 hours'
      }
    }
  ];

  const developmentRoadmap = [
    {
      phase: 'Phase 1: Foundation',
      timeline: 'Q1-Q2 2024',
      status: 'Completed',
      achievements: ['Core protocol development', 'Initial market entry', 'Security audits']
    },
    {
      phase: 'Phase 2: Expansion',
      timeline: 'Q3-Q4 2024',
      status: 'In Progress',
      achievements: ['Multi-market deployment', 'AI optimization', 'DAO preparation']
    },
    {
      phase: 'Phase 3: Decentralization',
      timeline: 'Q1-Q2 2025',
      status: 'Planned',
      achievements: ['DAO activation', 'Full decentralization', 'Global scaling']
    }
  ];

  return (
    <Section id="team-metrics" className="bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          Team & Performance
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-gradient">Industry-Leading</span> Team & Metrics
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Built by experts in Web3, logistics, and AI systems. Measured by industry-first 
          performance indicators that prove real-world utility.
        </p>
      </div>

      {/* Core Team */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Team</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <member.icon className="h-10 w-10 text-olive-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h4>
              <div className="text-olive-600 font-medium mb-3">{member.alias}</div>
              <p className="text-sm text-gray-600 mb-4">{member.background}</p>
              <div className="space-y-1">
                {member.expertise.map((skill, idx) => (
                  <div key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full inline-block mr-1">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            * Brand names listed are for structural/informational purposes only
          </p>
        </div>
      </div>

      {/* Advisory Council */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advisory Council</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisoryCouncil.map((advisor, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">{advisor.area}</h4>
              <div className="text-sm text-olive-600 mb-2">{advisor.region}</div>
              <p className="text-sm text-gray-600">{advisor.contribution}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Pace-Setting Metrics */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pace-Setting Industry Metrics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paceSettingMetrics.map((metric, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-bold text-gray-900">{metric.metric}</span>
                    <span className="text-2xl font-bold text-olive-600">{metric.currentValue}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Target:</span>
                    <span className="text-xs font-medium text-olive-600">{metric.target}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Industry Benchmarks */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industry Benchmarks</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industryBenchmarks.map((benchmark, index) => (
            <Card key={index} className={`p-6 ${index === 1 ? 'border-2 border-olive-500' : ''}`}>
              <h4 className={`text-lg font-bold mb-4 ${index === 1 ? 'text-olive-600' : 'text-gray-900'}`}>
                {benchmark.category}
              </h4>
              <div className="space-y-3">
                {Object.entries(benchmark.metrics).map(([key, value], idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{key}</span>
                    <span className={`text-sm font-medium ${index === 1 ? 'text-olive-600' : 'text-gray-900'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Development Roadmap */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Roadmap</h3>
        <div className="space-y-6">
          {developmentRoadmap.map((phase, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-900">{phase.phase}</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{phase.timeline}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    phase.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    phase.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {phase.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.achievements.map((achievement, idx) => (
                  <div key={idx} className="text-xs bg-olive-50 text-olive-700 px-3 py-1 rounded-full">
                    {achievement}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quarterly Updates */}
      <Card className="p-8 bg-gradient-to-r from-olive-600 to-olive-700 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Transparent Reporting</h3>
        <p className="text-olive-100 mb-6 max-w-2xl mx-auto">
          All metrics are transparently published and updated quarterly via DAO monitoring tools. 
          Real usage benchmarks ensure accountability and continuous improvement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-bold mb-1">Quarterly</div>
            <div className="text-olive-100 text-sm">Metric Updates</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-olive-100 text-sm">Transparency</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">DAO</div>
            <div className="text-olive-100 text-sm">Monitored</div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default TeamMetrics;
