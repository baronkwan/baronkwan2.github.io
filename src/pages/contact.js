import React from "react"

import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        IG: {" "}
        <a
          href="https://www.instagram.com/huyg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @foolstack.dev
        </a>
      </p>
      <p>
        Say Hi to me <a href="mailto:baronkwan@outlook.com">here</a>
      </p>
    </Layout>
  )
}

export default ContactPage
