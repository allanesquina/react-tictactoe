import { connect } from 'react-redux';
import { actions } from '../reducers/TictactoeReducer';
import Tictactoe from '../components/Tictactoe';

const mapActionCreators = {
  increaseRound: () => actions.increaseRound(),
  setMatrix: (matrix) => actions.setMatrix(matrix)
};

const mapStateToProps = (state) => {
  state = state.TictactoeReducer;
  return {
    round: state.round,
    matrix: state.matrix
  }
};

export default connect(mapStateToProps, mapActionCreators)(Tictactoe);
