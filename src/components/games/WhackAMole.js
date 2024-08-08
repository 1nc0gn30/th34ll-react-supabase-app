import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const GameContainer = styled(Container)(({ theme }) => ({
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

const MoleHole = styled(Box)(({ theme, active }) => ({
  width: 100,
  height: 100,
  backgroundColor: active ? '#0f0' : '#555',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: active ? 'pointer' : 'default',
}));

const WhackAMole = () => {
  const [holes, setHoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!gameOver) {
      intervalRef.current = setInterval(() => {
        const newHoles = Array(9).fill(false);
        newHoles[Math.floor(Math.random() * 9)] = true;
        setHoles(newHoles);
      }, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameOver]);

  const handleWhack = (index) => {
    if (holes[index]) {
      setScore(score + 1);
      const newHoles = [...holes];
      newHoles[index] = false;
      setHoles(newHoles);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
  };

  return (
    <GameContainer>
      <Typography variant="h4" gutterBottom>
        Whack-a-Mole
      </Typography>
      <Typography variant="h6" gutterBottom>
        Score: {score}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Time Left: {timeLeft}s
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {holes.map((active, index) => (
          <Grid item key={index}>
            <MoleHole active={active} onClick={() => handleWhack(index)}>
              {active ? '🐹' : ''}
            </MoleHole>
          </Grid>
        ))}
      </Grid>
      {gameOver && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Game Over! Your score: {score}
          </Typography>
          <Button variant="contained" color="primary" onClick={restartGame}>
            Restart Game
          </Button>
        </Box>
      )}
    </GameContainer>
  );
};

export default WhackAMole;
