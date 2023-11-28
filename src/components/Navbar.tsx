import { useState } from "react"

export const Navbar = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="max-w-screen-sm flex justify-between lg:justify-around items-center py-3 px-6">

      <h1 className="text-3xl font-extrabold">EEMPA</h1>

      <nav>

        <button
          onClick={() => setIsExpanded(true)}
          className="border-black border-2 rounded p-2"
        >
          {">"}{">"}{">"}{">"}
        </button>

        <ul className={`${isExpanded ? "right-0" : "-right-80"} fixed flex flex-col transition-all items-center justify-start py-16 px-5 gap-y-16 top-0 w-72 h-screen bg-black/10 backdrop-blur`}>

          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-6 border-black border-2 rounded p-2"
          >
            {'<'}{'<'}{'<'}{'<'}
          </button>

          <li>
            <a href="/">Item 1</a>
          </li>
          <li>
            <a href="/">Item 2</a>
          </li>
          <li>
            <a href="/">Item 3</a>
          </li>
          <li>
            <a href="/">Item 4</a>
          </li>
        </ul>

      </nav>
    </header>
  )
}
