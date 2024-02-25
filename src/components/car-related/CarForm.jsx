import React from 'react';
import CarSendButton from './CarSendButton';

const CarForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const carro = {
            cor: props.cor,
            marca: props.marca,
            modelo: props.modelo,
            ano: props.ano,
        };
        props.onSubmit(carro);
    };

    return (
        <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
            <div className="px-10 py-10">
                {props.children}

                <div className="flex items-center justify-between mt-4">
                    <CarSendButton onClick={handleSubmit}> Adicionar Carro </CarSendButton>
                </div>
            </div>
        </div>
    );
};

export default CarForm;
