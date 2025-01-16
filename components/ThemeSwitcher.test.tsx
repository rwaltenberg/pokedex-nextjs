import {
  describe,
  expect,
  it,
  beforeEach,
  afterEach,
  jest,
} from "@jest/globals"
import { render, screen } from "@testing-library/react"
import { ThemeProvider, useTheme } from "next-themes"
import { useEffect } from "react"

import { ThemeSwitcher } from "./ThemeSwitcher"

function ThemePicker({
  theme,
  children,
}: {
  theme: string
  children: React.ReactNode
}) {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])

  return <>{children}</>
}

describe("ThemeSwitcher", () => {
  let matchMediaSpy: jest.Mock<Window["matchMedia"]>

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    matchMediaSpy = (window as any).matchMedia = jest
      .fn()
      .mockImplementation((query) => ({
        matches: query === "(prefers-color-scheme: dark)",
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })) as jest.Mock<Window["matchMedia"]>
  })

  afterEach(() => {
    matchMediaSpy.mockRestore()
  })

  it("renders the button with the correct aria-label", () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    )
    const button = screen.getByRole("button", { name: "Change theme" })
    expect(button).toBeInTheDocument()
  })

  it.each(["system", "light", "dark"])(
    "renders the correct icon for the %s theme",
    (theme) => {
      render(
        <ThemeProvider>
          <ThemePicker theme={theme}>
            <ThemeSwitcher />
          </ThemePicker>
        </ThemeProvider>,
      )
      const icon = screen.getByRole("img", { name: theme })
      expect(icon).toBeInTheDocument()
    },
  )
})
