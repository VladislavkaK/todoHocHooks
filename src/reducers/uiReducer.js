import { SET_CURRENT_FOLDER } from '../constants';

const initialState = {
    currentFolder: null
};

function uiReducer(state = initialState, action = {}) {
  
    switch (action.type) {
        case SET_CURRENT_FOLDER:
            return SET_CURRENT_FOLDER_FUNC(state, action); 
        default:
            return state;
    }

}

function SET_CURRENT_FOLDER_FUNC(state, action) {
    // console.log(action.payload.folderName)
    return {...state, currentFolder: action.payload.folderName};
}

export default uiReducer;