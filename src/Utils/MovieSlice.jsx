
import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movies",
    initialState:{
        NowplayingMovies:null,
        UpdatedMovies:null
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.NowplayingMovies=action.payload;

        },
        addUpdatedMovies:(state,action)=>{
            state.UpdatedMovies=action.payload
        }

    },
})
export const {addNowplayingMovies,addUpdatedMovies}=MovieSlice.actions
export default MovieSlice.reducer