import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">


        <div className="flex items-center justify-between">


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>


          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-xs font-bold text-white">
              DS
            </div>

            <h1 className="text-lg font-bold text-gray-900">
              Dev Stack
            </h1>
          </a>

          <div className="hidden items-center gap-8 text-sm lg:flex">
            <a href="#" className="text-pink-500">
              Home
            </a>

            <a
              href="#technologies"
              className="text-gray-600 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-gray-600 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-600 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-600 hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>

        </div>

        {menuOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-pink-500"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-pink-500"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar