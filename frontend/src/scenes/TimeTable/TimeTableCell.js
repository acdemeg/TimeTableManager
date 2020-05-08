import React from 'react';
import styles from './TimeTable.scss';

const TimeTableCell = ({ attributeTitle = '', attributeDescription = '' }) => {
  return (
    <div>
      <b>{attributeTitle}</b>
      &emsp;
      <p>{attributeDescription}</p>
    </div>
  );
};

const TimeCell = ({ time }) => {
  return <div className={styles.timeCell}>{time}</div>;
};

export { TimeTableCell, TimeCell };
