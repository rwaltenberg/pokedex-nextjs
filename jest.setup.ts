import { afterEach } from "@jest/globals"
import { cleanup } from "@testing-library/react"

import "@testing-library/jest-dom/jest-globals"

afterEach(() => {
  cleanup()
})
