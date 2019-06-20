import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Baron, a full-stack developer living in Hong Kong!</h2>
      <p>
        Need a developer? <Link to="/contact">Hit me up</Link>.
      </p>
    </Layout>
  )
}
export default IndexPage
