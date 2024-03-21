import React, {useState} from 'react';
import CarInput from './CarInput';
import axios from "axios";
import useIdIncrementer from "../../hooks/useIdIncrementer";

const CarForm = () => {
    const {id, incrementId} = useIdIncrementer();
    const [carData, setCarData] = useState({
        id: 0, color: "", brand: "", name: "", year: ""
    });

    const [errors, setErrors] = useState({
        color: '', brand: '', name: '', year: ''
    });

    const [sendMessageVisible, setSendMessageVisible] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCarData(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateInputs()) {
            try {
                carData.id = id;
                incrementId();
                const response = await axios.post('http://localhost:5000/cars', carData);
                resetForm();
                setSendMessageVisible(true);
                setTimeout(() => {
                    setSendMessageVisible(false);
                }, 5000);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const validateInputs = () => {
        let valid = true;
        const newErrors = {};

        // Validate each input field and set errors if necessary
        if (!carData.color.trim()) {
            newErrors.color = 'A cor é obrigatória';
            valid = false;
        }
        if (!carData.brand.trim()) {
            newErrors.brand = 'A marca é obrigatória';
            valid = false;
        }
        if (!carData.name.trim()) {
            newErrors.name = 'O modelo é obrigatório';
            valid = false;
        }
        if (!carData.year.trim()) {
            newErrors.year = 'O ano é obrigatório';
            valid = false;
        }

        // Update errors state
        setErrors(newErrors);
        return valid;
    };

    const resetForm = () => {
        setCarData({
            id: 0, color: "", brand: "", name: "", year: ""
        });
        setErrors({
            color: '', brand: '', name: '', year: ''
        });
    };

    return (<>
        {sendMessageVisible && <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-xl">
            Carro adicionado com sucesso!
        </div>}
        <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30">
            <form onSubmit={handleSubmit}>
                <div className="px-10 py-10">
                    <CarInput
                        label="Modelo"
                        name="name"
                        value={carData.name}
                        onChange={handleChange}
                        errorMessage={errors.name}
                    />
                    <CarInput
                        label="Marca"
                        name="brand"
                        value={carData.brand}
                        onChange={handleChange}
                        errorMessage={errors.brand}
                    />
                    <CarInput
                        label="Cor"
                        name="color"
                        value={carData.color}
                        onChange={handleChange}
                        errorMessage={errors.color}
                    />
                    <CarInput
                        label="Ano"
                        name="year"
                        value={carData.year}
                        onChange={handleChange}
                        errorMessage={errors.year}
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
    </>);
};


export default CarForm;
