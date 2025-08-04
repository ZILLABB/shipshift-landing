import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is a ShipShift Colony?',
      answer: 'A ShipShift Colony is a local community network where members help transport packages along their daily routes. Each colony is managed by Colony Owners and includes Reserve Operators (storage) and Dispatch Operators (transport).'
    },
    {
      question: 'How do I earn tokens?',
      answer: 'You earn tokens by participating in the network as a Reserve Operator (providing storage), Dispatch Operator (transporting packages), or other participant roles. Tokens are automatically distributed based on your contributions.'
    },
    {
      question: 'What are the different user roles?',
      answer: 'There are Colony Owners (manage colonies), Reserve Operators (provide storage), Dispatch Operators (transport packages), and Participants (requesters, recipients, holders, performers, complainants).'
    },
    {
      question: 'How does the collateral system work?',
      answer: 'Requesters pay collateral and service costs upfront. The collateral ensures package security and is returned upon successful delivery. This system protects all participants in the network.'
    },
    {
      question: 'What are Steps and Collaborative features?',
      answer: 'Steps allow multi-step delivery processes with combinable constraints for complex routes. Collaboration lets you create, store, and reuse delivery chain templates for efficient repeated operations.'
    },
    {
      question: 'How do I join a colony?',
      answer: 'Find a local colony through our platform and apply for the role that fits your schedule - whether that\'s providing storage space, transporting packages, or simply participating as a requester.'
    },
    {
      question: 'Can I start my own colony?',
      answer: 'Yes! Colony Owners can start new colonies in their area. You\'ll need to meet minimum signatory requirements and will receive Colony Owner Tokens for managing the network.'
    },
    {
      question: 'Is my package safe during transport?',
      answer: 'Yes! All transfers are secured by smart contracts, collateral systems, and community verification. Each handoff is tracked and verified by multiple participants.'
    },
    {
      question: 'How are routes optimized?',
      answer: 'Our system matches packages with Dispatch Operators who are already traveling along or near the required route, making delivery more efficient and environmentally friendly.'
    },
    {
      question: 'What tokens do I receive for each role?',
      answer: 'Colony Owners receive Colony Owner Tokens, Reserve Operators get Colony Reserve Operator Tokens, Dispatch Operators earn Colony Dispatcher Tokens, and all participants receive rewards based on their contributions.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <QuestionMarkCircleIcon className="w-8 h-8 text-olive-600 mr-3" />
            <h2 className="text-display text-3xl lg:text-4xl text-gray-900">
              Frequently Asked <span className="text-gradient-premium">Questions</span>
            </h2>
          </div>
          <p className="text-body text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform, services, and how to get started.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-subheading text-xl mb-4 text-gray-900">
              Still have questions?
            </h3>
            <p className="text-body text-gray-600 mb-6">
              Our support team is here to help. Get in touch and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
