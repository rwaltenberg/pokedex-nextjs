import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"

import * as mockedPokemon from "@/test/mock/pokemon"

import PokeCard from "./PokeCard"

type MockedPokemon = Readonly<typeof mockedPokemon>
type MockedPokemonKey = keyof MockedPokemon

type MockPokemonMap = {
  [Key in MockedPokemonKey as (typeof mockedPokemon)[Key]["name"]]: (typeof mockedPokemon)[Key]
}

const mockPokemonNames = Object.values(mockedPokemon)
  .sort((a, b) => a.number - b.number)
  .map((pokemon) => pokemon.name)

const mockPokemonMap = Object.fromEntries(
  Object.entries(mockedPokemon).map(([, pokemon]) => [pokemon.name, pokemon]),
) as MockPokemonMap

const meta = {
  title: "Pokemon/PokeCard",
  parameters: {
    layout: "centered",
  },
  render: ({ mockPokemon, ...props }) => (
    <PokeCard
      {...props}
      pokemon={mockPokemonMap[mockPokemon]}
      className="w-60"
    />
  ),
  argTypes: {
    mockPokemon: {
      name: "Pokemon",
      control: "select",
      options: mockPokemonNames,
    },
  },
  args: {
    mockPokemon: "bulbasaur",
  },
} satisfies Meta<
  { mockPokemon: keyof MockPokemonMap } & Omit<
    ComponentProps<typeof PokeCard>,
    "pokemon"
  >
>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {}

export const Hover: Story = {
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const WithFavorite: Story = {
  args: {
    canFavorite: true,
    isFavorite: true,
  },
}

export const DarkTheme: Story = {
  globals: {
    backgrounds: { value: "dark" },
  },
}

export const OneType: Story = {
  args: {
    mockPokemon: "charmander",
  },
}
