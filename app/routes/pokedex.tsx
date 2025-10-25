import { useState } from "react";
import { useLoaderData } from "react-router";
import AppLayout from "../layouts/AppLayout";
import { metaInfo } from "../hooks/useMeta";
import { getPokemonsApi, getPokemonsByUrlApi } from "./api";
import { PokeGrid, PokemonInfo, Search } from "../components";


export const meta = () => metaInfo("Pokedex", "Bem-vindo ao Pokedex!");

export async function loader() {
    try {
        const pokedex = await getPokemonsApi();
        return { pokemons: pokedex };
    } catch (error) {
        throw new Response("Failed to fetch pokedex", { status: 500 });
    }
}

export default function Pokedex() {
    const data = useLoaderData();
    //useState
    const [pokemons, setPokemons] = useState(data.pokemons.results);
    const [pokemonSearch, setPokemonsSearch] = useState(null);
    const [nextUrl, setNextUrl] = useState(data.pokemons.next);
    const [pokemonSelected, setPokemonSelected] = useState<any | null | undefined>();

    const loadMore = async () => {
        if (nextUrl) {
            const response = await getPokemonsByUrlApi(nextUrl);
            setNextUrl(response.next);
            setPokemons([...pokemons, ...response.results]);
        }
    };

    const checkPokemon = (pokemon: any) => {
        console.log("Pokemon selecionado:", pokemon);
        setPokemonSelected(pokemon);
    };


    return (
        <AppLayout>
            <div className="column-2xl flex-1 max-w-2xl mx-auto p-6 w-full">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Pokedex</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Welcome to the Pokedex! Here you can find information about various Pokémon.
                </p>
                <Search loadPokemons={setPokemonsSearch} className="" />
                {pokemonSelected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                                onClick={() => setPokemonSelected(null)}
                                aria-label="Fechar"
                            >
                                &times;
                            </button>
                            <PokemonInfo pokemon={pokemonSelected} />
                        </div>
                    </div>
                )}
                <PokeGrid
                    pokemons={pokemonSearch || pokemons}
                    loadMore={loadMore}
                    nextUrl={nextUrl}
                    checkPokemon={checkPokemon}
                    pokemonSelected={pokemonSelected}
                    pokemonSearch={pokemonSearch}
                />
            </div>
        </AppLayout>
    );
}


