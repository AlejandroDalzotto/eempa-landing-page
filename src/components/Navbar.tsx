import { useState } from "react"

export const Navbar = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="max-w-screen-sm flex justify-between lg:justify-around items-center bg-orange-400 py-3 px-6">

      <h1 className="text-3xl font-bold">EEMPA</h1>

      <nav>

        <button
          onClick={() => setIsExpanded(true)}
          className="border-black border-2 rounded p-2"
        >
          {">"}{">"}{">"}{">"}
        </button>

        <ul className={`${isExpanded ? "right-0" : "-right-80"} fixed flex flex-col items-center justify-evenly top-0 w-72 h-screen bg-black/10 backdrop-blur-sm`}>

          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-6 border-black border-2 rounded p-2"
          >
            {'<'}{'<'}{'<'}{'<'}
          </button>

          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Sobre la institución</a>
          </li>
          <li>
            <a href="/inscription">Solicitar inscripción</a>
          </li>
        </ul>

      </nav>
    </header>
  )
}
