import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.header}> 

      {/*
      <StaticImage
      src="../images/coverPhoto.jpg"
      alt="cover photo corrupted"
      placeholder="blurred"
      width={200}
      height={200}
      className={styles.coverPhoto}
      />
      */}

      <p></p>
      <p className={styles.hello}>Hello! </p>
      <p className={styles.thisIs}>My name is </p>
      <h1><b className={styles.max}>MAX</b></h1>
  
    </div>
  </Layout>  
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
