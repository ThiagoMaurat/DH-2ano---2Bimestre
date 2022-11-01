import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import CharacterComponent from './character';

export type CharactersComponentProps = {
  ids: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ ids }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((character, index) => (
        <CharacterComponent character={character} key={`character${index}`}/>
      ))}
    </div>
  );
};

export default CharactersComponent;
