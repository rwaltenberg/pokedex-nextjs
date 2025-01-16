import type { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/test"
import { ThemeProvider, useTheme } from "next-themes"
import { useEffect } from "react"

import { ThemeSwitcher } from "./ThemeSwitcher"

const meta = {
  title: "Components/ThemeSwitcher",
  parameters: {
    layout: "centered",
  },
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class">
        <Story />
      </ThemeProvider>
    ),
  ],
  render: (args, { globals }) => {
    const { setTheme } = useTheme()

    useEffect(() => {
      setTheme(globals.backgrounds.value ?? "light")
    }, [globals.backgrounds.value, setTheme])

    return <ThemeSwitcher />
  },
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MenuOpen: Story = {
  play: async ({ canvasElement }) => {
    const button = await within(canvasElement).findByRole("button", {
      name: "Change theme",
    })
    await userEvent.click(button)
  },
}

export const DarkTheme: Story = {
  globals: {
    backgrounds: { value: "dark" },
  },
  play: MenuOpen.play,
}
