import React from 'react';

const projects = [
  {
    id: 1,
    title: "Audiscribe",
    description: "Podcast Chapter Title Generator built with a trained LDA model on 1500+ episodes",
    githubLink: "https://github.com/DinDin23/YouTubeTimeStampGeneration"
  },
  {
    id: 2,
    title: "ChessEval",
    description: "iOS app that can evaluate pictures of chess games and predict the next best move",
    githubLink: "https://github.com/DinDin23/carpet"
  },
  {
    id: 3,
    title: "BWI-Language",
    description: "A custom language built for BWIBots to understand/follow English directions",
    githubLink: "https://github.com/DinDin23/FRI1Project"
  },
  {
    id: 4,
    title: "Parallel Lyrics",
    description: "A web app that allow users to search for songs containing a particular lyric",
    githubLink: "https://github.com/DinDin23/ParallelLyrics"
  },
  {
    id: 5,
    title: "Quotables",
    description: "iOS app to keep track of loved one quotes and share those quotes with others",
    githubLink: "https://github.com/DinDin23/Quotables"
  },
  {
    id: 6,
    title: "Spotify Song Popularity Predictor",
    description: "An ensemble model that predicts if a song charts on Spotify",
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