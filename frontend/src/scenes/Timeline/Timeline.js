import React from 'react';
import timeTableHeader from '../TimeTables/TimeTables.scss';
import WithData from '../../components/hoc-helpers/WithData';
import style from './Timeline.scss';

//* ***  NOT COMPLETED */
const Timeline = () => {
  return (
    <div>
      <div className={timeTableHeader.googleFont}>Timeline</div>
      <div>
        <p className={style.title}>Upcoming events</p>
        <div />
      </div>
      <div>
        <p className={style.title}>Previous events</p>
        <div />
      </div>
    </div>
  );
};

export default WithData(Timeline, () => () => {
  return null;
});
