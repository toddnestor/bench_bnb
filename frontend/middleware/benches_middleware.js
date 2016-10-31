import { REQUEST_BENCHES, CREATE_BENCH, receiveBenches, requestBenches, receiveBench } from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { fetchBenches, createBench } from '../util/bench_api_utils';
import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const success = benches => dispatch( receiveBenches( benches ) );

  const createBenchSuccess = bench => {
    dispatch( receiveBench( bench ) );
    hashHistory.push('/');
  };

  switch(action.type) {
    case UPDATE_BOUNDS:
      next(action);
      dispatch( requestBenches() );
      return;
    case CREATE_BENCH:
      createBench(action.bench, createBenchSuccess);
      break;
    case REQUEST_BENCHES:
      const filters = getState().filters
      fetchBenches(filters, success);
      break;
  }

  return next(action);
};
