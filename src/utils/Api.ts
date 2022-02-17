export interface Character {
  id: number;
  name: string;
  img_url: string;
}

export const fetchCharacter = async (id: number): Promise<Character> => {
  const result: Response = await fetch(
    `https://finalspaceapi.com/api/v0/character/${id}`,
  );

  if (!result.ok) {
    throw new Error('Api didnt load!');
  }

  return await result.json();
};
