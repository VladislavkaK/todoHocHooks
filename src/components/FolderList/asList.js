import {compose, withReducer} from 'recompose';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    
    return {
        'folders': state.mainReducer.folders,
        'currentFolder': state.ui.currentFolder
    };
}

const asList = compose(
    connect(mapStateToProps, null)
)

export default asList;