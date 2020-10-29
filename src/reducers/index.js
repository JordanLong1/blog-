import { combineReducers } from 'redux';
import postsReducer from './PostsReducer'; 
import usersReducer from './UsersReducer.js'

export default combineReducers({
    posts: postsReducer, 
    users: usersReducer
});
