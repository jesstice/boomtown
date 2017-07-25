import { combineReducers } from 'redux';
import client from '../config/apolloClient';

import { itemsReducer } from './modules/items';
import { authReducer } from './modules/auth';

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    apollo: client.reducer()
});
