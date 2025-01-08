import { GetPokemonListQuery } from "@/generated/graphql"

const mockPokemon: GetPokemonListQuery["pokemon"][number] = {
  id: 1,
  speciesId: 1,
  name: "bulbasaur",
  types: [
    {
      id: 1,
      type: {
        id: 1,
        name: "grass",
      },
    },
    {
      id: 2,
      type: {
        id: 2,
        name: "poison",
      },
    },
  ],
  spriteList: [
    {
      id: 1,
      sprites: {
        other: {
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          },
        },
      },
    },
  ],
}

export default mockPokemon
