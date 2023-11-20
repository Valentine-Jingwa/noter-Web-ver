//Its gonna contain a component that creates a dropdown menu
"use client";
import React, { useState } from "react";

export default function CustomDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Profile", value: "p" },
    { label: "My account", value: "m" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Reddit Coins", value: "redditCoins" },
    { label: "Premium", value: "premium" },
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left text-black">
      <button
        onClick={toggleDropdown}
        className="bg-red-300 px-2 py-2 rounded text-black"
      >
        {selectedOption ? selectedOption : "Options"}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
