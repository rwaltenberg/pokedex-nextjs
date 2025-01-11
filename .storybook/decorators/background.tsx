import { Decorator } from "@storybook/react"
import React, { useLayoutEffect } from "react"
import { useStorybookApi } from "@storybook/manager-api"

const BackgroundDecorator: Decorator = function BackgroundDecorator(
  Story,
  { canvasElement, globals },
) {
  useLayoutEffect(() => {
    canvasElement.classList.toggle("dark", globals.backgrounds.value === "dark")
  }, [canvasElement, globals.backgrounds])

  return <Story />
}

export default BackgroundDecorator
