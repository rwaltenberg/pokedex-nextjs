import Image from "next/image"
import Link from "next/link"

import logo from "@/app/icon.svg"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/85 dark:bg-slate-950/85 py-2 my-2">
      <div
        role="group"
        className="container lg:max-w-5xl flex items-center gap-3 mx-auto px-4 lg:px-0"
      >
        <Link className="flex items-center gap-3" href="/">
          <Image src={logo} alt="Pokedex Logo" width={64} height={64} />
          <h1 className="text-3xl font-bold font-marhey text-center">
            Pokedex
          </h1>
        </Link>
        <nav className="ml-auto flex items-center gap-4 justify-end">
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}
