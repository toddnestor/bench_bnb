import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const _defaultState = {};

const BenchesReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case RECEIVE_BENCHES:
      return action.benches
      break;
    case RECEIVE_BENCH:
      return _.merge({}, state, {[action.bench.id]: action.bench});
      break;
    default:
      return state;
  }
}

export default BenchesReducer;
