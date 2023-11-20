import React, { useState } from 'react';
import { FaHome, FaUsers, FaActivities, FaPlusSquare } from 'react-icons/fa'; // Importing icons
import HomePage from '../../HomePage';
import Groups from './Groups';
import MyActivity from './MyActivity';
import PostPage from './PostPage';

export default function NavigationBar() {
    const [activePage, setActivePage] = useState('home');

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HomePage />;
            case 'groups':
                return <Groups />;
            case 'myActs':
                return <MyActivity />;
            case 'post':
                return <PostPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div>
            <div className="button-bar">
                <button onClick={() => setActivePage('home')}><FaHome /> Home</button>
                <button onClick={() => setActivePage('groups')}><FaUsers /> Groups</button>
                <button onClick={() => setActivePage('myActs')}><FaActivities /> My Acts</button>
                <button onClick={() => setActivePage('post')}><FaPlusSquare /> Post</button>
            </div>
            <div className="page-content">
                {renderPage()}
            </div>
        </div>
    );
}
