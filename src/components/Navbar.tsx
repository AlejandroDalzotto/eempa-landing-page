import { useState } from "react"

const routes = [
  {
    id: 1,
    route: "/",
    label: "Item 1"
  },
  {
    id: 2,
    route: "/",
    label: "Item 2"
  },
  {
    id: 3,
    route: "/",
    label: "Item 3"
  },
  {
    id: 4,
    route: "/",
    label: "Item 4"
  }
]

export const Navbar = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="shadow max-w-screen-sm flex justify-between lg:justify-around items-center py-3 px-6">

      <h1 className="text-3xl font-extrabold">EEMPA</h1>

      <nav>

        <button
          onClick={() => setIsExpanded(true)}
          className="p-1"
        >
          <svg className="w-10 h-10 md:h-auto md:w-20 fill-neutral-950">
            <use xlinkHref="sprites.svg#bars" />
          </svg>
        </button>

        <ul className={`${isExpanded ? "right-0" : "-right-80"} fixed flex flex-col transition-all items-center justify-start py-16 px-5 gap-y-16 top-0 w-72 h-screen bg-black/10 backdrop-blur`}>

          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-6 p-2"
          >
            <svg className="w-10 h-10 md:h-auto md:w-20 fill-neutral-950">
              <use xlinkHref="sprites.svg#xmark" />
            </svg>
          </button>

          {routes.map(({ id, label, route }) => {
            return (
              <li key={id}>
                <a href={route}>{label}</a>
              </li>
            )
          })}
        </ul>

      </nav>
    </header>
  )
}
