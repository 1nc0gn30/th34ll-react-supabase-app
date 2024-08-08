import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditUserProfile from './EditUserProfile';
import ViewUserProfile from './ViewUserProfile';
import { MatrixRainingLetters } from 'react-mdr';
import '../styles/UserWelcome.css'; // Ensure this CSS path is correct
import MatrixGlitch from './MatrixGlitch';
import learningRoutes from './learningRoutes';
import { supabase } from '../supabaseClient'; // Ensure this path is correctly imported
import CryptoText from './CryptoText';
import { Helmet } from 'react-helmet';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalBackdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
};

const modalContentStyle = (theme) => ({
  backgroundColor: '#000',
  color: '#0f0',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
});

const LearningOptionsModal = ({ onSelectOption, isVisible, learningRoutes, onClose }) => {
  const theme = useTheme();

  if (!isVisible) return null;

  const sortedKeys = Object.keys(learningRoutes).sort((a, b) =>
    learningRoutes[a].title.localeCompare(learningRoutes[b].title)
  );

  return (
    <div style={modalBackdropStyle}>
      <Helmet>
        <title>Welcome to TH34LL</title>
        <meta name="description" content="Welcome to your personalized dashboard on TH34LL. Adjust settings, view your profile, and explore various learning resources." />
        <meta name="keywords" content="TH34LL, user welcome, dashboard, profile, learning resources, tech education" />
        <meta name="author" content="Neal Frazier" />
        <meta property="og:title" content="Welcome to TH34LL" />
        <meta property="og:description" content="Welcome to your personalized dashboard on TH34LL. Adjust settings, view your profile, and explore various learning resources." />
        <meta property="og:url" content="https://th34ll.nealfrazier.tech/welcome" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div style={modalContentStyle(theme)}>
        <IconButton style={{ position: 'absolute', right: theme.spacing(1), top: theme.spacing(1), color: '#0f0' }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5">Learning Resources</Typography>
        <div>
          {sortedKeys.map((key) => (
            <Button
              key={key}
              variant="outlined"
              style={{ margin: theme.spacing(1), color: '#0f0', borderColor: '#0f0' }}
              onClick={() => onSelectOption(key)}
            >
              {learningRoutes[key].title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimeBasedGreeting = ({ name }) => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  return <Typography variant="h4">{greeting}, {name}!</Typography>;
};

const UserWelcome = ({ session }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [circuitHue, setCircuitHue] = useState(0);
  const [matrixRainActive, setMatrixRainActive] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showLearningOptions, setShowLearningOptions] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return;
      }

      setProfile(data);
    };

    fetchUserProfile();
  }, [session]);

  const adjustCircuitHue = () => setCircuitHue((prevHue) => (prevHue + 45) % 360);
  const toggleMatrixRain = () => setMatrixRainActive(!matrixRainActive);
  const toggleEditProfileVisibility = () => setShowEditProfile(!showEditProfile);
  const toggleLearningOptionsVisibility = () => setShowLearningOptions(!showLearningOptions);

  const handleSelectOption = (option) => {
    const path = learningRoutes[option]?.path || '/';
    navigate(path);
  };

  return (
    <div style={{ filter: `hue-rotate(${circuitHue}deg)`, minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#000', color: '#0f0' }}>
      <AppBar position="static" style={{ backgroundColor: '#000', color: '#0f0' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
         
          <div>
            <Button style={{ color: '#0f0', borderColor: '#0f0' }} onClick={adjustCircuitHue}>Adjust Hue</Button>
            <Button style={{ color: '#0f0', borderColor: '#0f0' }} onClick={toggleMatrixRain}>
              {matrixRainActive ? 'Hide Matrix Rain' : 'Show Matrix Rain'}
            </Button>
            <Button style={{ color: '#0f0', borderColor: '#0f0' }} onClick={toggleEditProfileVisibility}>
              {showEditProfile ? 'Hide Edit Profile' : 'Edit Profile'}
            </Button>
            <Button style={{ color: '#0f0', borderColor: '#0f0' }} onClick={toggleLearningOptionsVisibility}>
              {showLearningOptions ? 'Hide Learning Options' : 'Show Learning Options'}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {matrixRainActive && <MatrixRainingLetters />}
      <Container>
        <Box mt={3}>
          <TimeBasedGreeting name={profile ? profile.display_name : '(Edit Your Profile To Set Name...)'} />
        </Box>
        <Box mt={3}>
          {showEditProfile ? (
            <EditUserProfile session={session} />
          ) : (
            <ViewUserProfile session={session} isCurrentUser={true} />
          )}
        </Box>
      </Container>
      <LearningOptionsModal
        onSelectOption={handleSelectOption}
        isVisible={showLearningOptions}
        learningRoutes={learningRoutes}
        onClose={() => setShowLearningOptions(false)}
      />
      <MatrixGlitch />
      <CryptoText />
      <footer style={{ marginTop: 'auto', padding: theme.spacing(2), backgroundColor: '#000', color: '#0f0', textAlign: 'center' }}>
        <Typography variant="h6">Please contact us with feedback!</Typography>
      </footer>
    </div>
  );
};

export default UserWelcome;
