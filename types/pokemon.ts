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

export type PokemonType = {
  id: number
  name: string
  color: string
  icon: string
}

export type Pokemon = {
  id: number
  number: number
  name: string
  image: string
  types: PokemonType[]
}
