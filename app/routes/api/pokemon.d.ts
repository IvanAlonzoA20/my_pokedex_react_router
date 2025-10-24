export interface Pokemon {
    name: string;
    url: string;
    [key: string]: any;
}

export interface PokemonsApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export function getPokemonsApi(): Promise<PokemonsApiResponse>;
export function getPokemonApi(name: string): Promise<Pokemon>;
