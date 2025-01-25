import { useSuspenseQuery } from "@apollo/client"
import { useMemo, useState } from "react"

import { GetPokemonListDocument } from "@/generated/graphql"
import { parsePokemon } from "@/lib/pokemon"

export function usePokemonList(limit?: number) {
  const [hasMore, setHasMore] = useState(Boolean(limit))
  const { data, fetchMore } = useSuspenseQuery(GetPokemonListDocument, {
    variables: { offset: 0, limit },
  })

  const pokemonList = useMemo(() => data.pokemon.map(parsePokemon), [data])

  const fetch = async () => {
    if (!hasMore) {
      return
    }

    const { data: newData } = await fetchMore({
      variables: { offset: pokemonList.length, limit },
    })

    if (newData.pokemon.length === 0) {
      setHasMore(false)
    }
  }

  return { pokemonList, hasMore, fetch }
}
