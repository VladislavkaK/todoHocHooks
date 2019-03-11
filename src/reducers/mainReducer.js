import { FILL_STATE } from "../constants";

const initialState = {
  folders: [],
  tasks: []
};

function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FILL_STATE:
      return FILL_STATE_FUNC(state, action);
    default:
      return state;
  }
}

function FILL_STATE_FUNC(state, action) {
  state = action.payload;
  return state;
}

export default mainReducer;
