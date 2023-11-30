import { useState } from "react"

const routes = [
  {
    id: 1,
    route: "/",
    label: "Item 1",
    icon_id: ""
  },
  {
    id: 2,
    route: "/",
    label: "Item 2",
    icon_id: ""
  },
  {
    id: 3,
    route: "/",
    label: "Item 3",
    icon_id: ""
  },
  {
    id: 4,
    route: "/",
    label: "Item 4",
    icon_id: ""
  }
]

export const Navbar = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="shadow flex md:h-20 justify-between md:justify-around items-center py-3 px-6">

      <h1 className="text-3xl font-extrabold">EEMPA</h1>

      <nav className="flex h-full items-center md:max-w-2xl md:w-full">

        <button
          aria-label="Abrir menú"
          onClick={() => setIsExpanded(true)}
          className="p-1 md:hidden"
        >
          <svg className="w-10 h-10 md:h-auto md:w-20 fill-neutral-950">
            <use xlinkHref="sprites.svg#bars" />
          </svg>
        </button>

        <ul
          className={`${isExpanded ? "right-0 md:right-0" : "-right-80 md:right-0"} fixed z-10 md:relative flex flex-col md:flex-row transition-all items-center justify-start py-28 md:py-0 px-5 md:px-4 gap-y-16 md:gap-y-0 md:gap-x-4 top-0 w-72 md:w-full h-screen md:h-full bg-black/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none`}
        >

          <button
            aria-label="Cerrar menú"
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-6 p-2 md:hidden"
          >
            <svg className="w-10 h-10 md:h-auto md:w-20 fill-neutral-950">
              <use xlinkHref="sprites.svg#xmark" />
            </svg>
          </button>

          {routes.map(({ id, label, route, icon_id: iconId }) => {
            return (
              <li
                key={id}
                className="w-full relative"
              >
                <a
                  aria-label={`Navegar a la sección ${label}`}
                  href={route}
                  className="block w-full py-2 px-3 bg-black/10 font-semibold text-xl text-white md:bg-transparent md:text-neutral-950 md:text-lg md:h-full md:grid md:place-content-center md:hover:bg-black/5 md:transition-colors md:duration-300 md:rounded-md"
                >{label}</a>
              </li>
            )
          })}
        </ul>

      </nav>
    </header>
  )
}
