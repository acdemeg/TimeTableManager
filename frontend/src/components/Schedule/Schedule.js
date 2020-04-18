import React from 'react';
import styles from './Schedule.scss';

const Schedule = ({ schedule }) => {
  const { title, startDate, endDate, slotSize } = schedule;
  const startDateObj = new Date(Date.parse(startDate));
  const endDateObj = new Date(Date.parse(endDate));

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
            <i>
              {`${startDateObj.getDate()}
             ${startDateObj.toLocaleString('eng', { month: 'long' })}
             ${startDateObj.getFullYear()} year
              - 
              ${endDateObj.getDate()}  
              ${endDateObj.toLocaleString('eng', { month: 'long' })}  
              ${endDateObj.getFullYear()} year`}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
