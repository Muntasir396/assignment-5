function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Mobile Menu Button */}
        <button className="text-2xl text-gray-700 lg:hidden">
          ☰
        </button>

        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-xs font-bold text-white">
            DS
          </div>

          <h1 className="text-lg font-bold text-gray-900">
            Dev Stack
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm lg:flex">
          <a href="#" className="text-pink-500">
            Home
          </a>

          <a href="#technologies" className="text-gray-600 hover:text-pink-500">
            Technologies
          </a>

          <a href="#projects" className="text-gray-600 hover:text-pink-500">
            Projects
          </a>

          <a href="#about" className="text-gray-600 hover:text-pink-500">
            About
          </a>

          <a href="#contact" className="text-gray-600 hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar