import axios from "axios";
import { useState } from "react";
import CharacterForm from "./CharacterForm";

export const FindRickMoriCharacter = (
  WrappedComponent: () => JSX.Element,
  componentNumber: number
) => {
  const Wrapper = () => {
    const [data, setData] = useState();
    const [input, setInput] = useState<number>();

    const fetchData = async () => {
      const api = await axios.get(
        `https://rickandmortyapi.com/api/character/${input}`
      );
      setData(api.data);
      console.log(data);
    };
    return (
      <>
        <CharacterForm onChangeInput={(e) => setInput(+e.target.value)} />{" "}
        <button onClick={() => fetchData()}></button>
      </>
    );
  };

  return Wrapper;
};
