import PokeCard from "@/components/PokeCard"
import { mockCharmander } from "@/test/mock/pokemon"

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <PokeCard pokemon={mockCharmander} />
    </div>
  )
}
