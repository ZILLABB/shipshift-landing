import { 
  ScaleIcon, 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  GlobeAltIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  UserIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Section from '../layout/Section';

const Compliance = () => {
  const tokenClassification = [
    {
      icon: ScaleIcon,
      title: 'Utility Token Classification',
      description: 'SST is explicitly structured as a functional utility token, not a security.',
      points: [
        'No investment promise or passive income expectation',
        'Use-based access to platform features',
        'Earned through real work contributions',
        'DAO governance structure'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Howey Test Compliance',
      description: 'Designed to avoid securities classification under regulatory frameworks.',
      points: [
        'No investment of money with profit expectation',
        'Utility-based enterprise model',
        'Direct user value contribution',
        'Decentralized governance structure'
      ]
    }
  ];

  const regionalCompliance = [
    {
      region: 'Nigeria',
      status: 'Compliant',
      features: ['Crypto-native access', 'Local partnerships', 'Regulatory alignment'],
      icon: '🇳🇬'
    },
    {
      region: 'Kenya',
      status: 'Compliant',
      features: ['DeFi sandbox framework', 'KYC integration', 'Mobile money bridge'],
      icon: '🇰🇪'
    },
    {
      region: 'Philippines',
      status: 'Compliant',
      features: ['BSP guidelines adherence', 'Remittance integration', 'Local licensing'],
      icon: '🇵🇭'
    },
    {
      region: 'European Union',
      status: 'Monitoring',
      features: ['MiCA compliance preparation', 'GDPR alignment', 'Regulatory dialogue'],
      icon: '🇪🇺'
    }
  ];

  const smartContractSafeguards = [
    {
      icon: CogIcon,
      title: 'DAO-Controlled Upgrades',
      description: 'All protocol upgrades require community governance with built-in safeguards.',
      safeguards: ['Quorum requirements', 'Time delays', 'Multi-sig approval', 'Emergency vetoes']
    },
    {
      icon: DocumentCheckIcon,
      title: 'Quarterly Security Audits',
      description: 'Regular third-party security audits by leading blockchain security firms.',
      safeguards: ['CertiK audits', 'Quantstamp reviews', 'Public audit results', 'Continuous monitoring']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'No Unrestricted Access',
      description: 'Protocol prevents unrestricted mint/burn access and implements strict controls.',
      safeguards: ['Controlled minting', 'Burn mechanisms', 'Supply caps', 'Governance oversight']
    }
  ];

  const complianceMetrics = [
    {
      label: 'Regulatory Score',
      value: 'A+',
      description: 'Compliance Rating'
    },
    {
      label: 'Audit Frequency',
      value: 'Quarterly',
      description: 'Security Reviews'
    },
    {
      label: 'KYC Coverage',
      value: '100%',
      description: 'Fiat Bridge Users'
    },
    {
      label: 'Legal Jurisdictions',
      value: '12+',
      description: 'Compliant Markets'
    }
  ];

  return (
    <Section id="compliance" className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center mb-16">
        <Badge variant="primary" size="lg" className="mb-4 bg-blue-100 text-blue-800">
          Legal & Compliance
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Regulatory Excellence
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Built with legal clarity and compliance at its core. Innovation leads our development, 
          while regulatory alignment ensures longevity and trustworthiness.
        </p>
      </div>

      {/* Token Classification */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Token Classification</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tokenClassification.map((item, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Regional Compliance */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Global Compliance Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalCompliance.map((region, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-3">{region.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{region.region}</h4>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                region.status === 'Compliant' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {region.status}
              </div>
              <ul className="space-y-1">
                {region.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-gray-600">{feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Smart Contract Safeguards */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Smart Contract Safeguards</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {smartContractSafeguards.map((safeguard, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <safeguard.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{safeguard.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{safeguard.description}</p>
              <div className="space-y-2">
                {safeguard.safeguards.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Compliance Metrics</h3>
          <p className="text-blue-100">Key indicators of our regulatory and legal standing</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="font-medium text-blue-100 text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-blue-200">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Disclaimer */}
      <Card className="p-8 bg-gray-50 border-l-4 border-blue-500">
        <div className="flex items-start space-x-4">
          <ExclamationTriangleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Legal Disclaimer</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              ShipShift Token (SST) is a utility token that provides access to features within the ShipShift logistics protocol. 
              It is not designed or intended for speculation or investment. Users should understand the risks associated with 
              cryptocurrency and blockchain technology. This information does not constitute financial, legal, or investment advice. 
              Please consult with qualified professionals before participating in any blockchain protocol.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Compliance;
