import React, { useState, useEffect } from "react";
import styled from "styled-components";

// CSS-in-JS

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

interface ColorProps {
  gender: string;
}

export const ColorDiv = styled.div<ColorProps>`
  border-top: ${({ gender }) =>
    gender === "Female" ? "1px solid #FF0000" : "1px solid blue"};
`;

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);
  console.log(character);
  return (
    <>
      <h2>Alguns personagens da série</h2>
      <section>
        {character.map((data: CharacterProps) => {
          return (
            <ColorDiv key={data.id} gender={data.gender}>
              <article>
                <img src={data.image} alt={data.name} />
                <div>
                  <h3>{data.name}</h3>
                  <h3>{data.gender}</h3>
                </div>
              </article>
            </ColorDiv>
          );
        })}
      </section>
    </>
  );
};

export default Character;
