import React from 'react';
import { Section, StatCard } from '../../components';
import { IoCalendarOutline, IoCodeSlashOutline } from 'react-icons/io5';
import { GoRepo } from 'react-icons/go';

import './RepositorySection.scss';

const RepositorySection = () => {
  const PREFIX = 'repository-section';
  const repoData = [
    {
      icon: <GoRepo />,
      title: '평균 참여 저장소 수',
      value: 9.11,
      suffix: '개'
    },
    {
      icon: <GoRepo />,
      title: '한 명이 참여한 가장 많은 저장소 수',
      value: 45,
      suffix: '개'
    },
    {
      icon: <IoCodeSlashOutline />,
      title: '저장소 당 평균 언어 수',
      value: 2.28,
      suffix: '개'
    },
    {
      icon: <IoCodeSlashOutline />,
      title: '한 저장소에 저장된 가장 많은 언어',
      value: 8,
      suffix: '개'
    }
  ];
  return (
    <Section
      name={PREFIX}
      className={`${PREFIX}-container `}
      wrapperClassName={`${PREFIX}-wrapper`}
      header={{
        title: '저장소 현황',
        desc: '정원사 분들의 저장소 사용 현황입니다'
      }}
    >
      <div className={`${PREFIX}-cards`}>
        {repoData.map((item, idx) => {
          return (
            <StatCard
              className={`${PREFIX}-card`}
              key={idx}
              {...item}
            ></StatCard>
          );
        })}
      </div>
    </Section>
  );
};

export default RepositorySection;
