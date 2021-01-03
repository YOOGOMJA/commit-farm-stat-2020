import React from 'react';
import { Section, StatCard } from '../../components';
import { IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';
import { IoIosGitCommit } from 'react-icons/io';
import { GrTextAlignLeft } from 'react-icons/gr';
import './CommitSection.scss';

const CommitSection = () => {
  const PREFIX = 'commit-section';
  const commitData = [
    {
      icon: <IoIosGitCommit />,
      title: '정원사 평균 커밋 수',
      value: 189,
      suffix: '건'
    },
    {
      icon: <IoIosGitCommit />,
      title: '한 명이 작성한 가장 많은 커밋',
      value: 872,
      suffix: '건'
    },
    {
      icon: <IoTimeOutline />,
      title: '가장 커밋이 많은 시간대',
      value: 3,
      data: ['0시 ~ 6시', '7시 ~ 12시', '13시 ~ 18시 ', '19시 ~ 23시']
    },
    {
      icon: <IoCalendarOutline />,
      title: '가장 커밋이 많은 날',
      value: 16,
      data: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
        '일요일',
        '월요일',
        '화요일'
      ]
    },
    {
      icon: <IoCalendarOutline />,
      title: '한 달 중 커밋이 가장 많은 날',
      value: 13,
      suffix: '일'
    },
    {
      icon: <IoCalendarOutline />,
      title: '한 달 중 커밋이 가장 적은 날',
      value: 4,
      suffix: '일'
    },
    {
      icon: <IoCalendarOutline />,
      title: '가장 커밋이 많았던 월',
      value: 9,
      suffix: '월'
    },
    {
      icon: <GrTextAlignLeft />,
      title: '가장 긴 커밋 메시지 글자 수',
      value: 796,
      suffix: '자'
    },
    {
      icon: <GrTextAlignLeft />,
      title: '커밋 메시지에 많이 쓰인 영단어',
      value: 9,
      data: [
        'merge',
        'readme.md',
        '수정',
        'branch',
        'updates',
        'of',
        '추가',
        'into',
        'all others',
        'update'
      ]
    },
    {
      icon: <GrTextAlignLeft />,
      title: '커밋 메시지에 많이 쓰인 한글',
      value: 9,
      data: [
        'merge',
        'readme.md',
        'update',
        'branch',
        'updates',
        'of',
        '추가',
        'into',
        'all others',
        '수정'
      ]
    }
  ];

  return (
    <Section
      name={PREFIX}
      className={`${PREFIX}-container `}
      wrapperClassName={`${PREFIX}-wrapper`}
      header={{
        title: '커밋 성향',
        desc: '정원사 분들의 커밋 성향을 알아봅니다'
      }}
    >
      <div className={`${PREFIX}-cards`}>
        {commitData.map((item, idx) => {
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

export default CommitSection;
