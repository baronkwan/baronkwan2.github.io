import React, { useState } from "react"
import { Link } from "gatsby"

import ToggleButton from "./toggleButton"

import navbarStyles from "./navbar.module.scss"
import { keyframes } from "emotion"

const Navbar = () => {
  // State for mobile toggle button
  const [isToggleOpen, setToggle] = useState(false)

  const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  `

  let isBugerShow = isToggleOpen
    ? { display: "block", animation: `${slideDown} 0.5s ease-out` }
    : { display: "none" }

  return (
    <nav id="desktop-navbar">
      <div
        className={navbarStyles.toggleButton}
        onClick={() => setToggle(!isToggleOpen)}
      >
        <ToggleButton isToggleOpen={isToggleOpen} />
      </div>
      <ul className={navbarStyles.menu} style={isBugerShow}>
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
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        {/* <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/blog-netlify"
          >
            Blog - Netlify
          </Link>
        </li> */}
        <li>
          <Link
            className={navbarStyles.navItem}
            style={isBugerShow}
            activeClassName={navbarStyles.activeNavItem}
            to="/blog-contentful"
          >
            Blog (Contentful)
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
