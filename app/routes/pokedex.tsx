import { useState } from "react";
import { useLoaderData } from "react-router";
import AppLayout from "../layouts/AppLayout";
import { metaInfo } from "../hooks/useMeta";
import { getPokemonsApi } from "./api";
import { PokeGrid } from "../components";


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

    return (
        <AppLayout>
            <div className="column-3xl flex-1 max-w-2xl mx-auto p-6 w-full">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Pokedex</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Welcome to the Pokedex! Here you can find information about various Pokémon.
                </p>
                <PokeGrid pokemons={pokemons} />
            </div>
        </AppLayout>
    );
}


