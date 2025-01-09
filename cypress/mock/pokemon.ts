import { Pokemon } from "@/types/pokemon"

export const mockBulbasour: Pokemon = {
  id: 1,
  number: 1,
  name: "bulbasaur",
  types: [
    {
      id: 12,
      name: "grass",
    },
    {
      id: 4,
      name: "poison",
    },
  ],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
}

export const mockCharmander: Pokemon = {
  id: 4,
  number: 4,
  name: "charmander",
  types: [
    {
      id: 10,
      name: "fire",
    },
  ],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
}
