import React from 'react';
import CarCard from "../components/car-related/CarCard";

function Carros(props) {

    const returnEmptyMessage = () => {
        return (
            <p className="text-white text-center"> Você não possui nenhum carro na sua coleção ainda. </p>
        );
    }

    function handleDelete(index) {
        const newCarCollection = props.carCollection.filter((car, carIndex) => carIndex !== index);
        props.setCarCollection(newCarCollection);
    }

    return (
        <>
            <h1 className="text-white text-3xl font-bold text-center mt-10">Sua Coleção</h1>
            <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
                <div className="px-10 py-10">
                    {props.carCollection.length === 0 ? returnEmptyMessage() : props.carCollection.map((carro, index) => (
                        <div>
                            <CarCard key={index} carInfo={carro} onDelete={() => handleDelete(index)}/>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    );
}

export default Carros;
