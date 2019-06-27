import React from "react"
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1> 
      <h2>My Bio</h2>
      <p>I am interested in data analytics and web development.</p>
      <p>I like working with numbers. Unfolding mystery behind the digits gives me joy.</p>
      <p>With the web development skills, I love creating projects that solve people problems.</p>
      <p>I want to reveal untold truth from data and make things that can improve people life.</p>

      <p><Link to="/contact">Want to work together? </Link></p>
    </Layout>
  )
}

export default AboutPage
