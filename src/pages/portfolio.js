import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = () => (
  <Layout>
    <h1>PP</h1>
    <p>welcome to portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="portfolio" />

export default Portfolio
