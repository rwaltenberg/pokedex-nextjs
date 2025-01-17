import { InMemoryCache } from "@apollo/experimental-nextjs-app-support"

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon_v2_pokemon: {
          keyArgs: false,
          merge(existing = [], incoming = []) {
            return [...existing, ...incoming]
          },
        },
      },
    },
  },
})
