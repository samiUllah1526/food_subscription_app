import { combineReducers } from 'redux'
import usersReducer from './userSlice'
import postsReducer from './postSlice'

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
})
