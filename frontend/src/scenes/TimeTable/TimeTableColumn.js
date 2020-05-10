import React from 'react';
import styles from './TimeTable.scss';
import { TimeTableCell, TimeCell } from './TimeTableCell';
import { typeModalEnum } from '../../constants';
import DateUtils from './date_utils';

const TimeTableColumn = ({ period, countCell, openModal, slotSize }) => {
  const rows = [];
  const date = new DateUtils(slotSize, period);

  rows.push(<TimeCell time={period.string} key={0} />);

  for (let i = 1; i <= countCell; i += 1) {
    rows.push(
      <div
        role="gridcell"
        tabIndex={0} // for lint
        className={styles.cell}
        key={i}
        onKeyDown={() =>
          openModal({
            type: typeModalEnum.ACCEPT_ORDER,
            title: date.getPeriodForCells(i).string,
          })
        }
        onClick={() =>
          openModal({
            type: typeModalEnum.CREATE_ORDER,
            title: date.getPeriodForCells(i).string,
          })
        }
      >
        <TimeTableCell />
      </div>,
    );
  }
  return rows;
};

export default TimeTableColumn;
