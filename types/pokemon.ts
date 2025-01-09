export type PokemonType = {
  id: number
  name: string
}

export type Pokemon = {
  id: number
  number: number
  name: string
  image: string
  types: PokemonType[]
}
