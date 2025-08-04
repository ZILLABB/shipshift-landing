import React, { createContext, useContext, useState, useEffect } from 'react';

const VisitorTrackingContext = createContext();

export const useVisitorTracking = () => {
  const context = useContext(VisitorTrackingContext);
  if (!context) {
    throw new Error('useVisitorTracking must be used within a VisitorTrackingProvider');
  }
  return context;
};

// Simulated visitor data for demo purposes
// In production, this would connect to a real analytics service
const generateMockVisitorData = () => {
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
    'Spain', 'Italy', 'Netherlands', 'Japan', 'Australia', 'New Zealand',
    'Singapore', 'Hong Kong', 'India', 'China', 'South Korea', 'Brazil',
    'Mexico', 'South Africa', 'Nigeria', 'Kenya', 'Sweden', 'Norway',
    'Denmark', 'Finland', 'Switzerland', 'Austria', 'Belgium', 'Portugal',
    'Ireland', 'Israel', 'UAE', 'Thailand', 'Malaysia', 'Philippines',
    'Indonesia', 'Vietnam', 'Ghana', 'Egypt', 'Morocco', 'Tanzania'
  ];

  const regions = {
    'North America': ['United States', 'Canada', 'Mexico'],
    'Europe': ['United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Switzerland', 'Austria', 'Belgium', 'Portugal', 'Ireland'],
    'Asia Pacific': ['Japan', 'Australia', 'New Zealand', 'Singapore', 'Hong Kong', 'India', 'China', 'South Korea', 'Thailand', 'Malaysia', 'Philippines', 'Indonesia', 'Vietnam'],
    'Middle East & Africa': ['South Africa', 'Nigeria', 'Kenya', 'Israel', 'UAE', 'Ghana', 'Egypt', 'Morocco', 'Tanzania'],
    'South America': ['Brazil']
  };

  // Generate random active countries (between 8-25 countries)
  const activeCountryCount = Math.floor(Math.random() * 18) + 8;
  const activeCountries = [];
  const shuffled = [...countries].sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < activeCountryCount; i++) {
    const country = shuffled[i];
    activeCountries.push({
      country,
      visitors: Math.floor(Math.random() * 50) + 1,
      region: Object.keys(regions).find(region => regions[region].includes(country)) || 'Other'
    });
  }

  // Calculate regional stats
  const regionalStats = {};
  activeCountries.forEach(({ region, visitors }) => {
    regionalStats[region] = (regionalStats[region] || 0) + visitors;
  });

  const totalVisitors = activeCountries.reduce((sum, { visitors }) => sum + visitors, 0);

  return {
    activeCountries: activeCountries.sort((a, b) => b.visitors - a.visitors),
    regionalStats,
    totalVisitors,
    totalCountries: activeCountryCount,
    lastUpdated: new Date()
  };
};

export const VisitorTrackingProvider = ({ children }) => {
  const [visitorData, setVisitorData] = useState(generateMockVisitorData());
  const [isLive, setIsLive] = useState(true);

  // Update visitor data every 30 seconds to simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setVisitorData(generateMockVisitorData());
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  // Simulate small fluctuations every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setVisitorData(prevData => {
          const newData = { ...prevData };
          
          // Randomly add/remove 1-3 visitors from random countries
          const randomCountries = newData.activeCountries
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * 3) + 1);
          
          randomCountries.forEach(countryData => {
            const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
            countryData.visitors = Math.max(1, countryData.visitors + change);
          });

          // Recalculate totals
          newData.totalVisitors = newData.activeCountries.reduce((sum, { visitors }) => sum + visitors, 0);
          newData.lastUpdated = new Date();

          // Recalculate regional stats
          const regionalStats = {};
          newData.activeCountries.forEach(({ region, visitors }) => {
            regionalStats[region] = (regionalStats[region] || 0) + visitors;
          });
          newData.regionalStats = regionalStats;

          return newData;
        });
      }
    }, 5000); // Small updates every 5 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const toggleLiveUpdates = () => {
    setIsLive(!isLive);
  };

  const refreshData = () => {
    setVisitorData(generateMockVisitorData());
  };

  const getTopCountries = (limit = 5) => {
    return visitorData.activeCountries.slice(0, limit);
  };

  const getRegionalBreakdown = () => {
    return Object.entries(visitorData.regionalStats)
      .map(([region, visitors]) => ({ region, visitors }))
      .sort((a, b) => b.visitors - a.visitors);
  };

  const value = {
    visitorData,
    isLive,
    toggleLiveUpdates,
    refreshData,
    getTopCountries,
    getRegionalBreakdown
  };

  return (
    <VisitorTrackingContext.Provider value={value}>
      {children}
    </VisitorTrackingContext.Provider>
  );
};

export default VisitorTrackingContext;
