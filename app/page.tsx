"use client"

import { useSuspenseQuery } from "@apollo/client"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GetPokemonListDocument } from "@/generated/graphql"

export default function Home() {
  const { data } = useSuspenseQuery(GetPokemonListDocument)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.pokemon.map((pokemon) => (
            <Card key={pokemon.id}>
              <CardHeader className="bg-gray-100 dark:bg-slate-900 flex flex-row items-center space-y-0 p-0 rounded-t-xl">
                <span className="p-2 rounded-tl-xl bg-gray-200 dark:bg-slate-800">
                  #{pokemon.speciesId}
                </span>
                <CardTitle className="flex-1 p-2 capitalize">
                  {pokemon.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {pokemon.spriteList[0].sprites.other["official-artwork"]
                  .front_default && (
                  <Image
                    src={
                      pokemon.spriteList[0].sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={pokemon.name}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full aspect-square"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
