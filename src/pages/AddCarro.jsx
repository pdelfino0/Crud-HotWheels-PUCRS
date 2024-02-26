import React from 'react';
import CarForm from '../components/car-related/CarForm';

const AddCarro = ({onChange}) => {
    const handleSubmit = (carroData) => {
        onChange(carroData);
    };

    return (
        <>
            <div className="mb-10">
                <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30 ">
                    <p className="px-10 py-10">
                        Aqui você pode adicionar um carro à sua coleção de HotWheels.
                    </p>
                </div>
                <CarForm onSubmit={handleSubmit}/>
            </div>
        </>
    );
};

export default AddCarro;
