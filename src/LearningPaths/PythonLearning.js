import React from 'react';
import './PythonLearning.css'; // Ensure this CSS file is structured similarly to JavaScriptLearning.css for consistency

function PythonLearning() {
  return (
    <div className="python-learning-container">
      <h1>Comprehensive Guide to Python</h1>
      <p>This guide is tailored to provide a complete learning journey for Python enthusiasts of all levels. From foundational concepts to advanced topics, discover the best resources to enhance your Python skills.</p>
      
      <section className="tutorials">
        <h2>From Beginner to Advanced Tutorials</h2>
        <p>Embark on your Python adventure with these handpicked tutorials that cater to all skill levels.</p>
        <ul>
          <li><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer">Python Official Documentation</a> - Start your Python journey with the official tutorial that covers basic to advanced topics.</li>
          <li><a href="https://www.learnpython.org/" target="_blank" rel="noopener noreferrer">LearnPython.org</a> - Interactive Python tutorials that allow you to write Python code directly in your browser.</li>
          <li><a href="https://realpython.com/" target="_blank" rel="noopener noreferrer">Real Python</a> - Offers comprehensive tutorials, articles, and exercises for Python developers of all levels.</li>
          <li><a href="https://www.udemy.com/topic/python/" target="_blank" rel="noopener noreferrer">Udemy Python Courses</a> - Find a wide range of Python courses tailored to different expertise levels, from beginners to advanced programmers.</li>
          <li><a href="https://www.coursera.org/courses?query=python" target="_blank" rel="noopener noreferrer">Coursera Python Courses</a> - Learn Python with courses from top universities and institutions.</li>
        </ul>
      </section>
      
      <section className="interactive-examples">
        <h2>Interactive Learning and Practice</h2>
        <p>Sharpen your Python skills with these platforms offering interactive coding experiences.</p>
        <ul>
          <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-python" target="_blank" rel="noopener noreferrer">HackerRank Python</a> - Practice Python coding with challenges and tutorials on HackerRank.</li>
          <li><a href="https://www.codewars.com/?language=python" target="_blank" rel="noopener noreferrer">CodeWars Python</a> - Enhance your Python skills by solving fun coding challenges and kata.</li>
          <li><a href="https://leetcode.com/problemset/all/?search=python" target="_blank" rel="noopener noreferrer">LeetCode Python</a> - Solve Python coding problems and prepare for technical interviews with LeetCode.</li>
          <li><a href="https://www.checkio.org/" target="_blank" rel="noopener noreferrer">CheckiO</a> - Join a gamified coding platform where you can improve your Python skills by solving puzzles and challenges.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h2>Advanced Learning Resources</h2>
        <p>Dive deeper into Python with these resources, including documentation, in-depth articles, and community discussions.</p>
        <ul>
          <li><a href="https://peps.python.org/" target="_blank" rel="noopener noreferrer">Python Enhancement Proposals (PEPs)</a> - Understand the future direction of Python by exploring PEPs, which discuss new features and improvements.</li>
          <li><a href="https://pycon.org/" target="_blank" rel="noopener noreferrer">PyCon</a> - Attend the largest annual gathering for the Python community, offering talks, tutorials, and sprints.</li>
          <li><a href="https://www.fullstackpython.com/" target="_blank" rel="noopener noreferrer">Full Stack Python</a> - An open book that explains Python concepts, web development with Python, and deployment scenarios.</li>
          <li><a href="https://pythonweekly.com/" target="_blank" rel="noopener noreferrer">Python Weekly</a> - A free, weekly newsletter featuring curated news, articles, new releases, jobs, and more related to Python.</li>
        </ul>
      </section>
    </div>
  );
}

export default PythonLearning;
