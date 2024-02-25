import React from 'react';

export default function Home(props) {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo ao CRUD de HotWheels</h1>
            <p className="text-lg text-white">Aqui você pode gerenciar sua coleção de carros HotWheels de forma simples e fácil.</p>
            <p className="text-lg text-white mt-2">Entenda mais sobre o projeto em si na aba Sobre, adicione carros na aba Adicionar Carro e explore sua coleção na aba Carros</p>
        </div>
    );
}
