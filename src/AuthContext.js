// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Simulate checking for an existing session
        const session = localStorage.getItem('session');
        if (session) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => {
        // Simulate an anonymous login by generating a unique session ID
        const sessionId = Date.now(); // Simplified example; consider a more unique/secure ID
        localStorage.setItem('session', sessionId);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('session');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
