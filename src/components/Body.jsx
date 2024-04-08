import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import RecommandedShows from './RecommandedShows'
import UpdatedMovies from './UpdatedMovies'

const Body = () => {
  return (
    <div>
         <Header/>
    <MainContainer/>
    <RecommandedShows/>
    <UpdatedMovies/>
    </div>
  )
}

export default Body