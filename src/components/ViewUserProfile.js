import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from './TH3-black.png'; // Ensure logo path is correct
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing social icons
import { Box, Avatar, Typography, IconButton, Container, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#0f0',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 10px #0f0',
  marginBottom: 20,
}));

const ProfileHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
});

const ProfileInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const ProfileSocials = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
  '& .social-icon': {
    color: '#0f0',
    margin: '0 auto',
    cursor: 'pointer',
  },
});

const ViewUserProfile = ({ session, onEdit }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile(data);
    };

    fetchProfile();
  }, [session.user.id]);

  if (!profile) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#0f0' }}>
        <CircularProgress style={{ color: '#0f0' }} />
        <Typography variant="h6" style={{ marginLeft: 20 }}>
          (Start By Editing Your Profile)...
        </Typography>
      </Container>
    );
  }

  // Navigate to social media links
  const navigateToSocial = (url) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileHeader>
          <Typography variant="h4">TH34LL</Typography>
        </ProfileHeader>
        <ProfileInfo>
          <Avatar src={profile.avatar_url || logo} alt="Avatar" sx={{ width: 100, height: 100, marginBottom: 2 }} />
          <Typography variant="h5">{profile.display_name || 'No display name'}</Typography>
          <Typography variant="body1">{profile.bio || 'No bio available'}</Typography>
          <ProfileSocials>
            {profile.social_twitter && <IconButton onClick={() => navigateToSocial(profile.social_twitter)}><FaTwitter className="social-icon" /></IconButton>}
            {profile.social_github && <IconButton onClick={() => navigateToSocial(profile.social_github)}><FaGithub className="social-icon" /></IconButton>}
            {profile.social_linkedin && <IconButton onClick={() => navigateToSocial(profile.social_linkedin)}><FaLinkedin className="social-icon" /></IconButton>}
          </ProfileSocials>
        </ProfileInfo>
      </ProfileContainer>
    </Container>
  );
};

export default ViewUserProfile;
