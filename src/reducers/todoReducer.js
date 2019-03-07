import { ADD_TASK } from '../constants';

const initialState = {
    folders: [],
    tasks: [],
};

function todoReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return ADD_TASK_FUNC(state, action); 
        default:
            return state;
    }
}

function ADD_TASK_FUNC(state, action) {
    let title = action.payload.title;
    let folder = action.payload.folderName;
    
    return { ...state, tasks:  [...state.tasks, { title, folder }] }; 
}

export default todoReducer;