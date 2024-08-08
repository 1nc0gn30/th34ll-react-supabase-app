import { useState } from 'react';
import { supabase } from './supabaseClient';

function Auth() {
    const [email, setEmail] = useState('');
    const handleLogin = async (email) => {
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) console.error('Error signing in:', error.message);
    };

    return (
        <div>
            <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => handleLogin(email)}>Send magic link</button>
        </div>
    );
}

export default Auth;