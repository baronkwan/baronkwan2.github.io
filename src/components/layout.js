import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header className={layoutStyles.header} />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
