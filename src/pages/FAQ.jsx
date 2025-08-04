import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  QuestionMarkCircleIcon,
  HomeIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: {
      title: 'General Questions',
      icon: QuestionMarkCircleIcon,
      faqs: [
        {
          question: 'What is a ShipShift Colony?',
          answer: 'A ShipShift Colony is a local community network where members help transport packages along their daily routes. Each colony is managed by Colony Owners and includes Reserve Operators (storage) and Dispatch Operators (transport). Think of it as a neighborhood logistics cooperative where everyone benefits economically.'
        },
        {
          question: 'How does the decentralized logistics system work?',
          answer: 'Our system connects people who need to ship packages with community members who are already traveling along those routes. Instead of traditional shipping companies, your package travels with trusted neighbors, making delivery faster, cheaper, and more environmentally friendly.'
        },
        {
          question: 'What are the different user roles?',
          answer: 'There are four main roles: Colony Owners (manage colonies and earn governance tokens), Reserve Operators (provide storage and earn operator tokens), Dispatch Operators (transport packages and earn dispatcher tokens), and Participants (send, receive, and earn participation rewards).'
        },
        {
          question: 'How do I join a colony?',
          answer: 'Find a local colony through our platform and apply for the role that fits your schedule. You can provide storage space, transport packages, or simply participate as a requester. Each role has different requirements and earning potential.'
        },
        {
          question: 'Can I start my own colony?',
          answer: 'Yes! Colony Owners can start new colonies in their area. You\'ll need to meet minimum signatory requirements, demonstrate community support, and commit to managing the network. Colony Owners receive governance tokens and revenue sharing benefits.'
        }
      ]
    },
    tokens: {
      title: 'Tokens & Economics',
      icon: CurrencyDollarIcon,
      faqs: [
        {
          question: 'How do I earn tokens?',
          answer: 'You earn tokens by participating in the network. Reserve Operators earn by providing storage, Dispatch Operators earn by transporting packages, Colony Owners earn through governance and revenue sharing, and all participants earn rewards based on their contributions to the ecosystem.'
        },
        {
          question: 'What tokens do I receive for each role?',
          answer: 'Colony Owners receive Colony Owner Tokens with governance rights, Reserve Operators get Colony Reserve Operator Tokens, Dispatch Operators earn Colony Dispatcher Tokens, and all participants receive rewards based on their activity level and contribution quality.'
        },
        {
          question: 'How does the collateral system work?',
          answer: 'Requesters pay collateral and service costs upfront through smart contracts. The collateral ensures package security and is automatically returned upon successful delivery. This system protects all participants and eliminates the need for traditional insurance.'
        },
        {
          question: 'Can I convert tokens to real money?',
          answer: 'Tokens can be used within the ShipShift ecosystem for services, governance voting, and accessing premium features. The token economy is designed to reward active participation and create sustainable value for community members.'
        },
        {
          question: 'What happens if I lose or damage a package?',
          answer: 'The collateral system and smart contracts automatically handle disputes. If a package is lost or damaged, the collateral covers replacement costs, and the incident is recorded on the blockchain for transparency and accountability.'
        }
      ]
    },
    technical: {
      title: 'Technical Features',
      icon: CogIcon,
      faqs: [
        {
          question: 'What are Steps and Collabo features?',
          answer: 'Steps allow multi-step delivery processes with combinable constraints for complex routes. Collabo lets you create, store, and reuse delivery chain templates for efficient repeated operations. These features make the system flexible for any shipping scenario.'
        },
        {
          question: 'How are routes optimized?',
          answer: 'Our AI system matches packages with Dispatch Operators who are already traveling along or near the required route. This optimization reduces costs, delivery time, and environmental impact by utilizing existing travel patterns.'
        },
        {
          question: 'Is my package safe during transport?',
          answer: 'Yes! All transfers are secured by smart contracts, collateral systems, and community verification. Each handoff is tracked and verified by multiple participants, creating a transparent and secure delivery chain.'
        },
        {
          question: 'How does package tracking work?',
          answer: 'Every package movement is recorded on the blockchain, providing real-time tracking with immutable records. You can see exactly where your package is, who has it, and when each transfer occurred.'
        },
        {
          question: 'What if there are technical issues?',
          answer: 'Our platform includes 24/7 technical support, automated dispute resolution, and backup systems. The decentralized nature means the network continues operating even if individual nodes experience issues.'
        }
      ]
    },
    security: {
      title: 'Security & Trust',
      icon: ShieldCheckIcon,
      faqs: [
        {
          question: 'How do you verify colony members?',
          answer: 'All colony members undergo background checks, identity verification, and community vetting. We use a reputation system where members build trust through successful deliveries and positive community feedback.'
        },
        {
          question: 'What if someone steals my package?',
          answer: 'The collateral system, blockchain tracking, and community verification make theft extremely difficult and costly. If theft occurs, the perpetrator loses their collateral, reputation, and access to the network, while you receive full compensation.'
        },
        {
          question: 'How is my personal data protected?',
          answer: 'We use end-to-end encryption, decentralized storage, and privacy-first design. Personal data is only shared with relevant colony members for delivery purposes and is automatically deleted after successful completion.'
        },
        {
          question: 'Can I trust strangers with my packages?',
          answer: 'Colony members aren\'t strangers - they\'re verified community members with reputation scores, collateral at stake, and accountability through the blockchain. The system creates stronger trust than traditional shipping companies.'
        }
      ]
    },
    governance: {
      title: 'Colony Governance',
      icon: UserGroupIcon,
      faqs: [
        {
          question: 'How are colony decisions made?',
          answer: 'Colonies use democratic governance where token holders vote on important decisions like fee structures, member acceptance, and operational policies. Colony Owners facilitate governance but don\'t have unilateral control.'
        },
        {
          question: 'What happens if there are disputes?',
          answer: 'Disputes are resolved through a multi-tier system: automated smart contract resolution, community mediation, and if necessary, network-wide arbitration. The process is transparent and fair to all parties.'
        },
        {
          question: 'Can colonies set their own rules?',
          answer: 'Yes, within the broader ShipShift framework, colonies can establish their own operational guidelines, fee structures, and membership criteria. This allows communities to adapt the system to their local needs.'
        },
        {
          question: 'How do revenue sharing and fees work?',
          answer: 'Each colony sets its own fee structure through democratic voting. Revenue is shared among active participants based on their contribution level, with Colony Owners receiving a management fee for their coordination efforts.'
        }
      ]
    },
    global: {
      title: 'Global Network',
      icon: GlobeAltIcon,
      faqs: [
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes! Our colony network spans multiple countries, and we handle customs documentation, international regulations, and cross-border logistics. Packages can travel through multiple colonies to reach international destinations.'
        },
        {
          question: 'How do you handle customs and regulations?',
          answer: 'We partner with customs brokers and legal experts in each country to ensure compliance. Our system automatically generates required documentation and handles regulatory requirements for international shipments.'
        },
        {
          question: 'What about language barriers?',
          answer: 'Our platform supports multiple languages, and we provide translation services for international shipments. Colony members can communicate through our built-in translation tools.'
        },
        {
          question: 'How do exchange rates affect international shipping?',
          answer: 'Our token system provides stability across borders, and we offer real-time exchange rate calculations. International fees are transparent and calculated upfront to avoid surprises.'
        }
      ]
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <span className="text-gray-900">FAQ</span>
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
            <QuestionMarkCircleIcon className="w-8 h-8 text-olive-600 mr-3" />
            <h1 className="text-display text-3xl lg:text-4xl text-gray-900">
              Frequently Asked <span className="text-gradient-premium">Questions</span>
            </h1>
          </div>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ShipShift's decentralized logistics ecosystem, 
            colony operations, and token economics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {Object.entries(faqCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeCategory === key
                        ? 'bg-olive-100 text-olive-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-olive-50 to-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <faqCategories[activeCategory].icon className="w-6 h-6 text-olive-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      {faqCategories[activeCategory].title}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {faqCategories[activeCategory].faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-subheading text-lg text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-body text-gray-600 leading-relaxed pt-4">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-subheading text-xl mb-4 text-gray-900">
              Still have questions?
            </h3>
            <p className="text-body text-gray-600 mb-6">
              Our community support team is here to help. Get in touch and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 text-center"
              >
                Join a Colony
              </Link>
              <Link
                to="/#services"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
