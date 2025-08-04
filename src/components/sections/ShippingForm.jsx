import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../../contexts/CurrencyContext';
import {
  MapPinIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  TruckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ShippingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    userRole: '',
    availableHours: '',
    storageSpace: '',
    transportCapacity: '',
    preferredRoutes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPopulating, setIsAutoPopulating] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-population functionality
  const autoPopulateData = () => {
    setIsAutoPopulating(true);
    
    // Simulate auto-population with sample data
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, New York, NY 10001'
      }));
      setIsAutoPopulating(false);
    }, 1000);
  };

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

    if (!formData.userRole) {
      newErrors.userRole = 'Please select a role';
    }

    // Role-specific validations
    if (formData.userRole === 'reserve-operator' && !formData.storageSpace.trim()) {
      newErrors.storageSpace = 'Storage space details are required for Reserve Operators';
    }

    if (formData.userRole === 'dispatch-operator' && !formData.transportCapacity.trim()) {
      newErrors.transportCapacity = 'Transport capacity is required for Dispatch Operators';
    }

    if ((formData.userRole === 'dispatch-operator' || formData.userRole === 'reserve-operator') && !formData.availableHours.trim()) {
      newErrors.availableHours = 'Available hours are required for this role';
    }

    return newErrors;
  };

  // Handle input changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate current step
    let validationErrors = {};
    if (currentStep === 1) {
      validationErrors = validateStep1();
    } else if (currentStep === 2) {
      validationErrors = validateStep2();
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Navigate to signup page with form data
    navigate('/signup', { state: formData });
    setIsSubmitting(false);
  };

  // Auto-populate when email is completed
  useEffect(() => {
    if (formData.email && formData.email.includes('@') && !formData.name) {
      autoPopulateData();
    }
  }, [formData.email, formData.name]);

  const userRoles = [
    { value: 'colony-owner', label: 'Colony Owner', description: 'Start and manage a colony' },
    { value: 'reserve-operator', label: 'Reserve Operator', description: 'Provide storage space' },
    { value: 'dispatch-operator', label: 'Dispatch Operator', description: 'Transport packages' },
    { value: 'participant', label: 'Participant', description: 'Send and receive packages' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display text-3xl lg:text-4xl mb-6 text-gray-900">
            Join Your Local <span className="text-gradient-premium">Colony</span>
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your role in the decentralized logistics network and start earning tokens by helping your community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                  Preferences
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500 ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        disabled={isAutoPopulating}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500 ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                        disabled={isAutoPopulating}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500 ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="+1 (555) 123-4567"
                        disabled={isAutoPopulating}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-olive-500 ${
                          errors.address ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Street address, city, state, zip code"
                        disabled={isAutoPopulating}
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                      )}
                    </div>
                  </div>

                  {isAutoPopulating && (
                    <div className="mt-4 p-3 bg-olive-50 border border-olive-200 rounded-lg">
                      <p className="text-sm text-olive-700">
                        Auto-populating your information...
                      </p>
                    </div>
                  )}
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
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.userRole === role.value
                            ? 'border-olive-500 bg-olive-50'
                            : 'border-gray-200 hover:border-olive-300'
                        }`}
                        onClick={() => handleInputChange('userRole', role.value)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{role.label}</h4>
                            <p className="text-sm text-gray-600">{role.description}</p>
                          </div>
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
                      </div>
                    ))}
                  </div>

                  {errors.userRole && (
                    <p className="mt-3 text-sm text-red-600">{errors.userRole}</p>
                  )}
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-2 text-olive-600" />
                    Role Preferences
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(formData.userRole === 'reserve-operator' || formData.userRole === 'dispatch-operator') && (
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
                    )}

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
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevStep}
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
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors flex items-center"
                  >
                    Next
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors flex items-center ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Join Colony
                        <TruckIcon className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ShippingForm;
