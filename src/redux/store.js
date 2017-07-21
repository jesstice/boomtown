import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import client from '../config/apolloClient';

import reducers from './combineReducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

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
