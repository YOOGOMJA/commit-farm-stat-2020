import React from 'react';
import './AnimatedIcon.scss';

interface AnimatedIconProps {
  isOpened: Boolean;
  onClick?: () => void;
}

const AnimatedIcon = ({ isOpened, onClick }: AnimatedIconProps) => {
  return (
    <div
      className={`animated-menu-icon ${isOpened && 'active'}`}
      onClick={onClick}
    >
      <div className="animated-menu-row"></div>
      <div className="animated-menu-row"></div>
      <div className="animated-menu-row"></div>
    </div>
  );
};

export default AnimatedIcon;
