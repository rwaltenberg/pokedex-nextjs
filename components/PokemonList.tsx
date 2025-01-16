"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { forwardRef, HTMLAttributes, useCallback, useState } from "react"
import RenderIfVisible from "react-render-if-visible"
import slugify from "slugify"

import PokeCard from "@/components/PokeCard"
import { usePokemonList } from "@/hooks/usePokemonList"
import { cn } from "@/lib/utils"

export default function PokemonList() {
  const { data } = usePokemonList()
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
      target.closest<HTMLDivElement>(".renderIfVisible")!.style.opacity = "1"

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
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8",
        { "*:opacity-0 *:pointer-events-none": selected !== null },
      )}
    >
      {data.map((pokemon, index) => (
        <RenderIfVisible
          rootElementClass="transition-opacity duration-300"
          key={pokemon.id}
          defaultHeight={325}
          initialVisible={index < 20}
          visibleOffset={2000}
          placeholderElement={
            // This is a workaround to allow searching by string on unredered components
            forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
              function CardPlaceholder(props, ref) {
                return (
                  <div
                    {...props}
                    ref={ref}
                    style={{ ...props.style, color: "transparent" }}
                  >
                    <div style={{ textTransform: "capitalize" }}>
                      #{pokemon.number.toString().padStart(4, "0")}{" "}
                      {pokemon.name}
                    </div>
                    <div style={{ textTransform: "uppercase" }}>
                      {pokemon.types.map((type) => type.name).join(" ")}
                    </div>
                  </div>
                )
              },
            ) as unknown as string
          }
        >
          <Link
            href={`/${pokemon.id}-${slugify(pokemon.name)}`}
            data-id={pokemon.id}
            data-name={pokemon.name}
            onClick={choosePokemon}
          >
            <PokeCard pokemon={pokemon} priorityImage={index < 20} />
          </Link>
        </RenderIfVisible>
      ))}
    </div>
  )
}
