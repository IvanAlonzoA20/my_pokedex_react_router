import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { usePokemon } from "../hooks/usePokemon";

export function PokeItem(props) {
    const { urlPokemon, checkPokemon, pokemonSelected } = props;
    const { pokemon, loading, getPokemonByUrl } = usePokemon(urlPokemon);

    useEffect(() => getPokemonByUrl(urlPokemon), [urlPokemon]);

    const setPokemon = () => {
        checkPokemon(pokemon);
    };


    if (loading) {
        return <div className="flex justify-center items-center h-20">
            <AiOutlineLoading3Quarters className="animate-spin" />
        </div>;
    }


    return (
        <div
            className="hover:bg-slate-500 h-24 rounded-md hover:cursor-pointer w-full flex item-center justify-center"
            onClick={setPokemon}
        >
            <img src={pokemon.sprites.front_default} />
        </div>
    );
}
