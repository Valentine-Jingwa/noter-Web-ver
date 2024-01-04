"use client";
import React from 'react';
import MapStory from '../MapStory';
import Navbar from '../Navbar/NavigationBar';
import FeaturedPosts from './featuredposts';
export default function HomeLayout() {
  
  return (
    <>
    {/* grid-flow-col */}
        <div className="flex justify-center mt-[5em]">
          <div className="mx-12 w-8/12 item-center bg-white rounded-xl scroll-p-10 p-4">           
            <MapStory />
            <div className="flex flex-row h-[100vh] bg-gray-800 rounded-xl item-center mt-2">
              <FeaturedPosts />
            </div>            
          </div>
        </div>
    </>
  );
}