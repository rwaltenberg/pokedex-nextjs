import { describe, expect, it } from "@jest/globals"

import { mockBulbasaur } from "@/test/mock/graphql/pokemon"

import { getPokemonImageUrl } from "./pokemon"

const OFFICIAL_ARTWORK_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
const HOME_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
const LEAGUE_URL = "https://repositorio.sbrauble.com/arquivos/up/pokedex/1.svg"

describe("getPokemonImageUrl", () => {
  it("returns official-artwork image URL if available", () => {
    const result = getPokemonImageUrl(mockBulbasaur)
    expect(result).toBe(OFFICIAL_ARTWORK_URL)
  })

  it("returns home image URL if official-artwork is not available", () => {
    const mockBulbasaurWithoutOfficialArtwork = JSON.parse(
      JSON.stringify(mockBulbasaur),
    ) as typeof mockBulbasaur
    mockBulbasaurWithoutOfficialArtwork.spriteList[0].sprites.other[
      "official-artwork"
    ] = null

    const result = getPokemonImageUrl(mockBulbasaurWithoutOfficialArtwork)
    expect(result).toBe(HOME_IMAGE_URL)
  })

  it("returns default league image URL if neither official-artwork nor home images are available", () => {
    const mockBulbasaurWithoutImages: typeof mockBulbasaur = {
      ...mockBulbasaur,
      spriteList: [],
    }

    const result = getPokemonImageUrl(mockBulbasaurWithoutImages)
    expect(result).toBe(LEAGUE_URL)
  })
})
