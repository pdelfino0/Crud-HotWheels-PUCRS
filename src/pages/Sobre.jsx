import React from 'react';

function Sobre(props) {

    return (
        <div className="mx-auto mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
            <div className="text-white p-8">
                <h2 className="text-2xl font-bold mb-4">Sobre este projeto</h2>
                <p className="text-lg">
                    Este é um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido durante a disciplina de Desenvolvimento Front-End do curso de Análise e Desenvolvimento de Sistemas da Pontifícia Universidade Católica do Rio Grande do Sul.
                </p>
                <p className="text-lg mt-4">
                    O objetivo deste projeto é permitir aos usuários gerenciar sua coleção de carros HotWheels de forma simples e eficiente.
                </p>
            </div>
        </div>
    );
}

export default Sobre;
