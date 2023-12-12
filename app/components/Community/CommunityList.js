import React, { useState } from "react";
import { ImageBackground } from "react-native-web";
// Import or define communities here if needed

export default function CommunityList({ communities }) {
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    const handleCommunityClick = (community) => {
        setSelectedCommunity(community);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[1vw]">
            {selectedCommunity ? (
                <Subcategories community={selectedCommunity} />
            ) : (
                communities.map(community => (
                    <ImageBackground source={community.imageUrl} alt={community.title} style={{width: '100%', height: '10vw'}} className="object-cover group-hover:opacity-75">
                    <div className="bg-gray-800 rounded-xl overflow-hidden group p-4 h-[10vw] flex flex-col justify-center" key={community.title} onClick={() => handleCommunityClick(community)}>
                        <h2 className="text-white text-lg w-full text-center">{community.title}</h2>
                        <p className="text-gray-300 text-sm hidden text-center group-hover:block">{community.description}</p>
                    </div>
                    </ImageBackground>
                ))
            )}
        </div>
    );
}

function Subcategories({ community }) {
    // Implementation of Subcategories
}
