import { PokemonFragment } from "@/generated/graphql"
import {
  PokemonTypeNames,
  pokemonTypeNames,
  PokemonTypes,
} from "@/types/pokemon"

const generatePokemonMock = <
  I extends number,
  N extends string,
  T1 extends PokemonTypes,
  T2 extends PokemonTypes | undefined = undefined,
>(
  id: I,
  name: N,
  type1: T1,
  type2?: T2,
) =>
  ({
    id,
    name,
    order: id,
    speciesId: id,
    types: [type1, type2].filter(Boolean).map((type, index) => ({
      id: type,
      pokemonId: id,
      slot: index + 1,
      type: {
        id: type,
        name: pokemonTypeNames[type as keyof PokemonTypeNames],
        generationId: 1,
      },
    })) as unknown as T2 extends undefined
      ? [
          {
            id: T1
            pokemonId: I
            slot: 1
            type: { id: T1; name: PokemonTypeNames[T1]; generationId: number }
          },
        ]
      : [
          {
            id: T1
            pokemonId: I
            slot: 1
            type: { id: T1; name: PokemonTypeNames[T1]; generationId: number }
          },
          {
            id: T2
            pokemonId: I
            slot: 2
            type: {
              id: T2
              name: PokemonTypeNames[T2 & PokemonTypes]
              generationId: number
            }
          },
        ],
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
            } as {
              front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${I}.png`
              front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${I}.png`
            } | null,
          },
          back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`,
          front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
          back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
          front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        },
        id,
      },
    ],
  }) satisfies PokemonFragment

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
