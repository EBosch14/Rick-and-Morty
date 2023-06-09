import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));

    return setCharacter(null)
  }, [id]);

  return (
    <div>
      {character ? (
        <>
          <div>
            <h1>{character.name}</h1>
            <h5>STATUS | {character.status}</h5>
            <h5>GENDER | {character.gender}</h5>
            <h5>SPECIE | {character.species}</h5>
            <h5><span>ORIGIN | </span>{character.origin.name}</h5>
          </div>
          <div>
            <img src={character.image} alt={character.name} />
          </div>
        </>
      ) : (
        <p>Loading Character...</p>
      )}
    </div>
  );
}
