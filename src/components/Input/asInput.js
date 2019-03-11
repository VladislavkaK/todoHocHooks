import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { ADD_TASK } from "../../constants";

function mapStateToProps(state) {
  return {
    currentFolder: state.ui.currentFolder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(titleTask, nameFolder) {
      dispatch({
        type: ADD_TASK,
        payload: { title: titleTask, folderName: nameFolder }
      });
    }
  };
}

const asInput = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("task", "setTask", ""),
  withHandlers({
    handleSubmit: ({ currentFolder, addTask, setTask }) => e => {
      e.preventDefault();
      let title = e.target[0].value;

      if (title && currentFolder) {
        addTask(title, currentFolder);

        setTask("");
      }
    },
    addTask: ({ titleTask, nameFolder, addTask }) => e => {
      addTask(titleTask, nameFolder);
    },
    updateText: ({ setTask }) => e => {
      setTask(e.target.value);
    }
  })
);

export default asInput;
