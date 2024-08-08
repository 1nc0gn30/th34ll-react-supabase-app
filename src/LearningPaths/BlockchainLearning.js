// BlockchainLearning.js
import React from 'react';
import './BlockchainLearning.css'; // Make sure to create this CSS file

function BlockchainLearning() {
  return (
    <div className="blockchain-learning-container">
      <h1>Blockchain and Cryptocurrency Learning Path</h1>
      <p>Explore the world of blockchain technology and cryptocurrencies with this curated guide designed for learners at all levels.</p>
      
      <section className="tutorials">
        <h2>Comprehensive Tutorials</h2>
        <p>Dive into these resources to start your journey into blockchain and cryptocurrency.</p>
        <ul>
          <li><a href="https://www.blockchain.com/learning-portal/how-to-get-started" target="_blank" rel="noopener noreferrer">Blockchain.com's Learning Portal</a> - A great starting point for blockchain basics.</li>
          <li><a href="https://cryptozombies.io/" target="_blank" rel="noopener noreferrer">CryptoZombies</a> - Learn to code blockchain DApps by building your game.</li>
          <li><a href="https://www.coursera.org/specializations/blockchain" target="_blank" rel="noopener noreferrer">Blockchain Specialization on Coursera</a> - A series of courses that help you to understand blockchain technology and how to build blockchain-based applications for businesses.</li>
          <li><a href="https://consensys.net/academy/" target="_blank" rel="noopener noreferrer">ConsenSys Academy</a> - The educational core of the Ethereum movement, offering a comprehensive online blockchain developer course.</li>
        </ul>
      </section>
      
      <section className="interactive-platforms">
        <h2>Interactive Learning Platforms</h2>
        <p>Sharpen your skills with practical experience on these interactive platforms.</p>
        <ul>
          <li><a href="https://www.ethernaut.openzeppelin.com/" target="_blank" rel="noopener noreferrer">Ethernaut by OpenZeppelin</a> - A Web3/Solidity based war game inspired on hackable contracts.</li>
          <li><a href="https://app.ivanontech.com/" target="_blank" rel="noopener noreferrer">Ivan on Tech Academy</a> - Offers courses on blockchain, cryptocurrency, and programming.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h2>Essential Resources</h2>
        <p>Further your knowledge and stay up to date with these essential resources.</p>
        <ul>
          <li><a href="https://www.coindesk.com/" target="_blank" rel="noopener noreferrer">CoinDesk</a> - Leading news site specializing in bitcoin and digital currencies.</li>
          <li><a href="https://cointelegraph.com/" target="_blank" rel="noopener noreferrer">CoinTelegraph</a> - A major publication covering cryptocurrency, blockchain, and fintech news.</li>
        </ul>
      </section>
    </div>
  );
}

export default BlockchainLearning;
