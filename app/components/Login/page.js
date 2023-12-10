'use client';
import React, { useState, useEffect } from 'react';

import {
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,

  } from 'firebase/auth';
  import { auth } from '../_utils/firebase'; // Ensure correct path

export default function LoginPage() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setShowModal(true);
            }
        });
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch(error => console.error('Login error:', error));
    };

    const signInWithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider).catch(error => console.error('Login error:', error));
    };

    const handleSignIn = (signInMethod) => {
        signInMethod();
        setShowModal(true);
    };

    const handleProceed = () => window.location.href = '/components/Home';
    const handleSignOut = () => auth.signOut();

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement your login logic here, possibly with Firebase
        console.log('Login with:', username, password);
    };


    return (
        
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form onSubmit={handleLogin} className="w-[400px] h-[500px] bg-white p-6 rounded shadow-md">
                <h1 className="text-xl text-black font-bold mb-4">Login to LesMit</h1>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="mb-3 p-2 w-full border rounded"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-3 p-2 w-full border rounded"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-7"
                >
                    Login
                </button>
                <p className="text-center text-black">Login With other accounts</p>
                <p className="text-center my-3">-----OR------</p>
                <button 
                    onClick={() => handleSignIn(signInWithGoogle)} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Sign in with Google
                </button>
                
                <button 
                    onClick={() => handleSignIn(signInWithGithub)} 
                    className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full mt-3"
                >Sign in with Github</button>
                 
                <p className="text-center text-black my-3">Don't have an account? <a href="/components/SignUp" className="text-blue-500">Sign up</a></p>
            </form>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p className='text-black'>Continue With Github</p>
                        <button className="btn btn-primary bg-red-400"onClick={handleSignOut}>No</button>
                        <button className="btn btn-primary bg-blue-400"onClick={handleProceed}>Yes</button>
                    </div>
                </div>
            )}
        </main>
    );
}
