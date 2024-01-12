import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.header}> 

      <p>yo wagwan</p>
  
    </div>
  </Layout>  
)

export const Head = () => <Seo title="pp" />

export default IndexPage
