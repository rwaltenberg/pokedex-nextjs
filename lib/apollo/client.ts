import { ApolloClient, HttpLink } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support"

import { cache } from "./cache"

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache,
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
      }),
    }),
)
