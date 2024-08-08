import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';

function Navbar() {
    const [session, setSession] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error.message);
        } else {
            navigate('/'); 
        }
    };

    const navigateTo = (path) => {
        setIsDrawerOpen(false);
        navigate(path);
    };

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'Chat', path: '/chat' },
        { text: 'Members', path: '/members' },
        { text: 'Contribute', path: '/contribute' },
        { text: 'Education', path: '/educate' },
        { text: 'Study Room', path: '/studyroom' },
        { text: 'Tools', path: '/tools' },
        { text: 'Subscribe', path: '/subscribe' },
        { text: 'Contact', path: '/contact' },
        { text: 'Sign Out', action: handleSignOut },
    ];

    return (
        <div>
            <AppBar position="fixed" sx={{ backgroundColor: '#121212', color: 'limegreen' }}>
                <Toolbar>
                    <Typography 
                        variant="h6" 
                        sx={{ flexGrow: 1, cursor: 'pointer' }} 
                        onClick={() => navigateTo('/')}
                    >
                        TH<g>3</g> <g>4</g>LL
                    </Typography>
                    {session && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#121212',
                        color: 'limegreen',
                        fontFamily: "'Niconne', cursive",
                        animation: 'slideIn 0.5s ease-in-out',
                    },
                }}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem 
                            button 
                            key={index} 
                            onClick={() => item.path ? navigateTo(item.path) : item.action()}
                        >
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

export default Navbar;
