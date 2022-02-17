import { Wrapper } from 'App.styles';
import React from 'react';

import Card from './components/Card/Card';

const App: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Card name="Michael" imgUrl="tbc" />
    </Wrapper>
  );
};

export default App;
