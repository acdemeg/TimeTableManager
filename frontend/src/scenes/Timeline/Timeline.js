import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/Error-boundry/Error-indicator';
import timeTableHeader from '../TimeTables/TimeTables.scss';
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

const TimeLineContainer = ({ loading, error }) => {
  useEffect(() => {}, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <Timeline />;
};

const mapStateToProps = ({ timeTablesList: { timeTables, loading, error } }) => ({
  timeTables,
  loading,
  error,
});

export default connect(mapStateToProps, null)(TimeLineContainer);
