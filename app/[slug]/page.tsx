"use client"

import { useSuspenseQuery } from "@apollo/client"
import { useMemo } from "react"

import PokeCard from "@/components/PokeCard"
import { GetPokemonDocument } from "@/generated/graphql"
import { parsePokemon } from "@/lib/pokemon"

export default function Home({ params }: { params: { slug: string } }) {
  const [id] = params.slug.split("-")

  const { data } = useSuspenseQuery(GetPokemonDocument, {
    variables: { id: Number(id) },
  })

  const pokemon = useMemo(() => parsePokemon(data.pokemon!), [data])

  return (
    <div className="grid grid-cols-4 gap-8">
      <PokeCard pokemon={pokemon} />
    </div>
  )
}
