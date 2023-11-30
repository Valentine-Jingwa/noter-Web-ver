import React from "react";
import Image from "next/image";

export default function MiddleBody() {
    const imagesCount = 10; // Number of images to display
    const images = [];

    for (let i = 0; i < imagesCount; i++) {
        // Generate a random image URL
        images.push(`https://picsum.photos/seed/${Math.random()}/100/200`);
    }

    return (
        <div className="flex flex-col overflow-y-auto">
            {images.map((src, index) => (
                <img 
                    key={index} 
                    src={src} 
                    alt="Random" 
                    className="h-50 w-25 my-1" 
                />
            ))}
        </div>
    );
}
