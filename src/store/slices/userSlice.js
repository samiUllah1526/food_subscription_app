import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
      createPost(state, action) {},
      updatePost(state, action) {},
      deletePost(state, action) {},
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = UserSlice
  // Extract and export each action creator by name
  export const { createPost, updatePost, deletePost } = actions
  // Export the reducer, either as a default or named export
  export default reducer
  