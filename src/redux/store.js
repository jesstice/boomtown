import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './combineReducers';

// array with filter keys
export const tags = [
    {
        Name: 'Electronics',
        Selected: false
    },
    {
        Name: 'Household Items',
        Selected: false
    },
    {
        Name: 'Musical Instruments',
        Selected: false
    },
    {
        Name: 'Physical Media',
        Selected: false
    },
    {
        Name: 'Recreational Equipment',
        Selected: false
    },
    {
        Name: 'Sporting Goods',
        Selected: false
    },
    {
        Name: 'Tools',
        Selected: false
    }
];

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);
