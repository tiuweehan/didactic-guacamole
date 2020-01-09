import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import ExperienceCard from './ExperienceCard';
import LineBreak from 'components/layouts/utils/LineBreak';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      padding: '30px 0px 30px 0px',
      [theme.breakpoints.up('md')]: {
        padding: '55px 10% 55px 10%',
      },
    },
    title: {
      justifyContent: 'center',
      textAlign: 'center',
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
      color: '#555',
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
        <Typography variant="h3">Work Experience</Typography>
      </Grid>
      <LineBreak height={'20px'} />
      <Divider />
      <LineBreak height={'20px'} />

      <Grid container>
        {/* CVWO */}
        <Grid item xs={12} md={6} lg={4}>
          <ExperienceCard
            displayPictureUrl={'/images/CVWO.png'}
            role={'Software & DevOps Engineer'}
            company={'Computing for Voluntary Welfare Organisations (CVWO)'}
            dateRange={'May 2019 – September 2019'}
            footer={[]}
          >
            <Typography className={classes.text}>
              As a software engineering intern under CVWO, I was forunate enough to work on 2 projects, AUN-QA (built
              from scratch) & SAC-NL (an existing live system). Read about them{' '}
              <a href="https://tiuweehan.com/projects">here</a>
            </Typography>
            <Typography className={classes.text}>
              Overall, it was a great experience; I learnt a lot on full-stack development and DevOps, got to meet
              clients to understand their needs, and it was nice seeing how my work was actually contributing to a good
              cause.
            </Typography>
          </ExperienceCard>
        </Grid>

        {/* CSI */}
        <Grid item xs={12} md={6} lg={4}>
          <ExperienceCard
            displayPictureUrl={'/images/CSI.png'}
            role={'Data Analyst'}
            company={'Cancer Science Institute (CSI)'}
            dateRange={'January 2019 – May 2019'}
            footer={[]}
          >
            <Typography className={classes.text}>
              As a data analyst under the Cancer Science Institute, I worked with NSCC supercomputers to parse and
              extract meaningful results from terabytes of raw genomic data.
            </Typography>
            <Typography className={classes.text}>
              These results were used to evaluate different profiling algorithms (known as Variant Callers) based on
              cost, speed and accuracy.
            </Typography>
            <Typography className={classes.text}>
              I learnt how to write Shell and Python scripts to clean and extract data, and gained insights on job
              scheduling in distributed systems.
            </Typography>
          </ExperienceCard>
          <LineBreak height={'15px'} />
        </Grid>
      </Grid>

      <Grid container className={classes.title}>
        <Typography variant="h3">Other Experience</Typography>
      </Grid>

      <LineBreak height={'20px'} />
      <Divider />
      <LineBreak height={'20px'} />

      <Grid container>
        {/* Teaching Assistant */}
        <Grid item xs={12} md={6} lg={4}>
          <ExperienceCard
            displayPictureUrl={'/images/NUS.png'}
            role={'Teaching Assistant'}
            company={'National University of Singapore'}
            dateRange={'August 2019 – Present'}
            footer={[]}
          >
            <>
              <Typography className={classes.text}>
                I have tutored / am tutoring the following modules as an undergraduate teaching assistant:
              </Typography>
              <Typography className={classes.text} style={{ textAlign: 'left' }}>
                <ul>
                  <li>
                    <a href="https://nusmods.com/modules/CS1101S/">CS1101S</a>
                    {" – Programming Methdology (Fall '19)"}
                  </li>
                </ul>
              </Typography>
              <Typography className={classes.text} style={{ textAlign: 'center', color: '#999' }}>
                (Swipe for more)
              </Typography>
            </>
            <>
              <Typography className={classes.text} style={{ textAlign: 'left' }}>
                <ul>
                  <li>
                    <li>
                      <a href="https://nusmods.com/modules/CS2040S/">CS2040S</a>
                      {" – Data Structures and Algorithms (Spring '20)"}
                    </li>
                    <a href="https://nusmods.com/modules/CS2103T/">CS2103T</a>
                    {" – Software Engineering (Spring '20)"}
                  </li>
                </ul>
              </Typography>
            </>
          </ExperienceCard>
          <LineBreak height={'15px'} />
        </Grid>

        {/* CVWO President */}
        <Grid item xs={12} md={6} lg={4}>
          <ExperienceCard
            displayPictureUrl={'/images/CVWO.png'}
            role={'President'}
            company={'Computing for Voluntary Welfare Organisations (CVWO)'}
            dateRange={'September 2019 – Present'}
            footer={[]}
          >
            <Typography className={classes.text}>
              CVWO is a student group with the mission of building IT systems to serve the needs of the community.
            </Typography>
            <Typography className={classes.text}>
              I oversee publicity and help to manage daily operations of our services, which are used by more than 10
              VWOs across Singapore and serves thousands of people everyday.
            </Typography>
          </ExperienceCard>
          <LineBreak height={'15px'} />
        </Grid>

        {/* NUS Hackers */}
        <Grid item xs={12} md={6} lg={4}>
          <ExperienceCard
            displayPictureUrl={'/images/NUSHackers.svg'}
            role={'Coreteam Member'}
            company={'NUS Hackers'}
            dateRange={'December 2018 – Present'}
            footer={[]}
          >
            <Typography className={classes.text}>
              I am a coreteam member of NUS Hackers, a student group dedicated to spreading hacker culture.
            </Typography>
            <Typography className={classes.text}>
              {
                "I have helped organize Singapore's largest student run hackathon Hack&Roll, and organized a series of\
              weekly technical talks Friday Hacks with speakers from the industry and academia alike."
              }
            </Typography>
          </ExperienceCard>
          <LineBreak height={'15px'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
