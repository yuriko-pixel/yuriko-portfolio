import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import RepeatIcon from "@material-ui/icons/Book";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  blueDot: {
    backgroundColor: '#0d89eb',
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div>
      <h1>Experience</h1>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Code Chrysalis
              </Typography>
              <Typography>Software Bootcamp</Typography>
              <Typography variant="body2" color="textSecondary">
                2020 July - 2020 September
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                QA Engineer
              </Typography>
              <Typography>Digital Hearts</Typography>
              <Typography variant="body2" color="textSecondary">
                2019 Nov - Present
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Support Engineer
              </Typography>
              <Typography>Planet Works</Typography>
              <Typography variant="body2" color="textSecondary">
                2019 July - Present
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                ARC Tokyo
              </Typography>
              <Typography>Japanese Language School</Typography>
              <Typography variant="body2" color="textSecondary">
                2018 August - 2019 January
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Science Teacher
              </Typography>
              <Typography>Wiltshire Education Department</Typography>
              <Typography variant="body2" color="textSecondary">
                2017 July - 2018 July
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Southampton University
              </Typography>
              <Typography>BA Education</Typography>
              <Typography variant="body2" color="textSecondary">
                2016 September - 2017 July
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Teaching Assistant
              </Typography>
              <Typography>Wiltshire Education Department</Typography>
              <Typography variant="body2" color="textSecondary">
                2015 September - 2016 September
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Technical Sales Engineer
              </Typography>
              <Typography>Simplex-Turbulo</Typography>
              <Typography variant="body2" color="textSecondary">
                2015 Febuary - 2015 September
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                Web & Research Engineer
              </Typography>
              <Typography>Serum Hydraulics</Typography>
              <Typography variant="body2" color="textSecondary">
                2014 July - 2015 February
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" className={classes.blueDot}>
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className="timelineTitle">
                University of Portsmouth
              </Typography>
              <Typography>BSc in Physics</Typography>
              <Typography variant="body2" color="textSecondary">
                2011 September - 2014 September
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
