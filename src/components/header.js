import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import 'typeface-montserrat'

import Navbar from './navbar'

// import './header.module.scss'
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  )
}

export default Header