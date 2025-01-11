import { useGlobals } from "@storybook/manager-api"

export function getHooks(hooks: unknown) {
  const anyHooks = hooks as any

  return {
    useGlobals: anyHooks.useGlobals as typeof useGlobals,
  }
}
