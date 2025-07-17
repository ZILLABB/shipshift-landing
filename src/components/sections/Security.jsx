import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  UserGroupIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CpuChipIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Section from '../layout/Section';

const Security = () => {
  const securityFeatures = [
    {
      icon: LockClosedIcon,
      title: 'Multi-Layer Wallet Recovery',
      description: 'Comprehensive recovery system with multiple authentication methods.',
      details: ['Email verification', 'OTP authentication', 'Transaction proof', 'Social recovery']
    },
    {
      icon: EyeIcon,
      title: 'Real-Time Asset Protection',
      description: 'Automated asset sweep and protection upon security threat detection.',
      details: ['Instant threat detection', 'Automatic asset sweep', 'Emergency protocols', 'Recovery procedures']
    },
    {
      icon: CpuChipIcon,
      title: 'AI Fraud Detection',
      description: 'Advanced AI monitoring during delivery and trade cycles.',
      details: ['Behavioral analysis', 'Pattern recognition', 'Risk assessment', 'Automated responses']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Emergency Freeze Mode',
      description: 'Protocol-wide freeze capabilities for governance capture or token drain attempts.',
      details: ['Governance protection', 'Token drain prevention', 'Emergency voting', 'Recovery mechanisms']
    }
  ];

  const daoFeatures = [
    {
      icon: UserGroupIcon,
      title: 'Weighted Voting System',
      description: 'Voting power based on staking and verified delivery completion.',
      metric: '20%',
      metricLabel: 'Activation Threshold'
    },
    {
      icon: ClockIcon,
      title: 'Time-Locked Governance',
      description: 'Multi-sig Guardian Council with emergency veto rights.',
      metric: '36',
      metricLabel: 'Months to Full DAO'
    },
    {
      icon: KeyIcon,
      title: 'Progressive Decentralization',
      description: 'Gradual transition from founders to community control.',
      metric: '100%',
      metricLabel: 'Community Ownership'
    }
  ];

  const auditSchedule = [
    { quarter: 'Q1 2024', status: 'Completed', auditor: 'CertiK', score: 'AAA' },
    { quarter: 'Q2 2024', status: 'Completed', auditor: 'Quantstamp', score: 'AA+' },
    { quarter: 'Q3 2024', status: 'In Progress', auditor: 'Trail of Bits', score: 'Pending' },
    { quarter: 'Q4 2024', status: 'Scheduled', auditor: 'ConsenSys Diligence', score: 'Pending' }
  ];

  const securityMetrics = [
    { label: 'Security Score', value: 'AAA', description: 'Industry Rating' },
    { label: 'Uptime', value: '99.9%', description: 'Network Availability' },
    { label: 'Incidents', value: '0', description: 'Security Breaches' },
    { label: 'Recovery Time', value: '<5min', description: 'Emergency Response' }
  ];

  return (
    <Section variant="dark" id="security" className="bg-gray-900 text-white">
      <div className="text-center mb-16">
        <Badge variant="dark" size="lg" className="mb-4 bg-emerald-900 text-emerald-300">
          Security & Governance
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-emerald-400">Self-Defending</span> Protocol Architecture
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Advanced security frameworks and progressive DAO governance ensure protocol integrity 
          and community-driven evolution.
        </p>
      </div>

      {/* Security Features */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-12">Security Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} variant="dark" className="p-6 hover:shadow-2xl transition-all duration-300 border-gray-700">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-400 text-xs">{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Metrics */}
      <div className="bg-gray-800 rounded-2xl p-8 mb-16">
        <h3 className="text-xl font-bold text-center mb-8">Security Metrics</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {securityMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">
                {metric.value}
              </div>
              <div className="font-medium text-white text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DAO Governance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-8">DAO Governance</h3>
          <div className="space-y-6">
            {daoFeatures.map((feature, index) => (
              <Card key={index} variant="dark" className="p-6 border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-400">{feature.metric}</div>
                    <div className="text-xs text-gray-400">{feature.metricLabel}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Audit Schedule */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Audit Schedule</h3>
          <div className="space-y-4">
            {auditSchedule.map((audit, index) => (
              <Card key={index} variant="dark" className="p-4 border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      audit.status === 'Completed' ? 'bg-green-400' :
                      audit.status === 'In Progress' ? 'bg-yellow-400' :
                      'bg-gray-400'
                    }`}></div>
                    <div>
                      <div className="font-medium text-white">{audit.quarter}</div>
                      <div className="text-sm text-gray-400">{audit.auditor}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">{audit.status}</div>
                    <div className={`text-xs font-medium ${
                      audit.score === 'AAA' ? 'text-green-400' :
                      audit.score === 'AA+' ? 'text-emerald-400' :
                      'text-gray-400'
                    }`}>
                      {audit.score}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-900/30 rounded-lg border border-emerald-700">
            <div className="flex items-center space-x-2 mb-2">
              <ShieldCheckIcon className="h-5 w-5 text-emerald-400" />
              <span className="font-medium text-emerald-300">Security Guarantee</span>
            </div>
            <p className="text-sm text-gray-300">
              All smart contracts undergo quarterly audits by leading security firms. 
              Public access to audit results ensures transparency and trust.
            </p>
          </div>
        </div>
      </div>

      {/* Governance Timeline */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8">Decentralization Roadmap</h3>
        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Foundation Phase</h4>
              <p className="text-gray-400 text-sm">Core team governance with community input</p>
              <div className="text-xs text-emerald-400 mt-2">Months 0-12</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Transition Phase</h4>
              <p className="text-gray-400 text-sm">Shared governance with DAO activation</p>
              <div className="text-xs text-emerald-400 mt-2">Months 12-24</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Full DAO</h4>
              <p className="text-gray-400 text-sm">Complete community governance</p>
              <div className="text-xs text-emerald-400 mt-2">Months 24-36</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Security;
