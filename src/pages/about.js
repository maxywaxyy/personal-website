import * as React from "react"
import { Link } from "gatsby"
import AboutComp from "../components/aboutComp"
import * as styles from '../styles/about.module.css'

import Layout from "../components/layout"
import Seo from "../components/seo"

import soccer from '../images/soccerPhoto.jpg'
import snowboard from '../images/snowboardPhoto.jpg'
import origami from '../images/origamiPhoto.jpg'

const entry = [
    {image: soccer, title: 'Soccer', descr: '2022: Adidas ID Camp Prep', grow: 1000},
    {image: snowboard, title: 'Snowboarding', descr: '2023: Mammoth Mountain', grow: 2000},
    {image: origami, title: 'Origami', descr: '2021: Japanese Culture Club', grow: 3000}
];

const About = () => (
  <div className={styles.all}>
    <Layout>
      <h1 className={styles.h1}>Besides coding, here are some of my <b className={styles.favorite}>favorite</b> things...</h1>

      {entry.map((entry) => 
        <AboutComp
            image={entry.image}
            title={entry.title}
            descr={entry.descr}
            grow={entry.grow}
        />
      )}
    </Layout>  
  </div>
)

export const Head = () => <Seo title="about" />

export default About
