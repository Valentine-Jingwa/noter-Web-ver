import React, { useState } from 'react';
import { ImageBackground } from "react-native-web";
import AdvancedFilterComponent from '../Search/Filter';
import CommunityList from './CommunityList';

export default function Community() {
    // Dummy data for community categories
    const communities = [
        { title: "Art Community", description: "A place for artists and art enthusiasts", imageUrl: "art_community.jpg" },
        { title: "Tech Community", description: "Discuss the latest in technology", imageUrl: "tech_community.jpg" },
        { title: "Food Community", description: "Share your favorite recipes", imageUrl: "food_community.jpg" },
        { title: "Sports Community", description: "Discuss your favorite sports", imageUrl: "sports_community.jpg" },
        { title: "Music Community", description: "Share your favorite music", imageUrl: "music_community.jpg" },
        { title: "Movie Community", description: "Discuss your favorite movies", imageUrl: "movie_community.jpg" },
        { title: "Book Community", description: "Discuss your favorite books", imageUrl: "book_community.jpg" },
        { title: "Travel Community", description: "Share your travel experiences", imageUrl: "travel_community.jpg" },
        { title: "Fashion Community", description: "Discuss the latest fashion trends", imageUrl: "fashion_community.jpg" },
        { title: "Fitness Community", description: "Share your fitness journey", imageUrl: "fitness_community.jpg" },
        { title: "Pet Community", description: "Share your pet stories", imageUrl: "pet_community.jpg" },
        { title: "Home Community", description: "Share your home improvement projects", imageUrl: "home_community.jpg" },
        { title: "Car Community", description: "Discuss your favorite cars", imageUrl: "car_community.jpg" },
        { title: "Finance Community", description: "Discuss your financial goals", imageUrl: "finance_community.jpg" },
        { title: "Career Community", description: "Discuss your career goals", imageUrl: "career_community.jpg" },
        { title: "Relationship Community", description: "Discuss your relationship goals", imageUrl: "relationship_community.jpg" },
        { title: "Parenting Community", description: "Share your parenting experiences", imageUrl: "parenting_community.jpg" },
        { title: "Gaming Community", description: "Discuss your favorite games", imageUrl: "gaming_community.jpg" },
        { title: "Beauty Community", description: "Discuss the latest beauty trends", imageUrl: "beauty_community.jpg" },
        { title: "Health Community", description: "Discuss your health goals", imageUrl: "health_community.jpg" },
        { title: "News Community", description: "Discuss the latest news", imageUrl: "news_community.jpg" },
        { title: "Politics Community", description: "Discuss the latest in politics", imageUrl: "politics_community.jpg" },
        { title: "Science Community", description: "Discuss the latest in science", imageUrl: "science_community.jpg" },
        { title: "History Community", description: "Discuss your favorite historical events", imageUrl: "history_community.jpg" },
        { title: "Language Community", description: "Discuss your favorite languages", imageUrl: "language_community.jpg" },
        { title: "Culture Community", description: "Discuss your favorite cultures", imageUrl: "culture_community.jpg" },
        { title: "Photography Community", description: "Share your photography", imageUrl: "photography_community.jpg" },
        { title: "Nature Community", description: "Share your nature photos", imageUrl: "nature_community.jpg" },
        { title: "Anime Community", description: "Discuss your favorite anime", imageUrl: "anime_community.jpg" },
        { title: "Manga Community", description: "Discuss your favorite manga", imageUrl: "manga_community.jpg" },
        { title: "Dance Community", description: "Discuss your favorite dance styles", imageUrl: "dance_community.jpg" },
        { title: "LGBTQ+ Community", description: "Discuss LGBTQ+ topics", imageUrl: "lgbtq_community.jpg" },
        { title: "Social Justice Community", description: "Discuss social justice topics", imageUrl: "social_justice_community.jpg" },
        { title: "Religion Community", description: "Discuss your religious beliefs", imageUrl: "religion_community.jpg" },
        { title: "Spirituality Community", description: "Discuss your spiritual beliefs", imageUrl: "spirituality_community.jpg" },
        { title: "Atheist Community", description: "Discuss your atheist beliefs", imageUrl: "atheist_community.jpg" },
        { title: "Agriculture Community", description: "Discuss your agriculture interests", imageUrl: "agriculture_community.jpg" },
        { title: "Business Community", description: "Discuss your business interests", imageUrl: "business_community.jpg" },
        { title: "Economics Community", description: "Discuss your economic interests", imageUrl: "economics_community.jpg" },
        { title: "Education Community", description: "Discuss your education interests", imageUrl: "education_community.jpg" },
        { title: "Environment Community", description: "Discuss your environmental interests", imageUrl: "environment_community.jpg" },
        { title: "Fitness Community", description: "Discuss your fitness interests", imageUrl: "fitness_community.jpg" },
        { title: "History Community", description: "Discuss your historical interests", imageUrl: "history_community.jpg" },
        { title: "Politics Community", description: "Discuss your political interests", imageUrl: "politics_community.jpg" },
        { title: "Psychology Community", description: "Discuss your psychology interests", imageUrl: "psychology_community.jpg" },
        { title: "Science Community", description: "Discuss your science interests", imageUrl: "science_community.jpg" },
        { title: "Technology Community", description: "Discuss your technology interests", imageUrl: "technology_community.jpg" },
        { title: "Travel Community", description: "Discuss your travel interests", imageUrl: "travel_community.jpg" },
        { title: "Writing Community", description: "Discuss your writing interests", imageUrl: "writing_community.jpg" },
        { title: "Other Community", description: "Discuss your other interests", imageUrl: "other_community.jpg" },
        // ... add more communities as needed
    ];

    const initialItems = []; // Your initial items array
    const [filteredItems, setFilteredItems] = useState(initialItems);
    const [filteredCommunities, setFilteredCommunities] = useState(communities);


    const requestUserLocation = (items, setFilteredCommunities) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                // Filter items based on user location
                // This requires your items to have location data to compare against
            });
        } else {
            // Handle the case where Geolocation is not supported or denied
        }
    };

    return (
        <>
            <div className="flex justify-center mt-2">
                <div className="mx-12 w-8/12 item-center bg-white rounded-xl p-4">           
                    <h1 className="text-center text-black text-xl font-bold mb-4">Community</h1>
                    <div className="mb-4">
                    <div>
                        <AdvancedFilterComponent 
                        items={communities} 
                        setFilteredItems={setFilteredCommunities} 
                        requestUserLocation={requestUserLocation} 
                    />
                    <CommunityList communities={filteredCommunities} />
                    </div>
                    </div>
         
                </div>
            </div>
        </>
    );
}
