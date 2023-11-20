"use client";
import React from 'react';
import NavElements from './components/navelements';
import LightDarkModeSwitch from './components/test/LightDarkModeSwitch';
import FeaturedPosts from './components/Home/featuredposts';
export default function HomePage() {
  return (
    <>
      <main>
        <NavElements />
        <div>
          <FeaturedPosts />
          {/* Add additional content and components */}
          <LightDarkModeSwitch />
        </div>
      </main>
    </>
  );
}
