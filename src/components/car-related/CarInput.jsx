import React from 'react';

function CarInput(props) {
    return (
        <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-1" htmlFor="cor">
                {props.label}
            </label>
            <input
                className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id={props.label.toLowerCase()}
                name={props.label.toLowerCase()}
                type="text" placeholder={`${props.label}`} onChange={props.onChange}/>
        </div>
    );
}

export default CarInput;
