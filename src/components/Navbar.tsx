"use client";

import type { NavLink } from "@/lib/definitions"
import { useUIStore } from "@/store";
import Link from "next/link"

const links: NavLink[] = [
  {
    id: crypto.randomUUID(),
    label: "Inicio",
    route: "#",
  },
  {
    id: crypto.randomUUID(),
    label: "Nuestra historia",
    route: "#",
  },
  {
    id: crypto.randomUUID(),
    label: "Solicitar información",
    route: "#",
  },
]

const LinksMobile = () => {
  return (
    <ul className="absolute md:hidden top-20 right-6 transition-all bg-black/40 p-4 flex flex-col gap-y-6 font-medium dark:text-neutral-50">
      {
        links.map(({ id, label, route }) => {
          return (
            <li key={id}>
              <Link href={route}>{label}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default function Navbar() {

  const { isOpen, toggle } = useUIStore()

  return (
    <nav className="fixed w-full flex justify-between items-center py-2 px-3">

      <h1 className="font-bold text-3xl text-neutral-50">EEMPA</h1>

      <button onClick={toggle} className="flex items-center justify-center p-2 rounded-lg font-medium fill-neutral-50 transition-all active:scale-90">
        <svg className="w-12 h-12">
          <use xlinkHref='/sprites.svg#bars'></use>
        </svg>
      </button>

      {isOpen && (
        <LinksMobile />
      )}
    </nav>
  )
}
