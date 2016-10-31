import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BenchesReducer from './benches_reducer';
import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  benches: BenchesReducer,
  filters: FiltersReducer
});

export default RootReducer;
