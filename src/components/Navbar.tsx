function Navbar() {
  return (
    <nav className="border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

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
        <div className="flex items-center gap-8 text-sm">
          <a href="#" className="text-pink-500">
            Home
          </a>

          <a href="#" className="text-gray-600">
            Technologies
          </a>

          <a href="#" className="text-gray-600">
            Projects
          </a>

          <a href="#" className="text-gray-600">
            About
          </a>

          <a href="#" className="text-gray-600">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600">
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