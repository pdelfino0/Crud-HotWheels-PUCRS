import React from "react";

const CarInput = ({label, name, value, onChange, errorMessage}) => {
    return (
        <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-1" htmlFor={name}>
                {label}
            </label>
            <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={onChange}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    );
};
export default CarInput;