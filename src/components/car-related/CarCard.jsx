import React from 'react';

function CarCard(props) {
    const imgPath = './placeholder.png';

    return (
        <div className="mx-auto mt-10 bg-neutral-800/30 rounded-xl max-w-3xl overflow-hidden pb-10">
            <img src={imgPath} alt={`Carro ${props.carInfo.modelo}`} className="w-full h-auto"/>
            <div className="flex items-center justify-between px-6 py-4">
                <div>
                    <div className="font-bold text-xl mb-2">{props.carInfo.modelo}</div>
                    <p className="text-gray-300 text-sm">Marca: {props.carInfo.marca}</p>
                    <p className="text-gray-300 text-sm">Ano: {props.carInfo.ano}</p>
                    <p className="text-gray-300 text-sm">Cor: {props.carInfo.cor} km</p>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => props.onDelete(props.key)}>Deletar
                </button>
            </div>
        </div>
    );
}

export default CarCard;
