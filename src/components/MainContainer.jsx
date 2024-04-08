import React from 'react'
import { ImgURL } from '../Utils/Constants'
ImgURL
const MainContainer = () => {
  return (
    <div className='relative'>
        <img className='w-full h-auto' src="https://i.pinimg.com/originals/69/d0/7f/69d07f5b4e21ac19a3bdebbbdd6d2cc1.jpg"  alt='mainimage'></img>
        <div className=' absolute top-16 left-[15%] font-bold text-6xl text-center'>
        {/* <h1>Discover Exiting Events Happening </h1><br></br>
        <h1>Near You Stay Tunes For Updates</h1> */}
        </div>
        
    </div>
  )
}

export default MainContainer