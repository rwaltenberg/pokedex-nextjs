"use client"

import { useSuspenseQuery } from "@apollo/client"

import PokeCard from "@/components/PokeCard"
import { GetPokemonListDocument } from "@/generated/graphql"

export default function Home() {
  const { data } = useSuspenseQuery(GetPokemonListDocument)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.pokemon.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </div>
  )
}
