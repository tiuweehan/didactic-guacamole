import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CardSection from 'components/shared/details/CardSection';
import ProjectCard from './ProjectCard';
import LineBreak from 'components/layouts/utils/LineBreak';
import GitHubLink from '../links/GitHubLink';
import CustomLink from '../links/CustomLink';

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
    text: {
      color: '#555',
      textAlign: 'justify',
      fontSize: '16px',
      lineHeight: 1.8,
    },
  }),
);

const Projects: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Notable Projects */}
      <CardSection title={'Notable Projects'}>
        {/* AlgoBase */}
        <ProjectCard
          id={'Notable-Projects-AlgoBase'}
          displayPictureUrl={'/images/AlgoBase.jpg'}
          name={'AlgoBase'}
          application={'Desktop Application'}
          dateRange={'August 2019 – November 2019'}
          footer={[<GitHubLink key={'GitHub'} url={'https://github.com/AY1920S1-CS2103T-W11-1/main'} />]}
        >
          <Typography className={classes.text}>
            AlgoBase is a one-stop algorithm management platform, designed for students preparing for technical
            interviews.
          </Typography>
          <Typography className={classes.text}>
            My main contributions include features such as a GUI Text editor and Command Line tab management. I learnt a
            lot about applying SOLID design principles in practice.
          </Typography>
          <Typography className={classes.text}>
            The desktop application was developed as part of a project under CS2103T, a software engineering module in
            NUS.
          </Typography>
        </ProjectCard>

        {/* SMU-SMIF */}
        <ProjectCard
          id={'Notable-Projects-SMU-SMIF'}
          displayPictureUrl={'/images/SMU-SMIF.png'}
          name={'SMU-SMIF Website'}
          application={'Web Application'}
          dateRange={'July 2019 – Present'}
          footer={[
            <GitHubLink key={'GitHub'} url={''} />,
            <CustomLink key={'Website'} url={''} displayIcon={'/images/SMU-SMIF.png'} />,
          ]}
        >
          <Typography className={classes.text}>
            As a freelancer, I developed from scratch the organizational website for{' '}
            <a href={'https://www.smusmif.com/'}>SMU-SMIF</a>, a student-run investment fund from the Singapore
            Management University.
          </Typography>
          <Typography className={classes.text}>
            Some features include a <a href={'https://www.smusmif.com/achievements'}>timeline of past achievements</a>{' '}
            and <a href={'https://www.smusmif.com/team'}>biographies page including &gt;100 alumni</a>.
          </Typography>
        </ProjectCard>

        {/* AUN-QA */}
        <ProjectCard
          id={'Notable-Projects-AUN-QA'}
          displayPictureUrl={'/images/AUN-QA.jpg'}
          name={'AUN-QA Web Portal'}
          application={'Web Application'}
          dateRange={'May 2019 – September 2019'}
          footer={[]}
        >
          <Typography className={classes.text}>
            <a href="http://www.aun-qa.org/">AUN-QA</a> is a regional body that accredits university degrees from its 30
            ASEAN member universities. My team under CVWO developed a{' '}
            <a href="https://aunqa.nuscvwo.com/">web portal</a> from scratch to consolidate and improve the efficiency
            of their workflow.
          </Typography>
          <Typography className={classes.text}>
            My main contributions include the User Interface (UI), role-based authorization, audit trails and DevOps.
          </Typography>
        </ProjectCard>

        {/* SAC-NL */}
        <ProjectCard
          id={'Notable-Projects-SAC-NL'}
          displayPictureUrl={'/images/SAC-NL.jpg'}
          name={'SAC-NL Web Portal'}
          application={'Web Application'}
          dateRange={'May 2019 – Present'}
          footer={[]}
        >
          <Typography className={classes.text}>
            The SAC-NL web portal is an existing live system used by 15 elderly care centers across Singapore to manage
            their daily processes, including organizations such as <a href="https://www.geha.com/">GEHA</a>,{' '}
            <a href="https://www.carecorner.org.sg/">Care Corner</a> and{' '}
            <a href="https://shenghong.org.sg/">Sheng Hong Welfare Services</a>.
          </Typography>
          <Typography className={classes.text}>
            As a software engineer under CVWO, I liaised and deployed new systems for 3 elderly care centers that joined
            us in 2019. I also maintained daily operations and squashed pesky bugs.
          </Typography>
        </ProjectCard>
      </CardSection>

      {/* Personal Projects */}
      <CardSection title={'Personal Projects'}>
        {/* Bullseye */}
        <ProjectCard
          id={'Notable-Projects-Bullseye'}
          displayPictureUrl={'/images/Bullseye.png'}
          name={'Bullseye'}
          application={'iOS Application'}
          dateRange={'December 2019 – December 2019'}
          footer={[<GitHubLink key={'GitHub'} url={'https://github.com/tiuweehan/Bullseye'} />]}
        >
          <Typography className={classes.text}>
            Bullseye is a simple game I developed to learn the fundamentals of Swift and SwiftUI.
          </Typography>
          <Typography className={classes.text}>
            I learnt a lot about Swift programming language, and personally think it is the &apos;cleanest&apos;
            programming language I have worked with so far, especially with its dedication to type safety and
            implementation of closures.
          </Typography>
          <Typography className={classes.text}>
            SwiftUI was also fun to learn and its structure felt pretty much React Hooks.
          </Typography>
        </ProjectCard>

        {/* TWH */}
        <ProjectCard
          id={'Notable-Projects-TWH'}
          displayPictureUrl={'/images/TWH.png'}
          name={'This Website'}
          application={'Web Application'}
          dateRange={'July 2019 – Present'}
          footer={[
            <GitHubLink key={'GitHub'} url={'https://github.com/tiuweehan/didactic-guacamole'} />,
            <CustomLink key={'Website'} url={''} displayIcon={'/images/TWH.png'} />,
          ]}
        >
          <>
            <Typography className={classes.text}>
              I included this project because I like functional programming, so click{' '}
              <a href={'https://www.tiuweehan.com/projects#Notable-Projects-TWH'}>here</a> for infinite recursion.
            </Typography>
            <LineBreak height={'20px'} />
            <Typography className={classes.text}>
              That aside, I am also using this project to implement and test technologies that I am interested in
              learning.
            </Typography>
          </>
        </ProjectCard>
      </CardSection>
    </div>
  );
};

export default Projects;
