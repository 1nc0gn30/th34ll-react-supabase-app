import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { styled } from '@mui/system';

const totalTime = 60; // Total game time in seconds (1 minute)

// Predefined list of words to be used in the game
const words = [
  'matrix', 'react', 'javascript', 'css', 'html', 'node', 'express', 'redux', 'material-ui', 'crypto',
  'algorithm', 'function', 'variable', 'constant', 'array', 'object', 'component', 'hook', 'context', 'props',
  'state', 'lifecycle', 'render', 'virtual', 'dom', 'jsx', 'typescript', 'json', 'api', 'frontend',
  'backend', 'fullstack', 'database', 'server', 'client', 'http', 'https', 'rest', 'graphql', 'typescript',
  'linux', 'windows', 'macos', 'terminal', 'command', 'shell', 'git', 'github', 'repository', 'commit'
];

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledWords = shuffleArray([...words]); // Shuffle words and store in a new array

const GameContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#0f0',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 10px #0f0',
  textAlign: 'center',
}));

const MatrixTypingGame = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
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
    if (value.trim() === shuffledWords[currentWordIndex]) {
      setUserPoints(userPoints + 1);
      setCurrentWordIndex(currentWordIndex + 1);
      setInputValue('');

      if (userPoints + 1 === shuffledWords.length) {
        alert('Congrats, you won the game!');
        setGameOver(true);
      }
    }
  };

  const restartGame = () => {
    setCurrentWordIndex(0);
    setUserPoints(0);
    setTimeLeft(totalTime);
    setInputValue('');
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <GameContainer>
        <Alert severity="info">Game Over! Your score: {userPoints}</Alert>
        <Typography variant="h6">{userPoints === shuffledWords.length ? 'Congrats, you won the game!' : 'Want to try again?'}</Typography>
        <Button variant="contained" color="primary" onClick={restartGame}>
          Restart Game
        </Button>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      <Typography variant="h4" gutterBottom>
        Matrix Typing Game
      </Typography>
      <Typography variant="h6" gutterBottom>
        Type the following word correctly:
      </Typography>
      <Typography variant="h5" gutterBottom>
        {shuffledWords[currentWordIndex]}
      </Typography>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        onPaste={(e) => e.preventDefault()}
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
};

export default MatrixTypingGame;
