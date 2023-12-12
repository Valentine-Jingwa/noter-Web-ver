// CreateActivity.js
import React, { useState } from 'react';
import ActivityForm from './ActivityForm'; // Component for the activity form
import PreviewModal from './PreviewModal'; // Component for the preview modal

export default function CreateActivity() {
    const [activityData, setActivityData] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    const handleSubmit = (data) => {
        setActivityData(data);
        setShowPreview(true);
        // Save data to Firebase here
    };

    return (
        <div className="flex justify-center mt-2 text-black">
            <div className="mx-12 w-8/12 bg-white rounded-xl p-4">
                <h1 className="text-center text-xl font-bold">Create Activity</h1>
                <ActivityForm onSubmit={handleSubmit} />
                {showPreview && (
                    <PreviewModal 
                        data={activityData} 
                        onClose={() => setShowPreview(false)} 
                    />
                )}
            </div>
        </div>
    );
}
