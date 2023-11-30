//Has a list of active friends and Clicking the name of the friend will open a chat window
//use create a const called chatWindow that opens a chat window user can have multiple chat windows open and can move, resize , minimise and close them. When it's minimised the chat window will become a circle with the profile icon of the user and if there is a message a subcircle will be budding out of the main one. You can write a text, upload an image or a document and send to another user.
import React, { useState } from 'react';
import { Rnd } from 'react-rnd'; // Make sure to install react-rnd

// Mock data for friends list
const friends = [
    { name: "Alice", id: 1 },
    { name: "Bob", id: 2 },
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
                    <button>Send</button>
                </div>
            </div>
        </Rnd>
    );
};

// ActiveFriendList component
export const ActiveFriendList = () => {
    const [openChats, setOpenChats] = useState([]);

    const openChat = (friend) => {
        if (!openChats.find(chat => chat.id === friend.id)) {
            setOpenChats(prevChats => [...prevChats, friend]);
        }
    };

    const closeChat = (friendId) => {
        setOpenChats(prevChats => prevChats.filter(chat => chat.id !== friendId));
    };

    return (
        <div className="active-friend-list">
            <input type="text" placeholder="Search LesMit" className="search-bar" />
            <h1 className="text-grey">ActiveFriendList</h1>
            <div className="friend-list">
                {friends.map(friend => (
                    <div key={friend.id} className="friend-item" onClick={() => openChat(friend)}>
                        {friend.name}
                    </div>
                ))}
            </div>
            {openChats.map(chat => (
                <ChatWindow key={chat.id} friend={chat} onClose={() => closeChat(chat.id)} />
            ))}
        </div>
    );
}
export default ActiveFriendList;