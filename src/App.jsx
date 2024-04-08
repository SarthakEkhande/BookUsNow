import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import RecommandedShows from './components/RecommandedShows'
import UpdatedMovies from './components/UpdatedMovies'
import appStore from './Utils/appStore'
import { Provider } from 'react-redux';
import Body from './components/Body'


function App() {
  

  return (
   
    //  <div className='bg-red-500'>Sarthak</div>
    <Provider store={appStore}>
        <Body/>
      
    </Provider>
      
    

 
    
   
    
   
    
  )
}

export default App
