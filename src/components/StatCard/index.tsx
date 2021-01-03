import React, { ReactNode } from 'react';
import { Card, Text } from '../';
import { useCountUp } from 'react-countup';
import { Slide } from 'react-awesome-reveal';
import './StatCard.scss';

interface StatCardProps {
  icon?: ReactNode;
  className?: string;
  title: string;
  value: number;
  suffix?: string;
  data?: any[];
}

const StatCard = ({
  icon,
  className = '',
  title,
  value,
  suffix = '',
  data
}: StatCardProps) => {
  const PREFIX = '__g_stat-card';
  const { countUp, start } = useCountUp({
    start: 0,
    end: value,
    useEasing: true,
    suffix: suffix && ` ${suffix}`,
    duration: 5,
    separator: ',',
    delay: 1000
  });

  return (
    <Slide
      triggerOnce
      direction="left"
      className={`${className} `}
      onVisibilityChange={(inView: Boolean) => {
        if (inView) {
          start();
        }
      }}
    >
      <Card
        header={
          <Text type="h" theme="disabled">
            {icon}
            {title}
          </Text>
        }
        headerClassName={`${PREFIX}-header`}
        wrapperClassName={`${PREFIX}-wrapper`}
      >
        <Text type="p" theme="default">
          {data ? data[Number(countUp)] : countUp}
        </Text>
      </Card>
    </Slide>
  );
};

export default StatCard;
