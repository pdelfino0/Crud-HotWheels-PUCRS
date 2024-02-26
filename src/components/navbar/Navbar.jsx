import React from 'react';
import {Link} from 'react-router-dom';
import usePageTitle from './usePageTitle';
import './Navbar.css';

function Navbar() {
    const currentPath = usePageTitle();

    return (
        <nav
            className="justify-center mx-auto rounded-xl max-w-screen-md bg-gradient-to-r from-red-600 to-yellow-600 p-4 shadow-md">
            <ul className="mx-10 flex justify-between">
                <li>
                    <Link to="/"
                          className={`text-white hover:text-gray-300 ${currentPath === '/' ? 'active-link' : ''}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sobre"
                          className={`text-white hover:text-gray-300 ${currentPath === '/sobre' ? 'active-link' : ''}`}>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/carros"
                          className={`text-white hover:text-gray-300 ${currentPath === '/carros' ? 'active-link' : ''}`}>
                        Carros
                    </Link>
                </li>
                <li>
                    <Link to="/add-carro"
                          className={`text-white hover:text-gray-300 ${currentPath === '/add-carro' ? 'active-link' : ''}`}>
                        Adicionar Carro
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
