import React from 'react';
import {Link} from 'react-router-dom';
import usePageTitle from '../components/navbar/usePageTitle';

function NotFound() {
    const currentPath = usePageTitle();

    return (
        <div className="mx-auto mt-10 rounded-xl max-w-3xl bg-neutral-800/30 mb-auto">
            <div className="text-white p-8">
                <h2 className="text-2xl font-bold mb-4">404 - Página não encontrada</h2>
                <p className="text-lg">
                    A página que você está procurando não foi encontrada.
                </p>
                <p className="text-lg mt-4">
                    <Link to="/" className="text-blue-500 hover:underline">Voltar para a página inicial</Link>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
