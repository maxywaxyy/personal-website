import * as React from 'react';
import Grow from '@mui/material/Grow';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function PortfolioComp(entry) {
  return (
        <Grow
            in='true'
            style={{ transformOrigin: '0 0 0' }}
            {...('true' ? { timeout: entry.grow } : {})}
        >
            <TimelineItem>
            <TimelineOppositeContent >
              <b>{entry.year}</b>
            </TimelineOppositeContent>
                  <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector sx={{ py: 9}}/>
                  </TimelineSeparator>
            <TimelineContent sx={{ py: 0, px: 2 }}>
              <h1>{entry.title}</h1>
              <h2>{entry.org}</h2>
              <p>{entry.descr}</p>
            </TimelineContent>
          </TimelineItem>
        </Grow>
  );
}
