"use client"

import { forwardRef, HTMLAttributes } from "react"
import RenderIfVisible from "react-render-if-visible"

import PokeCard from "@/components/PokeCard"
import { usePokemonList } from "@/hooks/usePokemonList"

export default function Home() {
  const { data } = usePokemonList()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 container lg:max-w-5xl mx-auto my-4 lg:my-8 px-4 lg:px-0">
      {data.map((pokemon, index) => (
        <RenderIfVisible
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
          <PokeCard pokemon={pokemon} priorityImage={index < 20} />
        </RenderIfVisible>
      ))}
    </div>
  )
}
