import { env } from "../../utils";

export async function getPokemonsApi() {
    const url = `${env.API_BASE_URL}/pokemon?limit=100`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pokemons:", error);
        throw new Response("Failed to fetch pokemons", { status: 500 });
    }
}


export async function getPokemonApi(name) {
    const url = `${env.API_BASE_URL}/pokemon/${name}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pokemon:", error);
        throw new Response("Failed to fetch pokemon", { status: 500 });
    }
}

export async function getPokemonsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pokemon by URL:", error);
        throw new Response("Failed to fetch pokemon by URL", { status: 500 });
    }
}


export async function getPokemonsAllApi() {
    const url = `${env.API_BASE_URL}/pokemon?limit=100000`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}