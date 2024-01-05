import * as React from "react"
import AboutComp from "../components/aboutComp"
import * as styles from '../styles/about.module.css'

import Layout from "../components/layout"
import Seo from "../components/seo"

import soccer from '../images/soccerPhoto.jpg'
import snowboard from '../images/snowboardPhoto.jpg'
import origami from '../images/origamiPhoto.jpg'
import gym from '../images/gymPhoto.jpg'
import deneve from '../images/denevePhoto.jpg'
import japanesefilm from '../images/japanesefilmPhoto.jpg'
import kfc from '../images/kfcPhoto.jpg'
import music from '../images/musicPhoto.jpg'
import robotics from '../images/roboticsPhoto.jpg'
import ucla from '../images/uclaPhoto.jpg'



const entry = [
    {image: soccer, title: 'Soccer', descr: '2021: Adidas ID Camp Prep', grow: 1000},
    {image: snowboard, title: 'Snowboarding', descr: '2023: Mammoth Mountain', grow: 1500},
    {image: origami, title: 'Origami', descr: '2021: Japanese Culture Club', grow: 2000},
    {image: gym, title: 'Gym', descr: 'certified 225er', grow: 2500},
    {image: deneve, title: 'De Neve Dining Hall', descr: 'best dining hall', grow: 3000},
    {image: japanesefilm, title: 'Japanese Films', descr: '2016: Shin Godzilla', grow: 3500},
    {image: kfc, title: 'Korean Fried Chicken', descr: 'favorite food', grow: 4000},
    {image: music, title: 'Music', descr: 'hiphop, kpop, jpop, rnb... ', grow: 4500},
    {image: robotics, title: 'Robotics', descr: '2021: FTC Worlds', grow: 5000},
    {image: ucla, title: 'UCLA and Friends', descr: '2023: The Quad', grow: 5500},
];

const About = () => (
  <Layout>
    <div className={styles.all}>
      <h1 className={styles.h1}>Besides coding, here are some of my <b className={styles.favorite}>favorite</b> things...</h1>

      {entry.map((entry) => 
        <AboutComp
            image={entry.image}
            title={entry.title}
            descr={entry.descr}
            grow={entry.grow}
        />
      )} 
    </div>
  </Layout> 
)

export const Head = () => <Seo title="about" />

export default About
