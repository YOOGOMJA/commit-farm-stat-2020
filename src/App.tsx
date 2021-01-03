import React from 'react';
import './scss/reset.scss';
import './scss/global.scss';
import './scss/app.scss';
import { Navigator } from './components';
import {
  Intro,
  Summary,
  Commit,
  Footer,
  Repository,
  Language
} from './sections';

function App() {
  const PREFIX = '__app';
  return (
    <div className={`${PREFIX}-container`}>
      <Intro />
      <Summary />
      <Navigator />
      <Commit />
      <Repository />
      <Language />
      <Footer />
    </div>
  );
}
export default App;
