import { LucideProps, Heart } from "lucide-react"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

export type FavoriteProps = LucideProps & {
  isFavorite: boolean
}

export default forwardRef<SVGSVGElement, FavoriteProps>(function Favorite(
  { isFavorite, ...props },
  ref,
) {
  return (
    <Heart
      ref={ref}
      role="switch"
      aria-label="Favorite"
      aria-checked={isFavorite}
      {...props}
      className={cn(
        "cursor-pointer",
        "stroke-slate-700 dark:stroke-slate-300 hover:stroke-red-600",
        {
          "fill-red-600 stroke-red-600 hover:fill-red-600/70": isFavorite,
          "hover:fill-red-600/50": !isFavorite,
        },
        props.className,
      )}
    />
  )
})
