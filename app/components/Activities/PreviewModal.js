// PreviewModal.js
import React from 'react';

export default function PreviewModal({ data, onClose }) {
    const { title, description, image } = data;
    const imageUrl = image ? URL.createObjectURL(image) : '';

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    {imageUrl && <img src={imageUrl} alt="Activity" className="mb-4" />}
                    <p>{description}</p>
                </div>
                <button
                    onClick={onClose}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
