import React, { useState } from "react"
import { Link } from "gatsby"

import ToggleButton from './ToggleButton'

import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  // State for mobile toggle button
  const [isToggleOpen, setToggle] = useState(false)

  let isBugerShow = isToggleOpen ? {display: 'block'} : {display: 'none'}

  return (
    <nav id="desktop-navbar">
      <div
        className={navbarStyles.toggleButton}
        onClick={() => setToggle(!isToggleOpen)}
      >
        <ToggleButton
          isToggleOpen={isToggleOpen}
        />
      </div>
      <ul
        className={navbarStyles.menu}
        style={isBugerShow}
      >
        <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/blog-netlify"
          >
            Blog - Netlify
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/blog-contentful"
          >
            Blog - Contentful
          </Link>
        </li>
        <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
