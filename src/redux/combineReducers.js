import { combineReducers } from 'redux';
import client from '../config/apolloClient';

import { itemsReducer } from './modules/items';
import { authReducer } from './modules/auth';
import { shareReducer } from './modules/share';

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    share: shareReducer,
    apollo: client.reducer()
});
