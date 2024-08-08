import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/MembersStyle.css';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const navigateToSocial = (url) => {
  if (!url) return;
  window.open(url, '_blank');
};

const MemberCard = ({ profile }) => (
  <div className="view-user-profile">
    <h2>{profile.display_name || 'No display name'}</h2>
    <img src={profile.avatar_url || 'TH3.png'} alt="Avatar" />
    <p>Bio: {profile.bio || 'No bio available'}</p>
    <div className="profile-socials">
    {profile.social_twitter && <FaTwitter className="social-icon" onClick={() => navigateToSocial(profile.social_twitter)} />}
          {profile.social_github && <FaGithub className="social-icon" onClick={() => navigateToSocial(profile.social_github)} />}
          {profile.social_linkedin && <FaLinkedin className="social-icon" onClick={() => navigateToSocial(profile.social_linkedin)} />}
          </div>
  </div>
);

const MembersPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*');

      if (error) {
        console.error('Error fetching profiles:', error);
        return;
      }

      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="MembersComponent">
      <Helmet>
  <title>TH3 4LL Members</title>
  <meta name="description" content="Meet the members of TH3 4LL community. View profiles, bios, and connect with them on social media platforms like Twitter, GitHub, and LinkedIn." />
  <meta name="keywords" content="TH3 4LL members, community, profiles, social media, tech community, networking, Twitter, GitHub, LinkedIn" />
  <meta name="author" content="Neal Frazier" />
  <meta property="og:title" content="TH3 4LL Members" />
  <meta property="og:description" content="Meet the members of TH3 4LL community. View profiles, bios, and connect with them on social media platforms like Twitter, GitHub, and LinkedIn." />
  <meta property="og:url" content="https://th34ll.nealfrazier.tech/members" />
  <meta property="og:type" content="website" />
</Helmet>
      <img src="/TH3.png" alt="th34ll.com Logo" className="logo" />  
    <div className="members-page">
      {profiles.map(profile => (
        <MemberCard key={profile.id} profile={profile} />
      ))}
    </div>
    </div>
  );
};

export default MembersPage;
