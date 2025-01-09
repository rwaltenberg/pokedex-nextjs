import { useSuspenseQuery } from "@apollo/client"
import { useMemo } from "react"

import { GetPokemonListDocument } from "@/generated/graphql"
import { parsePokemon } from "@/lib/pokemon"

export function usePokemonList() {
  const query = useSuspenseQuery(GetPokemonListDocument)
  const data = useMemo(() => query.data.pokemon.map(parsePokemon), [query.data])

  return { data }
}
