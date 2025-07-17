import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  variant = 'light', 
  className = '', 
  hover = true,
  ...props 
}, ref) => {
  const baseClasses = 'rounded-xl shadow-lg border transition-all duration-300';
  
  const variants = {
    light: 'bg-white border-gray-100 hover:shadow-xl',
    dark: 'bg-gray-800 border-gray-700 text-white hover:shadow-xl',
    gradient: 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 hover:shadow-xl',
    glass: 'bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90'
  };
  
  const hoverEffect = hover ? variants[variant] : variants[variant].replace('hover:shadow-xl', '');
  const classes = `${baseClasses} ${hoverEffect} ${className}`;
  
  return (
    <div
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 pt-4 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
