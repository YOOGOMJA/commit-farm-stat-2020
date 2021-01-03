import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  prefix: string;
}

const SectionWrapper = ({
  children,
  className,
  prefix
}: SectionWrapperProps) => {
  return <div className={`${prefix}-wrapper ${className}`}>{children}</div>;
};

export default SectionWrapper;
