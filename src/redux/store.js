import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './combineReducers';

// array with filter keys


export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);
