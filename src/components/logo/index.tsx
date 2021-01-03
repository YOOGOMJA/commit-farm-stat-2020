import React from 'react';
import logo from './cropped_logo.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <img src={logo} className={className} alt="로고"/>;
};

export default Logo;
