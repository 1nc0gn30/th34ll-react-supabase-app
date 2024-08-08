import React from 'react';
import './CybersecurityLearning.css'; // Ensure CSS is ready for styling this component

function CybersecurityLearning() {
  return (
    <div className="cybersecurity-learning-container">
      <h1>Cybersecurity Learning Path</h1>
      <p>This guide offers a comprehensive pathway for beginners and advanced learners to understand and master cybersecurity, focusing on social engineering, penetration testing, and more.</p>
      
      <section className="tutorials">
        <h2>Foundational to Advanced Tutorials</h2>
        <p>Begin your cybersecurity journey with these curated tutorials and courses.</p>
        <ul>
          <li><a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer">Cybrary</a> - A wide range of cybersecurity courses covering everything from basic concepts to advanced penetration testing.</li>
          <li><a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer">TryHackMe</a> - Learn cybersecurity through short, gamified real-world labs. Great for beginners and pros alike.</li>
          <li><a href="https://www.hackthebox.eu/" target="_blank" rel="noopener noreferrer">Hack The Box</a> - An online platform to test and advance your skills in penetration testing and cybersecurity.</li>
          <li><a href="https://www.social-engineer.org/" target="_blank" rel="noopener noreferrer">Social-Engineer.Org</a> - Offers resources and training on the art of human hacking (social engineering).</li>
        </ul>
      </section>
      
      <section className="interactive-platforms">
        <h2>Interactive Platforms and Pwnboxes</h2>
        <p>Practice your skills with these interactive environments designed for learning and testing cybersecurity techniques.</p>
        <ul>
          <li><a href="https://www.pentesterlab.com/" target="_blank" rel="noopener noreferrer">PentesterLab</a> - Learn web hacking and penetration testing through hands-on exercises.</li>
          <li><a href="https://www.overthewire.org/" target="_blank" rel="noopener noreferrer">OverTheWire</a> - Practice your hacking skills through fun and challenging games.</li>
          <li><a href="https://www.vulnhub.com/" target="_blank" rel="noopener noreferrer">VulnHub</a> - Provides materials allowing anyone to gain practical hands-on experience with digital security, computer applications, and network administration tasks.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h2>Key Resources and Communities</h2>
        <p>Explore these resources for in-depth knowledge and connect with the cybersecurity community.</p>
        <ul>
          <li><a href="https://krebsonsecurity.com/" target="_blank" rel="noopener noreferrer">Krebs on Security</a> - In-depth security news and investigation.</li>
          <li><a href="https://www.schneier.com/" target="_blank" rel="noopener noreferrer">Schneier on Security</a> - A blog by Bruce Schneier covering security and security technology.</li>
          <li><a href="https://www.reddit.com/r/netsec/" target="_blank" rel="noopener noreferrer">/r/netsec - Reddit</a> - A community of professionals and enthusiasts sharing and discussing the latest in cybersecurity.</li>
          <li><a href="https://www.ted.com/topics/cybersecurity" target="_blank" rel="noopener noreferrer">TED Talks on Cybersecurity</a> - Engaging talks by experts on various cybersecurity topics.</li>
        </ul>
      </section>
    </div>
  );
}

export default CybersecurityLearning;
