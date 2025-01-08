import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GetPokemonListQuery } from "@/generated/graphql"

interface PokeCardProps {
  pokemon: GetPokemonListQuery["pokemon"][number]
}

export default function PokeCard({ pokemon }: PokeCardProps) {
  return (
    <Card key={pokemon.id}>
      <CardHeader className="bg-gray-100 dark:bg-slate-900 flex flex-row items-center space-y-0 p-0 rounded-t-xl">
        <span className="p-2 rounded-tl-xl bg-gray-200 dark:bg-slate-800">
          #{pokemon.speciesId}
        </span>
        <CardTitle className="flex-1 p-2 capitalize">{pokemon.name}</CardTitle>
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
  )
}
