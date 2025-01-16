import Header from "@/components/Header"
import PokemonList from "@/components/PokemonList"

export default function Home() {
  return (
    <>
      <Header />
      <main className="container lg:max-w-5xl mx-auto my-4 lg:my-8 px-4 lg:px-0">
        <PokemonList />
      </main>
    </>
  )
}
