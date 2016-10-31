import { REQUEST_BENCHES, receiveBenches, requestBenches } from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { fetchBenches } from '../util/bench_api_utils';

export default ({ getState, dispatch }) => next => action => {
  const success = benches => dispatch( receiveBenches( benches ) );

  switch(action.type) {
    case UPDATE_BOUNDS:
      next(action);
      dispatch( requestBenches() );
    break;
    case REQUEST_BENCHES:
      const filters = getState().filters
      fetchBenches(filters, success);
      break;
  }

  return next(action);
};
