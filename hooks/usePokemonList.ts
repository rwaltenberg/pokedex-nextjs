import { useLazyQuery, useSuspenseQuery } from "@apollo/client"
import { useEffect, useMemo } from "react"

import { GetPokemonListDocument } from "@/generated/graphql"
import { parsePokemon } from "@/lib/pokemon"

export function usePokemonList() {
  const query = useSuspenseQuery(GetPokemonListDocument, {
    variables: {
      limit: 20,
    },
  })

  const [loadClientQuery, clientQuery] = useLazyQuery(GetPokemonListDocument)

  useEffect(() => {
    loadClientQuery({
      variables: {
        offset: 20,
      },
    })
  }, [loadClientQuery])

  const data = useMemo(
    () => [
      ...query.data.pokemon.map(parsePokemon),
      ...(clientQuery.data?.pokemon ?? []).map(parsePokemon),
    ],
    [query.data, clientQuery.data],
  )

  return { data }
}
