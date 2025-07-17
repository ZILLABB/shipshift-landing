import { 
  GlobeAltIcon, 
  UserGroupIcon, 
  TruckIcon, 
  CurrencyDollarIcon,
  MapPinIcon,
  ChartBarIcon,
  HandRaisedIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Section from '../layout/Section';

const Adoption = () => {
  const targetMarkets = [
    {
      country: 'Nigeria',
      flag: '🇳🇬',
      population: '218M',
      deliveryGrowth: '+67%',
      cryptoAdoption: 'High',
      opportunities: [
        'Lagos-Abuja corridor',
        'E-commerce boom',
        'Mobile-first population',
        'Crypto-friendly regulations'
      ]
    },
    {
      country: 'Kenya',
      flag: '🇰🇪',
      population: '54M',
      deliveryGrowth: '+45%',
      cryptoAdoption: 'Very High',
      opportunities: [
        'Nairobi tech hub',
        'M-Pesa integration',
        'Cross-border trade',
        'Agricultural logistics'
      ]
    },
    {
      country: 'Philippines',
      flag: '🇵🇭',
      population: '110M',
      deliveryGrowth: '+78%',
      cryptoAdoption: 'High',
      opportunities: [
        'Island connectivity',
        'Remittance market',
        'Growing middle class',
        'Digital payment adoption'
      ]
    }
  ];

  const adoptionStrategy = [
    {
      icon: UserGroupIcon,
      title: 'Micro-Operator Recruitment',
      description: 'Incentivize local delivery operators through token rewards and training programs.',
      metrics: ['5,000+ operators', '50+ cities', '24/7 coverage']
    },
    {
      icon: HandRaisedIcon,
      title: 'Referral Bounty System',
      description: 'Community-driven growth through referral rewards and regional ambassador programs.',
      metrics: ['Token incentives', 'Tiered rewards', 'Community building']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Strategic Partnerships',
      description: 'Form alliances with local logistics companies and payment providers.',
      metrics: ['Local expertise', 'Infrastructure access', 'Regulatory compliance']
    }
  ];

  const marketMetrics = [
    {
      label: 'Target Population',
      value: '382M',
      description: 'Combined market reach',
      icon: GlobeAltIcon,
      color: 'emerald'
    },
    {
      label: 'Delivery Growth',
      value: '+63%',
      description: 'Average market growth',
      icon: ChartBarIcon,
      color: 'blue'
    },
    {
      label: 'Crypto Adoption',
      value: '89%',
      description: 'Population awareness',
      icon: CurrencyDollarIcon,
      color: 'purple'
    },
    {
      label: 'Mobile Penetration',
      value: '94%',
      description: 'Smartphone usage',
      icon: MapPinIcon,
      color: 'orange'
    }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      timeline: 'Q1-Q2 2024',
      title: 'Market Entry',
      description: 'Launch in Lagos, Nairobi, and Manila with core delivery services.',
      milestones: ['500 operators', '10,000 deliveries', 'Local partnerships']
    },
    {
      phase: 'Phase 2',
      timeline: 'Q3-Q4 2024',
      title: 'Expansion',
      description: 'Scale to secondary cities and introduce advanced AI features.',
      milestones: ['2,000 operators', '100,000 deliveries', 'AI optimization']
    },
    {
      phase: 'Phase 3',
      timeline: 'Q1-Q2 2025',
      title: 'Regional Network',
      description: 'Connect markets with cross-border delivery capabilities.',
      milestones: ['Cross-border routes', 'Regional hubs', 'DAO activation']
    }
  ];

  return (
    <Section variant="gradient" className="bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          Global Adoption
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Designed for <span className="text-gradient">Emerging Markets</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ShipShift targets underserved delivery-heavy regions with high crypto adoption, 
          starting with strategic markets in Africa and Asia.
        </p>
      </div>

      {/* Target Markets */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Primary Target Markets</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {targetMarkets.map((market, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{market.flag}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{market.country}</h4>
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                  <span>{market.population} people</span>
                  <span>•</span>
                  <span>{market.deliveryGrowth} growth</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Crypto Adoption</span>
                  <Badge variant="primary" size="sm">{market.cryptoAdoption}</Badge>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Key Opportunities:</h5>
                  <div className="space-y-2">
                    {market.opportunities.map((opportunity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{opportunity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Market Metrics */}
      <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Market Opportunity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketMetrics.map((metric, index) => (
            <div key={index} className="text-center p-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                metric.color === 'emerald' ? 'bg-emerald-100' :
                metric.color === 'blue' ? 'bg-blue-100' :
                metric.color === 'purple' ? 'bg-purple-100' :
                'bg-orange-100'
              }`}>
                <metric.icon className={`h-6 w-6 ${
                  metric.color === 'emerald' ? 'text-emerald-600' :
                  metric.color === 'blue' ? 'text-blue-600' :
                  metric.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="font-medium text-gray-700 text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adoption Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Adoption Strategy</h3>
          <div className="space-y-6">
            {adoptionStrategy.map((strategy, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <strategy.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{strategy.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {strategy.metrics.map((metric, idx) => (
                        <Badge key={idx} variant="default" size="sm">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Rollout Roadmap</h3>
          <div className="space-y-6">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                      <Badge variant="default" size="sm">{phase.timeline}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                    <div className="space-y-1">
                      {phase.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          <span className="text-xs text-gray-500">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="p-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <TruckIcon className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
          <h3 className="text-2xl font-bold mb-4">Join the Logistics Revolution</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Be part of the first decentralized logistics protocol designed for emerging markets. 
            Start earning tokens through real delivery work today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Become an Operator
            </button>
            <button className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
              Partner with Us
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Adoption;
