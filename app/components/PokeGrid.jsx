
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
    let scrollParentRef = null;

    return (
        <div
            className="h-[calc(100vh-320px)] md:h-[calc(100vh-72px)] overflow-scroll"
            ref={(ref) => (scrollParentRef = ref)}
        >
            <InfiniteScroll
                dataLength={pokemons.length}
                loadMore={loadMore}
                hasMore={nextUrl && !pokemonSearch ? true : false}
                loader={<Loading key={0} />}
                useWindow={false}
                getScrollParent={() => scrollParentRef}
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
        </div>
    );
}