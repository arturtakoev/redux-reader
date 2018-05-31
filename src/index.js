
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { selectSource, fetchPostsIfNeeded, fetchNews, subredditUrl } from './actions'
import { createLogger } from 'redux-logger'

require('./assets/newsIcon.png')
import styles from '../style/index.css';

//import 'babel-polyfill';

import App from './components/App';
import rootReducer from './reducers';
import { SOURCES } from './actions/sources';
import initState from './state_init';


//const loggerMiddleware = createLogger()

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
)

const initialState = {
  postsBySource: {},
  selectedSources: initState(SOURCES, {}, false),
  toggleMenu: {isVisible: true}
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.wrapper'));