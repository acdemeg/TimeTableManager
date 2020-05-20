import React from 'react';
import styles from '../TimeTables/TimeTables.scss';
import { fetchTimeTables } from '../../store/actions';
import WithData from '../../components/hoc-helpers/WithData';
import TimeTableInfo from './TimeTableInfo';
import Container from '../TimeTables/ContainerStyle';

const TimeTablesInfo = ({ timeTables }) => {
  if (timeTables.length === 0) {
    return <div className={styles.googleFont}>Empty list Orders</div>;
  }

  return (
    <div>
      <div className={styles.googleFont}>Orders</div>
      <Container>
        {timeTables.map(timeTable => (
          <TimeTableInfo key={timeTable.id} timeTable={timeTable} />
        ))}
      </Container>
    </div>
  );
};

export default WithData(TimeTablesInfo, fetchTimeTables);
