import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  KeyIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-max section-padding py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-olive-600 flex items-center">
                <HomeIcon className="w-4 h-4 mr-1" />
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/signin" className="text-gray-500 hover:text-olive-600">Sign In</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">Password Reset</span>
            </nav>
          </div>
        </div>

        <div className="container-max section-padding py-12">
          <motion.div
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                Check Your Email
              </h1>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your email and follow the instructions to reset your password.
              </p>
              
              <div className="space-y-4">
                <Link
                  to="/signin"
                  className="block w-full px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200"
                >
                  Back to Sign In
                </Link>
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="block w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Try Different Email
                </button>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Didn't receive the email?</strong>
                </p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• Check your spam/junk folder</li>
                  <li>• Make sure the email address is correct</li>
                  <li>• Wait a few minutes for delivery</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-max section-padding py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-olive-600 flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/signin" className="text-gray-500 hover:text-olive-600">Sign In</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Forgot Password</span>
          </nav>
        </div>
      </div>

      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Reset Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left mb-8">
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                  <KeyIcon className="w-6 h-6 text-olive-600" />
                </div>
                <h1 className="text-display text-3xl lg:text-4xl mb-4 text-gray-900">
                  Reset Your Password
                </h1>
                <p className="text-body text-gray-600">
                  Enter your email address and we'll send you a link to reset your password.
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                      placeholder="your.email@example.com"
                      required
                    />
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Reset Link
                      <EnvelopeIcon className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <Link 
                  to="/signin" 
                  className="inline-flex items-center text-olive-600 hover:text-olive-700 font-medium"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Sign In
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Help Information */}
          <motion.div
            className="bg-gradient-to-br from-olive-50 to-white rounded-2xl p-8 border border-olive-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Need Help?
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Password Reset Process</h3>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">1</span>
                    Enter your email address in the form
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">2</span>
                    Check your email for the reset link
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">3</span>
                    Click the link and create a new password
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">4</span>
                    Sign in with your new password
                  </li>
                </ol>
              </div>

              <div className="border-t border-olive-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Security Notice</h3>
                <p className="text-sm text-gray-600 mb-4">
                  For your security, password reset links expire after 24 hours. 
                  If you don't receive the email within a few minutes, please check your spam folder.
                </p>
              </div>

              <div className="border-t border-olive-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Still Having Trouble?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  If you continue to have issues accessing your account, our support team is here to help.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/faq"
                    className="block text-sm text-olive-600 hover:text-olive-700"
                  >
                    → Check our FAQ
                  </Link>
                  <a
                    href="mailto:support@shipshift.com"
                    className="block text-sm text-olive-600 hover:text-olive-700"
                  >
                    → Contact Support
                  </a>
                </div>
              </div>

              <div className="bg-olive-100 rounded-lg p-4">
                <h3 className="font-semibold text-olive-800 mb-2">New to ShipShift?</h3>
                <p className="text-sm text-olive-700 mb-3">
                  Join thousands of community members earning tokens through our decentralized logistics network.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center text-sm font-medium text-olive-600 hover:text-olive-700"
                >
                  Create an account
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
