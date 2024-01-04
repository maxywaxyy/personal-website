import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from '@mui/material/Button';

const Portfolio = () => (
  <Layout>

    <p>test <button size="small">BUTTON</button></p>
    <p>test <button variant='contained'>BUTTON</button></p>
    <Button variant="contained">dd</Button>
    <Button>PP</Button>

    <h1>PP</h1>
    <p>welcome to portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="portfolio" />

export default Portfolio
