import React, {useState} from 'react';
import CarInput from "../components/car-related/CarInput";
import CarForm from "../components/car-related/CarForm";

function AddCarro(props) {
    const [cor, setCor] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");

    const handleSubmit = () => {
        const newCar = {
            cor: cor,
            marca: marca,
            modelo: modelo,
            ano: ano
        };
        props.onChange(newCar);
    };

    return (
        <>
            <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
                <p className="px-10 py-10">
                    Aqui você pode adicionar um carro à sua coleção de HotWheels.
                </p>
            </div>

            <CarForm onSubmit={handleSubmit} cor={cor} marca={marca} modelo={modelo} ano={ano}>
                <CarInput label="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}/>
                <CarInput label="Marca" value={marca} onChange={(e) => setMarca(e.target.value)}/>
                <CarInput label="Cor" value={cor} onChange={(e) => setCor(e.target.value)}/>
                <CarInput label="Ano" value={ano} onChange={(e) => setAno(e.target.value)}/>
            </CarForm>
        </>
    );
}

export default AddCarro;
