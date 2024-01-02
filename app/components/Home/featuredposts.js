'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, XIcon, UserCircleIcon } from "@heroicons/react/outline";
import { ArrowsExpandIcon } from '@heroicons/react/solid';
import { db } from '../_utils/firebase'; // Import db from your firebase config file


export default function FeaturedPosts() {
    const [activities, setActivities] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const moreAboutPostRef = useRef(null);
    const modalRef = useRef(null);

    const toggleExpand = () => setIsExpanded(!isExpanded);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (moreAboutPostRef.current && !moreAboutPostRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
            const unsubscribe = db.collection("MyPostCollection").onSnapshot(snapshot => {
                const activities = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setActivities(activities);
            });
    
            return () => unsubscribe(); // Clean up on unmount
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className={`flex m-4 justify-center bg-white p-8 w-full rounded-xl ${isExpanded ? 'h-auto' : 'h-[10vw]'}`}>
                <div className="p-8 w-full rounded-xl h-64 text-black">
                    {/* Content goes here */}
                    <UserCircleIcon className="h-12 w-12"/>
                    <span className="font-bold">Post Title - Location</span>
                </div>
                <div className="bg-red-100">
                    <ChevronDownIcon ref={moreAboutPostRef} className="h-6 w-6 cursor-pointer text-black hover:text-blue-400" onClick={toggleExpand} />
                    <ArrowsExpandIcon className="h-6 w-6 my-2 cursor-pointer text-black hover:text-blue-400" onClick={openModal} />
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-auto w-auto" ref={modalRef}>
                    <div className="relative top-20 mx-auto p-5 border w-[48vw] shadow-lg rounded-md bg-white" >
                        <div className="flex flex-col justify-between ">
                            <div className="flex justify-end">
                                <XIcon className="h-6 w-6 cursor-pointer text-blue-400 hover:text-red-600" onClick={closeModal} />
                            </div>
                            <UserCircleIcon className="h-12 w-12"/>
                            <span className="font-bold">Post Title - Location</span>
                            
                        </div>
                        {/* Add content like profile picture, location, photos here */}
                    </div>
                </div>
            )}
        </>
    )
}
