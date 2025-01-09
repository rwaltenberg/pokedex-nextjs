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
