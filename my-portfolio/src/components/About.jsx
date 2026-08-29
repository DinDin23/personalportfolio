import React from "react";
import { motion } from "framer-motion";

import resume from "../assets/Dinesh_Polisetty_Resume.pdf"
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import Typewriter from "./Typewriter";

const About = () => {
    const openResume = () => {
        window.open(resume, '_blank', 'noopener,noreferrer');
    };
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/dineshpolisetty/', '_blank', 'noopener,noreferrer');
    };
    const openGithub = () => {
        window.open('https://github.com/DinDin23', '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.section
            id="about"
            className="mb-20 scroll-mt-24"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="py-2 font-mono text-4xl">Dinesh Polisetty</h2>

            <p className="font-mono text-xl text-gray-300">
                I build <Typewriter phrases={["AI agents", "distributed systems", "developer tools", "fintech infra"]} />
            </p>

            <div className="flex items-center py-6">
                <button onClick={openResume}
                        className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-mono font-bold text-white transition-colors hover:bg-blue-700">
                Resume {'>'}
                </button>
                <button onClick={openGithub}
                        aria-label="GitHub"
                        className="ml-2 flex h-10 w-10 items-center justify-center rounded border-2 border-blue-700 hover:bg-blue-700">
                    <IoLogoGithub className="text-blue-400" />
                </button>
                <button onClick={openLinkedIn}
                        aria-label="LinkedIn"
                        className="ml-2 flex h-10 w-10 items-center justify-center rounded border-2 border-blue-700 hover:bg-blue-700">
                    <IoLogoLinkedin className="text-blue-400" />
                </button>
            </div>

            <div className="rounded-md font-mono text-2xl leading-relaxed text-white">
                <span>
                    Hello! I'm a software engineer at Meta in NYC, where I build AI agents. I graduated from UT Austin in 2025 with a
                    B.S. in Computer Science and a minor in Business. Before Meta I interned at J.P. Morgan Chase on the
                    Payments and Securities Services teams, and at York Space Systems writing C++ for satellite thruster
                    control. Outside of
                    work, you'll find me playing basketball, competitive Catan, or poker.
                </span>
            </div>
        </motion.section>
    );
};

export default About
