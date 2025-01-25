"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { forwardRef, useCallback, useState } from "react"
import { GridComponents, VirtuosoGrid } from "react-virtuoso"
import slugify from "slugify"

import PokeCard from "@/components/PokeCard"
import { usePokemonList } from "@/hooks/usePokemonList"
import { cn } from "@/lib/utils"

const gridComponents: GridComponents<{
  selected: number | null
  hasMore: boolean
}> = {
  List: forwardRef(function PokemonListGrid(
    { children, context, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8",
          { "*:opacity-0 *:pointer-events-none": !!context?.selected },
          props.className,
        )}
      >
        {children}
      </div>
    )
  }),
  Footer: function PokemonListLoading({ context }) {
    return (
      context?.hasMore && (
        <div className="grid place-items-center my-8">
          <span className="opacity-60 loading loading-dots loading-lg" />
        </div>
      )
    )
  },
}

export default function PokemonList() {
  const { pokemonList, fetch, hasMore } = usePokemonList()

  const router = useRouter()
  const [selected, setSelected] = useState<number | null>(null)

  const choosePokemon = useCallback(
    async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const target = (event.target as HTMLDivElement).closest(
        ".pokecard",
      ) as HTMLDivElement
      const parent = target.closest(".grid") as HTMLDivElement

      const { id, name } = target.dataset

      if (window.innerWidth < 768) {
        return
      }

      event.preventDefault()

      document.body.style.overflow = "hidden"
      target.closest<HTMLDivElement>(".pokemon-list-item")!.style.opacity = "1"

      await new Promise<void>((resolve) => {
        if (window.getComputedStyle(target).transform === "none") {
          resolve()
          return
        }

        const onTransitionEnd = (event: TransitionEvent) => {
          if (event.propertyName === "transform") {
            resolve()
            target.removeEventListener("transitionend", onTransitionEnd)
          }
        }

        target.addEventListener("transitionend", onTransitionEnd)

        target.style.transform = "none"
      })

      const parentPosition = parent.getBoundingClientRect()
      const pokemonPosition = target.getBoundingClientRect()

      const pokemonTargetPosition = {
        top: parentPosition.top - pokemonPosition.y + window.scrollY,
        left: parentPosition.left - pokemonPosition.x,
      }

      setSelected(Number(id))

      await new Promise((resolve) => requestIdleCallback(resolve))

      const animation = target.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          {
            transform: `translate3d(${pokemonTargetPosition.left}px, ${pokemonTargetPosition.top}px, 0)`,
          },
        ],
        { duration: 500, fill: "forwards", easing: "ease-in-out" },
      )

      await animation.finished

      document.body.style.overflow = ""

      router.push(`/${id}-${slugify(name ?? "")}`)
    },
    [router, setSelected],
  )

  return (
    <VirtuosoGrid
      useWindowScroll
      data={pokemonList}
      components={gridComponents}
      endReached={() => fetch()}
      context={{ selected, hasMore }}
      itemClassName="pokemon-list-item transition-opacity duration-300"
      itemContent={(index, pokemon) => (
        <Link
          href={`/${pokemon.id}-${slugify(pokemon.name)}`}
          onClick={choosePokemon}
        >
          <PokeCard
            key={pokemon.id}
            pokemon={pokemon}
            data-id={pokemon.id}
            data-name={pokemon.name}
            canFavorite
          />
        </Link>
      )}
    />
  )
}
