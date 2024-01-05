import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Grow from '@mui/material/Grow';

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"

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
      <Grow
            in='true'
            {...('true' ? { timeout: 2000 } : {})}
        >
          <p className={styles.hello}>Hello! </p>
      </Grow>
      <Grow
            in='true'
            {...('true' ? { timeout: 3000 } : {})}
        >
          <p className={styles.thisIs}>My name is </p>
      </Grow>
      <Grow
            in='true'
            {...('true' ? { timeout: 5000 } : {})}
        >
          <h1><b className={styles.max}>MAX</b></h1>
      </Grow>
  
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
