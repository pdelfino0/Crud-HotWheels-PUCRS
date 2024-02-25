import React from 'react';

function CarCard(props) {
    const imgPath = './placeholder.png';
    return (
        <div className="mx-auto mt-10 bg-neutral-800/30 rounded-xl max-w-3xl overflow-hidden">
            <img src={imgPath} alt="Carro" className="w-full h-auto" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.carInfo.modelo}</div>
                <p className="text-gray-300 text-sm">Marca: {props.carInfo.marca}</p>
                <p className="text-gray-300 text-sm">Ano: {props.carInfo.ano}</p>
                <p className="text-gray-300 text-sm">Cor: {props.carInfo.cor} km</p>
            </div>
        </div>
    );
}

export default CarCard;
