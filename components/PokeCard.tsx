import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pokemon } from "@/types/pokemon"

interface PokeCardProps {
  pokemon: Pokemon
}

export default function PokeCard({ pokemon }: PokeCardProps) {
  return (
    <Card key={pokemon.id}>
      <CardHeader className="bg-gray-100 dark:bg-slate-900 flex flex-row items-center space-y-0 p-0 rounded-t-xl">
        <span className="p-2 rounded-tl-xl bg-gray-200 dark:bg-slate-800">
          #{pokemon.number}
        </span>
        <CardTitle className="flex-1 p-2 capitalize">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full aspect-square"
        />
      </CardContent>
    </Card>
  )
}
