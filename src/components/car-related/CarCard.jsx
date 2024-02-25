import React, {useState} from 'react';

function CarCard(props) {
    const imgPath = './placeholder.png';
    const [editFormVisible, setEditFormVisible] = useState(false);
    const [carInfo, setCarInfo] = useState(props.carInfo);

    const handleEdit = () => {
        setEditFormVisible(!editFormVisible);
    }

    const handleSave = (index) => {
        props.setNewCarInfo(carInfo);
        props.onEdit(index);
        setEditFormVisible(false); // Close the edit form after saving
    }

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setCarInfo({...carInfo, [field]: value});

    }

    return (
        <div className="mx-auto mt-10 bg-neutral-800/30 rounded-xl max-w-3xl overflow-hidden ">
            <img src={imgPath} alt={`Carro ${props.carInfo.modelo}`} className="w-full h-auto"/>
            <div className="flex items-center justify-between px-6 py-4">
                <div>
                    <div className="font-bold text-xl mb-2">{props.carInfo.modelo}</div>
                    <p className="text-gray-300 text-sm">Marca: {props.carInfo.marca}</p>
                    <p className="text-gray-300 text-sm">Ano: {props.carInfo.ano}</p>
                    <p className="text-gray-300 text-sm">Cor: {props.carInfo.cor}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => props.onDelete(props.index)}>Deletar
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleEdit}
                    >Editar
                    </button>
                </div>
            </div>
            {editFormVisible &&
                <div
                    className="flex text-black flex-col items-center justify-center mt-4 px-6 py-4 bg-gray-100 rounded-xl">
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carInfo.modelo}
                           onChange={(e) => handleInputChange(e, 'modelo')}
                           placeholder="Modelo"/>
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carInfo.marca}
                           onChange={(e) => handleInputChange(e, 'marca')}
                           placeholder="Marca"/>
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carInfo.ano}
                           onChange={(e) => handleInputChange(e, 'ano')}
                           placeholder="Ano"/>
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carInfo.cor}
                           onChange={(e) => handleInputChange(e, 'cor')}
                           placeholder="Cor"/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleSave(props.index)}>Salvar
                    </button>
                </div>
            }
        </div>
    );
}

export default CarCard;
