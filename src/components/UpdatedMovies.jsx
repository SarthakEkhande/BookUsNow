import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ImgURL } from '../Utils/Constants';

const UpdatedMovies = () => {
    const [Movies,setMovies]=useState([])
    async function getmovies(){
        const movies= await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=2&type=upcoming")
        const json=await movies.json()
        console.log(json);
        setMovies(json.events)


    }
    useEffect(()=>{
        getmovies()
    },[])
  return (
    <div className='relative  -top-36 left-28 h-auto'>
        <h1 className='p-4  font-bold text-2xl'>upcoming Events --</h1>
        <div className='flex overflow-x-auto whitespace-no-wrap '>
     {
         Movies.map((movie,index)=>(
             <ul key={index} className="m-4 p-4 w-[400px] rounded-lg bg-gray-100 hover:bg-gray-200  border border-[#B0BABF]  ">
             <li className='w-48'><img className='w-60 rounded-lg' src={ImgURL}></img></li>
             <li className='font-bold'>{movie.eventName}</li>
             <li>{movie.cityName}</li>
             <li>{movie.date.slice(0,10)}</li>
             <li>{movie.weather}</li>
             <li>{movie.distanceKm.slice(0,5)/10} Km</li>
            
             {/* {console.log(movie.cityName)} */}

             </ul>
         ))
     }
     </div>
    </div>
  )
}

export default UpdatedMovies