import { 
  CreditCardIcon, 
  CpuChipIcon, 
  TrophyIcon, 
  StarIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Section from '../layout/Section';

const RevenueStreams = () => {
  const revenueStreams = [
    {
      icon: CreditCardIcon,
      title: 'Logistics Transaction Fees',
      description: 'Revenue from every delivery transaction processed through the ShipShift network.',
      details: [
        'Per-transaction processing fees',
        'Cross-border delivery premiums',
        'Volume-based tier discounts',
        'Enterprise partnership rates'
      ],
      growth: '+45%',
      color: 'emerald'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Tool Access',
      description: 'Subscription and usage fees for advanced AI logistics tools and optimization services.',
      details: [
        'Route optimization algorithms',
        'Predictive analytics dashboard',
        'Real-time tracking systems',
        'Custom integration APIs'
      ],
      growth: '+78%',
      color: 'blue'
    },
    {
      icon: TrophyIcon,
      title: 'Premium Routing Auctions',
      description: 'Competitive bidding system for priority delivery slots and premium routing access.',
      details: [
        'Priority queue access',
        'Express delivery slots',
        'Peak-time reservations',
        'Geographic preference bidding'
      ],
      growth: '+62%',
      color: 'purple'
    },
    {
      icon: StarIcon,
      title: 'Service Subscriptions',
      description: 'Recurring revenue from premium features, enhanced support, and enterprise solutions.',
      details: [
        'Premium support tiers',
        'Advanced analytics packages',
        'White-label solutions',
        'Enterprise integrations'
      ],
      growth: '+34%',
      color: 'orange'
    }
  ];

  const marketMetrics = [
    {
      label: 'Total Addressable Market',
      value: '$4.7T',
      description: 'Global logistics market size',
      icon: GlobeAltIcon
    },
    {
      label: 'Revenue Growth Rate',
      value: '55%',
      description: 'Year-over-year growth',
      icon: ArrowTrendingUpIcon
    },
    {
      label: 'Market Penetration',
      value: '12%',
      description: 'Current market share target',
      icon: ChartBarIcon
    },
    {
      label: 'Average Revenue Per User',
      value: '$247',
      description: 'Monthly ARPU projection',
      icon: CurrencyDollarIcon
    }
  ];

  const revenueProjections = [
    { year: '2024', revenue: '$2.4M', growth: 'Launch' },
    { year: '2025', revenue: '$12.8M', growth: '+433%' },
    { year: '2026', revenue: '$45.2M', growth: '+253%' },
    { year: '2027', revenue: '$128.7M', growth: '+185%' }
  ];

  return (
    <Section variant="gray" className="bg-gray-50">
      <div className="text-center mb-16">
        <Badge variant="success" size="lg" className="mb-4">
          Revenue Model
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Sustainable <span className="text-gradient">Revenue Streams</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Multiple diversified revenue channels ensure long-term protocol sustainability 
          and continuous value creation for token holders.
        </p>
      </div>

      {/* Revenue Streams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {revenueStreams.map((stream, index) => (
          <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start space-x-4 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                stream.color === 'emerald' ? 'bg-emerald-100 group-hover:bg-emerald-200' :
                stream.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                stream.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
                'bg-orange-100 group-hover:bg-orange-200'
              }`}>
                <stream.icon className={`h-6 w-6 ${
                  stream.color === 'emerald' ? 'text-emerald-600' :
                  stream.color === 'blue' ? 'text-blue-600' :
                  stream.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stream.title}
                  </h3>
                  <Badge variant="success" size="sm">
                    {stream.growth}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stream.description}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 text-sm">Key Components:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {stream.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      stream.color === 'emerald' ? 'bg-emerald-500' :
                      stream.color === 'blue' ? 'bg-blue-500' :
                      stream.color === 'purple' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}></div>
                    <span className="text-xs text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Market Metrics */}
      <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Market Opportunity</h3>
          <p className="text-gray-600">Key metrics driving our revenue potential</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketMetrics.map((metric, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
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

      {/* Revenue Projections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Projections Chart */}
        <Card className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Projections</h3>
          <div className="space-y-4">
            {revenueProjections.map((projection, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-sm">
                      {projection.year.slice(-2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{projection.year}</div>
                    <div className="text-sm text-gray-600">Projected Revenue</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{projection.revenue}</div>
                  <div className="text-sm text-emerald-600">{projection.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Revenue Distribution */}
        <Card className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Distribution</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Transaction Fees</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Tool Access</span>
                <span className="text-sm font-medium">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '28%'}}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Premium Auctions</span>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '18%'}}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subscriptions</span>
                <span className="text-sm font-medium">9%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '9%'}}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">$128.7M</div>
              <div className="text-sm text-emerald-700">Projected 2027 Revenue</div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default RevenueStreams;
