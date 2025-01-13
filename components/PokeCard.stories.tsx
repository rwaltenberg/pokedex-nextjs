import type { Meta, StoryObj } from "@storybook/react"

import { mockBulbasaur, mockCharmander } from "@/test/mock/pokemon"

import PokeCard from "./PokeCard"

const mockPokemonMap = {
  bulbasour: mockBulbasaur,
  charmander: mockCharmander,
} as const

const meta = {
  title: "Pokemon/PokeCard",
  parameters: {
    layout: "centered",
  },
  render: ({ mockPokemon }) => (
    <PokeCard pokemon={mockPokemonMap[mockPokemon]} className="w-60" />
  ),
  argTypes: {
    mockPokemon: {
      name: "Pokemon",
      control: "inline-radio",
      options: Object.keys(mockPokemonMap),
    },
  },
  args: {
    mockPokemon: "bulbasour",
  },
} satisfies Meta<{ mockPokemon: keyof typeof mockPokemonMap }>

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

export const DarkTheme: Story = {
  globals: {
    backgrounds: { value: "dark" },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const OneType: Story = {
  args: {
    mockPokemon: "charmander",
  },
}
