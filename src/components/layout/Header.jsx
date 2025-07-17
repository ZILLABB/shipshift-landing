import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Protocol', href: '#protocol' },
    { name: 'AI Engine', href: '#ai-engine' },
    { name: 'Token', href: '#token' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Security', href: '#security' },
    { name: 'Adoption', href: '#adoption' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-display text-xl font-bold text-gray-900">ShipShift</span>
              <span className="text-xs text-olive-600 font-medium -mt-1">Decentralized Logistics</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-body-medium text-gray-600 hover:text-olive-600 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}

            {/* Protocol Status */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-700">Live Protocol</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="text-gray-600 hover:text-olive-600 font-medium transition-colors duration-200">
              Whitepaper
            </button>
            <Button variant="primary" size="sm">
              Launch App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {/* Protocol Status Mobile */}
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg w-fit">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Live Protocol</span>
              </div>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-olive-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-200">
                <button className="text-gray-600 hover:text-olive-600 font-medium transition-colors duration-200 text-left">
                  Whitepaper
                </button>
                <Button variant="primary" size="sm">
                  Launch App
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
