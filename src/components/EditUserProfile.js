import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/EditUserProfile.css';

const EditUserProfile = ({ session }) => {
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');


   const isValidTwitterUrl = (url) => {
    return /^https:\/\/twitter\.com\/[a-zA-Z0-9_]{1,15}$/.test(url);
  };

  const isValidGithubUrl = (url) => {
    return /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/.test(url);
  };

  const isValidLinkedInUrl = (url) => {
    return /^https:\/\/linkedin\.com\/in\/[a-zA-Z0-9_-]+$/.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updates = {
      user_id: session.user.id, // Assumes you have user ID in the session object
      updated_at: new Date(),
    };
  
    // Only add properties to the updates object if they have a value
    if (displayName) updates.display_name = displayName;
    if (bio) updates.bio = bio;
    if (avatarUrl) updates.avatar_url = avatarUrl;
     // Validation checks
     if (twitter && !isValidTwitterUrl(twitter)) {
      alert("Please enter a valid Twitter URL, e.g., https://twitter.com/username");
      return;
    }
    if (github && !isValidGithubUrl(github)) {
      alert("Please enter a valid GitHub URL, e.g., https://github.com/username");
      return;
    }
    if (linkedin && !isValidLinkedInUrl(linkedin)) {
      alert("Please enter a valid LinkedIn URL, e.g., https://linkedin.com/in/username");
      return;
    }

    if (twitter) updates.social_twitter = twitter;
    if (github) updates.social_github = github;
    if (linkedin) updates.social_linkedin = linkedin;
  
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert(updates, { onConflict: 'user_id' });
  
    if (error) {
      console.error('Error updating profile:', error);
    } else {
      console.log('Profile updated:', data);
      // Optionally, inform the user of success
      window.location.reload();
    }
  };
  

  return (
    <div className="edit-user-profile">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="X Handle"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <input
        type="text"
        placeholder="GitHub Username"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />
      <input
        type="text"
        placeholder="LinkedIn Profile"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <button type="submit">Update Profile</button>
    </form>
    </div>
  );
};

export default EditUserProfile;
