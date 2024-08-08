import React, { useState } from 'react';
import '../styles/ContributionComponent.css'; // Ensure this path is correct
import { Helmet } from 'react-helmet';

const ContributionComponent = () => {
    const [contributionInfo, setContributionInfo] = useState({
        name: '',
        email: '',
        contributionType: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContributionInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }));
    };

 

    return (
        
        <div className="ContributeComponent">
            <Helmet>
  <title>Support TH3 4LL - Contribute</title>
  <meta name="description" content="Support TH3 4LL by donating through PayPal or providing resources. Your contributions help us grow and provide valuable educational resources." />
  <meta name="keywords" content="support, contribute, donation, resources, TH3 4LL, tech education, PayPal fundraiser" />
  <meta name="author" content="Neal Frazier" />
  <meta property="og:title" content="Support TH3 4LL - Contribute" />
  <meta property="og:description" content="Support TH3 4LL by donating through PayPal or providing resources. Your contributions help us grow and provide valuable educational resources." />
  <meta property="og:url" content="https://th34ll.nealfrazier.tech/contribute" />
  <meta property="og:type" content="website" />
</Helmet>
            <img src="./TH3.png" alt="th3 4ll Logo" className="contribute-logo" />
       
        <div className="contribution-container">
            <h2>Support TH3 4LL</h2>
            <p>If you'd like to support us financially, please consider donating through our PayPal fundraiser:</p>
            <a href="https://www.paypal.com/pools/c/92ubh2R37o" target="_blank" rel="noopener noreferrer" className="paypal-link">Donate via PayPal</a>
            <p>Or, if you want to contribute in other ways, such as providing resources, please fill out the form below:</p>
            <form className="contribution-form" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contribution-form" />
                <input
                    type="text"
                    name="name"
                    value={contributionInfo.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="contribution-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={contributionInfo.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="contribution-input"
                    required
                />
                <input
                    type="text"
                    name="contributionType"
                    value={contributionInfo.contributionType}
                    onChange={handleChange}
                    placeholder="Type of Contribution"
                    className="contribution-input"
                />
                <textarea
                    name="message"
                    value={contributionInfo.message}
                    onChange={handleChange}
                    placeholder="Message (Optional)"
                    className="contribution-textArea"
                />
                <button type="submit" className="contribution-button">Submit Contribution</button>
            </form>
        </div>
        </div>
    );
};

export default ContributionComponent;
