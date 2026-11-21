
import { useState } from 'react'
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from 'react-icons/fi'

const links = [
  ['Home', 'home'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Engineering', 'engineering'],
  ['Tech Stack', 'skills'],
  ['Courses', 'courses'],
  ['Languages', 'languages'],
  ['Contact', 'contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Main navigation">

        <a
          href="#home"
          className="nav-brand"
          onClick={closeMenu}
        >
          <span className="brand-symbol">
            P<span>S</span>
          </span>

          <span className="brand-name">
            PIERRE <b>SALAMEH</b>
          </span>
        </a>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

         
        </div>

        <button
          type="button"
          className="nav-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>
    </header>
  )
}

export default Navbar
