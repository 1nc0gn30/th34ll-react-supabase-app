import React from 'react';
import './JavaScriptLearning.css'; // Make sure this CSS file is well-structured to accommodate the changes

function JavaScriptLearning() {
  return (
    <div className="js-learning-container">
      <h1>Comprehensive Guide to JavaScript and React</h1>
      <p>This guide is designed to offer a comprehensive learning path for both beginners and seasoned developers looking to enhance their skills in JavaScript and React.</p>
      
      <section className="tutorials">
        <h2>Beginner to Advanced Tutorials</h2>
        <p>Dive into JavaScript and React with these structured tutorials, ranging from basics to advanced concepts.</p>
        <ul>
          <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">The Modern JavaScript Tutorial</a> - An exhaustive guide covering all aspects of JavaScript, from basics to advanced topics.</li>
          <li><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">React Official Tutorial</a> - A great starting point to understand the fundamentals of React by building a tic-tac-toe game.</li>
          <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> - Offers thousands of coding lessons to help you improve your coding skills, including JavaScript and React.</li>
          <li><a href="https://egghead.io/q/javascript" target="_blank" rel="noopener noreferrer">Egghead.io JavaScript Courses</a> - Short, informative video tutorials on JavaScript and React for developers of all skill levels.</li>
          <li><a href="https://frontendmasters.com/" target="_blank" rel="noopener noreferrer">Frontend Masters</a> - Advanced courses on JavaScript frameworks, including in-depth React training from industry experts.</li>
        </ul>
      </section>
      
      <section className="interactive-examples">
        <h2>Interactive Learning and Practice</h2>
        <p>Enhance your coding skills with these interactive platforms offering real coding environments.</p>
        <ul>
          <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">CodePen</a> - A social development environment for front-end designers and developers. It's great for testing out JavaScript, React, and other frontend snippets.</li>
          <li><a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">JSFiddle</a> - Test your JavaScript, CSS, HTML, and React code right in your browser.</li>
          <li><a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">CodeSandbox</a> - An online IDE for web development, perfect for building and sharing React projects.</li>
          <li><a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">CodeWars</a> - Practice JavaScript and React by solving challenges written by the community.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h2>Advanced Learning Resources</h2>
        <p>Deepen your knowledge with these resources, including documentation, articles, and community discussions.</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN Web Docs: JavaScript</a> - A comprehensive resource for developers, covering everything from basics to advanced concepts in JavaScript.</li>
          <li><a href="https://react.dev/reference/react" target="_blank" rel="noopener noreferrer">React Documentation</a> - The official React documentation, providing in-depth explanations of React concepts and APIs.</li>
          <li><a href="https://overreacted.io/" target="_blank" rel="noopener noreferrer">Overreacted</a> - A blog by Dan Abramov, one of React's core team members, with insightful articles on React and JavaScript.</li>
          <li><a href="https://javascriptweekly.com/" target="_blank" rel="noopener noreferrer">JavaScript Weekly</a> - A weekly newsletter covering the latest in JavaScript technology, articles, and projects.</li>
        </ul>
      </section>
    </div>
  );
}

export default JavaScriptLearning;
