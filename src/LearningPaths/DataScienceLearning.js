import React from 'react';
import './DataScienceLearning.css'; // Ensure you create this CSS file

function DataScienceLearning() {
  return (
    <div className="data-science-learning-container">
      <h1>Data Science Learning Path</h1>
      <p>This guide outlines a comprehensive pathway for beginners to experts in data science, covering statistics, machine learning, data visualization, and more.</p>
      
      <section className="tutorials">
        <h2>Beginner to Expert Tutorials</h2>
        <p>Start your data science journey with these handpicked tutorials and courses.</p>
        <ul>
          <li><a href="https://www.coursera.org/specializations/jhu-data-science" target="_blank" rel="noopener noreferrer">John Hopkins University Data Science Specialization</a> - Comprehensive courses covering the data science spectrum on Coursera.</li>
          <li><a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer">Kaggle Learn</a> - Practical data science courses and competitions to apply your skills.</li>
          <li><a href="https://www.edx.org/learn/data-science" target="_blank" rel="noopener noreferrer">edX Data Science</a> - A variety of courses from foundational to advanced topics in data science.</li>
          <li><a href="https://datacamp.com/" target="_blank" rel="noopener noreferrer">DataCamp</a> - Interactive learning platform for data science and analytics.</li>
        </ul>
      </section>
      
      <section className="interactive-platforms">
        <h2>Interactive Platforms for Practice</h2>
        <p>Enhance your data science skills with these platforms offering hands-on experience.</p>
        <ul>
          <li><a href="https://databricks.com/" target="_blank" rel="noopener noreferrer">Databricks</a> - Unified platform for massive-scale data engineering and collaborative data science.</li>
          <li><a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">Google Colab</a> - Write and execute Python in your browser with zero configuration.</li>
          <li><a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Project Jupyter</a> - Open-source software for interactive computing across dozens of programming languages.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h2>Essential Resources and Communities</h2>
        <p>Dive deeper into data science with these resources and join the community for the latest trends.</p>
        <ul>
          <li><a href="https://towardsdatascience.com/" target="_blank" rel="noopener noreferrer">Towards Data Science</a> - Medium publication sharing concepts, ideas, and codes.</li>
          <li><a href="https://www.datasciencecentral.com/" target="_blank" rel="noopener noreferrer">Data Science Central</a> - A community for data science practitioners.</li>
          <li><a href="https://www.oreilly.com/data/" target="_blank" rel="noopener noreferrer">O'Reilly Data</a> - Books, articles, and other resources on data science.</li>
          <li><a href="https://www.reddit.com/r/datascience/" target="_blank" rel="noopener noreferrer">/r/datascience - Reddit</a> - A subreddit for data science news, questions, and resources.</li>
        </ul>
      </section>
    </div>
  );
}

export default DataScienceLearning;
