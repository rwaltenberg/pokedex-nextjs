"use client"

import { Sun, Moon, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

import { ClientOnly } from "@/components/ClientOnly"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const Icon =
    theme !== resolvedTheme ? SunMoon : resolvedTheme === "dark" ? Moon : Sun

  return (
    <ClientOnly>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            title="Change theme"
            aria-label="Change theme"
            className={cn({
              "border-2": theme === resolvedTheme,
            })}
            size="icon"
          >
            <Icon role="img" aria-label={theme} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value={"system"}>
              System
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"light"}>Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"dark"}>Dark</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ClientOnly>
  )
}
