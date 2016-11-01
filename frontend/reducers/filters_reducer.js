import { UPDATE_FILTER } from '../actions/filter_actions';

const _defaultState = {
  bounds: {},
  minSeating: 0,
  maxSeating: 10
};

const FiltersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case UPDATE_FILTER:
      return _.merge({}, state, {[action.filter]: action.value});
    default:
      return state;
  }
}

export default FiltersReducer;
