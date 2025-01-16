import { Decorator } from "@storybook/react"
import React, { useLayoutEffect } from "react"

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
