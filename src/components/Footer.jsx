import React from 'react';
import {FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer(props) {
    return (
        <footer className=" sticky top-[100vh] bg-gray-900 text-white py-6 bottom-0 w-full">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-center">
                    <p>{new Date().getFullYear()}</p>
                    <p>Desenvolvido por Pedro Delfino </p>
                </div>
                <div className="ml-6">
                    <div className="border-l-2 border-gray-600 h-6 mx-6"></div>
                </div>
                <div className="ml-6">
                    <div className="flex space-x-4">
                        <a href="#" className="text-white"><FaTwitter/></a>
                        <a href="https://www.instagram.com/pedrodelfino__/" className="text-white"><FaInstagram/></a>
                        <a href="https://www.instagram.com/pedrodelfino__/" className="text-white"><FaGithub/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
