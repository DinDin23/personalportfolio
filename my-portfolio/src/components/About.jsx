import React from "react";

import resume from "../assets/Dinesh_Polisetty_Resume.pdf"
import DineshPic from "../assets/DineshPic.jpg"
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const About = () => {
    const openResume = () => {
        // const resume = 'https://github.com/DinDin23';
        window.open(resume, '_blank', 'noopener,noreferrer');
    };
    const openLinkedIn = () => {
        const linkedInUrl = 'https://www.linkedin.com/in/dineshpolisetty/';
        window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
        
    };
    const openGithub = () => {
        const githubUrl = 'https://github.com/DinDin23';
        window.open(githubUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        
        <div className="mb-12 px-256">
            <h2 className="text-4xl py-2 font-mono">Dinesh Polisetty</h2>
            <div className="flex items-center py-4">
                <button onClick={openResume}
                        class="bg-blue-500 font-mono hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Resume {'>'}
                </button>
                <button onClick={openGithub}
                        className="ml-2 h-10 w-10 border-2 border-blue-700 rounded flex items-center justify-center hover:bg-blue-700">
                    <IoLogoGithub className="text-blue-700" />
                </button>
                <button onClick={openLinkedIn}
                        className="ml-2 h-10 w-10 border-2 border-blue-700 rounded flex items-center justify-center hover:bg-blue-700">
                    <IoLogoLinkedin className="text-blue-700" />
                </button>
            </div>
            
            <div className=" text-white font-mono p-4 rounded-md flex items-center space-x-4 text-2xl">
            <span >
                Hello, I'm a software engineer at Meta in NYC, where I build AI agents and custom MCP tooling to automate
                change management workflows for Meta's compliance platform. I graduated from UT Austin in 2025 with a
                B.S. in Computer Science and a minor in Business. Before Meta I interned at J.P. Morgan Chase on the
                Payments and Securities Services teams, and at York Space Systems writing C++ for satellite thruster
                control. My interests lie in large-scale distributed systems, machine learning, and fintech. Outside of
                work, you'll find me playing basketball, competitive Catan, or poker.
            </span>
            
            </div>
        </div>
    );
};

export default About