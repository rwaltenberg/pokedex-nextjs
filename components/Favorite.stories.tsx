import type { Meta, StoryObj } from "@storybook/react"

import Favorite from "./Favorite"

const meta = {
  title: "Components/Favorite",
  component: Favorite,
  argTypes: {
    isFavorite: {
      control: "boolean",
      description: "Indicates if the item is marked as favorite",
    },
  },
  args: {
    isFavorite: false,
  },
} satisfies Meta<typeof Favorite>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Hovered: Story = {
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const Favorited: Story = {
  args: {
    isFavorite: true,
  },
}

export const FavoritedHovered: Story = {
  args: {
    isFavorite: true,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}
