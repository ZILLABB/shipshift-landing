import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

// Base currency configuration with fallback rates
const baseCurrencyConfig = {
  // Developed Markets - Use live rates
  US: { code: 'USD', symbol: '$', fallbackRate: 1.0, format: 'before', marketTier: 'developed', useLiveRate: true },
  CA: { code: 'CAD', symbol: 'C$', fallbackRate: 1.35, format: 'before', marketTier: 'developed', useLiveRate: true },
  GB: { code: 'GBP', symbol: '£', fallbackRate: 0.79, format: 'before', marketTier: 'developed', useLiveRate: true },
  EU: { code: 'EUR', symbol: '€', fallbackRate: 0.92, format: 'before', marketTier: 'developed', useLiveRate: true },
  DE: { code: 'EUR', symbol: '€', fallbackRate: 0.92, format: 'before', marketTier: 'developed', useLiveRate: true },
  FR: { code: 'EUR', symbol: '€', fallbackRate: 0.92, format: 'before', marketTier: 'developed', useLiveRate: true },
  ES: { code: 'EUR', symbol: '€', fallbackRate: 0.92, format: 'before', marketTier: 'developed', useLiveRate: true },
  IT: { code: 'EUR', symbol: '€', fallbackRate: 0.92, format: 'before', marketTier: 'developed', useLiveRate: true },
  NL: { code: 'EUR', symbol: '€', fallbackRate: 0.92, format: 'before', marketTier: 'developed', useLiveRate: true },
  JP: { code: 'JPY', symbol: '¥', fallbackRate: 149.50, format: 'before', marketTier: 'developed', useLiveRate: true },
  AU: { code: 'AUD', symbol: 'A$', fallbackRate: 1.52, format: 'before', marketTier: 'developed', useLiveRate: true },
  NZ: { code: 'NZD', symbol: 'NZ$', fallbackRate: 1.64, format: 'before', marketTier: 'developed', useLiveRate: true },
  SG: { code: 'SGD', symbol: 'S$', fallbackRate: 1.35, format: 'before', marketTier: 'developed', useLiveRate: true },
  HK: { code: 'HKD', symbol: 'HK$', fallbackRate: 7.83, format: 'before', marketTier: 'developed', useLiveRate: true },

  // Emerging Markets - Use live rates with PPP adjustments
  IN: { code: 'INR', symbol: '₹', fallbackRate: 83.25, format: 'before', marketTier: 'emerging', useLiveRate: true, pppAdjustment: 0.3 },
  CN: { code: 'CNY', symbol: '¥', fallbackRate: 7.24, format: 'before', marketTier: 'emerging', useLiveRate: true, pppAdjustment: 0.6 },
  KR: { code: 'KRW', symbol: '₩', fallbackRate: 1327.50, format: 'before', marketTier: 'emerging', useLiveRate: true, pppAdjustment: 0.6 },
  BR: { code: 'BRL', symbol: 'R$', fallbackRate: 5.02, format: 'before', marketTier: 'emerging', useLiveRate: true, pppAdjustment: 0.65 },
  MX: { code: 'MXN', symbol: '$', fallbackRate: 17.15, format: 'before', marketTier: 'emerging', useLiveRate: true, pppAdjustment: 0.7 },
  ZA: { code: 'ZAR', symbol: 'R', fallbackRate: 18.75, format: 'before', marketTier: 'emerging', useLiveRate: true, pppAdjustment: 0.65 },

  // African Markets - Use live rates with strong PPP adjustments for attractive earnings
  NG: { code: 'NGN', symbol: '₦', fallbackRate: 825.50, format: 'before', marketTier: 'developing', useLiveRate: true, pppAdjustment: 0.2 },
  KE: { code: 'KES', symbol: 'KSh', fallbackRate: 147.25, format: 'before', marketTier: 'developing', useLiveRate: true, pppAdjustment: 0.25 }
};

// Initialize currency data with fallback rates
let currencyData = {};
Object.keys(baseCurrencyConfig).forEach(key => {
  const config = baseCurrencyConfig[key];
  currencyData[key] = {
    ...config,
    rate: config.fallbackRate,
    lastUpdated: null,
    isLive: false
  };
});

