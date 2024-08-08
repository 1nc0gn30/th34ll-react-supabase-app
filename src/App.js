import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppRoutes from './AppRoutes';
import theme from './theme';

// Global error handling for ResizeObserver loop error
if (typeof window !== 'undefined' && typeof window.ResizeObserver !== 'undefined') {
  const resizeObserverErrHandler = (e) => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
      e.stopImmediatePropagation();
    }
  };
  window.addEventListener('error', resizeObserverErrHandler);
  window.addEventListener('unhandledrejection', resizeObserverErrHandler);
}

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Unsubscribe on cleanup
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Router>
          <div className="App">
            <Navbar />
            <ScrollToTop />
            <AppRoutes session={session} />
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
