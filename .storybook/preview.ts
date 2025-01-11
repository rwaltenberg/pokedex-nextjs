import type { Preview } from "@storybook/react"
import "@/app/globals.css"
import BackgroundDecorator from "./decorators/background"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [BackgroundDecorator],
}

export default preview
