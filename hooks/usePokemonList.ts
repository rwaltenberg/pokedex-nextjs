import { useSuspenseQuery } from "@apollo/client"
import { useMemo, useState } from "react"

import { GetPokemonListDocument } from "@/generated/graphql"
import { parsePokemon } from "@/lib/pokemon"

export function usePokemonList() {
  const [hasMore, setHasMore] = useState(true)
  const { data, fetchMore } = useSuspenseQuery(GetPokemonListDocument, {
    variables: { offset: 0, limit: 50 },
  })

  const pokemonList = useMemo(() => data.pokemon.map(parsePokemon), [data])

  const fetch = async () => {
    if (!hasMore) {
      return
    }

    const { data: newData } = await fetchMore({
      variables: { offset: pokemonList.length, limit: 50 },
    })

    if (newData.pokemon.length === 0) {
      setHasMore(false)
    }
  }

  return { pokemonList, hasMore, fetch }
}
