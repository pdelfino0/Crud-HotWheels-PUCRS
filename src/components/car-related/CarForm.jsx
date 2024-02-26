import React, {useState} from 'react';
import CarInput from './CarInput';

const CarForm = ({onSubmit}) => {
    const [carData, setCarData] = useState({
        cor: "",
        marca: "",
        modelo: "",
        ano: ""
    });

    const [errors, setErrors] = useState({
        cor: '',
        marca: '',
        modelo: '',
        ano: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCarData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            onSubmit(carData);
            resetForm();
        }
    };

    const validateInputs = () => {
        let valid = true;
        const newErrors = {};

        // Validate each input field and set errors if necessary
        if (!carData.cor.trim()) {
            newErrors.cor = 'Color is required';
            valid = false;
        }
        if (!carData.marca.trim()) {
            newErrors.marca = 'Brand is required';
            valid = false;
        }
        if (!carData.modelo.trim()) {
            newErrors.modelo = 'Model is required';
            valid = false;
        }
        if (!carData.ano.trim()) {
            newErrors.ano = 'Year is required';
            valid = false;
        }

        // Update errors state
        setErrors(newErrors);
        return valid;
    };

    const resetForm = () => {
        setCarData({
            cor: "",
            marca: "",
            modelo: "",
            ano: ""
        });
        setErrors({
            cor: '',
            marca: '',
            modelo: '',
            ano: ''
        });
    };

    return (
        <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
            <form onSubmit={handleSubmit}>
                <div className="px-10 py-10">
                    <CarInput
                        label="Cor"
                        name="cor"
                        value={carData.cor}
                        onChange={handleChange}
                        errorMessage={errors.cor}
                    />
                    <CarInput
                        label="Marca"
                        name="marca"
                        value={carData.marca}
                        onChange={handleChange}
                        errorMessage={errors.marca}
                    />
                    <CarInput
                        label="Modelo"
                        name="modelo"
                        value={carData.modelo}
                        onChange={handleChange}
                        errorMessage={errors.modelo}
                    />
                    <CarInput
                        label="Ano"
                        name="ano"
                        value={carData.ano}
                        onChange={handleChange}
                        errorMessage={errors.ano}
                    />
                    <div className="flex items-center justify-between mt-4">
                        <button
                            className="relative bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out"
                            type="submit"
                        >
                            Adicionar Carro
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default CarForm;
