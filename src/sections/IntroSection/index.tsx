import React from 'react';
import { Logo, Text } from '../../components';
import { Fade } from 'react-awesome-reveal';
import { Element } from 'react-scroll';
import './scss/IntroSection.scss';

const IntroSection = () => {
  const PREFIX = 'intro-section';
  return (
    <Element name={PREFIX} className={`${PREFIX}-container`}>
      <Fade triggerOnce direction="left" duration={1500}>
        <Logo className={`${PREFIX}-logo`} />
      </Fade>
      <div className={`${PREFIX}-wrapper`}>
        <Fade triggerOnce duration={1500}>
          <p className={`${PREFIX}-title-year`}>2020</p>
        </Fade>
        <Fade triggerOnce cascade={true} direction="right">
          <h1>숫자로보는</h1>
          <h1>
            <b>정원사 프로젝트</b>
          </h1>
        </Fade>

        <Fade triggerOnce cascade={true} delay={500} direction="up">
          <hr />
          <Text theme="disabled">9월 부터 시작된 정원사 프로젝트를 통해</Text>
          <Text theme="disabled">
            참여해주신 많은 정원사 분들의 한 해 동안의
          </Text>
          <Text theme="disabled">개발 활동을 되돌아 봅니다</Text>
        </Fade>
      </div>
    </Element>
  );
};

export default IntroSection;
