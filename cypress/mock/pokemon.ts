import { Pokemon } from "@/types/pokemon"

const mockPokemon: Pokemon = {
  id: 1,
  number: 1,
  name: "bulbasaur",
  types: [
    {
      id: 1,
      name: "grass",
    },
    {
      id: 2,
      name: "poison",
    },
  ],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
}

export default mockPokemon
