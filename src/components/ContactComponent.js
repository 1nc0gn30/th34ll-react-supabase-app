import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/ContactComponent.css'; // Ensure this path is correct

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        alias: '',
        email: '',
        phoneNumber: '',
        message: '',
        role: '', // Contributor or Customer
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className="ContactComponent">
            <Helmet>
                <title>Contact Us - TH34LL</title>
                <meta name="description" content="Get in touch with us at TH34LL. Whether you are a contributor or a customer, we are here to assist you." />
                <meta name="keywords" content="contact, TH34LL, contributor, customer, tech support, education" />
                <meta name="author" content="Neal Frazier" />
                <meta property="og:title" content="Contact Us - TH34LL" />
                <meta property="og:description" content="Get in touch with us at TH34LL. Whether you are a contributor or a customer, we are here to assist you." />
                <meta property="og:url" content="https://th34ll.nealfrazier.tech/contact" />
                <meta property="og:type" content="website" />
            </Helmet>
            <img src="./TH3.png" alt="th3 4ll Logo" className="contactLogo" />
            <form name="contact" data-netlify="true" method="POST" className="contactForm-container">
                <input type="hidden" name="form-name" value="contact" />
                <input
                    type="text"
                    name="alias"
                    value={formData.alias}
                    onChange={handleChange}
                    placeholder="Alias"
                    className="contactForm-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="contactForm-input"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="contactForm-input"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="contactForm-textArea"
                    required
                />
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="contactForm-select"
                    required
                >
                    <option value="" disabled>Are you a Contributor or Customer?</option>
                    <option value="Contributor">Contributor</option>
                    <option value="Customer">Customer</option>
                </select>
                <button type="submit" className="contactForm-sendButton">Submit</button>
            </form>
        </div>
    );
};

export default ContactComponent;
