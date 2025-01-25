import { PokemonFragment } from "@/generated/graphql"
import {
  PokemonTypeNames,
  pokemonTypeNames,
  PokemonTypes,
} from "@/types/pokemon"

const generatePokemonMock = (
  id: number,
  name: string,
  type1: PokemonTypes,
  type2?: PokemonTypes,
): PokemonFragment => ({
  id,
  name,
  order: id,
  species: {
    id,
    name,
  },
  types: [type1, type2].filter(Boolean).map((type, index) => ({
    id: type as number,
    pokemonId: id,
    slot: index + 1,
    type: {
      id: type as number,
      name: pokemonTypeNames[type as keyof PokemonTypeNames] as string,
      generationId: 1,
    },
  })),
  spriteList: [
    {
      sprites: {
        other: {
          home: {
            front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`,
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
          },
          "official-artwork": {
            front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`,
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          },
        },
        back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`,
        front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
        back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      },
      id,
    },
  ],
})

export const mockBulbasaur = generatePokemonMock(
  1,
  "bulbasaur",
  PokemonTypes.grass,
  PokemonTypes.poison,
)

export const mockIvysaur = generatePokemonMock(
  2,
  "ivysaur",
  PokemonTypes.grass,
  PokemonTypes.poison,
)

export const mockVenusaur = generatePokemonMock(
  3,
  "venusaur",
  PokemonTypes.grass,
  PokemonTypes.poison,
)

export const mockCharmander = generatePokemonMock(
  4,
  "charmander",
  PokemonTypes.fire,
)

export const mockCharmeleon = generatePokemonMock(
  5,
  "charmeleon",
  PokemonTypes.fire,
)

export const mockCharizard = generatePokemonMock(
  6,
  "charizard",
  PokemonTypes.fire,
  PokemonTypes.flying,
)

export const mockSquirtle = generatePokemonMock(
  7,
  "squirtle",
  PokemonTypes.water,
)

export const mockWartortle = generatePokemonMock(
  8,
  "wartortle",
  PokemonTypes.water,
)

export const mockBlastoise = generatePokemonMock(
  9,
  "blastoise",
  PokemonTypes.water,
)

export const mockCaterpie = generatePokemonMock(
  10,
  "caterpie",
  PokemonTypes.bug,
)
