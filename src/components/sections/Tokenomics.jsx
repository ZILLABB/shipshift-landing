import { ChartBarIcon, LockClosedIcon, UserGroupIcon, CogIcon, ArrowTrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const Tokenomics = () => {
  const tokenDistribution = [
    {
      category: 'Ecosystem Development',
      percentage: '30%',
      amount: '600M SST',
      description: 'Protocol development, partnerships, and ecosystem growth',
      color: 'bg-olive-500'
    },
    {
      category: 'Permanently Locked',
      percentage: '25%',
      amount: '500M SST',
      description: 'Locked forever to ensure scarcity and long-term value',
      color: 'bg-gray-500'
    },
    {
      category: 'Work-to-Earn Pool',
      percentage: '20%',
      amount: '400M SST',
      description: 'Rewards for logistics operators and network contributors',
      color: 'bg-blue-500'
    },
    {
      category: 'Liquidity & Staking',
      percentage: '15%',
      amount: '300M SST',
      description: 'DEX liquidity, staking rewards, and market making',
      color: 'bg-green-500'
    },
    {
      category: 'Team & Advisors',
      percentage: '10%',
      amount: '200M SST',
      description: 'Time-locked vesting for core team and advisors',
      color: 'bg-purple-500'
    }
  ];

  const governanceFeatures = [
    {
      icon: UserGroupIcon,
      title: 'DAO Activation',
      description: 'Governance begins when 20% of tokens are distributed to the community',
      metric: '400M SST threshold'
    },
    {
      icon: ChartBarIcon,
      title: 'Weighted Voting',
      description: 'Voting power based on staking amount and verified delivery completion',
      metric: 'Stake + Performance'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Guardian Council',
      description: 'Multi-sig emergency veto rights for protocol security',
      metric: '5/7 Multi-sig'
    },
    {
      icon: CogIcon,
      title: 'Transition Timeline',
      description: 'Progressive handover from founders to community governance',
      metric: '36 Month Plan'
    }
  ];

  const supplyMechanics = [
    {
      icon: LockClosedIcon,
      title: 'Dynamic Burn Mechanism',
      description: 'Automatic token burns based on network usage and transaction volume'
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Buyback Program',
      description: 'Protocol revenue used for strategic token buybacks from market'
    },
    {
      icon: ChartBarIcon,
      title: 'Algorithmic Supply Control',
      description: 'AI-driven supply adjustments based on demand and network metrics'
    }
  ];

  return (
    <Section id="tokenomics" className="bg-gradient-to-br from-gray-50 to-olive-50">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4">
          Tokenomics & Governance
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-gradient">SST Token Economics</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A carefully designed token economy with algorithmic supply control, 
          progressive decentralization, and sustainable value creation.
        </p>
      </div>

      {/* Token Distribution */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Token Distribution</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Distribution Chart Visual */}
          <div className="relative">
            {/* Modern Donut Chart */}
            <div className="w-80 h-80 mx-auto relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="20"
                />

                {/* Distribution Segments */}
                {tokenDistribution.map((item, index) => {
                  const percentage = parseInt(item.percentage);
                  const circumference = 2 * Math.PI * 80;
                  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                  const previousPercentages = tokenDistribution.slice(0, index).reduce((sum, prev) => sum + parseInt(prev.percentage), 0);
                  const strokeDashoffset = -((previousPercentages / 100) * circumference);

                  const colorMap = {
                    'bg-olive-500': '#84cc16',
                    'bg-gray-500': '#6b7280',
                    'bg-blue-500': '#3b82f6',
                    'bg-green-500': '#10b981',
                    'bg-purple-500': '#8b5cf6'
                  };

                  return (
                    <circle
                      key={index}
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={colorMap[item.color] || '#6b7280'}
                      strokeWidth="20"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000 ease-out"
                      style={{
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg border-4 border-gray-100">
                  <div className="text-3xl font-bold text-gray-900 mb-1">2B</div>
                  <div className="text-sm text-gray-600 font-medium">SST</div>
                  <div className="text-xs text-gray-500">Total Supply</div>
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-4 right-4 bg-olive-100 text-olive-800 px-3 py-1 rounded-full text-xs font-medium">
                30% Ecosystem
              </div>
              <div className="absolute bottom-4 left-4 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                25% Locked
              </div>
              <div className="absolute top-1/2 -right-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium transform -translate-y-1/2">
                20% Work-to-Earn
              </div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="space-y-4">
            {tokenDistribution.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-gray-900">{item.category}</h4>
                      <span className="text-olive-600 font-bold">{item.percentage}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                    <p className="text-xs text-gray-500">{item.amount}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Governance Structure */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">DAO Governance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {governanceFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-olive-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-200 transition-colors">
                <feature.icon className="h-8 w-8 text-olive-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="text-xs font-medium text-olive-600 bg-olive-50 px-3 py-1 rounded-full">
                {feature.metric}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Supply Mechanics */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Supply Control Mechanisms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supplyMechanics.map((mechanic, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-olive-200 transition-colors">
                <mechanic.icon className="h-6 w-6 text-olive-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{mechanic.title}</h4>
              <p className="text-sm text-gray-600">{mechanic.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <Card className="p-8 bg-gradient-to-r from-olive-600 to-olive-700 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Protocol Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold mb-1">2B</div>
            <div className="text-olive-100 text-sm">Total Supply</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">25%</div>
            <div className="text-olive-100 text-sm">Permanently Locked</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">20%</div>
            <div className="text-olive-100 text-sm">DAO Threshold</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">36M</div>
            <div className="text-olive-100 text-sm">Transition Timeline</div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Tokenomics;
