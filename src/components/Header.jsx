import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-lg">
    {/* Left side: Top logo */}
    <div className="flex items-center">
     <h1 className='text-[#CF2D2D] font-bold text-2xl'>BookUsNow</h1>
      </div>

    {/* Middle: Categories and search */}
    <div className="flex-grow flex justify-center  space-x-20 ">
      {/* Categories */}
      <select className="flex space-x-10">
        <option className="text-gray-700 hover:text-gray-900 cursor-pointer">Category 1</option>
        <option className="text-gray-700 hover:text-gray-900 cursor-pointer">Category 2</option>
        <option className="text-gray-700 hover:text-gray-900 cursor-pointer">Category 3</option>
        {/* Add more categories as needed */}
      </select>

      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="border w-96 border-gray-300 p-2 rounded-md "
      />
    </div>

    {/* Right side: Favorite button */}
    <div className='space-x-5 flex'>
      <button className="border border-black font-bold py-2 px-4 rounded">
        Favorite
      </button>
      <button className=" border border-black font-bold py-2 px-4 rounded">
        Sign In
      </button>
    </div>
  </div>
  )
}

export default Header