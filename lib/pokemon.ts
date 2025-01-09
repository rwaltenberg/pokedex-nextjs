import { PokemonFragment } from "@/generated/graphql"
import { Pokemon, PokemonType } from "@/types/pokemon"

export const TYPE_COLORS = {
  1: "hsl(208.24deg 8.37% 60.2%)", // normal
  2: "hsl(342.21deg 60.17% 52.75%)", // fighting
  3: "hsl(220deg 54.17% 71.76%)", // flying
  4: "hsl(281.68deg 46.8% 60.2%)", // poison
  5: "hsl(20.8deg 66.96% 56.08%)", // ground
  6: "hsl(52.17deg 22.33% 59.61%)", // rock
  7: "hsl(67.06deg 73.12% 36.47%)", // bug
  8: "hsl(300deg 26.55% 34.71%)", // ghost
  9: "hsl(195.68deg 38.26% 54.9%)", // steel
  10: "hsl(359.68deg 79.17% 52.94%)", // fire
  11: "hsl(213.64deg 86.09% 54.9%)", // water
  12: "hsl(109deg 59.41% 39.61%)", // grass
  13: "hsl(46.08deg 100% 49.02%)", // electric
  14: "hsl(340.69deg 84.47% 59.61%)", // psychic
  15: "hsl(192.19deg 100% 62.35%)", // ice
  16: "hsl(233.38deg 70.73% 59.8%)", // dragon
  17: "hsl(7.06deg 11.89% 28.04%)", // dark
  18: "hsl(300deg 79.87% 68.82%)", // fairy
} as const

export const getPokemonLeageImageUrl = (number: number): string => {
  return `https://repositorio.sbrauble.com/arquivos/up/pokedex/${number}.svg`
}

export const getTypeIconUrl = (name: string): string => {
  return `https://raw.githubusercontent.com/rwaltenberg/pokemon-type-icons/refs/heads/main/icons/${name}.svg`
}

export const getTypeColor = (typeId: number): string => {
  return (TYPE_COLORS as Record<number, string>)[typeId] ?? "gray"
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
      color: getTypeColor(typeUnion.type!.id),
      icon: getTypeIconUrl(typeUnion.type!.name),
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
