import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/contact.module.css'
import Grow from '@mui/material/Grow';

import gmail from '../images/gmail.png.webp'
import linkedin from '../images/linkedin.png'

const Contact = () => (
  <Layout>
    <div className={styles.all}>
        <h1 className={styles.h1}>Let's Connect!</h1>
    
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
            <img src={gmail} className={styles.socialsPics} alt='img corrupt' height='50px' width='50px'/>
            <img src={linkedin} className={styles.socialsPics} alt='img corrupt' height='50px' width='50px'/>
          </div>
          <div>
            <p className={styles.socialsText}>maxlee10@g.ucla.edu</p>
            <a className={styles.socialsText} href="www.linkedin.com/in/max-lee-413434294">LinkedIn</a>
          </div>
        </contactinfo>
      </box1>
    </Grow>
    <Grow
      in='true'
      style={{ transformOrigin: '0 0 0' }}
      {...('true' ? { timeout: 2000 } : {})}
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