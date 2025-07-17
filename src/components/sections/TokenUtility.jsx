import {
  TruckIcon,
  CpuChipIcon,
  UserGroupIcon,
  BanknotesIcon,
  LockClosedIcon,
  FireIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  GiftIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Section from '../layout/Section';

const TokenUtility = () => {
  const benefits = [
    {
      icon: TruckIcon,
      title: 'Delivery Service Access',
      description: 'Use SST tokens to access AI-powered delivery services with optimized routing.',
      features: ['AI Route Optimization', 'Global Network', 'Instant Settlement']
    },
    {
      icon: CpuChipIcon,
      title: 'Staking & Governance',
      description: 'Stake SST for premium routing, governance rights, and referral rewards.',
      features: ['Premium Routing', 'DAO Voting', 'Referral Bonuses']
    },
    {
      icon: UserGroupIcon,
      title: 'Work-to-Earn Mechanics',
      description: 'Earn SST tokens by contributing to the logistics network as operators.',
      features: ['Delivery Rewards', 'Network Validation', 'Performance Bonuses']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Gas Fee Subsidization',
      description: 'SST holders receive subsidized transaction fees across the protocol.',
      features: ['Reduced Fees', 'Priority Processing', 'Multi-Chain Support']
    },
    {
      icon: GiftIcon,
      title: 'AI Logistics Activation',
      description: 'Access advanced AI routing and logistics optimization tools.',
      features: ['Smart Routing', 'Predictive Analytics', 'Real-time Optimization']
    },
    {
      icon: ClockIcon,
      title: 'Liquidity Mining',
      description: 'Participate in liquidity provision and earn additional SST rewards.',
      features: ['LP Rewards', 'Yield Farming', 'Protocol Revenue Share']
    }
  ];

  const tokenStats = [
    {
      label: 'Total Supply',
      value: '2B',
      description: 'SST Tokens'
    },
    {
      label: 'Locked Supply',
      value: '25%',
      description: 'Permanently Locked'
    },
    {
      label: 'DAO Activation',
      value: '20%',
      description: 'Distribution Threshold'
    },
    {
      label: 'Cost Reduction',
      value: '60%',
      description: 'vs Traditional Logistics'
    }
  ];



  return (
    <Section id="token" className="bg-white">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          SST Token Utility
        </Badge>
        <h2 className="text-heading text-3xl lg:text-4xl text-gray-900 mb-4">
          <span className="text-gradient">ShipShift Token (SST)</span>
        </h2>
        <p className="text-body text-xl text-gray-600 max-w-3xl mx-auto">
          Access delivery services, stake for governance, earn through work-to-earn mechanics,
          and participate in the decentralized logistics economy.
        </p>
      </div>

      {/* Main Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-olive-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-olive-200 transition-colors">
                <benefit.icon className="h-8 w-8 text-olive-600" />
              </div>

              <div>
                <h3 className="text-subheading text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-body text-gray-600 text-sm leading-relaxed mb-4">
                  {benefit.description}
                </p>
              </div>

              <div className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-olive-600 rounded-full"></div>
                    <span className="text-xs text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Rewards Overview */}
      <div className="bg-gradient-to-r from-gray-50 to-olive-50 rounded-2xl p-8 mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Token Metrics Overview</h3>
          <p className="text-gray-600">Key statistics about the ShipShift Token (SST) ecosystem</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tokenStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-olive-600 mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-gray-900 text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="p-8 bg-gradient-to-r from-olive-600 to-olive-700 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Join the Protocol?</h3>
          <p className="text-olive-100 mb-6 max-w-2xl mx-auto">
            Participate in the decentralized logistics economy. Earn SST tokens, stake for governance, and access AI-powered delivery services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-olive-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Launch App
            </button>
            <button className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
              View Tokenomics
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default TokenUtility;
