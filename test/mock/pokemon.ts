import { TYPE_COLORS } from "@/lib/pokemon"
import { Pokemon } from "@/types/pokemon"

export const mockBulbasaur: Pokemon = {
  id: 1,
  number: 1,
  name: "bulbasaur",
  types: [
    {
      id: 12,
      name: "grass",
      color: TYPE_COLORS[12],
      icon: "https://raw.githubusercontent.com/rwaltenberg/pokemon-type-icons/refs/heads/main/icons/grass.svg",
    },
    {
      id: 4,
      name: "poison",
      color: TYPE_COLORS[4],
      icon: "https://raw.githubusercontent.com/rwaltenberg/pokemon-type-icons/refs/heads/main/icons/poison.svg",
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
      color: TYPE_COLORS[10],
      icon: "https://raw.githubusercontent.com/rwaltenberg/pokemon-type-icons/refs/heads/main/icons/fire.svg",
    },
  ],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
}
