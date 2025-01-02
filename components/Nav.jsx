'use client'
import React, { useState } from 'react';
import Image from 'next/image';  
import Link from 'next/link';
import Loginbutton from './Loginbutton'
import { signOut } from 'next-auth/react'
const Nav =  () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const session = await getServerSession()
  // console.log(session)
  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-center w-full z-50 py-3 '>
      <div className="flex justify-between items-center bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:via-orange-600 hover:to-amber-600 w-[90%] py-3 rounded-2xl px-4 sm:px-8 md:px-12 shadow-lg gap-4 sm:gap-10 transition-all duration-300">
        <Link href="/">
          <Image  
            src="/logo.jpg" 
            alt="logo" 
            width={70} 
            height={70} 
            className='rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300' 
          />
        </Link>
        
        <div className='hidden sm:flex justify-center items-center text-white text-sm sm:text-lg gap-8 sm:gap-16'>
          <Link href="/">
            <span className='hover:text-gray-200 transition-colors duration-200 cursor-pointer font-inter font-normal text-xl'>About</span>
          </Link>
          <Link href="/portfolio">
            <span className='hover:text-gray-200 transition-colors duration-200 cursor-pointer font-inter font-normal text-xl'>Portfolio</span>
          </Link>
          <Link href="/stocks">
            <span className='hover:text-gray-200 transition-colors duration-200 cursor-pointer font-inter font-normal text-xl'>Stocks</span>
          </Link>
        </div>

        <div className='hidden sm:flex justify-center items-center gap-4 sm:gap-8'>
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="bg-black text-white px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base 
              rounded-full hover:bg-white hover:text-black transition-colors duration-200
              shadow-md font-montserrat  whitespace-nowrap"
          >  
            Sign Out
          </button>
          <Loginbutton />
        </div>

        <div className='sm:hidden flex items-center' onClick={toggleMenu}>
          <Loginbutton   className=' cursor-pointer'/>
        </div>
      </div>

      {menuOpen && (
        <div className='absolute top-0 right-0 h-auto w-2/5 max-w-xs bg-[#E39855] flex flex-col items-start py-6 shadow-lg rounded-bl-2xl mt-3 mr-6 rounded-2xl'>
          <div className='absolute top-3 right-3 ' onClick={toggleMenu}> 
            <Loginbutton/>
         </div> 
          <Link href="/" className='py-4 pl-6 text-white hover:text-gray-200 transition-colors duration-200 w-full font-monserrat text-xl'>About</Link>
          <Link href="/portfolio" className='py-4 pl-6 text-white hover:text-gray-200 transition-colors duration-200 w-full font-monserrat  text-xl'>Portfolio</Link>
          <Link href="/stocks" className='py-4 pl-6 text-white hover:text-gray-200 transition-colors duration-200 w-full font-monserrat  text-xl'>Stocks</Link>
          <div className='flex justify-center items-center gap-2 sm:gap-4 ml-4'>
          <button 
                onClick={() => signOut()}
                className="bg-black text-white  px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base 
                  rounded-full
                  shadow-md font-montserrat font-semibold whitespace-nowrap"
              >
            Sign Out
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
