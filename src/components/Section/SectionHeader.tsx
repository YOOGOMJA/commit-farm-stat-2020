import React from 'react';
import { Text } from '..';
import { Fade } from 'react-awesome-reveal';
import { IoIosLink } from 'react-icons/io';

interface SectionHeaderProps {
  name: string;
  title: string;
  desc: string;
  prefix: string;
}

const SectionHeader = ({ title, desc, prefix, name }: SectionHeaderProps) => {
  return (
    <div className={`${prefix}-header`}>
      <Fade triggerOnce>
        <Text type="h" theme="default">
          {title}
          <a href={`#${name}`}>
            <IoIosLink></IoIosLink>
          </a>
        </Text>
        <Text type="p" theme="disabled">
          {desc}
        </Text>
      </Fade>
    </div>
  );
};

export default SectionHeader;
