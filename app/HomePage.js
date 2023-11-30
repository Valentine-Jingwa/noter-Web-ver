"use client";
import React from 'react';
import ActiveFriendList from './components/ActiveFriendList';
import NavElements from './components/navelements';
import LightDarkModeSwitch from './components/test/LightDarkModeSwitch';
import FeaturedPosts from './components/Home/featuredposts';
import MapStory from './components/MapStory';
import MiddleBody from './components/MiddleBody';
export default function HomePage() {
  return (
    <>
    {/* grid-flow-col */}
      <main className="relative">
        <div className="sticky top-0 left-0 right-0 border border-black h-12 w-full rounded-xl">
            
        </div>
        <div className="flex justify-center mt-2">
          <div className="ml-8 flex-auto w-2/4  bg-white rounded-xl p-4">           
            <MapStory />
            <MiddleBody />
          </div>
          <div className="mx-4 flex-auto h-[600px] bg-white rounded-xl p-4">
            <div>
              <ActiveFriendList/>
            </div>
            <div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

