import React, { useState } from 'react';
import CarInput from "../components/car-related/CarInput";
import CarForm from "../components/car-related/CarForm";

function AddCarro(props) {
    const [carro, setCarro] = useState({
        cor: "",
        marca: "",
        modelo: "",
        ano: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        props.onChange(carro);
    };

    return (
        <>
            <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
                <p className="px-10 py-10">
                    Aqui você pode adicionar um carro à sua coleção de HotWheels.
                </p>
            </div>

            <CarForm onSubmit={handleSubmit}>
                <CarInput label="Cor" name="cor" value={carro.cor} onChange={handleChange} />
                <CarInput label="Marca" name="marca" value={carro.marca} onChange={handleChange} />
                <CarInput label="Modelo" name="modelo" value={carro.modelo} onChange={handleChange} />
                <CarInput label="Ano" name="ano" value={carro.ano} onChange={handleChange} />
            </CarForm>
        </>
    );
}

export default AddCarro;
