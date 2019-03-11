import { compose, withReducer } from "recompose";
import { connect } from "react-redux";
import loadTodoData from "../../actions/loadTodoData";
import initCurrentFolder from "../../actions/initCurrentFolder";
import { FILL_STATE } from "../../constants";

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch(loadTodoData()).then(() => {
        dispatch(initCurrentFolder());
      });
    }
  };
}

const asContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default asContainer;
