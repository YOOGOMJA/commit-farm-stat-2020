import React from 'react';
import logo from './cropped_logo.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div
      style={{
        backgroundImage: `url('${logo}')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
      className={className}
    ></div>
  );
};

export default Logo;
