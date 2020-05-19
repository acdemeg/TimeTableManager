import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TimeTablesInfo.scss';
import searchConflictOrders from './SearchConflictOrders';

const TimeTableInfo = ({ timeTable }) => {
  const { id, title, startDate, orders, endDate, slotSize } = timeTable;
  const startDateObj = new Date(Date.parse(startDate));
  const endDateObj = new Date(Date.parse(endDate));

  const conflictsOrders = searchConflictOrders(orders);

  if (conflictsOrders[0]) console.log(conflictsOrders);

  return (
    <div>
      <div className={styles.timeTableInfo}>
        <div className={styles.stateTable}>No new order requests</div>
        <div className={styles.bodyInfo}>
          <NavLink to={`/timeTableO/${id}`}>
            <div className={styles.title}>{title}</div>
          </NavLink>
          <div>
            Timetable type: &nbsp;
            <i>{slotSize}</i>
          </div>
          <div>
            Timetable period: &nbsp;
            <i>
              {`${startDateObj.getDate()}
              ${startDateObj.toLocaleString('eng', { month: 'long' })}
              ${startDateObj.getFullYear()} year
                - 
                ${endDateObj.getDate()}  
                ${endDateObj.toLocaleString('eng', { month: 'long' })}  
                ${endDateObj.getFullYear()} year`}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTableInfo;
