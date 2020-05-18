import React from 'react';
import styled from '@emotion/styled';
import Schedule from '../../components/Schedule';
import styles from './TimeTables.scss';
import { fetchTimeTables } from '../../store/actions';
import ButtonAddTimeTable from '../../components/buttons/ButtonAddTimeTable';
import WithData from '../../components/hoc-helpers/WithData';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 5%;
`;

const TimeTables = ({ timeTables, profile }) => (
  <div style={{ textAlign: 'center' }}>
    <div className={styles.googleFont}>Available TimeTables</div>
    <Container>
      {timeTables.map(schedule => (
        <Schedule key={schedule.id} schedule={schedule} />
      ))}
    </Container>
    {profile.role === 'ADMIN' ? <ButtonAddTimeTable /> : null}
  </div>
);

export default WithData(TimeTables, fetchTimeTables);
