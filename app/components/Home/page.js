"use client";
import React from 'react';
import Link from 'next/link'
import Login from '../Login/page';
import ActiveFriendList from '../ActiveFriendList';
import MapStory from '../MapStory';
import MiddleBody from '../MiddleBody';
import Navbar from '../Navbar/NavigationBar';
import FeaturedPosts from './featuredposts';
export default function Page() {
  return (
    <>
    {/* grid-flow-col */}
      <main className="relative">
        <Navbar />
        <div className="flex flex-col-1 justify-center mt-2">
          <div className="sticky mx-12 w-8/12 item-center bg-white rounded-xl scroll-p-10 p-4">           
            <MapStory />
          </div>
          <div className="flex flex-row h-90 bg-white justify-center mt-2">
            </div>
        </div>
      </main>
    </>
  );
}

