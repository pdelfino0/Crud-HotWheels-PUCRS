// CarSendButton.js
import React from 'react';

const CarSendButton = (props) => {
    return (
        <button
            className={`relative bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out`}
            type="button"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default CarSendButton;
