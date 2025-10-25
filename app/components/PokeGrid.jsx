
import { PokeItem } from "./PokeItem";
import { Loading } from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export function PokeGrid(props) {
    const {
        pokemons,
        loadMore,
        nextUrl,
        checkPokemon,
        pokemonSelected,
        pokemonSearch,
    } = props;
    return (
        <InfiniteScroll
            dataLength={pokemons.length}
            next={loadMore}
            hasMore={!!nextUrl && !pokemonSearch}
            loader={<Loading key={0} />}
            scrollThreshold={0.9}
            style={{ overflow: 'visible' }}
        >
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-7">
                {pokemons.map((pokemon) => (
                    <PokeItem
                        key={pokemon.name}
                        urlPokemon={pokemon.url}
                        checkPokemon={checkPokemon}
                        pokemonSelected={pokemonSelected}
                    />
                ))}
            </div>
        </InfiniteScroll>
    );
}