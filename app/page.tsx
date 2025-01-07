"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import Image from "next/image";

interface PokemonType {
  id: number;
  name: string;
  generationId: number;
}

interface PokemonTypeQuery {
  id: number;
  pokemonId: number;
  type: PokemonType[];
}

interface PokemonSprite {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprites: Record<string, any>;
}

interface Pokemon {
  id: number;
  name: string;
  order: number;
  speciesId: number;
  types: PokemonTypeQuery[];
  spriteList: PokemonSprite[];
}

interface PokemonListQuery {
  pokemon: Pokemon[];
}

const pokemonListQuery = gql`
  query getPokemonList {
    pokemon: pokemon_v2_pokemon(order_by: {pokemon_species_id: asc}, where: {is_default: {_eq: true}}) {
      id
      name
      order
      speciesId: pokemon_species_id
      types: pokemon_v2_pokemontypes {
        id
        pokemonId: pokemon_id
        type: pokemon_v2_type {
          id
          name
          generationId: generation_id
        }
      }
      spriteList: pokemon_v2_pokemonsprites {
        sprites
        id
      }
    }
  }
`

export default function Home() {
  const { data } = useSuspenseQuery<PokemonListQuery>(pokemonListQuery)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h2>#{pokemon.speciesId} {pokemon.name}</h2>
            {pokemon.spriteList[0].sprites.front_default && <Image src={pokemon.spriteList[0].sprites.front_default} alt={pokemon.name} width={100} height={100} />}
          </div>
        ))}
      </main>
    </div>
  );
}
