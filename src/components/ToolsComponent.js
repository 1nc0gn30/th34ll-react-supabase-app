// src/components/ToolsComponent.js

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/ToolsComponent.css';
import WebDevelopmentTools from '../data/WebDevelopmentTools';
import CybersecurityTools from '../data/CybersecurityTools';
import DesignTools from '../data/DesignTools';
import ArtificialIntelligenceTools from '../data/ArtificialIntelligenceTools';
import CloudComputingTools from '../data/CloudComputingTools';
import DataScienceAndAnalyticsTools from '../data/DataScienceAndAnalyticsTools';
import DevOpsTools from '../data/DevOpsTools';
import FrontendDevelopmentTools from '../data/FrontendDevelopmentTools';
import ProjectManagementTools from '../data/ProjectManagementTools';
import QuantumComputingTools from '../data/QuantumComputingTools';
import EdgeComputingTools from '../data/EdgeComputingTools';

const ToolsComponent = () => {
  const toolsList = {
    ArtificialIntelligence: ArtificialIntelligenceTools,
    CloudComputing: CloudComputingTools,
    Cybersecurity: CybersecurityTools,
    DataScienceAndAnalytics: DataScienceAndAnalyticsTools,
    Design: DesignTools,
    DevOps: DevOpsTools,
    EdgeComputing: EdgeComputingTools,
    FrontendDevelopment: FrontendDevelopmentTools,
    ProjectManagement: ProjectManagementTools,
    WebDevelopment: WebDevelopmentTools,
    QuantumComputing: QuantumComputingTools,
  };

  const [searchQuery, setSearchQuery] = useState('');

  const sortToolsByName = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  return (
    <div className="ToolsComponent">
      <Helmet>
        <title>Comprehensive Tools List - TH34LL</title>
        <meta name="description" content="Explore a comprehensive list of tools for various tech fields including AI, Cloud Computing, Cybersecurity, Data Science, and more on TH34LL, an open educational resource." />
        <meta name="keywords" content="tech, learning, web development, cybersecurity, AI, cloud computing, data science, design, devops, project management, quantum computing, edge computing, Hampton Roads, Virginia, United States, education" />
        <meta name="author" content="Neal Frazier" />
        <meta property="og:title" content="Comprehensive Tools List - TH34LL" />
        <meta property="og:description" content="Explore a comprehensive list of tools for various tech fields on TH34LL, an open educational resource." />
        <meta property="og:url" content="https://th34ll.nealfrazier.tech" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="tools-container">
        <h1>Comprehensive Tools List</h1>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            className="search-bar"
          />
        </div>
        {Object.entries(toolsList).map(([category, tools]) => (
          <section key={category}>
            <h2>{category.replace(/([A-Z])/g, ' $1').trim()} Tools</h2>
            <ul>
              {tools
                .filter(tool => tool.name.toLowerCase().includes(searchQuery) || tool.description.toLowerCase().includes(searchQuery))
                .sort(sortToolsByName)
                .map(tool => (
                  <li key={tool.name}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <strong>{tool.name}</strong>: {tool.description}
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ToolsComponent;
