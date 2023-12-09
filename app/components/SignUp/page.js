'use client';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../_utils/firebase'; // Ensure correct path

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Redirect or do something upon successful sign-up
            console.log('User created successfully');
        } catch (error) {
            console.error('Sign up error:', error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form 
                onSubmit={handleSignUp} 
                className="bg-white p-6 rounded shadow-md"
            >
                <h1 className="text-xl font-bold mb-4">Sign Up</h1>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="mb-3 p-2 w-full border rounded"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-3 p-2 w-full border rounded"
                />
                <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="mb-3 p-2 w-full border rounded"
                />
                <button 
                    type="submit" 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Sign Up
                </button>
                <p className="text-center text-black my-3">Already have an account? <a href="/components/Login" className="text-blue-500">Login</a></p>
            </form>
        </main>
    );
}
