import React from 'react';
import './StoicPhilosophy.css'; // Assume this CSS is tailored for the component

function StoicPhilosophyComponent() {
  return (
    <div className="stoicism-learning-container">
      <h1>Exploring Stoic Philosophy</h1>
      <p>Embark on a journey through Stoic philosophy, understanding the wisdom of Marcus Aurelius, Seneca, Epictetus, and their timeless teachings on virtue, ethics, and the art of living.</p>
      
      <section className="introductions">
        <h2>Beginner's Guides</h2>
        <p>Begin your exploration of Stoic philosophy with these foundational texts and resources.</p>
        <ul>
          <li><a href="https://dailystoic.com/" target="_blank" rel="noopener noreferrer">Daily Stoic</a> - Offers daily wisdom on Stoicism, including insights, meditations, and practical applications.</li>
          <li><a href="https://howtobeastoic.wordpress.com/" target="_blank" rel="noopener noreferrer">How to Be a Stoic</a> - Explores Stoic philosophy and how it can be applied to modern life for better living.</li>
          <li><a href="https://www.theschooloflife.com/thebookoflife/the-great-philosophers-seneca/" target="_blank" rel="noopener noreferrer">The School of Life: Seneca</a> - A detailed overview of Seneca’s life and philosophical contributions.</li>
        </ul>
      </section>
      
      <section className="deep-dives">
        <h2>In-Depth Studies</h2>
        <p>Dive deeper into the core principles and teachings of Stoicism with these comprehensive studies and texts.</p>
        <ul>
          <li><a href="https://plato.stanford.edu/entries/stoicism/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia of Philosophy: Stoicism</a> - An in-depth academic overview of Stoic philosophy, its history, and key figures.</li>
          <li><a href="https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255" target="_blank" rel="noopener noreferrer">Meditations by Marcus Aurelius</a> - A new translation of the timeless Stoic text, offering insights into Aurelius' thoughts on life, virtue, and mindfulness.</li>
          <li><a href="https://www.amazon.com/Letters-Stoic-Penguin-Classics-Seneca/dp/0140442103" target="_blank" rel="noopener noreferrer">Letters from a Stoic by Seneca</a> - A collection of letters by Seneca, shedding light on Stoic philosophy through personal wisdom and advice.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h2>Key Resources and Communities</h2>
        <p>Connect with the Stoicism community and further your study through these platforms and resources.</p>
        <ul>
          <li><a href="https://www.stoicfellowship.com/" target="_blank" rel="noopener noreferrer">The Stoic Fellowship</a> - A global network of Stoicism enthusiasts and groups, promoting Stoic philosophy and community events.</li>
          <li><a href="https://modernstoicism.com/" target="_blank" rel="noopener noreferrer">Modern Stoicism</a> - Offers resources, courses, and articles to help integrate Stoic practices into the modern world.</li>
          <li><a href="https://www.reddit.com/r/Stoicism/" target="_blank" rel="noopener noreferrer">Reddit: r/Stoicism</a> - A subreddit dedicated to discussions on Stoic philosophy, practical Stoicism, and related literature.</li>
        </ul>
      </section>
    </div>
  );
}

export default StoicPhilosophyComponent;
