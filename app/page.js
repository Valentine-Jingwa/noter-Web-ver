'use client';
import React from 'react';
import HomePage from './components/Home/page';
import LoginPage from './components/Login/page';
import { AuthContextProvider } from './components/_utils/auth-context';

export default function Page () {
  return (
    <AuthContextProvider>
        <LoginPage />
      </AuthContextProvider>
  );
}

