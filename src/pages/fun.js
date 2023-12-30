import * as React from "react"
import { Link } from "gatsby"
import FunComp from "../components/funComp"

import Layout from "../components/layout"
import Seo from "../components/seo"

import soccer from '../images/soccerPhoto.jpg'
import snowboard from '../images/snowboardPhoto.jpg'
import origami from '../images/origamiPhoto.jpg'

const entry = [
    {image: soccer, title: 'Soccer', descr: '2022: Adidas ID Camp Prep'},
    {image: snowboard, title: 'Snowboarding', descr: '2023: Mammoth Mountain'},
    {image: origami, title: 'Origami', descr: '2021: Japanese Culture Club'}
];

const Fun = () => (
  
  <div>
    <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
   
    <div>
        {entry.map((entry) => 
        <FunComp
            image={entry.image}
            title={entry.title}
            descr={entry.descr}
        />
        )}
     </div>
  </div>
  
)

export const Head = () => <Seo title="fun" />

export default Fun
