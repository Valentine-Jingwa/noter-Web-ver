"use client";
import React from 'react';
import Login from './components/Login/LoginPage';
import ActiveFriendList from './components/ActiveFriendList';
import MapStory from './components/MapStory';
import MiddleBody from './components/MiddleBody';
export default function HomePage() {
  return (
    <>
    {/* grid-flow-col */}
      <main className="relative mt-16">
        <div className="fixed bg-black top-0 left-0 right-0 border border-black h-12 w-full p-1">
            <div className=" bg-white flex h-10 w-[150px] rounded-xl absolute inset-y-1 right-1">
              <div className="w-1/2 bg-green-400 rounded-l-lg "></div>
              <div className="w-1/2 bg-red-500 rounded-r-lg"></div>
            </div>
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

