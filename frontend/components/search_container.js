import { connect } from 'react-redux';
import Search from './search';
import { requestBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';
import { allBenches } from '../reducers/selectors';

const mapStateToProps = state => ({
  benches: allBenches( state )
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
