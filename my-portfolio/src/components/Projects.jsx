import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-5 transition-[transform,border-color,box-shadow] duration-200 will-change-transform hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div>
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 font-mono text-sm text-gray-400">{project.description}</p>
      </div>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-gray-200 transition duration-300 hover:bg-blue-500 hover:text-white"
        >
          GitHub
        </a>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="mb-20 scroll-mt-24 py-8">
      <h2 className="mb-6 text-3xl font-bold">My Projects</h2>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
