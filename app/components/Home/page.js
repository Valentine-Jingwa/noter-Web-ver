"use client";
import React, { useState } from 'react';
import Link from 'next/link'
import Login from '../Login/page';
import ActiveFriendList from '../ActiveFriendList';
import MapStory from '../MapStory';
import MiddleBody from '../MiddleBody';
import Navbar from '../Navbar/NavigationBar';
import FeaturedPosts from './featuredposts';
import HomeLayout from './HomeLayout';
import Community from '../Community/Community';
import NearbyActivities from '../Activities/NearbyActivities';
import CreateActivity from '../Activities/CreateActivity';
import { AuthContextProvider } from '../_utils/auth-context';

export default function Page() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavClick = (view) => {
    setCurrentView(view);
  };
  
  return (
    <>
    {/* grid-flow-col */}
      <main className="relative">
        <AuthContextProvider>
          <Navbar onNavClick={handleNavClick}/>
        </AuthContextProvider>
        {currentView === 'home' && <HomeLayout />}
        {currentView === 'community' && <Community />}
        {currentView === 'nearbyActivities' && <NearbyActivities />}
        {currentView === 'createActivities' && <CreateActivity />}
      </main>
    </>
  );
}

