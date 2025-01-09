import Image from "next/image"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pokemon } from "@/types/pokemon"

interface PokeCardProps {
  pokemon: Pokemon
  priorityImage?: boolean
}

export default function PokeCard({
  pokemon,
  priorityImage = false,
}: PokeCardProps) {
  return (
    <Card
      key={pokemon.id}
      className="group/card @container/card sm:hover:scale-105 transition-transform duration-150 ease-in-out cursor-pointer"
    >
      <CardHeader className="bg-gray-100 dark:bg-slate-900 text-xs @[12rem]/card:text-base flex flex-row items-center space-y-0 p-0 rounded-t-xl">
        <span className="p-2 rounded-tl-xl bg-gray-200 dark:bg-slate-800">
          #{pokemon.number}
        </span>
        <CardTitle className="flex-1 p-2 capitalize">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent className="bg-radial dark:bg-radial-dark group-hover/card:bg-radial-strong transition-bg-radial duration-500 ease-in-out p-0">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={0}
          height={0}
          sizes="600px"
          className="w-full aspect-square p-4"
          priority={priorityImage}
        />
      </CardContent>
      <CardFooter className="flex flex-row flex-nowrap p-0 rounded-b-xl">
        {pokemon.types.map((type) => (
          <span
            key={type.id}
            style={{ backgroundColor: type.color }}
            className="bg-gray-200 dark:bg-slate-800 text-white text-[0.5rem] @[11rem]/card:text-[0.625rem] @[13rem]/card:text-xs @[15rem]/card:text-sm flex-1 p-2 uppercase font-bold first:rounded-bl-xl last:rounded-br-xl text-center flex items-center justify-center gap-x-1"
          >
            <Image
              src={type.icon}
              alt={type.name}
              width={24}
              height={24}
              unoptimized
              priority={priorityImage}
            />
            {type.name}
          </span>
        ))}
      </CardFooter>
    </Card>
  )
}
