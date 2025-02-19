import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: [
    "app/**/*.{graphql,gql}",
    "components/**/*.{graphql,gql}",
    "lib/**/*.{graphql,gql}",
  ],
  generates: {
    "generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        namingConvention: "change-case#pascalCase",
      },
      plugins: [],
    },
  },
}

export default config
