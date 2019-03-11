import { SET_CURRENT_FOLDER } from "../constants";

export default function initCurrentFolder() {
  return function(dispatch, getState) {
    const state = getState();

    dispatch({
      type: SET_CURRENT_FOLDER,
      payload: { folderName: state.mainReducer.folders[0] }
    });
  };
}
