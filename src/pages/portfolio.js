import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const PortfolioPage = () => {
  // TODO: Define Filter Function Here
  return (
    <Layout>
      <Head title="Portfolio" />
      <section id="portfolio">
        <h1 id="page-header">Portfolio</h1>
        <div id="filter">Filter</div>
        <div id="gallery">Gallery</div>
      </section>
    </Layout>
  )
}

export default PortfolioPage
