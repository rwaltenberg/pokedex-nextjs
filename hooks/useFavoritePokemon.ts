import { useLocalStorageState } from "ahooks"
import { useCallback } from "react"

export function useFavoritePokemon() {
  const [favorites, setFavorites] = useLocalStorageState<number[]>(
    "favorites",
    {
      defaultValue: [],
    },
  )

  const toggleFavorite = useCallback(
    (id: number) => {
      setFavorites((favorites = []) =>
        favorites.includes(id)
          ? favorites.filter((favorite) => favorite !== id)
          : [...favorites, id],
      )
    },
    [setFavorites],
  )

  const isFavorite = useCallback(
    (id: number) => favorites?.includes(id) ?? false,
    [favorites],
  )

  return { favorites, toggleFavorite, isFavorite }
}
