import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Game from './games/Game';
import MatrixTypingGame from './games/MatrixTypingGame';
import WhackAMole from './games/WhackAMole';

const ComingSoonContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#0f0',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 10px #0f0',
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const EducationComingSoon = () => {
  return (
    <ComingSoonContainer>
      <Helmet>
        <title>Education Section Coming Soon - TH34LL</title>
        <meta name="description" content="Stay tuned for quizzes, tests, study guides, and much more to help you learn and grow. Enjoy our new Typing Game in the meantime!" />
        <meta name="keywords" content="education, learning, quizzes, tests, study guides, TH34LL, tech education, typing game" />
        <meta name="author" content="Neal Frazier" />
        <meta property="og:title" content="Education Section Coming Soon - TH34LL" />
        <meta property="og:description" content="Stay tuned for quizzes, tests, study guides, and much more to help you learn and grow. Enjoy our new Typing Game in the meantime!" />
        <meta property="og:url" content="https://th34ll.nealfrazier.tech/educate" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Typography variant="h2" gutterBottom>
        Education Section
      </Typography>
      <Typography variant="h6" gutterBottom>
        Stay tuned for quizzes, tests, study guides, and much more to help you learn and grow.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Enjoy our new Component Typing Game below! Can you type all 50 in time????
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={12}>
          <Box mt={4}>
            <Game />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Was that too difficult?? Try this one out!
          </Typography>
          <Box mt={4}>
            <MatrixTypingGame />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Can You Whack The Mole??
          </Typography>
          <Box mt={4}>
            <WhackAMole />
          </Box>
        </Grid>
      </Grid>
      {/* You can add a subscription form or a "Notify Me" button here */}
    </ComingSoonContainer>
  );
};

export default EducationComingSoon;
