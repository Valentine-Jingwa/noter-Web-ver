'use client';
import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BellIcon, InboxIcon, UserCircleIcon, DotsHorizontalIcon, HomeIcon, MapIcon, UserGroupIcon, FireIcon} from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import { auth } from '../_utils/firebase'; // Adjust the import path



export default function NavigationBar({ onNavClick }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotification, setShowNotification] = useState(false);


    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);

    // Function to handle logout
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Handle successful sign out here (e.g., redirect to login page)
        }).catch((error) => {
            // Handle errors here
            console.error("Error signing out: ", error);
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotification(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownRef, notificationRef]);

    return (
        <>
            <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                
                <div className="flex items-center">
                    <Link href="/home" className="hover:text-gray-300">
                        <Image src="/favicon.ico" alt="logo" width={50} height={50} />   
                    </Link>
                    <span className="text-xl font-bold ml-2">LesMit</span>
                </div>
                <div className="hidden md:flex space-x-12">

                    <div onClick={() => onNavClick('home')} className="cursor-pointer hover:text-blue-400 flex flex-col items-center space-x-2">
                        <HomeIcon className="h-6 w-6" />
                        Home
                    </div>
                    <div onClick={() => onNavClick('community')} className="cursor-pointer hover:text-blue-400 flex flex-col items-center space-x-2">
                        <UserGroupIcon className="h-6 w-6" />
                        Community</div>
                    <div onClick={() => onNavClick('nearbyActivities')} className="cursor-pointer hover:text-blue-400 flex flex-col items-center space-x-2">
                        <MapIcon className="h-6 w-6" />
                        Near By activities</div>
                    <div onClick={() => onNavClick('createActivities')} className="cursor-pointer hover:text-blue-400 flex flex-col items-center space-x-2">
                        <FireIcon className="h-6 w-6" />
                        Create Activity</div>
                </div>

                <div className="flex items-center space-x-10">
                    <div ref={notificationRef}>
                        <BellIcon className="h-6 w-6 cursor-pointer hover:text-blue-400" onClick={() => setShowNotification(!showNotification)} />
                        {showNotification && (
                            <div className="absolute right-20 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 h-[250px]">
                                {/* Notification items */}
                            </div>
                        )}
                    </div>


                    <div ref={dropdownRef}>
                    <DotsHorizontalIcon className="h-6 w-6 cursor-pointer hover:text-blue-400" onClick={() => setShowDropdown(!showDropdown)} />
                    {showDropdown && (
                        <div className="absolute right-2 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 h-[250px]">
                            {/* Dropdown items */}
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account</a>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <hr className="my-1"/>
                            <button className="block px-4 py-2 text-sm text-white bg-red-700 rounded hover:bg-red-900 w-full text-left" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </>
    );
}
