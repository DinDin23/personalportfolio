import React from 'react';

const projects = [
  {
    id: 1,
    title: "Karmine",
    description: "A peer-to-peer wagering platform for Clash Royale: players stake money, get matched, and the app settles the bet automatically by polling the Clash Royale API. FastAPI + React.",
    githubLink: "https://github.com/DinDin23/Karmine"
  },
  {
    id: 2,
    title: "Phoenix",
    description: "A CLI that scans a codebase and builds a structured map of every third-party API integration point, with optional LLM-assisted analysis.",
    githubLink: "https://github.com/DinDin23/Phoenix"
  },
  {
    id: 3,
    title: "NBA Arbitrage Finder",
    description: "A Python engine that detects arbitrage opportunities across sportsbooks by comparing implied probabilities and computing optimal bet sizing.",
  },
  {
    id: 4,
    title: "Apartment Monitor",
    description: "A Playwright scraper that watches Manhattan apartment listings for units under a price threshold and texts me the moment one appears.",
  },
  {
    id: 5,
    title: "Audiscribe",
    description: "Podcast chapter title generator built with an LDA topic model trained on 1500+ episodes.",
    githubLink: "https://github.com/DinDin23/YouTubeTimeStampGeneration"
  },
  {
    id: 6,
    title: "Spotify Song Popularity Predictor",
    description: "An ensemble model that predicts whether a song will chart on Spotify.",
    githubLink: "https://github.com/DinDin23/Spotify-Songs-Suggestion-Model"
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
      <h3 className="text-gray-700 font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-gray-700 text-base font-mono mb-4">{project.description}</p>
    </div>
    <div className="px-4 pb-4">
      {project.githubLink && (
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition duration-300"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;