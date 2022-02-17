import { Wrapper } from 'App.styles';
import React, { useEffect, useState } from 'react';

import Card from './components/Card/Card';

const App: React.FunctionComponent = () => {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [characterId, setCharacterId] = useState(1);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
    };
  }, [characterId]);

  return (
    <Wrapper>
      <Card name="Michael" imgUrl="tbc" />
    </Wrapper>
  );
};

export default App;
