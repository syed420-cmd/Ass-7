import React from 'react'
import User from '../../assets/user.png'
const Nav = () => {
  return (
    <>
        <nav className="bg-white flex items-center justify-between px-4 py-2 my-5">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <h1 className='font-bold text-[32px] text-[#150B2B]'>Recipe Calories</h1>
        {/* Menu items */}
        <ul className="flex space-x-4 ml-[400px] text-gray-900 text-[16px] font-medium">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">Recipe</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">Search</a>
          </li>
        </ul>
      </div>
      {/* Search bar */}
      <div className="flex items-center">
        <input type="text" className="border border-gray-700 bg-gray-700 text-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" placeholder="Search..." />
        <span className="ml-2 text-gray-900">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <img className='h-[30px] w-[30px] ml-[6px]' src={User} alt=''></img>
      </div>
     
    </nav>
    
    </>
  )
}

export default Nav