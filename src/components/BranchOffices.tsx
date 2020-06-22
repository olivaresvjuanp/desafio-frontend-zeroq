import React from 'react';
import { CSSTransition } from 'react-transition-group';

import BranchOfficeCard from './BranchOfficeCard';

import {
  BranchOffice,
  BranchOfficesState
} from '../store/branch-offices/types';

import { SearchState } from '../store/search/types';

import './BranchOffices.scss';

export interface BranchOfficesProps {
  branchOfficesReducer: BranchOfficesState;
  searchReducer: SearchState;
  thunkGetOffices: any;
}

interface BranchOfficesLocalState {
  showCards: boolean;
}

class BranchOffices extends React.Component<BranchOfficesProps, BranchOfficesLocalState> {
  constructor(props: BranchOfficesProps) {
    super(props);

    this.state = {
      showCards: false
    };
  }

  componentDidMount() {
    this.props.thunkGetOffices();
  }

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          classNames='fade'
          in={this.props.branchOfficesReducer.loading}
          onExited={(): void => {
            this.setState({ showCards: true });
          }}
          timeout={250}
          unmountOnExit
        >
          <img id="loading" src="./loading.svg" alt="loading" />
        </CSSTransition>
        <CSSTransition
          classNames='fade'
          in={this.state.showCards}
          timeout={250}
          unmountOnExit
        >
          <div id="cards">
            {
              this.props.branchOfficesReducer.branchOffices.map((branchOffice: BranchOffice) => {
                if (branchOffice.name.toLowerCase().includes(this.props.searchReducer.filter.toLowerCase())) {
                  return (
                    <BranchOfficeCard
                      key={branchOffice.name}
                      name={branchOffice.name}
                      online={branchOffice.online}
                      location={branchOffice.location}
                      category={branchOffice.category}
                      lines={branchOffice.lines}
                    />
                  );
                }
              })
            }
          </div>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default BranchOffices;
