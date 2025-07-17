import { forwardRef } from 'react';

const Section = forwardRef(({ 
  children, 
  id,
  className = '', 
  variant = 'default',
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    hero: 'bg-gradient-to-br from-gray-50 via-white to-emerald-50'
  };
  
  const classes = `section-padding ${variants[variant]} ${className}`;
  
  return (
    <section
      ref={ref}
      id={id}
      className={classes}
      {...props}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
