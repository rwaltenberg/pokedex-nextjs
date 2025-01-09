"use client"

import PokeCard from "@/components/PokeCard"
import { usePokemonList } from "@/hooks/usePokemonList"

export default function Home() {
  const { data } = usePokemonList()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto my-8">
      {data.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
