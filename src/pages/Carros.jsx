import React from 'react';
import CarCard from '../components/car-related/CarCard';

function Carros({carCollection, setCarCollection}) {
    const returnEmptyMessage = () => (
        <p className="text-white text-center">Você não possui nenhum carro na sua coleção ainda.</p>
    );

    const handleEdit = (index, newCarInfo) => {
        const newCarCollection = carCollection.map((car, carIndex) => {
            if (carIndex === index) {
                return {...newCarInfo};
            }
            return car;
        });
        setCarCollection(newCarCollection);
    };

    const handleDelete = (index) => {
        const newCarCollection = carCollection.filter((car, carIndex) => carIndex !== index);
        setCarCollection(newCarCollection);
    };

    return (
        <>
            <h1 className="text-white text-3xl font-bold text-center mt-10">Sua Coleção</h1>
            <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30 mb-10">
                <div className="px-10 py-10">
                    {carCollection.length === 0
                        ? returnEmptyMessage()
                        : carCollection.map((carro, index) => (
                            <CarCard
                                key={index}
                                carInfo={carro}
                                onEdit={(newCarInfo) => handleEdit(index, newCarInfo)}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}


export default Carros;