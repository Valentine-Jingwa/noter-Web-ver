import React from "react";

export default function MapStory() {
    const imagesCount = 100; // Number of images to display
    const images = [];

    for (let i = 0; i < imagesCount; i++) {
        // Generate a random image URL
        images.push(`https://picsum.photos/seed/${Math.random()}/100/200`);
    }

    return (
        <div className="flex overflow-hidden w-full overflow-x-auto">
            {images.map((src, index) => (
                <img 
                    key={index} 
                    src={src} 
                    alt="Random" 
                    className="h-50 w-25 mx-1 rounded-xl" 
                />             
            ))}

        </div>
    );
}
