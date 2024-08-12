import React from 'react';
import {Mail, Phone} from 'lucide-react';


const Contact = () => {
    const email = "dineshsp2003@gmail.com";
    const phoneNumber = "+1 (469) 605-7151";

    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="text-center mb-4">
                    <p className="text-md font-mono">
                        Have questions? I have answers (maybe).
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-2" />
                        <a href={`mailto:${email}`} className="hover:text-gray-300 font-mono transition-colors duration-300">
                        {email}
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        <a href={`tel:${phoneNumber}`} className="hover:text-gray-300 font-mono transition-colors duration-300">
                        {phoneNumber}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;