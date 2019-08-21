import React, { useRef, useEffect } from "react"
import TypeIt from "typeit"
import { Link } from "gatsby"

import indexStyles from "./index.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const Type = props => {
  const typeRef = useRef(null)
  useEffect(() => {
    new TypeIt(typeRef.current, props).go()
  }, [typeRef])

  return <span ref={typeRef}>{props.children}</span>
}

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 className={indexStyles.greeting}>Hello.</h1>
      <div className={indexStyles.typeWrapper}>
        <h2>
          This is Baron. I'm a
          <Type
            strings={["developer.", "data science enthusiast."]}
            loop={true}
            nextStringDelay={2000}
            loopDelay={4500}
            breakLines={false}
            waitUntilVisible={true}
            speed={80}
          />
        </h2>
      </div>
      <hr></hr>
      <h5>
        Check out my <Link to="/portfolio">portfolio</Link>.
      </h5>
    </Layout>
  )
}
export default IndexPage
