"use client";
import React from 'react';
import Link from 'next/link';
import Login from './components/Login/LoginPage';
import ActiveFriendList from './components/ActiveFriendList';
import MapStory from './components/MapStory';
import MiddleBody from './components/MiddleBody';
export default function HomePage() {
  return (
    <>
    {/* grid-flow-col */}
      <main className="relative">
      <div className="sticky bg-black top-0 left-0 right-0 border border-black h-12 w-full p-1 flex items-center justify-between">
        <div className="flex items-center ml-4">
            <Link href="/">
                <img src="./favicon.ico" alt="Logo" className="h-10" /> {/* Logo */}
            </Link>
            <div className="relative ml-4">
                {/* Home button with dropdown */}
                <button className="text-white px-4 py-2">Home</button>
                <div className="absolute hidden bg-white shadow-lg rounded-lg mt-2">
                    {/* Dropdown content */}
                    <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Option 2</a>
                    {/* ... other options */}
                </div>
            </div>
        </div>

    {/* Search bar */}
    <input type="text" placeholder="Search" className="focus:outline-none text-black rounded-lg p-2 mr-4" />

    <div className="p-1 radanimation flex h-10 w-[150px] rounded-xl ">
        <div className="w-1/2 bg-green-400 rounded-l-lg text-center hover:bg-green-300"><Link href="/">Login</Link></div>
        <div className="w-1/2 bg-red-500 rounded-r-lg text-center hover:bg-red-400"><Link href="/">SignUp</Link></div>
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