// Country to currency mapping
const countryToCurrency = {
  'United States': 'US',
  'Canada': 'CA',
  'United Kingdom': 'GB',
  'Germany': 'DE',
  'France': 'FR',
  'Spain': 'ES',
  'Italy': 'IT',
  'Netherlands': 'NL',
  'Japan': 'JP',
  'Australia': 'AU',
  'New Zealand': 'NZ',
  'Singapore': 'SG',
  'Hong Kong': 'HK',
  'India': 'IN',
  'China': 'CN',
  'South Korea': 'KR',
  'Brazil': 'BR',
  'Mexico': 'MX',
  'South Africa': 'ZA',
  'Nigeria': 'NG',
  'Kenya': 'KE'
};

// Live exchange rate fetching
const fetchLiveRates = async () => {
  try {
    // Using exchangerate-api.com (free tier: 1500 requests/month)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();

    if (data && data.rates) {
      // Update currency data with live rates
      Object.keys(currencyData).forEach(key => {
        const config = baseCurrencyConfig[key];
        if (config.useLiveRate && data.rates[config.code]) {
          let liveRate = data.rates[config.code];

          // Apply PPP adjustment for emerging/developing markets
          if (config.pppAdjustment) {
            liveRate = liveRate * config.pppAdjustment;
          }

          currencyData[key] = {
            ...currencyData[key],
            rate: liveRate,
            lastUpdated: new Date(),
            isLive: true
          };
        }
      });

      console.log('Live exchange rates updated successfully');
      return true;
    }
  } catch (error) {
    console.log('Failed to fetch live rates, using fallback rates:', error.message);
    return false;
  }
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [currency, setCurrency] = useState(currencyData.US);
  const [ratesLoaded, setRatesLoaded] = useState(false);

  // Initialize live rates and detect user's country
  useEffect(() => {
    const initializeCurrency = async () => {
      // Fetch live exchange rates first
      await fetchLiveRates();
      setRatesLoaded(true);

      // Then detect country
      try {
        // Try multiple geolocation services for better reliability
        const services = [
          'https://ipapi.co/json/',
          'https://api.ipify.org?format=json', // Fallback to get IP, then use another service
          'https://httpbin.org/ip' // Another fallback
        ];

        // First try ipapi.co which provides country directly
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();

          if (data.country_name && countryToCurrency[data.country_name]) {
            setSelectedCountry(data.country_name);
            updateCurrency(data.country_name);
            return;
          }

          // Try mapping country code to country name
          const countryCodeMap = {
            'US': 'United States',
            'CA': 'Canada',
            'GB': 'United Kingdom',
            'DE': 'Germany',
            'FR': 'France',
            'ES': 'Spain',
            'IT': 'Italy',
            'NL': 'Netherlands',
            'JP': 'Japan',
            'AU': 'Australia',
            'NZ': 'New Zealand',
            'SG': 'Singapore',
            'HK': 'Hong Kong',
            'IN': 'India',
            'CN': 'China',
            'KR': 'South Korea',
            'BR': 'Brazil',
            'MX': 'Mexico',
            'ZA': 'South Africa',
            'NG': 'Nigeria',
            'KE': 'Kenya'
          };

          const countryName = countryCodeMap[data.country_code];
          if (countryName && countryToCurrency[countryName]) {
            setSelectedCountry(countryName);
            updateCurrency(countryName);
            return;
          }
        } catch (error) {
          console.log('Primary geolocation service failed, trying fallback');
        }

        // Fallback to timezone detection
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const countryGuess = {
          'America/New_York': 'United States',
          'America/Los_Angeles': 'United States',
          'America/Chicago': 'United States',
          'America/Denver': 'United States',
          'America/Toronto': 'Canada',
          'America/Vancouver': 'Canada',
          'Europe/London': 'United Kingdom',
          'Europe/Berlin': 'Germany',
          'Europe/Paris': 'France',
          'Europe/Madrid': 'Spain',
          'Europe/Rome': 'Italy',
          'Europe/Amsterdam': 'Netherlands',
          'Asia/Tokyo': 'Japan',
          'Australia/Sydney': 'Australia',
          'Australia/Melbourne': 'Australia',
          'Pacific/Auckland': 'New Zealand',
          'Asia/Singapore': 'Singapore',
          'Asia/Hong_Kong': 'Hong Kong',
          'Asia/Kolkata': 'India',
          'Asia/Shanghai': 'China',
          'Asia/Seoul': 'South Korea',
          'America/Sao_Paulo': 'Brazil',
          'America/Mexico_City': 'Mexico',
          'Africa/Johannesburg': 'South Africa',
          'Africa/Lagos': 'Nigeria',
          'Africa/Nairobi': 'Kenya'
        }[timezone];

        if (countryGuess && countryToCurrency[countryGuess]) {
          setSelectedCountry(countryGuess);
          updateCurrency(countryGuess);
        }
      } catch (error) {
        console.log('Could not detect location, using default currency');
      }
    };

    initializeCurrency();
  }, []);

  // Refresh rates every 30 minutes
  useEffect(() => {
    const interval = setInterval(async () => {
      await fetchLiveRates();
      // Update current currency if rates changed
      const currencyCode = countryToCurrency[selectedCountry];
      if (currencyCode && currencyData[currencyCode]) {
        setCurrency(currencyData[currencyCode]);
      }
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [selectedCountry]);

  const updateCurrency = (country) => {
    const currencyCode = countryToCurrency[country];
    if (currencyCode && currencyData[currencyCode]) {
      setCurrency(currencyData[currencyCode]);
      setSelectedCountry(country);
    }
  };

  const convertPrice = (usdAmount, options = {}) => {
    const {
      showSymbol = true,
      showCode = false,
      decimals = 2,
      range = false
    } = options;

    if (range && typeof usdAmount === 'string' && usdAmount.includes('-')) {
      const [min, max] = usdAmount.split('-').map(val => parseFloat(val.replace(/[^0-9.]/g, '')));
      const convertedMin = min * currency.rate;
      const convertedMax = max * currency.rate;

      const formatAmount = (amount) => {
        let formatted;
        // Special formatting for different currency types
        if (currency.code === 'JPY' || currency.code === 'KRW' || currency.code === 'NGN' || currency.code === 'KES') {
          formatted = Math.round(amount).toLocaleString();
        } else if (currency.marketTier === 'developing' || currency.marketTier === 'emerging') {
          // Round to nearest 1000 for developing markets for cleaner large numbers
          const rounded = Math.round(amount / 1000) * 1000;
          formatted = rounded.toLocaleString();
        } else {
          formatted = amount.toFixed(decimals);
        }

        let result = '';
        if (showSymbol && currency.format === 'before') {
          result = `${currency.symbol}${formatted}`;
        } else if (showSymbol && currency.format === 'after') {
          result = `${formatted}${currency.symbol}`;
        } else {
          result = formatted;
        }

        if (showCode) {
          result += ` ${currency.code}`;
        }

        return result;
      };

      return `${formatAmount(convertedMin)}-${formatAmount(convertedMax)}`;
    }

    const numericAmount = typeof usdAmount === 'string'
      ? parseFloat(usdAmount.replace(/[^0-9.]/g, ''))
      : usdAmount;

    const convertedAmount = numericAmount * currency.rate;

    let formatted;
    // Special formatting for different currency types
    if (currency.code === 'JPY' || currency.code === 'KRW' || currency.code === 'NGN' || currency.code === 'KES') {
      formatted = Math.round(convertedAmount).toLocaleString();
    } else if (currency.marketTier === 'developing' || currency.marketTier === 'emerging') {
      // Round to nearest 1000 for developing markets for cleaner large numbers
      const rounded = Math.round(convertedAmount / 1000) * 1000;
      formatted = rounded.toLocaleString();
    } else {
      formatted = convertedAmount.toFixed(decimals);
    }

    let result = '';
    if (showSymbol && currency.format === 'before') {
      result = `${currency.symbol}${formatted}`;
    } else if (showSymbol && currency.format === 'after') {
      result = `${formatted}${currency.symbol}`;
    } else {
      result = formatted;
    }

    if (showCode) {
      result += ` ${currency.code}`;
    }

    return result;
  };

  const formatCurrency = (amount, options = {}) => {
    return convertPrice(amount, options);
  };

  const getSupportedCountries = () => {
    return Object.keys(countryToCurrency);
  };

  const getRateStatus = () => {
    return {
      isLive: currency.isLive,
      lastUpdated: currency.lastUpdated,
      ratesLoaded
    };
  };

  const refreshRates = async () => {
    const success = await fetchLiveRates();
    if (success) {
      const currencyCode = countryToCurrency[selectedCountry];
      if (currencyCode && currencyData[currencyCode]) {
        setCurrency(currencyData[currencyCode]);
      }
    }
    return success;
  };

  const value = {
    currency,
    selectedCountry,
    updateCurrency,
    convertPrice,
    formatCurrency,
    getSupportedCountries,
    getRateStatus,
    refreshRates,
    ratesLoaded,
    currencyData
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
