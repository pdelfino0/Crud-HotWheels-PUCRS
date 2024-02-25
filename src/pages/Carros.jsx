import React from 'react';

function Carros(props) {
    return (
        <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
            <div className="px-10 py-10">
                <h1>Carros</h1>
                <ul>
                    {props.carCollection.map((car, index) => {
                        return (
                            <li key={index}>
                                <p>Cor: {car.cor}</p>
                                <p>Marca: {car.marca}</p>
                                <p>Modelo: {car.modelo}</p>
                                <p>Ano: {car.ano}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Carros;
