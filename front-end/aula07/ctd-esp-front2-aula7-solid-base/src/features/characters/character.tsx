import { Card } from 'features/card'
import CardBody from 'features/card/card-body.component';
import Character from 'features/characters/characters.types';
import { FollowingButtonComponent } from 'features/following/button';
import { addCharacterToFollowingList, removeCharacterToFollowingList } from 'features/following/following.slices';
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';

interface CharacterProps {
  character: Character
}

export default function CharacterComponent({character} : CharacterProps) {
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const dispatch = useAppDispatch()
  const onToggleFavorite = (character: Character, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };

  return (
    <Card key={character.id}>
          <Card.Image>
            <img src={character.image} alt={character.name} />
          </Card.Image>
          <CardBody>
            <span>{character.name}</span>
            <FollowingButtonComponent
              isFav={followingIds.indexOf(character.id) >= 0}
              onToggleFavorite={(setFav:boolean) => onToggleFavorite(character, setFav)}
            />
          </CardBody>
        </Card>
  )
}
