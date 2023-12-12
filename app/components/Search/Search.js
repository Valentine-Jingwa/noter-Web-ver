import React, { useState } from 'react';

export default function FilterComponent({ items, setFilteredItems }) {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        const filtered = items.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredItems(filtered);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Filter items..." 
                value={filter}
                onChange={handleFilterChange} 
            />
        </div>
    );
}
