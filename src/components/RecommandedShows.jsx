import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { driveUrl, ImgURL } from '../Utils/Constants';
import { useDispatch, useSelector } from 'react-redux'
import { addNowplayingMovies } from '../Utils/MovieSlice';


const RecommandedShows = () => {

    const dispatch = useDispatch()

    const NowplayingMovies=useSelector(store=>store.movies.NowplayingMovies)
    const movies=NowplayingMovies
    console.log(NowplayingMovies);

    // const [Movies,setMovies]=useState([])
   async function getmovies(){
       const movies=await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco")
       const json=await movies.json()
    //    console.log(json.events);
    //    setMovies(json.events)
       dispatch(addNowplayingMovies(json.events))
   }
   useEffect(()=>{
       getmovies()
   },[])
  return (
    <div className='relative -top-24 z-1  h-auto'>
     <h1 className='font-bold text-white  p-4 text-2xl'>Recommanded Shows</h1>
     {/* {console.log(Movies.cityName)} */}
     <div className='flex overflow-x-auto whitespace-no-wrap '>
     {
        movies && movies.map((movie,index)=>(
             <ul key={index} className="m-4  left-24 p-4 w-[400px] rounded-lg border border-[#B0BABF] bg-gray-100 hover:bg-gray-200 ">
             <li className='w-48 h-auto  '><img className='rounded-lg' alt='img' src={ImgURL}></img></li>
             {/* {console.log(driveUrl + movie.imgUrl.slice(32,-5))} */}
            {/* console.log(imgUrl) */}
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

export default RecommandedShows

//+ movie.imgUrl.slice(32)