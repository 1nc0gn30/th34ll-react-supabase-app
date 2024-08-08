import React, { useState, useEffect } from 'react';
import gameComponents from '../../data/gameComponents'; // Adjust the path as necessary
import { Container, Typography, Button, TextField, Box, Alert } from '@mui/material';
import { styled } from '@mui/system';

const totalTime = 120; // Total game time in seconds (2 minutes)

const GameContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#0f0',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 10px #0f0',
  textAlign: 'center',
  width: '90vw',
  marginBottom: '30px',
}));

const CodeBlock = styled('pre')(({ theme }) => ({
  backgroundColor: '#111',
  color: '#0f0',
  wordWrap: 'break-word',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'left',
  overflowX: 'auto',
  height: '20vh',
}));

function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userPoints, setUserPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [inputValue, setInputValue] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }
    if (!gameOver) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timeLeft, gameOver]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === gameComponents[currentIndex].code.trim()) {
      setUserPoints(userPoints + 1);
      setCurrentIndex(currentIndex + 1);
      setInputValue('');
      setTimeLeft(totalTime); // Reset timer for the next component

      if (userPoints + 1 === 50) {
        alert('Congrats, you won the game!');
        setGameOver(true);
      }
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setUserPoints(0);
    setTimeLeft(totalTime);
    setInputValue('');
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <GameContainer>
        <Alert severity="info">Game Over! Your score: {userPoints}</Alert>
        <Typography variant="h6">{userPoints === 50 ? 'Congrats, you won the game!' : 'Want to try again?'}</Typography>
        <Button variant="contained" color="primary" onClick={restartGame}>
          Restart Game
        </Button>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      <Typography variant="h4" gutterBottom>
        MUI X Typing Game
      </Typography>
      <Typography variant="h6" gutterBottom>
        Type the following component correctly:
      </Typography>
      <CodeBlock>{gameComponents[currentIndex].code}</CodeBlock>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        onPaste={(e) => e.preventDefault()}
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        InputProps={{
          style: { color: '#0f0' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#0f0',
            },
            '&:hover fieldset': {
              borderColor: '#0f0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0f0',
            },
          },
        }}
      />
      <Box mt={2}>
        <Typography variant="h6">Time left: {timeLeft} seconds</Typography>
        <Typography variant="h6">Points: {userPoints}</Typography>
      </Box>
    </GameContainer>
  );
}

export default Game;
