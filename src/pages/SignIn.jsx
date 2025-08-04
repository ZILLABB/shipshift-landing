import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  EyeIcon, 
  EyeSlashIcon,
  TruckIcon,
  UserGroupIcon,
  CubeIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login data:', formData);
      // Redirect to app
      window.location.href = 'https://app.shipshift.com';
    }, 1500);
  };

  const colonyRoles = [
    {
      icon: BuildingOfficeIcon,
      title: 'Colony Owner',
      description: 'Manage colonies and earn governance tokens'
    },
    {
      icon: CubeIcon,
      title: 'Reserve Operator',
      description: 'Provide storage and earn operator tokens'
    },
    {
      icon: TruckIcon,
      title: 'Dispatch Operator',
      description: 'Transport packages and earn dispatcher tokens'
    },
    {
      icon: UserGroupIcon,
      title: 'Participant',
      description: 'Send, receive, and earn participation rewards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Sign In Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-display text-3xl lg:text-4xl mb-4 text-gray-900">
                  Welcome Back to <span className="text-gradient-premium">ShipShift</span>
                </h1>
                <p className="text-body text-gray-600">
                  Sign in to access your colony dashboard and continue earning tokens.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                      placeholder="your.email@example.com"
                      required
                    />
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                      className="w-4 h-4 text-olive-600 border-gray-300 rounded focus:ring-olive-500"
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-olive-600 hover:text-olive-700">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Sign In
                      <TruckIcon className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-olive-600 hover:text-olive-700 font-medium">
                    Join a colony
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Colony Roles Info */}
          <motion.div
            className="bg-gradient-to-br from-olive-50 to-white rounded-2xl p-8 border border-olive-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Choose Your Role in the Colony
            </h2>
            <p className="text-gray-600 mb-8">
              Join our decentralized logistics network and start earning tokens based on your contribution.
            </p>

            <div className="space-y-4">
              {colonyRoles.map((role, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <role.icon className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{role.title}</h3>
                    <p className="text-sm text-gray-600">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-olive-100 rounded-lg">
              <h3 className="font-semibold text-olive-800 mb-2">New to ShipShift?</h3>
              <p className="text-sm text-olive-700 mb-3">
                Join thousands of community members earning tokens through our decentralized logistics network.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center text-sm font-medium text-olive-600 hover:text-olive-700"
              >
                Get started today
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
