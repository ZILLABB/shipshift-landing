import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Services', href: '/services' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'FAQ', href: '/faq' }
    ],
    Support: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Contact Us', href: '/about-us' },
      { name: 'Documentation', href: '/faq' },
      { name: 'API Reference', href: '/services' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/privacy' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-olive-600 to-olive-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-display text-xl">ShipShift</span>
            </div>
            <p className="text-body text-gray-400 text-sm leading-relaxed mb-4">
              Making shipping simple, affordable, and accessible to everyone. Connect with reliable delivery services worldwide.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="text-gray-400 hover:text-olive-400 transition-colors duration-200"
                  aria-label={social}
                >
                  <span className="text-sm">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-subheading text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-olive-400 text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-olive-400 text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="text-gray-400 text-sm">
            © 2024 ShipShift. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
