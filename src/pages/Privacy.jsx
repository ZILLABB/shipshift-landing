import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  UserIcon,
  CogIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Privacy = () => {
  const sections = [
    {
      id: 'information-collection',
      title: '1. Information We Collect',
      icon: UserIcon,
      content: `We collect information you provide directly to us, such as when you create an account, join a Colony, or contact us for support. This includes your name, email address, phone number, address, and payment information. We also collect information about your use of our platform, including delivery history, token earnings, and interaction data.`
    },
    {
      id: 'how-we-use',
      title: '2. How We Use Your Information',
      icon: CogIcon,
      content: `We use your information to provide and improve our services, process transactions, communicate with you, ensure platform security, comply with legal obligations, and facilitate Colony operations. We may also use aggregated, anonymized data for research and development purposes.`
    },
    {
      id: 'information-sharing',
      title: '3. Information Sharing',
      icon: EyeIcon,
      content: `We share your information with other Colony members as necessary for delivery operations, with service providers who assist in platform operations, with law enforcement when required by law, and with your consent for other purposes. We do not sell your personal information to third parties.`
    },
    {
      id: 'data-security',
      title: '4. Data Security',
      icon: LockClosedIcon,
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.`
    },
    {
      id: 'data-retention',
      title: '5. Data Retention',
      icon: ShieldCheckIcon,
      content: `We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is typically retained for the duration of your account plus a reasonable period thereafter for legal and business purposes.`
    },
    {
      id: 'your-rights',
      title: '6. Your Privacy Rights',
      icon: UserIcon,
      content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, update, delete, or port your data. You may also have the right to object to certain processing activities or withdraw consent where applicable. Contact us to exercise these rights.`
    },
    {
      id: 'cookies',
      title: '7. Cookies and Tracking',
      icon: CogIcon,
      content: `We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser, but disabling cookies may affect platform functionality. We also use analytics tools to understand user behavior.`
    },
    {
      id: 'international',
      title: '8. International Data Transfers',
      icon: EyeIcon,
      content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and adequacy decisions where applicable.`
    },
    {
      id: 'children',
      title: '9. Children\'s Privacy',
      icon: ExclamationTriangleIcon,
      content: `Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.`
    },
    {
      id: 'changes',
      title: '10. Changes to This Policy',
      icon: ShieldCheckIcon,
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and sending you an email notification. Your continued use of our services after such changes constitutes acceptance of the updated policy.`
    }
  ];

  const dataTypes = [
    {
      category: 'Account Information',
      items: ['Name, email, phone number', 'Address and location data', 'Payment and billing information', 'Account preferences and settings']
    },
    {
      category: 'Platform Activity',
      items: ['Delivery history and status', 'Token earnings and transactions', 'Colony participation data', 'Communication records']
    },
    {
      category: 'Technical Information',
      items: ['Device and browser information', 'IP address and location data', 'Usage patterns and analytics', 'Performance and error logs']
    },
    {
      category: 'Verification Data',
      items: ['Identity verification documents', 'Background check results', 'Vehicle and insurance information', 'Professional references']
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
            <span className="text-gray-900">Privacy Policy</span>
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
            <ShieldCheckIcon className="w-8 h-8 text-olive-600 mr-3" />
            <h1 className="text-display text-3xl lg:text-4xl text-gray-900">
              Privacy <span className="text-gradient-premium">Policy</span>
            </h1>
          </div>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, 
            and protect your personal information when you use ShipShift.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: December 15, 2024
          </div>
        </motion.div>

        {/* Data Collection Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Data We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((type, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-olive-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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

          {/* Privacy Policy Content */}
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
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At ShipShift, we are committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy explains how we collect, use, 
                    share, and protect information about you when you use our decentralized logistics platform.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in transparency and want you to understand exactly how your information 
                    is handled within our Colony ecosystem. This policy applies to all users, including 
                    Colony Owners, Reserve Operators, Dispatch Operators, and Participants.
                  </p>
                </motion.div>

                {/* Policy Sections */}
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
                    Contact Us About Privacy
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div><strong>Privacy Officer:</strong> privacy@shipshift.com</div>
                      <div><strong>Data Protection:</strong> dpo@shipshift.com</div>
                      <div><strong>General Inquiries:</strong> support@shipshift.com</div>
                      <div><strong>Address:</strong> [Company Address]</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Controls */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-olive-50 to-white rounded-2xl p-8 border border-olive-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Your Privacy Controls
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl border border-olive-100">
                <UserIcon className="w-8 h-8 text-olive-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Access Your Data</h4>
                <p className="text-sm text-gray-600 mb-4">Request a copy of all personal information we have about you.</p>
                <button className="text-olive-600 hover:text-olive-700 text-sm font-medium">
                  Request Data →
                </button>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-olive-100">
                <CogIcon className="w-8 h-8 text-olive-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Update Preferences</h4>
                <p className="text-sm text-gray-600 mb-4">Control how we use your information and communication preferences.</p>
                <Link to="/signin" className="text-olive-600 hover:text-olive-700 text-sm font-medium">
                  Manage Settings →
                </Link>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-olive-100">
                <ExclamationTriangleIcon className="w-8 h-8 text-olive-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Delete Account</h4>
                <p className="text-sm text-gray-600 mb-4">Permanently delete your account and associated data.</p>
                <button className="text-olive-600 hover:text-olive-700 text-sm font-medium">
                  Delete Account →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Links */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Related Documents
            </h3>
            <p className="text-gray-600 mb-6">
              Learn more about our policies and how we protect your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/terms"
                className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center"
              >
                Terms of Service
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

export default Privacy;
