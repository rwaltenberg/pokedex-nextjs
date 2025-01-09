import { PokemonFragment } from "@/generated/graphql"
import { Pokemon, PokemonType } from "@/types/pokemon"

export const getPokemonLeageImageUrl = (number: number): string => {
  return `https://repositorio.sbrauble.com/arquivos/up/pokedex/${number}.svg`
}

export const getPokemonImageUrl = (pokemon: PokemonFragment): string => {
  const [pokemonSprite] = pokemon.spriteList ?? []

  if (pokemonSprite?.sprites?.other?.["official-artwork"]?.front_default) {
    return pokemonSprite.sprites.other["official-artwork"]
      .front_default as string
  }

  if (pokemonSprite?.sprites?.other?.home?.front_default) {
    return pokemonSprite.sprites.other.home.front_default as string
  }

  return getPokemonLeageImageUrl(pokemon.speciesId ?? pokemon.id)
}

export function getPokemonTypes(pokemon: PokemonFragment): PokemonType[] {
  return pokemon.types
    .filter((typeUnion) => typeUnion.type)
    .map((typeUnion) => ({
      id: typeUnion.type!.id,
      name: typeUnion.type!.name,
    }))
}

export function parsePokemon(pokemon: PokemonFragment): Pokemon {
  const id = pokemon.id
  const number = pokemon.speciesId ?? pokemon.id
  const name = pokemon.name
  const image = getPokemonImageUrl(pokemon)
  const types = getPokemonTypes(pokemon)

  if (!id || !number || !name || !image || !types?.length) {
    throw new Error("Could not find enough information for this pokemon")
  }

  return {
    id,
    number,
    name,
    image,
    types,
  }
}
