import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCurrency } from '../../contexts/CurrencyContext';
import { 
  ChevronDownIcon, 
  GlobeAltIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const CurrencySelector = ({ className = '', compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currency, selectedCountry, updateCurrency, getSupportedCountries, getRateStatus } = useCurrency();
  const dropdownRef = useRef(null);

  const supportedCountries = getSupportedCountries();
  const rateStatus = getRateStatus();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country) => {
    updateCurrency(country);
    setIsOpen(false);
  };

  if (compact) {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:text-olive-600 transition-colors duration-200 relative"
          title={rateStatus.isLive ? `Live rates (updated ${rateStatus.lastUpdated?.toLocaleTimeString()})` : 'Using fallback rates'}
        >
          <span className="font-medium">{currency.symbol}</span>
          <span className="text-xs">{currency.code}</span>
          {rateStatus.isLive && (
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          )}
          <ChevronDownIcon className="w-3 h-3" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-60 overflow-y-auto"
            >
              <div className="p-2">
                {supportedCountries.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 flex items-center justify-between ${
                      selectedCountry === country
                        ? 'bg-olive-100 text-olive-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span>{country}</span>
                    {selectedCountry === country && (
                      <CheckIcon className="w-4 h-4 text-olive-600" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-olive-300 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 transition-colors duration-200"
      >
        <GlobeAltIcon className="w-4 h-4 text-gray-500" />
        <div className="text-left">
          <div className="text-sm font-medium text-gray-900">{selectedCountry}</div>
          <div className="text-xs text-gray-500">{currency.symbol} {currency.code}</div>
        </div>
        <ChevronDownIcon className="w-4 h-4 text-gray-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-60 overflow-y-auto"
          >
            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 px-3 py-2 border-b border-gray-100">
                Select your country
              </div>
              {supportedCountries.map((country) => (
                <button
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 flex items-center justify-between ${
                    selectedCountry === country
                      ? 'bg-olive-100 text-olive-700'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>{country}</span>
                  {selectedCountry === country && (
                    <CheckIcon className="w-4 h-4 text-olive-600" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrencySelector;
