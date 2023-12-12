
import React, { useState, useEffect, useRef } from 'react';

export default function Filter({ items, setFilteredItems, requestUserLocation }) {
    const [dateFilter, setDateFilter] = useState('');
    const [memberFilter, setMemberFilter] = useState('');
    const [cityFilter, setCityFilter] = useState(false);
    const [activityFilter, setActivityFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        applyFilters();
    }, [searchTerm]); 

    const applyFilters = () => {
        let filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

        
        if (dateFilter) {
            // Filter by date created (assuming items have a `dateCreated` property)
            filteredItems = filteredItems.filter(item => item.dateCreated.includes(dateFilter));
        }
        if (memberFilter) {
            // Sort by number of members (assuming items have a `members` property)
            filteredItems = filteredItems.sort((a, b) => (memberFilter === 'low-high' ? a.members - b.members : b.members - a.members));
        }
        if (cityFilter) {
            // Filter by city (requires additional implementation based on user location)
            requestUserLocation(filteredItems, setFilteredItems);
            return;
        }
        if (activityFilter) {
            // Filter by activity frequency (assuming items have a method to calculate this)
            filteredItems = filteredItems.filter(item => item.calculateActivityFrequency() === activityFilter);
        }

        setFilteredItems(filteredItems);
    };

    // Handling outside click for dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownRef]);

    return (
        <div className='bg-gray-800 p-4 rounded-lg'>
            <input 
                type="text" 
                placeholder="Search..."
                className="p-2 text-black border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <button 
                className='mt-2 p-2 border border-gray-300 rounded w-full bg-gray-200 hover:bg-gray-300 text-black'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                More Filters
            </button>
            {isDropdownOpen && (
                <div ref={dropdownRef} className='space-y-2 mt-2'>
                <input 
                        type="date" 
                        className='p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300'
                        value={dateFilter} 
                        onChange={e => setDateFilter(e.target.value)} 
                    />
                    {/* Member filter dropdown */}
                <select className='block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-300' value={memberFilter} onChange={e => setMemberFilter(e.target.value)}>
                    <option value="">Select Members</option>
                    <option value="low-high">Low to High</option>
                    <option value="high-low">High to Low</option>
                </select>

                    {/* Similar dropdown implementation for other filters */}
                    <button 
                        className='mt-2 p-2 border border-gray-300 rounded w-full bg-gray-200 hover:bg-gray-300 text-black'
                        onClick={() => setCityFilter(true)}>
                        Filter by My City
                    </button>
                    {/* Activity frequency filter dropdown */}
                    <select className='block w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-300' value={activityFilter} onChange={e => setActivityFilter(e.target.value)}>
                        <option value="">Select Activity Frequency</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    
                    <button onClick={applyFilters} className='mt-2 p-2 border border-gray-300 rounded w-full bg-blue-500 hover:bg-blue-600'>Apply Filters</button>
                </div>
            )}
        </div>
    );
}
