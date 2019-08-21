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
        Send me an <a href="mailto:baronkwan@outlook.com">email</a>
      </p>
    </Layout>
  )
}

export default ContactPage
