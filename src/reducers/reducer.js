import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import uiReducer from './uiReducer';

const appReducer = combineReducers({ mainReducer, ui: uiReducer });

const rootReducer = (state, action) => {

    if (action.type === 'CLEAR_STATE') {
        state = void(0);
    }

    return appReducer(state, action);

}

export default rootReducer;