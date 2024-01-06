import * as React from "react"
import PortfolioComp from "../components/portfolioComp"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/portfolio.module.css'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import Grow from '@mui/material/Grow';

const entry = [
  {year: '2023 - current', title: 'Hack Intern', org: 'ACM at UCLA', descr: 'CSS, Typescript, Javascript, HTML, React, Git, MongoDB', grow: 2000},
  {year: '2021', title: 'Quantum Computing Intern', org: 'IBM', descr: 'Quiskit, Python, quantum mechanics', grow: 1500},
];

const Portfolio = () => (
  <Layout>
    <div className={styles.all}>
      <h1 className={styles.h1}>Programming <b className={styles.experience}>Experience</b></h1>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.7,
            },
          }}
        >
        <div className={styles.timeline}> 

        {entry.map((entry) => 
          <PortfolioComp
              year={entry.year}
              title={entry.title}
              org={entry.org}
              descr={entry.descr}
              grow={entry.grow}
          />
        )} 

        <Grow
            in='true'
            style={{ transformOrigin: '0 0 0' }}
            {...('true' ? { timeout: 1000 } : {})}
        >
          <TimelineItem>
            <TimelineOppositeContent>
              2019 - 2023
            </TimelineOppositeContent>
                  <TimelineSeparator>
                  <TimelineDot />
                  </TimelineSeparator>
                  
            <TimelineContent sx={{ py: 0, px: 2 }}>
              <h1>Team Programmer</h1>
              <h2>FIRST Robotics</h2>
              <p>Android Studio, Kotlin, Java, OpenCV, Vuforia, PID</p>
            </TimelineContent>
          </TimelineItem>
        </Grow>
          
          </div>
        </Timeline>

    </div>
  </Layout>
)

export const Head = () => <Seo title="portfolio" />

export default Portfolio
