import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/SignIn.module.css';
import RotatingQuotes from './RotatingQuotes';

// Form input component for reuse
const FormInput = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={styles.inputField}
    aria-label={placeholder}
  />
);

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleOAuthSignIn = async (provider) => {
        setIsLoading(true); // Start loading
        const { error } = await supabase.auth.signInWithOAuth({ provider });
        if (error) {
            console.error("Error:", error.message);
            alert(error.message); // Provide user feedback
        }
        setIsLoading(false); // End loading
    };

    const handleAuth = async () => {
        setIsLoading(true); // Start loading
        const method = isSignUp ? 'signUp' : 'signInWithPassword';
        const { error } = await supabase.auth[method]({ email, password });
        
        if (error) {
            console.error("Error:", error.message);
            alert(error.message); // Provide user feedback
        }
        setIsLoading(false); // End loading
    };

    return (
        <>
            <div className={styles.container}>
                <img src="/TH3.png" alt="th34ll.com Logo" className={styles.logo} />
                <div className="quote-container">
                <RotatingQuotes />
                </div>
                <div className={styles.textBlock}>
                    <p>Embark on a learning journey that's as dynamic as your lifestyle. Our platform isn't just a learning resource; it's an all-in-one open-source toolkit designed for the curious, the ambitious, and everyone in between. From tech to creativity, dive into customizable modules that fit your pace and spark your growth. Ready to explore, learn, and contribute? Your next chapter starts here. Join us today!</p>
                </div>
                
                <div className={styles.authForm}>
                    <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleAuth} className={styles.signInButton} disabled={isLoading}>
                        {isLoading ? 'Processing...' : isSignUp ? 'Sign up' : 'Sign in'}
                    </button>
                    <button onClick={() => setIsSignUp(!isSignUp)} className={styles.switchAuthModeButton}>
                        {isSignUp ? 'Already have an account? Sign in' : 'Don’t have an account? Sign up'}
                    </button>
                </div>
                <FontAwesomeIcon icon={faGithub} size="3x" className={styles.icon} />
                <button onClick={() => handleOAuthSignIn('github')} className={styles.signInButton} disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Sign in/Sign Up with GitHub'}
                </button>
                <div className="sign-in-text">
                    <p className={styles.signInParagraph}>
                        Sign In/Sign Up With Email. Note: Using email and password sign-in/sign-up you will be claimed as anonymous in our system but will be able to create a custom profile card accordingly.
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignIn;
