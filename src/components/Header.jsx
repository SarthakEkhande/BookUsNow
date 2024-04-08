import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center p-4 shadow-lg">
      {/* Left side: Top logo */}
      <div className=" mb-4 lg:mb-0">
        <h1 className='text-[#CF2D2D] font-bold text-2xl'>BookUsNow</h1>
      </div>

      {/* Middle: Categories and search */}
      <div className="flex-grow space-x-10   lg:flex-row justify-center lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-20">
        {/* Categories */}
        <select className="border border-gray-300 p-2 rounded-md lg:w-auto lg:text-center">
          <option className="text-gray-700 hover:text-gray-900 cursor-pointer">Category 1</option>
          <option className="text-gray-700 hover:text-gray-900 cursor-pointer">Category 2</option>
          <option className="text-gray-700 hover:text-gray-900 cursor-pointer">Category 3</option>
          {/* Add more categories as needed */}
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 rounded-md lg:w-96"
        />
      </div>

      {/* Right side: Favorite button */}
      <div className='flex justify-center m-5 lg:justify-end space-x-5'>
        <button className="border border-black font-bold py-2 px-4 rounded">
          Favorite
        </button>
        <button className="border border-black font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
