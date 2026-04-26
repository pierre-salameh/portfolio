function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 hover:text-yellow-400 transition">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-bold text-xl">
          Pierre Salameh
        </h1>

        <ul className="flex space-x-6 text-gray-300">
          <li>
            <a href="#home" className="hover:text-yellow-400">Home</a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400">About</a>
          </li>

          <li>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar