"use client"

import { ApolloLink, HttpLink } from "@apollo/client"
import {
  ApolloClient,
  SSRMultipartLink,
  ApolloNextAppProvider,
} from "@apollo/experimental-nextjs-app-support"

import { cache } from "./cache"

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
  })

  return new ApolloClient({
    cache,
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
