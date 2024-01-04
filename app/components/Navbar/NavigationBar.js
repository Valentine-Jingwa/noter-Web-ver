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
            auth.signOut();
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
            <div className="navbar bg-gray-800 text-white p-3 flex justify-between items-center fixed w-full top-0">
                
                <div className="flex items-center">
                    <Link href="/home" className="hover:text-gray-300">
                        <Image src="/favicon.ico" alt="logo" width={50} height={50} />   
                    </Link>
                    <h1 className="text-xl font-bold ml-2">ParFind</h1>
                </div>
                <ul className="pagelist flex space-x-12">

                    <li onClick={() => onNavClick('home')} className="pagelistitems ">
                        <HomeIcon className="h-6 w-6" />
                        Home
                    </li>
                    <li onClick={() => onNavClick('community')} className="pagelistitems">
                        <UserGroupIcon className="h-6 w-6" />
                        Community</li>
                    <li onClick={() => onNavClick('nearbyActivities')} className="pagelistitems">
                        <MapIcon className="h-6 w-6" />
                        Near By activities</li>
                    <li onClick={() => onNavClick('createActivities')} className="pagelistitems">
                        <FireIcon className="h-6 w-6" />
                        Create Activity</li>
                </ul>

                <div className="flex items-center space-x-10">
                    <div ref={notificationRef}>
                        <BellIcon className="h-6 w-6 pagelistitems" onClick={() => setShowNotification(!showNotification)} />
                        {showNotification && (
                            <div className="absolute right-20 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 h-[250px]">
                                {/* Notification items */}
                            </div>
                        )}
                    </div>


                    <div ref={dropdownRef}>
                    <DotsHorizontalIcon className="h-6 w-6 pagelistitems" onClick={() => setShowDropdown(!showDropdown)} />
                    {showDropdown && (
                        <div className="absolute flex flex-col items-center right-2 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            {/* Dropdown items */}
                            <div className="nav-block ">
                                Profile
                            </div>
                            <div className="nav-block ">
                                Account
                            </div>
                            <div className="nav-block ">
                                Settings
                            </div>
                            <hr className="my-1"/>
                            <button className="block px-4 py-2 text-sm text-white bg-gray-800 rounded hover:bg-gray-700 w-11/12" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </>
    );
}
