"use client"

import { useSuspenseQuery } from "@apollo/client"
import Image from "next/image"

import { GetPokemonListDocument } from "@/generated/graphql"

export default function Home() {
  const { data } = useSuspenseQuery(GetPokemonListDocument)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h2>
              #{pokemon.speciesId} {pokemon.name}
            </h2>
            {pokemon.spriteList[0].sprites.front_default && (
              <Image
                src={pokemon.spriteList[0].sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            )}
          </div>
        ))}
      </main>
    </div>
  )
}
