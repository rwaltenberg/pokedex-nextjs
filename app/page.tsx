"use client"

import PokeCard from "@/components/PokeCard"
import { usePokemonList } from "@/hooks/usePokemonList"

export default function Home() {
  const { data } = usePokemonList()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 container lg:max-w-5xl mx-auto my-4 lg:my-8 px-4 lg:px-0">
      {data.map((pokemon, index) => (
        <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
          priorityImage={index < 20}
        />
      ))}
    </div>
  )
}
