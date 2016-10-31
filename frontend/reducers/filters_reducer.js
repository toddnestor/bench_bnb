import { UPDATE_BOUNDS } from '../actions/filter_actions';

const _defaultState = {
  bounds: {}
};

const FiltersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch( action.type ) {
    case UPDATE_BOUNDS:
      return _.merge({}, state, {bounds: action.bounds});
    default:
      return state;
  }
}

export default FiltersReducer;
