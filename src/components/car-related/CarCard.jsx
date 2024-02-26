import {useState} from "react";

function CarCard({carInfo, onEdit, onDelete}) {
    const [editFormVisible, setEditFormVisible] = useState(false);
    const [carData, setCarData] = useState(carInfo);

    const handleEdit = () => {
        setEditFormVisible(!editFormVisible);
    };

    const handleSave = () => {
        onEdit(carData);
        setEditFormVisible(false);
    };

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setCarData({...carData, [field]: value});
    };

    return (
        <div className="mx-auto mt-10 bg-neutral-800/30 rounded-xl max-w-3xl overflow-hidden">
            <img src={`./placeholder.png`} alt={`Carro ${carInfo.modelo}`} className="w-full h-auto"/>
            <div className="flex items-center justify-between px-6 py-4">
                <div>
                    <div className="font-bold text-xl mb-2">{carInfo.modelo}</div>
                    <p className="text-gray-300 text-sm">Marca: {carInfo.marca}</p>
                    <p className="text-gray-300 text-sm">Ano: {carInfo.ano}</p>
                    <p className="text-gray-300 text-sm">Cor: {carInfo.cor}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={onDelete}>Deletar
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleEdit}>Editar
                    </button>
                </div>
            </div>
            {editFormVisible &&
                <div
                    className="flex text-black flex-col items-center justify-center mt-4 px-6 py-4 bg-gray-100 rounded-xl">
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carData.modelo}
                           onChange={(e) => handleInputChange(e, 'modelo')}
                           placeholder="Modelo"/>
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carData.marca}
                           onChange={(e) => handleInputChange(e, 'marca')}
                           placeholder="Marca"/>
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carData.ano}
                           onChange={(e) => handleInputChange(e, 'ano')}
                           placeholder="Ano"/>
                    <input className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full"
                           type="text"
                           value={carData.cor}
                           onChange={(e) => handleInputChange(e, 'cor')}
                           placeholder="Cor"/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSave}>Salvar
                    </button>
                </div>
            }
        </div>
    );
}

export default CarCard;
