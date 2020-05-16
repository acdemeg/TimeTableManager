import React from 'react';
import { TimeTableCell, TimeCell } from './TimeTableCell';
import DateUtils from './date_utils';

const TimeTableColumn = ({ orders, period, countCell, openModal, slotSize }) => {
  const rows = [];
  const date = new DateUtils(slotSize, period);
  rows.push(<TimeCell time={period.string} key={0} />);

  for (let i = 1; i <= countCell; i += 1) {
    rows.push(
      <TimeTableCell
        key={i}
        order={date.getOrderForCell(orders, i)}
        openModal={openModal}
        date={date.getPeriodForCells(i).string}
      />,
    );
  }
  return rows;
};

export default TimeTableColumn;
