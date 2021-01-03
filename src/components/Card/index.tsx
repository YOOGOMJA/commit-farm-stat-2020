import React, { ReactNode } from 'react';
import './Card.scss';
interface CardProps {
  className?: string;
  wrapperClassName?: string;
  headerClassName?: string;
  children: ReactNode;
  header: ReactNode;
}
const Card = ({
  className = '',
  wrapperClassName = '',
  headerClassName = '',
  children,
  header
}: CardProps) => {
  const PREFIX = '__g_card';
  return (
    <div className={`${PREFIX}-container ${className}`}>
      <div className={`${PREFIX}-header ${headerClassName}`}>{header}</div>
      <div className={`${PREFIX}-wrapper ${wrapperClassName}`}>{children}</div>
    </div>
  );
};

export default Card;
