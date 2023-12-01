//Has a list of active friends and Clicking the name of the friend will open a chat window
//use create a const called chatWindow that opens a chat window user can have multiple chat windows open and can move, resize , minimise and close them. When it's minimised the chat window will become a circle with the profile icon of the user and if there is a message a subcircle will be budding out of the main one. You can write a text, upload an image or a document and send to another user.
import React, { useState } from 'react';
import { Rnd } from 'react-rnd'; // Make sure to install react-rnd

// Mock data for friends list
const friends = [
    { name: "Alice", id: 1 },
    { name: "Bob", id: 2 },
    { name: "Charlie", id: 3 },
    { name: "David", id: 4 },
    { name: "Eve", id: 5 },
    { name: "Frank", id: 6 },
    { name: "Grace", id: 7 },
    { name: "Heidi", id: 8 },
    { name: "Ivan", id: 9 },
    { name: "Judy", id: 10 },
    { name: "Mallory", id: 11 },
    { name: "Oscar", id: 12 },
    { name: "Peggy", id: 13 },
    { name: "Rupert", id: 14 },
    { name: "Sybil", id: 15 },
    { name: "Trudy", id: 16 },
    // ... more friends
];

// ChatWindow component
const ChatWindow = ({ friend, onClose }) => {
    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 480,
            }}
            minWidth={300}
            minHeight={300}
            bounds="parent"
        >
            <div className="chat-window">
                <header className="chat-header">
                    {friend.name}
                    <button onClick={onClose}>Close</button>
                </header>
                <div className="chat-content">
                    {/* Chat messages will be displayed here */}
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type a message..." />
                    <button className='VibrantBlue '>Send</button>
                </div>
            </div>
        </Rnd>
    );
};

// ActiveFriendList component
export const ActiveFriendList = () => {
    const [openChats, setOpenChats] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const openChat = (friend) => {
        if (!openChats.find(chat => chat.id === friend.id)) {
            setOpenChats(prevChats => [...prevChats, friend]);
        }
    };

    const closeChat = (friendId) => {
        setOpenChats(prevChats => prevChats.filter(chat => chat.id !== friendId));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredFriends = friends.filter(friend => 
        friend.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="active-friend-list">
                <input 
                    type="text" 
                    placeholder="Search LesMit" 
                    className="search-bar" 
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <h1 className="text-grey">ActiveFriendList</h1>
                <div className="friend-list">
                    {filteredFriends.map(friend => (
                        <div key={friend.id} className="friend-item rounded" onClick={() => openChat(friend)}>
                            {friend.name}
                        </div>
                    ))}
                </div>
                {openChats.map(chat => (
                    <ChatWindow key={chat.id} friend={chat} onClose={() => closeChat(chat.id)} />
                ))}
            </div>
            <div className="sticky active-friend-list mt-4 p-4">

            </div>
        </div>
    );
}
export default ActiveFriendList;