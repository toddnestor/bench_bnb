import { RECEIVE_BENCHES } from '../actions/bench_actions';

const _defaultState = {};

const BenchesReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case RECEIVE_BENCHES:
      return action.benches
      break;
    default:
      return state;
  }
}

export default BenchesReducer;
