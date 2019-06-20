import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1> 
      <h2>My Bio</h2>
      <p>I am interested in data analytics and web development.</p>
      <p>Found it funs diving into numbers.</p>
      <p>I want to reveal untold truth from data and make things that can improve people life.</p>

      <p><Link to="/contact">Want to work together? </Link></p>
    </Layout>
  )
}

export default AboutPage
