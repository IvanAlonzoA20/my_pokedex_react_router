import { useState } from "react";
import { getPokemonsByUrlApi } from "../routes/api/pokemon";

export function usePokemon(url) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemonByUrl = async (url) => {
        try {
            setLoading(true);
            const data = await getPokemonsByUrlApi(url);
            setPokemon(data);
            setLoading(false);
            return data;
        } catch (error) {
            console.error("Error fetching pokemon by URL:", error);
            throw new Response("Failed to fetch pokemon by URL", { status: 500 });
        }
    }

    return {
        pokemon,
        loading,
        getPokemonByUrl,
    };
}
