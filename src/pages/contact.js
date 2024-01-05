import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/contact.module.css'
import Button from '@mui/material/Button';

const Contact = () => (
  <Layout>
  <div className={styles.all}>
  <h1 className={styles.h1}>Let's Connect!</h1>
    <boxes className={styles.boxes}>
      <box1 className={styles.box1}>
        <h2 className={styles.h2}>Contacts</h2>
        <contactinfo className={styles.contactinfo}>
          <button className={styles.buttons}>maxlee10@g.ucla.edu</button>
          <button className={styles.buttons}>LinkedIn</button>
        </contactinfo>
      </box1>

      <box2 className={styles.box2}>
        <h3 className={styles.h3}>Message</h3>
        <input type="text" id="name" name="name" placeholder='Your Name' className={styles.input}></input>
        <input type="text" id="email" name="email" placeholder='Your Email' className={styles.input}></input>
        <textArea id="message" name="message" placeholder='Your Message' rows='5' className={styles.input}></textArea>
        <button className={styles.buttons}>LETS GET STARTED</button>
      </box2>

    </boxes>
  </div>
  </Layout>
)

export const Head = () => <Seo title="contact" />

export default Contact