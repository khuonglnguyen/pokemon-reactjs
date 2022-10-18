import React from "react";
import { Detail, PokemonDetail } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setViewDetail } = props;

  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpend) {
      setViewDetail({
        id: id,
        isOpend: true,
      });
    }
  };

  return (
    <>
      <section
        className={
          viewDetail.isOpend
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {viewDetail.isOpend ? <div className="overlay"></div> : <div></div>}
        {pokemons.map((poke) => {
          return (
            <div onClick={() => selectPokemon(poke.id)}>
              <PokemonList
                viewDetail={viewDetail}
                setViewDetail={setViewDetail}
                key={poke.id}
                name={poke.name}
                id={poke.id}
                image={poke.sprites.front_default}
                abilities={poke.abilities}
              ></PokemonList>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonCollection;
