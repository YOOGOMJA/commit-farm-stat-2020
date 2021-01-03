import React, { useEffect, useState } from 'react';
import './Navigator.scss';
import { Fade } from 'react-awesome-reveal';
import AnimatedIcon from './AnimatedIcon';
import { Link } from 'react-scroll';

const Navigator = () => {
  const PREFIX = '__g_navigator';
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Fade
      delay={1000}
      className={`${PREFIX}-container ${isOpened && 'opened'}`}
    >
      <div
        className={`${PREFIX}-wrapper`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <AnimatedIcon isOpened={isOpened} />
        <div className={`${PREFIX}-collapse`}>
          <ul className={`${PREFIX}-links ${isOpened && 'opened'}`}>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="summary-section"
            >
              <p>요약</p>
            </Link>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="commit-section"
            >
              <p>커밋</p>
            </Link>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="repository-section"
            >
              <p>저장소</p>
            </Link>
            <Link
              smooth={true}
              spy={true}
              activeClass="active"
              to="language-section"
            >
              <p>언어</p>
            </Link>
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default Navigator;
