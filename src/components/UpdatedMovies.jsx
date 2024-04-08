import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImgURL } from '../Utils/Constants';
import { addUpdatedMovies } from '../Utils/MovieSlice';

const UpdatedMovies = () => {
    const dispatch=useDispatch()
    const UpdatedMovies=useSelector(store=>store.movies.UpdatedMovies)
    const [Movies,setMovies]=useState([])
    async function getmovies(){
        const movies= await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=2&type=upcoming")
        const json=await movies.json()
        // console.log(json);
        setMovies(json.events)
        dispatch(addUpdatedMovies(json.events))


    }
    useEffect(()=>{
        getmovies()
    },[])
  return (
    <div className='relative  -top-24 h-auto'>
        <h1 className='p-4  font-bold text-2xl'>upcoming Events --</h1>
        <div className=' flex flex-wrap '>
     {
         UpdatedMovies && UpdatedMovies.map((movie,index)=>(
             <ul key={index} className=" p-4 m-8 lg:m-4 lg:p-4 w-[350px] lg:w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200  border border-[#B0BABF]  ">
             <li className='w-54'><img className='w-72 rounded-lg' src={ImgURL}></img></li>
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