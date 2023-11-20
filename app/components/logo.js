import React from "react";

const Logo = () => {
  return (
    <div className="flex ml-6 w-56">
      {/* The image for the app name goes here*/}
      <h1 className="p-2 text-4xl font-bold mt-2">LesMit</h1> 
      <img src="/favicon.jpg" alt="logo" className="w-1/4" />
    </div>
  );
};
export default Logo;