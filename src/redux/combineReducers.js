import { combineReducers } from 'redux';
import client from '../config/apolloClient';

import { itemsReducer } from './modules/items';
import { profileReducer } from './modules/profile';

export default combineReducers({
    itemsReducer,
    profileReducer,
    apollo: client.reducer()
});
