import React, { createContext, useContext, useState } from 'react';

interface ICharacterIdProviderProps {
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<ICharacterIdProviderProps>({} as ICharacterIdProviderProps);

const CharacterIdProvider: React.FunctionComponent = ({ children }) => {
  const [characterId, setCharacterId] = useState(1);
  return (
    <Context.Provider value={{ characterId, setCharacterId }}>
      {children}
    </Context.Provider>
  );
};

export const useCharacterId = () => useContext(Context);

export default CharacterIdProvider;
