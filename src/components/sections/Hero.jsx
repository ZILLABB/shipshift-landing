import { ArrowRightIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { TruckIcon, ClockIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Hero = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Navigate to signup page after confetti
    setTimeout(() => {
      navigate('/signup');
    }, 1000);
  };

  const stats = [
    { label: 'Countries Served', value: '50+', suffix: 'Worldwide', tech: 'Global Network' },
    { label: 'Cost Savings', value: '60%', suffix: 'vs Traditional', tech: 'Smart Routing' },
    { label: 'Delivery Success', value: '99.9%', suffix: 'Success Rate', tech: 'Reliable Service' }
  ];

  const features = [
    {
      icon: TruckIcon,
      title: 'Community Transport',
      description: 'Neighbors help transport packages along their daily routes',
      tech: 'Colony Network'
    },
    {
      icon: ClockIcon,
      title: 'Token Rewards',
      description: 'Earn Colony Tokens for every delivery you help complete',
      tech: 'Earn While Commuting'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure Handoffs',
      description: 'Smart contracts ensure safe package transfers between members',
      tech: 'Trustless System'
    }
  ];

  // Auto-cycling effect for tech details - one card at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex(prev => {
        // Cycle through: -1 (none), 0, 1, 2, then back to -1
        if (prev >= 2) return -1;
        return prev + 1;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
           }}>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive-900/20 via-gray-900/30 to-olive-800/40"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-16 left-8 w-48 h-48 bg-olive-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute top-32 right-8 w-48 h-48 bg-olive-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-olive-600/90 backdrop-blur-sm text-white text-sm font-medium">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Decentralized Colony Network
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium">
                <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                Earn Tokens for Helping
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-display text-crisp text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                <span className="text-white">Community-Powered</span>
                <br />
                <span className="bg-gradient-to-r from-olive-400 to-olive-300 bg-clip-text text-transparent">
                  Delivery Network
                </span>
              </h1>

              <p className="text-body text-lg lg:text-xl text-gray-100 leading-relaxed max-w-lg">
                Join a <strong className="text-body-medium text-white">decentralized logistics colony</strong> where community members
                <strong className="text-body-medium text-white"> earn tokens</strong> by helping transport packages along their daily routes.
                <span className="text-body-medium text-olive-300">Turn your commute into income.</span>
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
                className="group relative inline-flex h-10 items-center justify-center rounded-lg bg-olive-600 px-6 py-2 text-sm text-body-medium text-white transition-all duration-200 hover:bg-olive-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
              >
                Join a Colony
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group inline-flex h-10 items-center justify-center rounded-lg border border-white/50 px-6 py-2 text-sm text-body-medium text-white transition-all duration-200 hover:border-white hover:bg-white/10 backdrop-blur-sm">
                <PlayIcon className="mr-2 h-4 w-4" />
                How It Works
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left group">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-olive-600 to-claude-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-900 mb-1">
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.label}
                  </div>
                  <motion.div
                    className="text-xs text-claude-600 mt-1"
                    animate={{
                      opacity: activeCardIndex === index ? 1 : 0,
                      y: activeCardIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {stat.tech}
                  </motion.div>
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
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-3xl"></div>
              <div className="absolute top-3 right-3 w-20 h-20 bg-gradient-to-br from-claude-200 to-olive-200 rounded-full opacity-20 blur-xl"></div>

              {/* Feature Cards */}
              <div className="relative space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-olive-500 to-claude-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-subheading text-base mb-1 text-gray-900 group-hover:text-olive-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-body text-gray-600 text-sm leading-relaxed mb-1">
                          {feature.description}
                        </p>
                        <motion.div
                          className="text-xs text-claude-600"
                          animate={{
                            opacity: activeCardIndex === index ? 1 : 0,
                            y: activeCardIndex === index ? 0 : 10
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-mono inline-flex items-center px-2 py-1 rounded-full bg-claude-50 text-claude-700 font-medium">
                            {feature.tech}
                          </span>
                        </motion.div>
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
                <span>Secure & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                <span>Global Coverage</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
