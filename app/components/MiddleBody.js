import React from "react";

export default function MiddleBody() {
    const imagesCount = 10; // Number of images to display
    const images = [];

    for (let i = 0; i < imagesCount; i++) {
        // Generate a random image URL
        images.push(`https://picsum.photos/seed/${Math.random()}/400/400`);
    }

    return (
        <div className="flex overflow-y-auto bg-yellow-200">
            {images.map((src, index) => (
                <img 
                    key={index} 
                    src={src} 
                    alt="Random" 
                    className="h-auto w-full mx-1 rounded-xl" 
                />             
            ))}

        </div>
    );
}
