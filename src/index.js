import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 


import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk)) // this is how we hook up a middleware to a redux store\
// <Provider makes the redux store available to any nested components that are wrapped in the connect() function
// Redux thunk is a middleware that lets you call action creators that return a function instead of an object. 
// ^^ the function recieves the stores dispatch method, which is then used to dispatch regular synchronous actions inside the body of the func once the asynch operations are completed
ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>, 
    document.querySelector('#root')
)