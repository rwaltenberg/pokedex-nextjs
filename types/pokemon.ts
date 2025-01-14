/* eslint-disable @typescript-eslint/no-explicit-any */
export enum PokemonTypes {
  normal = 1,
  fighting = 2,
  flying = 3,
  poison = 4,
  ground = 5,
  rock = 6,
  bug = 7,
  ghost = 8,
  steel = 9,
  fire = 10,
  water = 11,
  grass = 12,
  electric = 13,
  psychic = 14,
  ice = 15,
  dragon = 16,
  dark = 17,
  fairy = 18,
}

export const pokemonTypeNames = {
  [PokemonTypes.normal]: "normal",
  [PokemonTypes.fighting]: "fighting",
  [PokemonTypes.flying]: "flying",
  [PokemonTypes.poison]: "poison",
  [PokemonTypes.ground]: "ground",
  [PokemonTypes.rock]: "rock",
  [PokemonTypes.bug]: "bug",
  [PokemonTypes.ghost]: "ghost",
  [PokemonTypes.steel]: "steel",
  [PokemonTypes.fire]: "fire",
  [PokemonTypes.water]: "water",
  [PokemonTypes.grass]: "grass",
  [PokemonTypes.electric]: "electric",
  [PokemonTypes.psychic]: "psychic",
  [PokemonTypes.ice]: "ice",
  [PokemonTypes.dragon]: "dragon",
  [PokemonTypes.dark]: "dark",
  [PokemonTypes.fairy]: "fairy",
} as const

export type PokemonTypeNames = typeof pokemonTypeNames

export type PokemonType<N extends PokemonTypes = any> = {
  id: PokemonTypes
  name: PokemonTypeNames[N]
  color: string
  icon: string
}

export type Pokemon<
  I extends number = any,
  N extends number = any,
  NAME extends string = any,
  T1 extends PokemonTypes = any,
  T2 extends PokemonTypes | undefined | null = any,
> = {
  id: I
  number: N
  name: NAME
  image: string
  types: T2 extends undefined | null
    ? [PokemonType<T1>]
    : [PokemonType<T1>, PokemonType<NonNullable<T2>>]
}
