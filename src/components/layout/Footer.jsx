const Footer = () => {
  const footerLinks = {
    Protocol: [
      { name: 'Whitepaper', href: '#whitepaper' },
      { name: 'Tokenomics', href: '#tokenomics' },
      { name: 'Roadmap', href: '#roadmap' },
      { name: 'Security', href: '#security' }
    ],
    Community: [
      { name: 'Discord', href: '#discord' },
      { name: 'Twitter', href: '#twitter' },
      { name: 'Telegram', href: '#telegram' },
      { name: 'GitHub', href: '#github' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Developer Tools', href: '#tools' },
      { name: 'Support', href: '#support' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Compliance', href: '#compliance' },
      { name: 'Disclaimer', href: '#disclaimer' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-olive-600 to-olive-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-display text-xl">ShipShift</span>
            </div>
            <p className="text-body text-gray-400 text-sm leading-relaxed">
              Next-generation logistics protocol powered by AI and blockchain technology for faster, cheaper, and more secure deliveries.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-subheading text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 ShipShift Protocol. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {['Twitter', 'Discord', 'GitHub', 'Telegram'].map((social) => (
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

        {/* Legal Notice */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong>Legal Disclaimer:</strong> ShipShift Token (SST) is a utility token that provides access to features within the ShipShift logistics protocol. 
            It is not designed or intended for speculation or investment. Please review our compliance documentation and consult with legal advisors 
            regarding regulatory requirements in your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
