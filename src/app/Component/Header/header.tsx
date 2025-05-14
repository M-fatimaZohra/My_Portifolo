"use client";
import Link from "next/link";
import React from "react";
import { New_Rocker } from 'next/font/google'

const newRocker = New_Rocker({
  weight: "400",
  subsets: ["latin"],
});


function Header() {

    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

  return (
    <div className="flex  flex-row   justify-between items-center sm:py-2 py-0 px-8 bg-[#F9F9F9] shadow-md text-[#1A1A1A]">
      
      <div className="sm:text-[30px] text-[20px] py-2" style={newRocker.style}><Link href="/">FATIMA&apos;S PORTFOLIO</Link></div>

      <div className="sm:flex hidden flex-row gap-4 ">
        <Link href="/About" className="hover:-skew-6 transition-discrete duration-75">About</Link>
        <Link href="/Contact" className="hover:-skew-6 transition-discrete duration-75">Contact</Link>
        <Link href="/#work"  className="hover:-skew-6 transition-discrete duration-75">Work</Link>
      </div>
      
      <div className="flex flex-row sm:hidden  gap-4 items-center">
        <button className="inline-flex items-center justify-center p-2 
        rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
         focus:ring-offset-[#F9F9F9] focus:ring-[#1A1A1A]
          hover:bg-[#1A1A1A] hover:text-[#F9F9F9] transition
           duration-200 ease-in-out" 
           onClick={handleClick}>
 {isClicked ? "X" : "☰"}
        </button>
        
      </div>
      {isClicked && (
          <div className="flex sm:hidden flex-col bg-[#F9F9F9] rounded-md shadow-lg p-4 gap-2 border-2 border-[#1A1A1A] w-1/2  h-full fixed left-0 top-0">
             <button className="inline-flex items-center justify-center p-2 
        rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
         focus:ring-offset-[#F9F9F9] focus:ring-[#1A1A1A]
          hover:bg-[#1A1A1A] hover:text-[#F9F9F9] transition
           duration-200 ease-in-out" 
           onClick={handleClick}>
                X
        </button>
        <Link href="/About" className="hover:-skew-6 transition-discrete duration-75">About</Link>
        <Link href="/Contact" className="hover:-skew-6 transition-discrete duration-75">Contact</Link>
        <Link href="/#work"  className="hover:-skew-6 transition-discrete duration-75">Work</Link>
          </div>
        )}
    </div>
  );
}

export default Header;
