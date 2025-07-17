import { ArrowRightIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { TruckIcon, ClockIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

const Hero = () => {
  const handleGetStarted = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const stats = [
    { label: 'Total Supply', value: '2B', suffix: 'SST Tokens', tech: 'Algorithmic Supply Control' },
    { label: 'Cost Reduction', value: '60%', suffix: 'vs Traditional', tech: 'AI-Optimized Routing' },
    { label: 'Network Security', value: '99.9%', suffix: 'Uptime', tech: 'Self-Defending Protocol' }
  ];

  const features = [
    {
      icon: TruckIcon,
      title: 'AI-Powered Delivery',
      description: 'Machine learning optimizes routes for speed and cost',
      tech: 'Neural Network Routing'
    },
    {
      icon: ClockIcon,
      title: 'Real-Time Tracking',
      description: 'Blockchain-verified delivery confirmations',
      tech: 'Immutable Audit Trail'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Smart Contracts',
      description: 'Automated insurance and dispute resolution',
      tech: 'Decentralized Escrow'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-olive-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-olive-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-olive-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-olive-100 text-olive-800 text-sm font-medium">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Decentralized Protocol
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                Free to Join
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-display text-crisp text-5xl lg:text-7xl xl:text-8xl leading-tight">
                <span className="text-gray-900">Decentralized</span>
                <br />
                <span className="text-gradient-premium">
                  Logistics Protocol
                </span>
              </h1>

              <p className="text-body text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                Unifying physical and digital economies through <strong className="text-body-medium text-gray-900">delivery-backed token utility</strong>,
                <strong className="text-body-medium text-gray-900"> AI-powered routing</strong>, and programmable trust.
                <span className="text-body-medium text-olive-700">Earn SST tokens through work-to-earn mechanics.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button
                onClick={handleGetStarted}
                className="group relative inline-flex h-12 items-center justify-center rounded-lg bg-olive-600 px-8 py-3 text-base text-body-medium text-white transition-all duration-200 hover:bg-olive-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
              >
                Launch Protocol
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 text-base text-body-medium text-gray-700 transition-all duration-200 hover:border-olive-300 hover:bg-olive-50">
                <PlayIcon className="mr-2 h-5 w-5" />
                View Whitepaper
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left group">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-olive-600 to-claude-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.label}
                  </div>
                  <div className="text-xs text-claude-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
                    {stat.tech}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-olive-50 via-white to-claude-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-olive-100">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-3xl"></div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-claude-200 to-olive-200 rounded-full opacity-20 blur-2xl"></div>

              {/* Feature Cards */}
              <div className="relative space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-olive-500 to-claude-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-subheading text-lg mb-2 text-gray-900 group-hover:text-olive-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-body text-gray-600 text-sm leading-relaxed mb-2">
                          {feature.description}
                        </p>
                        <div className="text-xs text-claude-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-mono inline-flex items-center px-2 py-1 rounded-full bg-claude-50 text-claude-700 font-medium">
                            {feature.tech}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-olive-300 to-claude-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-claude-200 to-olive-200 rounded-full opacity-30 animate-bounce"></div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>GDPR Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
