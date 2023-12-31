// ActivityForm.js
import React, { useState, useCallback } from 'react';
import Image from 'next/image';

export default function ActivityForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('public'); // default to 'public'
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleDrop = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const file = event.dataTransfer.files[0];
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, category, location, status, description, image });
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
                {/* Category input */}
                <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            {/* Location input */}
            {/* Status select */}
            <div className="mb-4">
                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
            <div 
                onDragOver={(e) => e.preventDefault()} 
                onDrop={handleDrop} 
                className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center"
            >
                {previewUrl ? (
                    <Image src={previewUrl} alt="Preview" className="mx-auto h-20" />
                ) : (
                    <p>Drag and drop an image here, or click to select a file</p>
                )}
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="opacity-0 w-full h-full position-absolute"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-32"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Create Activity
            </button>
        </form>
    );
}
