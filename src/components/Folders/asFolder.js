import { compose, withReducer, withHandlers } from "recompose";
import { connect } from "react-redux";
import { SET_CURRENT_FOLDER } from "../../constants";

function mapDispatchToProps(dispatch) {
  return {
    handleSelected(folderName) {
      dispatch({ type: SET_CURRENT_FOLDER, payload: { folderName } });
    }
  };
}

//TODO: почему то не работает handleSelected который ставит значение по умолчанию в папке
// Дело все в useEffect в Container2
const asFolder = compose(
  connect(
    null,
    mapDispatchToProps
  ), // порядок пердачи функции connect ВАЖЕН!!!
  withHandlers({
    onHandleSelected: ({ folderName, handleSelected }) => () => {
      handleSelected(folderName);
    }
  })
);

export default asFolder;
