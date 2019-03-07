import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import uiReducer from './uiReducer';
import todoReducer from './todoReducer';

const appReducer = combineReducers({ mainReducer, ui: uiReducer, todo: todoReducer });

const rootReducer = (state, action) => {

    if (action.type === 'CLEAR_STATE') {
        state = void(0);
    }

    return appReducer(state, action);

}

export default rootReducer;