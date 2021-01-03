import React from 'react';
import { Section, StatCard } from '../../components';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoIosGitCommit } from 'react-icons/io';
import { GoRepo } from 'react-icons/go';
import { BsPeople } from 'react-icons/bs';
import './SummarySection.scss';

const SummarySection = () => {
  const PREFIX = 'summary-section';
  const summaryData = [
    {
      icon: <IoCalendarOutline />,
      title: '진행일',
      content: 102,
      suffix: '일'
    },
    {
      icon: <IoIosGitCommit />,
      title: '커밋',
      content: 4529,
      suffix: '건'
    },
    {
      icon: <GoRepo />,
      title: '저장소',
      content: 405,
      suffix: '개'
    },
    {
      icon: <BsPeople />,
      title: '참여자',
      content: 27,
      suffix: '명'
    }
  ];
  return (
    <Section
      name={PREFIX}
      className={`${PREFIX}-container `}
      wrapperClassName={`${PREFIX}-wrapper`}
      header={{
        title: '정원사 요약',
        desc: 'DSC Sahmyook을 통해 한 해 동안 동참해주신 정보입니다'
      }}
    >
      <div className={`${PREFIX}-cards`}>
        {summaryData.map((item, idx) => {
          return (
            <StatCard
              className={`${PREFIX}-card`}
              icon={item.icon}
              title={item.title}
              value={item.content}
              suffix={item.suffix}
              key={idx}
            ></StatCard>
          );
        })}
      </div>
    </Section>
  );
};

export default SummarySection;
