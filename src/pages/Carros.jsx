import React, {useEffect, useState} from 'react';
import CarCard from '../components/car/CarCard';
import axios from "axios";

function Carros() {


    const [carCollection, setCarCollection] = useState([]);
    const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
    const [editedMessageVisible, setEditedMessageVisible] = useState(false);
    useEffect(() => {
        fetchCarCollection();
    }, []);

    const returnEmptyMessage = () => (
        <p className="text-white text-center">Você não possui nenhum carro na sua coleção ainda.</p>);

    const onDelete = () => {
        fetchCarCollection();
        setDeleteMessageVisible(true);
        setTimeout(() => {
            setDeleteMessageVisible(false);
        }, 5000);
    }

    const handleEdit = () => {
        fetchCarCollection();
        setEditedMessageVisible(true);
        setTimeout(() => {
            setEditedMessageVisible(false);
        }, 5000);

    }


    const fetchCarCollection = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cars');
            setCarCollection(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (<>
        {deleteMessageVisible && <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-xl">
            Carro deletado com sucesso!
        </div>}
        {editedMessageVisible && <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-xl">
            Carro editado com sucesso!
        </div>}
        <h1 className="text-white text-3xl font-bold text-center mt-10">Sua Coleção</h1>
        <div className="mx-auto text-white mt-10 rounded-xl max-w-3xl bg-neutral-800/30 mb-10">
            <div className="px-10 py-10">
                {carCollection.length === 0 ? returnEmptyMessage() :
                    carCollection.map((car, index) => (
                        <CarCard key={index} carInfo={car} onEdit={handleEdit}
                                 onDelete={onDelete}/>
                    ))}
            </div>
        </div>
    </>);
}


export default Carros;