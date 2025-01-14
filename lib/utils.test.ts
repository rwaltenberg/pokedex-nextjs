import { describe, expect, it } from "@jest/globals"

import { cn } from "./utils"

describe("cn", () => {
  it("merges class names", () => {
    const result = cn("class1", "class2")
    expect(result).toBe("class1 class2")
  })

  it("handles conditional class names", () => {
    const result = cn("class1", false && "class2", "class3")
    expect(result).toBe("class1 class3")
  })

  it("merges tailwind classes", () => {
    const result = cn("px-2 py-2", "p-4")
    expect(result).toBe("p-4")
  })

  it("handles empty inputs", () => {
    const result = cn()
    expect(result).toBe("")
  })
})
