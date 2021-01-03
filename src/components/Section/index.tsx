import React, { ReactNode, useEffect, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import './sectionContainer.scss';
import { Element } from 'react-scroll';

interface SectionContainerProps {
  name: string;
  children?: ReactNode;
  className?: string;
  wrapperClassName?: string;
  header: { title: string; desc: string };
}

const SectionContainer = ({
  name,
  header,
  children,
  className = '',
  wrapperClassName = ''
}: SectionContainerProps) => {
  const PREFIX = '__g_section';

  return (
    <Element id={name} name={name} className={`${PREFIX} ${className}`}>
      <SectionHeader
        name={name}
        prefix={PREFIX}
        title={header.title}
        desc={header.desc}
      />
      <SectionWrapper prefix={PREFIX} className={wrapperClassName}>
        {children}
      </SectionWrapper>
    </Element>
  );
};

export default SectionContainer;
