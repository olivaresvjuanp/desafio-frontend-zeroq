import { connect } from 'react-redux';

import Search from '../components/Search';
import { AppState } from '../store';
import { setFilter } from '../store/search/actions';

const mapStateToProps = (state: AppState) => ({
  searchReducer: state.searchReducer
});

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
