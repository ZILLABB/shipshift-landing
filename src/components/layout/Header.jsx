import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import CurrencySelector from '../ui/CurrencySelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const navigation = [
    {
      name: 'About Us',
      href: '/about-us',
      preview: 'Learn about our team, mission, and vision for the future of logistics'
    },
    {
      name: 'Services',
      href: '/services',
      preview: 'Discover our colony ecosystem and user roles'
    },
    {
      name: 'Roadmap',
      href: '/roadmap',
      preview: 'Explore our development timeline and upcoming features'
    },
    {
      name: 'FAQ',
      href: '/faq',
      preview: 'Find answers to common questions about our platform and services'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-display text-xl font-bold text-gray-900">ShipShift</span>
              <span className="text-xs text-olive-600 font-medium -mt-1">Decentralized Logistics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="text-body-medium text-gray-600 hover:text-olive-600 transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-body-medium text-gray-600 hover:text-olive-600 transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-600 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                )}

                {/* Hover Tooltip */}
                {hoveredItem === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                    <p className="text-sm text-gray-600 text-center">{item.preview}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Currency Selector & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <CurrencySelector compact />
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/signin')}
            >
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
              {navigation.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-olive-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-olive-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-200">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/signin')}
                >
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
