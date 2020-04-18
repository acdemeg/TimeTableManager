import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Schedule from '../../components/Schedule';
import styles from './TimeTables.scss';
import { fetchTimeTables } from '../../store/actions';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/Error-boundry/Error-indicator';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 5%;
`;

const TimeTables = ({ timeTables }) => (
  <div>
    <div className={styles.googleFont}>Available TimeTables</div>
    <Container>
      {timeTables.map(schedule => (
        <Schedule key={schedule.id} schedule={schedule} />
      ))}
    </Container>
  </div>
);

const TimeTablesContainer = ({ timeTables, loading, error, notifications, fetchSchedules }) => {
  useEffect(() => {
    fetchSchedules();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <TimeTables timeTables={timeTables} notifications={notifications} />;
};

const mapStateToProps = ({ timeTablesList: { timeTables, loading, error } }) => ({
  timeTables,
  loading,
  error,
});

const mapDispatchToProps = dispatch => ({
  fetchSchedules: fetchTimeTables(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeTablesContainer);
