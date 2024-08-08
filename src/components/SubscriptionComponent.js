import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/SubscriptionComponent.css'; // Ensure this path is correct

const SubscriptionComponent = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="SubscriptionComponent">
            <Helmet>
                <title>Subscribe to TH3 4LL</title>
                <meta name="description" content="Subscribe to TH3 4LL's email list to stay updated with our newest drops and features. Don't miss out!" />
                <meta name="keywords" content="TH3 4LL, subscribe, email list, updates, features, tech community" />
                <meta name="author" content="Neal Frazier" />
                <meta property="og:title" content="Subscribe to TH3 4LL" />
                <meta property="og:description" content="Subscribe to TH3 4LL's email list to stay updated with our newest drops and features. Don't miss out!" />
                <meta property="og:url" content="https://th34ll.nealfrazier.tech/subscribe" />
                <meta property="og:type" content="website" />
            </Helmet>
            <img src="./TH3.png" alt="th3 4ll Logo" className="subscription-logo" />
            <div className="subscription-container">
                <p className="subscription-description">
                    Subscribe to TH3 4LL's email list to stay updated with our newest drops and features. Don't miss out!
                </p>
                <form className="subscription-form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="subscribe" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="subscription-input"
                        required
                    />
                    <button type="submit" className="subscription-button">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default SubscriptionComponent;
