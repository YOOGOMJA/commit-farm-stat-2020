import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Section, Text } from '../../components';
import { keyframes } from '@emotion/react';

import './LanguageSection.scss';
import Reveal from 'react-awesome-reveal';

interface LangaugeBarProps {
  prefix: string;
  name: string;
  usage: number;
  total: number;
}

const LanguageBar = ({ prefix, name, usage, total }: LangaugeBarProps) => {
  const customAnimation = keyframes`
    from {
      width: 0;
      height : 100%;
    }
    to {
      height : 100%;
      width: ${(usage / total) * 100}%;
    }
  `;

  return (
    <div className={`${prefix}-row`}>
      <Text theme="disabled" className={`${prefix}-bar-label`}>
        {name}
      </Text>
      <div className={`${prefix}-bar-container`}>
        <Reveal
          duration={1500}
          triggerOnce
          keyframes={customAnimation}
          className={`${prefix}-bar`}
        >
          <div></div>
        </Reveal>
        <Text theme="disabled">{((usage / total) * 100).toFixed(2)}%</Text>
      </div>
    </div>
  );
};

const LanguageSection = () => {
  const PREFIX = 'language-section';
  const total = 365;
  const langStats = [
    { name: 'HTML', usage: 115 },
    { name: 'Javascript', usage: 90 },
    { name: 'CSS', usage: 83 },
    { name: 'C++', usage: 14 },
    { name: 'Java', usage: 14 },
    { name: 'Go', usage: 9 },
    { name: 'C', usage: 8 },
    { name: 'Batchfile', usage: 4 },
    { name: 'CoffeeScript', usage: 4 },
    { name: 'Jupyter Notebook', usage: 4 },
    { name: 'PHP', usage: 4 },
    { name: 'PowerShell', usage: 4 },
    { name: 'Dockerfile', usage: 3 },
    { name: 'Dart', usage: 2 },
    { name: 'Objective-C', usage: 2 },
    { name: 'C#', usage: 1 },
    { name: 'Hack', usage: 1 },
    { name: 'Kotlin', usage: 1 },
    { name: 'Less', usage: 1 },
    { name: 'Pug', usage: 1 }
  ];

  return (
    <Section
      name={PREFIX}
      className={`${PREFIX}-container `}
      wrapperClassName={`${PREFIX}-wrapper`}
      header={{
        title: '언어 사용 현황',
        desc: '정원사 분들의 언어 사용 현황을 알아봅니다'
      }}
    >
      <div className={`${PREFIX}-charts`}>
        {langStats.map((item, idx) => {
          return (
            <LanguageBar prefix={PREFIX} {...item} total={total} key={idx} />
          );
        })}
      </div>
    </Section>
  );
};

export default LanguageSection;
