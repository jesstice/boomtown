import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import client from '../config/apolloClient';

import { itemsReducer } from './modules/items';
import { authReducer } from './modules/auth';
import { shareReducer } from './modules/share';

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    form: formReducer,
    share: shareReducer,
    apollo: client.reducer()
});
