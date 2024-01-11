import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/contact.module.css'
import Grow from '@mui/material/Grow';

import gmail from '../images/gmail.png.webp'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

import { graphql } from 'gatsby';
import Img from "gatsby-image"

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          original {
            width
          }
        }
    }
`;

export const pageQuery = graphql`
    query {
      gmailImage: file(
        relativePath: { eq: "gmail.png.webp" }
      ) {
        absolutePath
        ...fluidImage
      } 
      linkedinImage: file(
        relativePath: { eq: "linkedin.png" }
      ) {
        absolutePath
        ...fluidImage
      }
      githubImage: file(
        relativePath: { eq: "github.png" }
      ) {
        absolutePath
        ...fluidImage
      } 
    }
`;


const Contact = ({data}) => (
  <Layout>
    <div className={styles.all}>
        <h1 className={styles.h1}>Let's <b className={styles.connect}>Connect!</b></h1>
    
    <boxes className={styles.boxes}>
    <Grow
      in='true'
      style={{ transformOrigin: '0 0 0' }}
      {...('true' ? { timeout: 1000 } : {})}
    >
      <box1 className={styles.box1}>
        <h2 className={styles.h2}>Contacts</h2>
        <contactinfo className={styles.contactinfo}>
          <div className={styles.socialsPics}>
            <Img fluid={data.gmailImage.childImageSharp.fluid} className={styles.socialsPics} alt='img corrupt' height='50px' width='50px'/>
            <Img fluid={data.linkedinImage.childImageSharp.fluid} className={styles.socialsPics} alt='img corrupt' height='50px' width='50px'/>
            <Img fluid={data.githubImage.childImageSharp.fluid} className={styles.socialsPics} alt='img corrupt' height='50px' width='50px'/>
          </div>
          <div>
            <p className={styles.socialsText}>maxlee10@g.ucla.edu</p>
            <a className={styles.socialsText} href='https://www.linkedin.com/in/max-lee-413434294'>LinkedIn</a>
            <a className={styles.socialsText} href='https://github.com/maxywaxyy'>Github</a>
          </div>
        </contactinfo>
      </box1>
    </Grow>
    <Grow
      in='true'
      style={{ transformOrigin: '0 0 0' }}
      {...('true' ? { timeout: 1500 } : {})}
    >
      <box2 className={styles.box2}>
        <h3 className={styles.h3}>Message</h3>
        <input type="text" id="name" name="name" placeholder='Your Name' className={styles.input}></input>
        <input type="text" id="email" name="email" placeholder='Your Email' className={styles.input}></input>
        <textArea id="message" name="message" placeholder='Your Message' rows='5' className={styles.input}></textArea>
        <div className={styles.started}>
          <button className={styles.buttons}>LETS GET STARTED</button>
        </div>
      </box2>
    </Grow>
    </boxes>
  </div>
  </Layout>
)

export const Head = () => <Seo title="contact" />

export default Contact