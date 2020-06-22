import { connect } from 'react-redux';

import BranchOffices from '../components/BranchOffices';
import { AppState } from '../store';
import { thunkGetOffices } from '../thunks';

const mapStateToProps = (state: AppState) => ({
  branchOfficesReducer: state.branchOfficesReducer,
  searchReducer: state.searchReducer
});

const mapDispatchToProps = {
  thunkGetOffices
};

export default connect(mapStateToProps, mapDispatchToProps)(BranchOffices);
