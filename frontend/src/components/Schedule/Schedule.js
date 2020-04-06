import React from 'react';
import styles from './Schedule.scss';

const Schedule = ({ schedule }) => {
  const { title, slotSize, period } = schedule;
  return (
    <div>
      <div className={styles.schedule}>
        <div className={styles.title}>{title}</div>
        <div>
          Timetable type: &nbsp;
          <p>
            <i>{slotSize}</i>
          </p>
        </div>
        <div>
          Timetable period: &nbsp;
          <p>
            <i>{period}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
