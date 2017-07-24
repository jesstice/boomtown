import { combineReducers } from 'redux';
import client from '../config/apolloClient';

import { itemsReducer } from './modules/items';

export default combineReducers({
    itemsReducer,
    apollo: client.reducer()
});
