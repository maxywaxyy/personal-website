import * as React from 'react';
import Grow from '@mui/material/Grow';
import * as styles from '../styles/about.module.css'
import Box from '@mui/material/Box'

export default function AboutComp(entry) {
  return (
    <boxes className={styles.boxes}>
        <Grow
            in='true'
            style={{ transformOrigin: '0 0 0' }}
            {...('true' ? { timeout: entry.grow } : {})}
        >
            <div className={styles.box}>
                <img className={styles.img} src={entry.image} alt='img corrupt' height='180px'/>
                <h1 className={styles.title}>{entry.title}</h1>
                <p className={styles.descr}>{entry.descr}</p>
            </div>
        </Grow>
    </boxes>
  );
}
