import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import client from '../config/apolloClient';
import reducers from './combineReducers';


export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
      client.middleware()
    )
  )
);
