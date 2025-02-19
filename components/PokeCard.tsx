import Image from "next/image"
import { forwardRef } from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Pokemon } from "@/types/pokemon"

import Favorite from "./Favorite"

interface PokeCardProps extends React.ComponentPropsWithoutRef<"div"> {
  pokemon: Pokemon
  priorityImage?: boolean
  canFavorite?: boolean
  isFavorite?: boolean
  onFavorite?: (isFavorite: boolean) => void
}

export default forwardRef<HTMLDivElement, PokeCardProps>(function PokeCard(
  {
    pokemon,
    priorityImage = false,
    canFavorite = false,
    isFavorite = false,
    onFavorite,
    ...props
  },
  ref,
) {
  const onFavoriteClicked = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    e.preventDefault()
    onFavorite?.(!isFavorite)
  }

  return (
    <Card
      {...props}
      ref={ref}
      className={cn(
        "pokecard group/card @container/card sm:hover:scale-105 transition-transform duration-150 ease-in-out",
        props.className,
      )}
      role="group"
    >
      <CardHeader className="bg-gray-100 dark:bg-slate-900 text-xs @[12rem]/card:text-base flex flex-row items-center space-y-0 p-0 rounded-t-xl">
        <span className="p-[4cqi] rounded-tl-xl bg-gray-200 text-[6.5cqi] font-semibold dark:bg-slate-800">
          #{pokemon.number.toString().padStart(4, "0")}
        </span>
        <CardTitle className="flex-1 p-[4cqi] text-[7cqi] text-nowrap overflow-hidden text-ellipsis capitalize">
          {pokemon.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-radial dark:bg-radial-dark group-hover/card:bg-radial-strong transition-bg-radial duration-500 ease-in-out p-0 relative">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={0}
          height={0}
          sizes="600px"
          className="w-full aspect-square p-[8cqi]"
          priority={priorityImage}
          unoptimized
        />
        {canFavorite && (
          <Favorite
            isFavorite={isFavorite}
            onClick={onFavoriteClicked}
            className="absolute top-1 right-1 z-10"
          />
        )}
      </CardContent>
      <CardFooter className="flex flex-row flex-nowrap p-0 rounded-b-xl">
        {pokemon.types.map((type) => (
          <span
            key={type.id}
            style={{ backgroundColor: type.color }}
            className="bg-gray-200 dark:bg-slate-800 text-white text-[6cqi] flex-1 p-[4cqi] uppercase font-bold first:rounded-bl-xl last:rounded-br-xl text-center flex items-center justify-center gap-x-1"
          >
            <Image
              src={type.icon}
              alt={type.name}
              width={0}
              height={0}
              unoptimized
              className="w-[10cqi] aspect-square"
              priority={priorityImage}
            />
            {type.name}
          </span>
        ))}
      </CardFooter>
    </Card>
  )
})
