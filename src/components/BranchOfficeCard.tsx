import React from 'react';
import moment from 'moment';

import { BranchOffice } from '../store/branch-offices/types';

import 'moment-duration-format';

import './BranchOfficeCard.scss';

interface BranchOfficeCardProps extends BranchOffice {
}

const BranchOfficeCard: React.FunctionComponent<BranchOfficeCardProps> = (props) => {
  let totalWaiting: number = 0;
  let totalElapsed: number = 0;

  console.debug('branchOffice.name:', props.name);

  Object.keys(props.lines).forEach((key: string): void => {
    const line = props.lines[key];

    console.debug('line.name:', line.name);
    console.debug('line.waiting:', line.waiting);
    console.debug('line.elapsed:', line.elapsed);

    totalWaiting += line.waiting;
    totalElapsed += line.elapsed;
  });

  console.debug('Total waiting:', totalWaiting);
  console.debug('Total elapsed:', totalElapsed);

  return (
    <div id="card" className={props.online ? 'online' : 'offline'}>
      <p>{props.name}</p>
      <div>
        <div className="material-icons-container">
          <i className="material-icons">perm_identity</i>
        </div>
        <div className="card-data">{totalWaiting}</div>
        <div className="material-icons-container">
          <i className="material-icons">query_builder</i>
        </div>
        <div className="card-data">
          {moment.duration(totalElapsed, 'seconds').format('HH:mm:ss')}
        </div>
      </div>
    </div>
  );
}

export default BranchOfficeCard;
