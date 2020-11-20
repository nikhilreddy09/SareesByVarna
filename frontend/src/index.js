import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './Reducers'
import App from './Components/App'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset:'20px',
  transition: transitions.FADE
}

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render( 
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />      
      </AlertProvider>
    </Provider>,
    document.getElementById('root'));