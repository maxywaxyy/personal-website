import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "portfolio",
    url: "portfolio",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "fun",
    url: "fun",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "contact",
    url: "contact",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <div>
      <Layout>

<div className={styles.textCenter}>
  
  <StaticImage
    src="../images/coverPhoto.jpg"
    alt="cover photo corrupted"
    placeholder="blurred"
    width={200}
    height={200}
    className={styles.coverPhoto}
  />
  
  <h1>
    Hello! this is <b>Max O7</b>
  </h1>
  <p className={styles.intro}>
    
  </p>
</div>
</Layout>

<b>Example pages:</b>{" "}
    {samplePageLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <Link to={link.url}>{link.text}</Link>
        {i !== samplePageLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
    <br />

  </div>
  
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
