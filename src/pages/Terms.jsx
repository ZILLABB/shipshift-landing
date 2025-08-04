import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const Terms = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: DocumentTextIcon,
      content: `By accessing and using the ShipShift platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'definitions',
      title: '2. Definitions',
      icon: InformationCircleIcon,
      content: `"Colony" refers to a local network of ShipShift participants. "Colony Owner" means an individual or entity that manages a Colony. "Reserve Operator" refers to participants who provide storage services. "Dispatch Operator" means participants who provide transportation services. "Tokens" refer to digital rewards earned through platform participation.`
    },
    {
      id: 'user-accounts',
      title: '3. User Accounts and Registration',
      icon: ShieldCheckIcon,
      content: `You must register for an account to use ShipShift services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, current, and complete information during registration and keep your account information updated.`
    },
    {
      id: 'colony-participation',
      title: '4. Colony Participation',
      icon: DocumentTextIcon,
      content: `Participation in Colonies is subject to acceptance by Colony Owners and compliance with local Colony rules. Colony Owners have the right to establish operational guidelines within their Colonies, provided they comply with ShipShift's overall terms and policies. All participants must undergo verification processes as required.`
    },
    {
      id: 'token-system',
      title: '5. Token System and Rewards',
      icon: InformationCircleIcon,
      content: `Tokens are earned through legitimate participation in the ShipShift network. Token values and earning rates may fluctuate based on network activity and other factors. Tokens are not securities or investments and should not be treated as such. ShipShift reserves the right to modify token economics with appropriate notice.`
    },
    {
      id: 'package-handling',
      title: '6. Package Handling and Liability',
      icon: ExclamationTriangleIcon,
      content: `All package handling must comply with applicable laws and regulations. Prohibited items include but are not limited to: illegal substances, weapons, hazardous materials, and items that violate local, state, or federal laws. Participants are liable for damages caused by their negligence or misconduct.`
    },
    {
      id: 'collateral-system',
      title: '7. Collateral and Payment System',
      icon: ShieldCheckIcon,
      content: `The collateral system is designed to ensure package security and service quality. Collateral amounts are determined by package value and risk assessment. Collateral is automatically returned upon successful delivery completion. Disputes regarding collateral are resolved through our automated dispute resolution system.`
    },
    {
      id: 'prohibited-conduct',
      title: '8. Prohibited Conduct',
      icon: ExclamationTriangleIcon,
      content: `Users may not: engage in fraudulent activities, manipulate the token system, violate local laws, harass other users, attempt to circumvent security measures, or use the platform for any illegal purposes. Violations may result in account suspension or termination.`
    },
    {
      id: 'privacy-data',
      title: '9. Privacy and Data Protection',
      icon: ShieldCheckIcon,
      content: `Your privacy is important to us. Our data collection and use practices are detailed in our Privacy Policy. By using ShipShift, you consent to the collection and use of your information as described in our Privacy Policy. We implement appropriate security measures to protect your personal information.`
    },
    {
      id: 'intellectual-property',
      title: '10. Intellectual Property',
      icon: DocumentTextIcon,
      content: `ShipShift and its licensors own all intellectual property rights in the platform. Users retain ownership of content they create but grant ShipShift a license to use such content for platform operations. Users may not copy, modify, or distribute ShipShift's proprietary technology without permission.`
    },
    {
      id: 'disclaimers',
      title: '11. Disclaimers and Limitations',
      icon: ExclamationTriangleIcon,
      content: `ShipShift is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or error-free operation. Our liability is limited to the maximum extent permitted by law. Users participate in the network at their own risk and should exercise appropriate caution.`
    },
    {
      id: 'termination',
      title: '12. Termination',
      icon: InformationCircleIcon,
      content: `Either party may terminate this agreement at any time. ShipShift reserves the right to suspend or terminate accounts for violations of these terms. Upon termination, your right to use the platform ceases immediately, but certain provisions of these terms will survive termination.`
    },
    {
      id: 'governing-law',
      title: '13. Governing Law and Disputes',
      icon: DocumentTextIcon,
      content: `These terms are governed by the laws of [Jurisdiction]. Disputes will be resolved through binding arbitration in accordance with the rules of [Arbitration Organization]. Class action lawsuits are waived. Users agree to resolve disputes individually through arbitration.`
    },
    {
      id: 'changes',
      title: '14. Changes to Terms',
      icon: InformationCircleIcon,
      content: `ShipShift reserves the right to modify these terms at any time. Users will be notified of material changes via email or platform notification. Continued use of the platform after changes constitutes acceptance of the modified terms. Users who disagree with changes may terminate their accounts.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-max section-padding py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-olive-600 flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Terms of Service</span>
          </nav>
        </div>
      </div>

      <div className="container-max section-padding py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <DocumentTextIcon className="w-8 h-8 text-olive-600 mr-3" />
            <h1 className="text-display text-3xl lg:text-4xl text-gray-900">
              Terms of <span className="text-gradient-premium">Service</span>
            </h1>
          </div>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using the ShipShift platform. 
            These terms govern your use of our decentralized logistics ecosystem.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: December 15, 2024
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-600 hover:text-olive-600 transition-colors duration-200 py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Terms Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                {/* Introduction */}
                <motion.div
                  className="mb-12 pb-8 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Welcome to ShipShift
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    ShipShift operates a decentralized logistics platform that connects community members 
                    to provide shipping and delivery services. Our platform enables users to earn tokens 
                    by participating in various roles within local Colonies.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our services, you agree to these Terms of Service ("Terms"). 
                    Please read them carefully as they contain important information about your rights and obligations.
                  </p>
                </motion.div>

                {/* Terms Sections */}
                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-8 h-8 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <section.icon className="w-4 h-4 text-olive-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <div className="ml-12">
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Information */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div><strong>Email:</strong> legal@shipshift.com</div>
                      <div><strong>Address:</strong> [Company Address]</div>
                      <div><strong>Phone:</strong> [Company Phone]</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Related Documents
            </h3>
            <p className="text-gray-600 mb-6">
              Make sure to also review our other important policies and documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/privacy"
                className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center"
              >
                Privacy Policy
              </Link>
              <Link
                to="/faq"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
