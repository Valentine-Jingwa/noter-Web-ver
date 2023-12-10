'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BellIcon, InboxIcon, UserCircleIcon, DotsHorizontalIcon, HomeIcon, MapIcon, UserGroupIcon, FireIcon} from '@heroicons/react/solid';
// import { Bell, Inbox, UserCircle, DotsHorizontal, Home } from '@heroicons/react/solid';


export default function NavigationBar({ onNavClick }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);

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
                        <Image src="/favicon.ico" width={50} height={50} />   
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
