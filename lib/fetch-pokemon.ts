"use server"

import { GetPokemonDocument, GetPokemonListDocument } from "@/generated/graphql"
import { Pokemon } from "@/types/pokemon"

import { getClient } from "./apollo/client"
import { parsePokemon } from "./pokemon"

export async function fetchPokemonList(
  offset?: number,
  limit: number = 20,
): Promise<Pokemon[]> {
  const client = getClient()

  const { data } = await client.query({
    query: GetPokemonListDocument,
    variables: { offset, limit },
  })

  return data.pokemon.map(parsePokemon)
}

export async function fetchPokemon(id: string | number): Promise<Pokemon> {
  const client = getClient()

  const { data } = await client.query({
    query: GetPokemonDocument,
    variables: { id: Number(id) },
  })

  return parsePokemon(data.pokemon!)
}
