import { FC, PropsWithChildren } from "react"

import { useClientOnly } from "@/hooks/useClientOnly"

export const ClientOnly: FC<PropsWithChildren> = ({ children }) => {
  const hasMounted = useClientOnly()

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
