import React from 'react';
import { Text, Logo } from '../../components';
import { IoLogoGithub } from 'react-icons/io';
import './FooterSection.scss';

const FooterSection = () => {
  const PREFIX = 'footer-section';
  return (
    <div className={`${PREFIX}-container`}>
      <div className={`${PREFIX}-wrapper`}>
        <Logo className={`${PREFIX}-logo`}></Logo>
        <div className={`${PREFIX}-rows`}>
          <Text theme="primary">Contact</Text>
          <Text theme="disabled">
            <a
              href="mailto:dev.yoogomja@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              dev.yoogomja@gmail.com
            </a>
          </Text>
        </div>
        <div className={`${PREFIX}-rows`}>
          <Text theme="primary">Related Links</Text>
          <Text theme="disabled">
            <a
              href="https://sites.google.com/view/dscsahmyook"
              target="_blank"
              rel="noreferrer"
            >
              DSC Sahmyook
            </a>
          </Text>
          <Text theme="disabled">
            <a
              href="http://www.commit-farm.site"
              target="_blank"
              rel="noreferrer"
            >
              DSC Sahmyook - Commit Farm
            </a>
          </Text>
        </div>
        <div className={`${PREFIX}-rows icons`}>
          <Text theme="disabled">
            <a
              href="https://sites.google.com/view/dscsahmyook"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
            </a>
          </Text>
        </div>
      </div>
      <Text theme="disabled" className={`${PREFIX}-license`}>
        ⓒ2021,{' '}
        <a
          href="mailto:dev.yoogomja@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          KyeongSoo Yoo
        </a>
        , All rights reserved.
      </Text>
    </div>
  );
};

export default FooterSection;
