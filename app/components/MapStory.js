import React from "react";
import Image from "next/image";

export default function MapStory() {
    const imagesCount = 100; // Number of images to display
    const images = [];

    for (let i = 0; i < imagesCount; i++) {
        // Generate a random image URL
        images.push(`https://picsum.photos/seed/${Math.random()}/100/200`);
    }

    return (
        <div className="flex w-full overflow-x-auto">
            {images.map((src, index) => (
                <Image 
                    key={index} 
                    src={src} 
                    alt="Random" 
                    width={100} // Set the width of the image
                    height={200} // Set the height of the image
                    className="mx-1 rounded-xl" 
                />             
            ))}
        </div>
    );
}

