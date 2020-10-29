export default (state = [], action) => {
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload; 
    // }
    // // if we ever see an action that doesnt have the type fetch posts 
    // // we arent going to worry about the action at all we are just going to return the previous state
    // // because remember we always have to NOT return undefined from a reducer
    // return state;
    switch(action.type) {
        case 'FETCH_POSTS': 
        return action.payload; 
        default:
            return state
    }
 }