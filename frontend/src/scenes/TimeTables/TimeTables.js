import React from 'react';
import styled from '@emotion/styled';
import Schedule from '../../components/Schedule';
import styles from './TimeTables.scss';

const TimeTables = () => {
  const schedules = [
    {
      id: 1,
      title: 'Study',
      slotSize: 'Hour',
      period: 'Sep 01 2020 - May 30 2020',
    },
    {
      id: 2,
      title: 'Study',
      slotSize: 'Hour',
      period: 'Sep 01 2020 - May 30 2020',
    },
    {
      id: 3,
      title: 'Study',
      slotSize: 'Hour',
      period: 'Sep 01 2020 - May 30 2020',
    },
    {
      id: 4,
      title: 'Study',
      slotSize: 'Hour',
      period: 'Sep 01 2020 - May 30 2020',
    },
    {
      id: 5,
      title: 'Study',
      slotSize: 'Hour',
      period: 'Sep 01 2020 - May 30 2020',
    },
    {
      id: 6,
      title: 'Study',
      slotSize: 'Hour',
      period: 'Sep 01 2020 - May 30 2020',
    },
  ];

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
  `;

  return (
    <div>
      <div className={styles.available}>Available TimeTables</div>
      <Container>
        {schedules.map(schedule => (
          <Schedule key={schedule.id} schedule={schedule} />
        ))}
      </Container>
    </div>
  );
};

export default TimeTables;
