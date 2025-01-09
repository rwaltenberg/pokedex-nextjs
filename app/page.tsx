"use client"

import { useSuspenseQuery } from "@apollo/client"

import PokeCard from "@/components/PokeCard"
import { GetPokemonListDocument } from "@/generated/graphql"

export default function Home() {
  const { data } = useSuspenseQuery(GetPokemonListDocument)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto my-8">
      {data.pokemon.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
