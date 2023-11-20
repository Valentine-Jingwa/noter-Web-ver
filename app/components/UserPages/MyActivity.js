//MyActivity.js shows a list of stuff i've written all split into different categories. I can click on a category and it will show me all the stuff i've written in that category. I can also search for stuff i've written. It also allows me to revisit stuff i've written if i click on it. I can also delete stuff i've written.
import React, { useState, useEffect } from 'react';

export default function MyActivity() {
    const [activities, setActivities] = useState([]);
    const [filteredActivities, setFilteredActivities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Mock categories - replace with your actual categories
    const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

    // Function to fetch activities (You'll need to implement this based on your backend)
    const fetchActivities = async () => {
        // Fetch activities from the backend and update state
        // setActivities(response.data);
        setFilteredActivities(response.data); // Initial load with all activities
    };

    // Filter activities by category
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredActivities(activities);
        } else {
            setFilteredActivities(activities.filter(activity => activity.category === category));
        }
    };

    // Search activities
    useEffect(() => {
        const results = activities.filter(activity =>
            activity.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActivities(results);
    }, [searchTerm, activities]);

    // Delete an activity
    const deleteActivity = (activityId) => {
        // Implement deletion logic
        // Optionally, refetch or update activities list after deletion
    };

    // Revisit an activity
    const revisitActivity = (activityId) => {
        // Implement revisit logic, like redirecting to the activity detail page
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <div>
            <div className="search-and-categories">
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search activities..."
                />
                <div className="categories">
                    {categories.map(category => (
                        <button key={category} onClick={() => filterByCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="activity-list">
                {filteredActivities.map(activity => (
                    <div key={activity.id} className="activity-item">
                        <h3 onClick={() => revisitActivity(activity.id)}>{activity.title}</h3>
                        {/* Additional activity details */}
                        <button onClick={() => deleteActivity(activity.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
