import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useVisitorTracking } from '../../contexts/VisitorTrackingContext';
import { 
  GlobeAltIcon, 
  EyeIcon, 
  ChevronUpIcon, 
  ChevronDownIcon,
  ArrowPathIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

const VisitorTracker = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { visitorData, isLive, toggleLiveUpdates, refreshData, getTopCountries, getRegionalBreakdown } = useVisitorTracking();

  const topCountries = getTopCountries(5);
  const regionalBreakdown = getRegionalBreakdown();

  const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden max-w-sm">
        {/* Compact Header */}
        <motion.div
          className="p-4 bg-gradient-to-r from-olive-50 to-gray-50 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ backgroundColor: 'rgba(107, 114, 128, 0.05)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <GlobeAltIcon className="w-5 h-5 text-olive-600" />
                {isLive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {visitorData.totalVisitors} visitors online
                </div>
                <div className="text-xs text-gray-500">
                  from {visitorData.totalCountries} countries
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUpIcon className="w-4 h-4 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 border-t border-gray-100">
                {/* Controls */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-500">
                    Updated {formatTimeAgo(visitorData.lastUpdated)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLiveUpdates();
                      }}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title={isLive ? 'Pause updates' : 'Resume updates'}
                    >
                      {isLive ? (
                        <PauseIcon className="w-3 h-3 text-gray-600" />
                      ) : (
                        <PlayIcon className="w-3 h-3 text-gray-600" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        refreshData();
                      }}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title="Refresh data"
                    >
                      <ArrowPathIcon className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Top Countries */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Top Countries</h4>
                  <div className="space-y-2">
                    {topCountries.map((country, index) => (
                      <motion.div
                        key={country.country}
                        className="flex items-center justify-between text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-olive-500 rounded-full"></div>
                          <span className="text-gray-600 truncate max-w-[120px]">
                            {country.country}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">
                          {country.visitors}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Regional Breakdown */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">By Region</h4>
                  <div className="space-y-1">
                    {regionalBreakdown.map((region, index) => (
                      <motion.div
                        key={region.region}
                        className="flex items-center justify-between text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <span className="text-gray-600 truncate max-w-[120px]">
                          {region.region}
                        </span>
                        <span className="font-medium text-gray-900">
                          {region.visitors}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Indicator */}
                <div className="flex items-center justify-center pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <EyeIcon className="w-3 h-3" />
                    <span>
                      {isLive ? 'Live tracking active' : 'Updates paused'}
                    </span>
                    {isLive && (
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VisitorTracker;
