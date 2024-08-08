import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient'; // Ensure this path is correct
import '../styles/ChatRoom.css';
import { Helmet } from 'react-helmet';

const ChatRoom = ({ session }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const bottomListRef = useRef(null);

    useEffect(() => {
        async function fetchMessages() {
            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .order('created_at', { ascending: true });
            if (error) {
                console.error('Error fetching messages:', error);
            } else {
                setMessages(data);
            }
        }

        fetchMessages();

        // Setup real-time subscription
        const messageChannel = supabase
            .channel('realtime:public:messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
                setMessages(prevMessages => [...prevMessages, payload.new]);
            })
            .subscribe();

        // Cleanup function to unsubscribe from the channel when the component unmounts
        return () => {
            supabase.removeChannel(messageChannel);
        };
    }, []);

    const handleSend = async () => {
        if (!newMessage.trim()) return;

        const { error } = await supabase.from('messages').insert({
            user_id: session.user.id, // Assuming your messages table has a user_id column
            username: session.user.user_metadata.name || session.user.user_metadata.full_name || session.user.user_metadata.user_name || 'Anonymous', // Use session metadata for username
            avatar_url: session.user.user_metadata.avatar_url, // Use session metadata for avatar URL
            text: newMessage,
        });

        if (error) {
            console.error('Error sending message:', error);
        } else {
            setNewMessage('');
        }
    };

    useEffect(() => {
        bottomListRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="ChatRoomComponent">
            <Helmet>
  <title>TH3 4LL Chat Room</title>
  <meta name="description" content="Join the TH3 4LL community chat room. Connect with other members, share knowledge, and engage in discussions about technology and learning." />
  <meta name="keywords" content="TH3 4LL chat, community chat, tech discussions, technology, learning, community, real-time chat" />
  <meta name="author" content="Neal Frazier" />
  <meta property="og:title" content="TH3 4LL Chat Room" />
  <meta property="og:description" content="Join the TH3 4LL community chat room. Connect with other members, share knowledge, and engage in discussions about technology and learning." />
  <meta property="og:url" content="https://th34ll.nealfrazier.tech/chat" />
  <meta property="og:type" content="website" />
</Helmet>
             <img src="/TH3.png" alt="th34ll.com Logo" className="logo" />
        <div className="chatRoom-container">
            
            <div className="chatRoom-messagesList">
                {messages.map((message, index) => (
                    <div key={index} className="chatRoom-message">
                        {message.avatar_url && (
                            <img src={message.avatar_url} alt="Avatar" className="chatRoom-messageAvatar" />
                        )}
                        <strong className="chatRoom-username">{message.username}:</strong> {message.text}
                    </div>
                ))}
                <div ref={bottomListRef} />
            </div>
            <div className="chatRoom-messageInput">
                <input
                className="chatRoom-input"
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="chatRoom-sendButton" onClick={handleSend}>Send</button>
            </div>
            </div>
        </div>
    );
};

export default ChatRoom;
