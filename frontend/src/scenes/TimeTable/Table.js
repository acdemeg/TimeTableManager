import React from 'react';
import styles from './TimeTable.scss';
import TimeTableColumn from './TimeTableColumn';
import { timeTableTypeEnum } from '../../constants';
import { TimeCell } from './TimeTableCell';

const Table = ({ slotSize, countColumns, startDate }) => {
  const columns = [];
  let period = startDate;
  const millisecInDay = 86400000;
  const countCell = slotSize === timeTableTypeEnum.DAY ? 7 : 24;

  const printStartPeriod = () => {
    return `${period.getDate()}
      ${period.toLocaleString('eng', { month: 'long' })}
      ${period.getFullYear()}`;
  };

  const printEndPeriod = () => {
    return `${new Date(period.getTime() + millisecInDay * 7).getDate()}
      ${new Date(period.getTime() + millisecInDay * 7).toLocaleString('eng', { month: 'long' })}
      ${new Date(period.getTime() + millisecInDay * 7).getFullYear()}`;
  };

  if (slotSize === timeTableTypeEnum.DAY) {
    columns.push(
      <div className={styles.column} key={0}>
        <TimeCell />
        <TimeCell time="Monday" />
        <TimeCell time="Thuesday" />
        <TimeCell time="Wednesday" />
        <TimeCell time="Thursday" />
        <TimeCell time="Friday" />
        <TimeCell time="Saturday" />
        <TimeCell time="Sunday" />
      </div>,
    );
  } else {
    const cells = [];

    for (let i = 1; i <= 25; i += 1) {
      if (i === 1) {
        cells.push(<TimeCell key={i} />);
      } else {
        cells.push(<TimeCell time={`${i - 2}:00`} key={i} />);
      }
    }

    columns.push(
      <div className={styles.column} key={0}>
        {cells}
      </div>,
    );
  }

  const getPeriod = currentCollumn => {
    if (slotSize === timeTableTypeEnum.HOUR) {
      if (currentCollumn === 1) {
        return printStartPeriod();
      }
      period = new Date(period.getTime() + millisecInDay);
      return printStartPeriod();
    }
    if (currentCollumn === 1) {
      return `${printStartPeriod()}
        -
        ${printEndPeriod()}`;
    }

    period = new Date(period.getTime() + millisecInDay * 7);
    return `${printStartPeriod()}
        -
        ${printEndPeriod()}`;
  };

  for (let i = 1; i <= countColumns; i += 1) {
    columns.push(
      <div className={styles.column} key={i}>
        <TimeTableColumn period={getPeriod(i)} countCell={countCell} />
      </div>,
    );
  }

  return columns;
};

export default Table;
