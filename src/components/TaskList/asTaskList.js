import { compose, withReducer } from "recompose";
import { connect } from "react-redux";

// Селектор, возвращает название задачи
function getFolder(state, currentFolder) {
  let newTasks = state.todo.tasks;
  let { tasks } = state.mainReducer;
  let allTasks = Object.assign(newTasks, tasks);

  let folder = allTasks.filter((name, index) => {
    return name.folder === currentFolder;
  });

  return folder;
}

function mapStateToProps(state) {
  return {
    tasks: state.mainReducer.tasks,
    currentTask: getFolder(state, state.ui.currentFolder)
  };
}

const asTaskList = compose(
  connect(
    mapStateToProps,
    null
  )
);

export default asTaskList;
