import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import ExperiencePostTemplate from './ExperiencePostTemplate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      padding: '30px 0px 30px 0px',
      [theme.breakpoints.up('sm')]: {
        padding: '55px 10% 55px 10%',
      },
      [theme.breakpoints.up('md')]: {
        padding: '80px 20% 80px 20%',
      },
    },
    title: {
      justifyContent: 'center',
      color: '#666',
    },
    headerContent: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      margin: '0px 0px 0px 0px',
    },
    subheader: {
      margin: '2px 0px 15px 0px',
      color: '#666',
    },
    text: {
      textAlign: 'justify',
      fontSize: '16px',
      lineHeight: 1.5,
    },
  }),
);

const Experience: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.title}>
        <Typography variant="h3">Experience</Typography>
      </Grid>
      <br />
      <Divider />
      <br />

      <ExperiencePostTemplate
        image={'/images/NUS.png'}
        header={'Teaching Assistant'}
        workplace={'National University of Singapore'}
        startDate={'August 2019'}
        endDate={'November 2019'}
      >
        <Typography className={classes.text}>
          {`I was a teaching assistant for CS1101S, a rigorous and thorough introduction to Programming Methodology.`}
        </Typography>
      </ExperiencePostTemplate>
      <br />
      <Divider />
      <br />
      <ExperiencePostTemplate
        image={'/images/CVWO.png'}
        header={'Software & DevOps Engineer'}
        workplace={'Computing for Voluntary Welfare Organisations (CVWO)'}
        startDate={'May 2019'}
        endDate={'September 2019'}
      >
        <Typography className={classes.text}>
          {`Upgraded and maintained Senior Activity Center & Neighborhood Links (SAC-NL), an internal workflow management system
used by 6 VWOs to manage daily operations for 14 elderly care centers around Singapore.
• Deployed 3 new SAC-NL management systems for the Society of Sheng Hong Welfare Services and Care Corner Singapore.
• Developed and deployed from scratch a web portal for ASEAN University Network Quality Assurance (AUN-QA), a regional
accreditation body that evaluates and certifies degree programmes for 30 ASEAN member universities.
• Worked with React-Redux-Typescript, Ruby-on-Rails, PostgreSQL, Docker, Nginx and Google Analytics.
        `}
        </Typography>
      </ExperiencePostTemplate>
      <br />
      <Divider />
      <br />
      <ExperiencePostTemplate
        image={'/images/CSI.png'}
        header={'Data Analyst'}
        workplace={'Cancer Science Institute'}
        startDate={'Jan 2019'}
        endDate={'May 2019'}
      >
        <Typography className={classes.text}>
          {`Profiled multiple high-performance Variant Callers (pipelines that identify potentially cancer-causing genomic mutations) on
        germline data from The Cancer Genome Atlas (TCGA) utilizing National Supercomputing Centre (NSCC) supercomputers.
        • Developed Bash, Python and Java programs to sanitize and extract meaningful results from terabytes of raw genomic data.
        • Optimized various genomics workflows that maximize accuracy, speed and cost-effectiveness of analytical algorithms.
        `}
        </Typography>
      </ExperiencePostTemplate>
    </div>
  );
};

export default Experience;
