[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/rwaltenberg-pokedex?style=for-the-badge)](https://rwaltenberg-pokedex.vercel.app)

# Rodrigo's Pokedex

A concept app made by [@rwaltenberg](https://github.com/rwaltenberg) ([Linkedin](https://linkedin.com/in/rwaltenberg))

## Description

This Pokedex is an example React/Next.js application that displays a list of Pokémon using data fetched from a GraphQL API. The application uses Apollo Client for data fetching and Tailwind CSS for styling.

## Features

- Fetches and displays a list of Pokémon with their details.
- Uses Apollo Client for GraphQL data fetching.
- Styled with Tailwind CSS.
- Supports dark mode using `next-themes`.
- Includes Cypress for component and end-to-end testing.

## Getting Started

### Prerequisites

- Node.js
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rwaltenberg/pokedex-nextjs.git
cd pokedex-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a [`.env.local`](.env.local) file and add your API URL:

```env
API_URL=https://beta.pokeapi.co/graphql/v1beta
```

4. Generate the types for the GraphQL queries:

```bash
npm run codegen
# or
yarn codegen
# or
pnpm codegen
# or
bun codegen
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Running Tests

To run Cypress component tests:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

To run Cypress end-to-end tests:

```bash
npm run test:e2e
# or
yarn test:e2e
# or
pnpm test:e2e
# or
bun test:e2e
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
