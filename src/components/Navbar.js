import React from 'react';
import {Link} from 'react-router-dom';
import usePageTitle from "./usePageTitle";

function Navbar() {
    usePageTitle();
    return (
        <nav className="justify-center mx-auto mt-10 rounded-xl max-w-screen-md bg-gray-800 p-4">
            <ul className="mx-10 flex justify-between">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sobre" className="text-white hover:text-gray-300">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/carros" className="text-white hover:text-gray-300">
                        Carros
                    </Link>
                </li>
                <li>
                    <Link to="/add-carro" className="text-white hover:text-gray-300">
                        Adicionar Carro
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
