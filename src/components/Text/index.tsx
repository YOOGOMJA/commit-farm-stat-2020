import React, { ReactNode } from 'react';
import './Text.scss';

interface TextProps {
  className?: string;
  theme?: 'primary' | 'secondary' | 'default' | 'disabled';
  type?: 'p' | 'h';
  children: ReactNode;
}

const Text = ({
  className = '',
  theme = 'primary',
  type = 'p',
  children
}: TextProps) => {
  const PREFIX = '__g_text';
  return (
    <p className={`${PREFIX}-${type}-${theme} ${className}`}>{children}</p>
  );
};

export default Text;
