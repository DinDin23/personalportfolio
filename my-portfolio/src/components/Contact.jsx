import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    const email = "dineshsp2003@gmail.com";
    const phoneNumber = "+1 (469) 605-7151";

    return (
        <motion.section
            id="contact"
            className="scroll-mt-24 border-t border-white/10 py-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center">
                <p className="mb-4 font-mono text-md">
                    Have questions? I have answers (maybe).
                </p>
                <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
                    <div className="flex items-center">
                        <Mail className="mr-2 h-5 w-5" />
                        <a href={`mailto:${email}`} className="font-mono transition-colors duration-300 hover:text-blue-400">
                        {email}
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Phone className="mr-2 h-5 w-5" />
                        <a href={`tel:${phoneNumber}`} className="font-mono transition-colors duration-300 hover:text-blue-400">
                        {phoneNumber}
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
