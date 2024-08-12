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
                Hello, I'm computer science student at UT Austin with a minor in business and a certificate in applied 
                statistic modeling! My academic interests lie in the fields of large-scale distributed systems, machine learning,
                and fintech. I'm passionate about leveraging technology to solve real-world problems and making people's lives easier.
                Outside of school, I enjoy tinkering with Spot dogs, basketball, and competitive Catan!
            </span>
            
            </div>
        </div>
    );
};

export default About