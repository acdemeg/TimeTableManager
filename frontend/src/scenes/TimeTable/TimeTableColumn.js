import React from 'react';
import styles from './TimeTable.scss';
import { TimeTableCell, TimeCell } from './TimeTableCell';

const TimeTableColumn = ({ period, countCell }) => {
  const rows = [];

  rows.push(<TimeCell time={period} key={0} />);

  for (let i = 1; i <= countCell; i + 1) {
    rows.push(
      <div className={styles.cell} key={i}>
        <TimeTableCell />
      </div>,
    );
  }
  return rows;
};

export default TimeTableColumn;
