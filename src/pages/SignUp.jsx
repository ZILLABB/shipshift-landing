import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  EyeIcon,
  EyeSlashIcon,
  TruckIcon,
  BuildingOfficeIcon,
  CubeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const SignUp = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    userRole: '',
    availableHours: '',
    storageSpace: '',
    transportCapacity: '',
    preferredRoutes: '',
    agreeToTerms: false
  });

  // Pre-populate form if data was passed from ShippingForm
  useEffect(() => {
    if (location.state) {
      setFormData(prev => ({
        ...prev,
        ...location.state
      }));
      // If user role is already selected, start from step 2
      if (location.state.userRole) {
        setCurrentStep(2);
      }
    }
  }, [location.state]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userRoles = [
    { 
      value: 'colony-owner', 
      label: 'Colony Owner', 
      description: 'Start and manage a colony in your area',
      icon: BuildingOfficeIcon,
      benefits: ['Colony Owner Tokens', 'Admin privileges', 'Revenue sharing', 'Network governance']
    },
    { 
      value: 'reserve-operator', 
      label: 'Reserve Operator', 
      description: 'Provide secure storage space for packages',
      icon: CubeIcon,
      benefits: ['Colony Reserve Operator Tokens', 'Storage rental income', 'Flexible hours', 'Package security']
    },
    { 
      value: 'dispatch-operator', 
      label: 'Dispatch Operator', 
      description: 'Transport packages along your daily routes',
      icon: TruckIcon,
      benefits: ['Colony Dispatcher Tokens', 'Earn while commuting', 'Route optimization', 'Flexible scheduling']
    },
    { 
      value: 'participant', 
      label: 'Participant', 
      description: 'Send and receive packages in the network',
      icon: UserGroupIcon,
      benefits: ['Participation rewards', 'Access to network', 'Community benefits', 'Lower shipping costs']
    }
  ];

  // Validation functions
  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Please enter a complete address';
    }

    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.userRole) {
      newErrors.userRole = 'Please select a role';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Handle step navigation
  const handleNextStep = () => {
    if (currentStep === 1) {
      const step1Errors = validateStep1();
      if (Object.keys(step1Errors).length > 0) {
        setErrors(step1Errors);
        return;
      }
      setErrors({});
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all steps
    const step1Errors = validateStep1();
    const step2Errors = validateStep2();
    const allErrors = { ...step1Errors, ...step2Errors };

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setIsSubmitting(false);
      // Go back to first step with errors if needed
      if (Object.keys(step1Errors).length > 0) {
        setCurrentStep(1);
      }
      return;
    }

    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Handle signup logic here
    console.log('Signup data:', formData);
    // Redirect to app or success page
    window.location.href = 'https://app.shipshift.com';
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-max section-padding py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display text-3xl lg:text-4xl mb-6 text-gray-900">
            Join a <span className="text-gradient-premium">Colony</span>
          </h1>
          <p className="text-body text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your role in the decentralized logistics network and start earning tokens by helping your community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Progress Bar */}
            <div className="bg-gray-50 px-8 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className={`${currentStep >= 1 ? 'text-olive-600' : 'text-gray-400'}`}>
                  Personal Info
                </span>
                <span className={`${currentStep >= 2 ? 'text-olive-600' : 'text-gray-400'}`}>
                  Choose Role
                </span>
                <span className={`${currentStep >= 3 ? 'text-olive-600' : 'text-gray-400'}`}>
                  Complete Setup
                </span>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-olive-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <UserIcon className="w-5 h-5 mr-2 text-olive-600" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500 pr-12"
                          placeholder="Create a secure password"
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
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                        placeholder="Street address, city, state, zip code"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Choose Role */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <TruckIcon className="w-5 h-5 mr-2 text-olive-600" />
                    Choose Your Role
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {userRoles.map((role) => (
                      <div
                        key={role.value}
                        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.userRole === role.value
                            ? 'border-olive-500 bg-olive-50'
                            : 'border-gray-200 hover:border-olive-300'
                        }`}
                        onClick={() => handleInputChange('userRole', role.value)}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <role.icon className="w-6 h-6 text-olive-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{role.label}</h4>
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.userRole === role.value
                                  ? 'border-olive-500 bg-olive-500'
                                  : 'border-gray-300'
                              }`}>
                                {formData.userRole === role.value && (
                                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {role.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-olive-600 rounded-full mr-2"></div>
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Complete Setup */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-2 text-olive-600" />
                    Complete Your Setup
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500 pr-12"
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Role-specific preferences */}
                    {(formData.userRole === 'reserve-operator' || formData.userRole === 'dispatch-operator') && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Available Hours
                          </label>
                          <input
                            type="text"
                            value={formData.availableHours}
                            onChange={(e) => handleInputChange('availableHours', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                            placeholder="e.g., 9 AM - 5 PM, Weekdays"
                          />
                        </div>

                        {formData.userRole === 'reserve-operator' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Storage Space Available
                            </label>
                            <input
                              type="text"
                              value={formData.storageSpace}
                              onChange={(e) => handleInputChange('storageSpace', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                              placeholder="e.g., Small room, 50 packages"
                            />
                          </div>
                        )}

                        {formData.userRole === 'dispatch-operator' && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Transport Capacity
                              </label>
                              <input
                                type="text"
                                value={formData.transportCapacity}
                                onChange={(e) => handleInputChange('transportCapacity', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                                placeholder="e.g., Car trunk, 10 packages"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Routes
                              </label>
                              <input
                                type="text"
                                value={formData.preferredRoutes}
                                onChange={(e) => handleInputChange('preferredRoutes', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
                                placeholder="e.g., Downtown to Airport, Home to Office"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        className="w-4 h-4 text-olive-600 border-gray-300 rounded focus:ring-olive-500 mt-1"
                        required
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <Link to="/terms" className="text-olive-600 hover:text-olive-700">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-olive-600 hover:text-olive-700">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className={`px-6 py-3 rounded-lg border transition-colors ${
                    currentStep === 1 
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                    className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors flex items-center"
                  >
                    Next
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors flex items-center"
                  >
                    Create Account
                    <TruckIcon className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </motion.form>

          {/* Sign In Link */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-olive-600 hover:text-olive-700 font-medium">
                Sign in here
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
