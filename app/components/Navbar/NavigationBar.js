'use client';
import {React, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BellIcon, InboxIcon, UserCircleIcon, DotsHorizontalIcon, HomeIcon, MapIcon, UserGroupIcon, FireIcon} from '@heroicons/react/solid';
// import { Bell, Inbox, UserCircle, DotsHorizontal, Home } from '@heroicons/react/solid';


export default function NavigationBar() {
    // Drop down for settings
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    // Drop down for notifications
    const [showNotification, setShowNotification] = useState(false);
    const NotificationDropdown = () => setShowNotification(!showNotification);

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

                    <Link href="/home" className="hover:text-gray-300 flex flex-col items-center space-x-2">
                        <HomeIcon className="h-6 w-6" />
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-300 flex flex-col items-center space-x-2">
                        <UserGroupIcon className="h-6 w-6" />
                        Community</Link>
                    <Link href="/services" className="hover:text-gray-300 flex flex-col items-center space-x-2">
                        <MapIcon className="h-6 w-6" />
                        Near By activities</Link>
                    <Link href="/contact" className="hover:text-gray-300 flex flex-col items-center space-x-2">
                        <FireIcon className="h-6 w-6" />
                        Create Activity</Link>
                </div>

                <div className="flex items-center space-x-10">
                       <BellIcon className="h-6 w-6" onClick={NotificationDropdown}/> 
                       {showNotification && (
                        
                        <div className="absolute right-10 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            {/* Add other menu items here */}
                        </div>
                    )}
                    
                <div className="relative">

                
                <DotsHorizontalIcon className="h-6 w-6 cursor-pointer" onClick={toggleDropdown} />
                {showDropdown && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        {/* Add other menu items here */}
                    </div>
                )}
            </div>
                    
                </div>
            </div>
        </>
    );
}
