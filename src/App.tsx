import { Wrapper } from 'App.styles';
import Item from 'components/Item/Item';
import React, { useEffect, useRef, useState } from 'react';
import { Character, fetchCharacter } from 'utils/Api';
import { useCharacterId } from 'utils/Context';

import Card from './components/Card/Card';

const App: React.FunctionComponent = () => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(false);
  const { characterId, setCharacterId } = useCharacterId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };
    fetchFromApi();
  }, [characterId]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget);
    setCharacterId(Number(inputRef.current?.value));
  };

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Api still loading...</p>
      ) : (
        <>
          <Card
            name={character.name}
            imgUrl={character.img_url}
            gender={character.gender}
          />
          <Item<typeof character>
            item={character}
            onClick={(item) => console.log(item.gender)}
          />
          <input type="text" ref={inputRef} />
          <button onClick={handleButtonClick}>Generate Character</button>
        </>
      )}
    </Wrapper>
  );
};

export default App;
