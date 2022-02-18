import { Wrapper } from 'App.styles';
import React, { useEffect, useState } from 'react';
import { fetchCharacter } from 'utils/Api';

import Card from './components/Card/Card';

const App: React.FunctionComponent = () => {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [characterId, setCharacterId] = useState(1);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };
    fetchFromApi();
  }, [characterId]);

  return (
    <Wrapper>
      {isLoading ? (
        <p>Api still loading...</p>
      ) : (
        <>
          <Card name={character.name} imgUrl={character.img_url} />
          <button onClick={() => setCharacterId(Math.floor(Math.random() * 10) + 1)}>
            Generate Character
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default App;
