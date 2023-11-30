"use client";
import React from 'react';
import NavElements from './components/navelements';
import LightDarkModeSwitch from './components/test/LightDarkModeSwitch';
import FeaturedPosts from './components/Home/featuredposts';
import MapStory from './components/MapStory';
import MiddleBody from './components/MiddleBody';
export default function HomePage() {
  return (
    <>
      <main className='relative'>
        {/* <NavElements /> */}
          <LightDarkModeSwitch />
        <div>
          {/* Add additional content and components */}
          <div className="flex justify-center">
              <div className="absolute left-1 bg-red-200 w-1/3 mt-2 border border-black">
                <p>Stuff</p>
              </div>
              <div className=" absolute bg-red-200 w-3/6 m-2">
                {/* The div class below maps out a list of itemw with overflow on the x axis */}
                <MapStory />
                <MiddleBody />

                <p>Stuff</p>
              </div>
              <div className="absolute right-1 bg-red-200 w-1/6 h-20 mt-2">
                
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
