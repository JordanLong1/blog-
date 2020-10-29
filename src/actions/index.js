import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder'

    export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts()); 

        const userIds = _.uniq(_.map(getState().posts, 'userId'))
        userIds.forEach( id => dispatch(fetchUser(id)))
    }

export const fetchPosts =  () => async (dispatch) => { // defining a function that will return a function

        const response = await jsonPlaceholder.get('/posts'); 

        dispatch({ type: 'FETCH_POSTS', payload: response.data }) // if we dont add .data onto our response here the response is going to
        // return a bunch of unneccessary stuff
    };

  
   export const fetchUser = id => async dispatch => {
       const response = await jsonPlaceholder.get(`/users/${id}`); 

       dispatch({ type: 'FETCH_USER', payload: response.data})
   }

    // export const fetchUser = (id) => (dispatch) => { // another function that returns another function
    //     // then payload property is response.data
    //     _fetchUser(id, dispatch)
    // };
    
    // // private function
    // const _fetchUser = _.memoize(async(id, dispatch) => {
    //     const response = await jsonPlaceholder.get(`/users/${id}`); 
    
    //     dispatch({ type: 'FETCH_USER', payload: response.data}) // dispatching an action with type FETCH USER

    // });

