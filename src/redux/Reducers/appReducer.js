import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    profile: {},
    repos: [],
    starred:[]
  
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   setUser: (state, action) =>{
    state.profile = action.payload
   },
   setRepos: (state, action) =>{
    state.repos = action.payload
   },
   setStarred: (state, action) =>{
    state.starred = action.payload
   },
  },
})

export const { setUser,setRepos,setStarred } = AppSlice.actions

export default AppSlice.reducer