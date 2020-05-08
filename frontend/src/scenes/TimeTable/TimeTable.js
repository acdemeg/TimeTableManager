import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorIndicator from '../../components/Error-boundry/Error-indicator';
import Spinner from '../../components/Spinner';
import { fetchTimeTables } from '../../store/actions';
import Table from './Table';
import { timeTableTypeEnum } from '../../constants';
import styles from './TimeTable.scss';
import timeTableHeader from '../TimeTables/TimeTables.scss';

const TimeTableDetailField = ({ fieldName, info }) => {
  return (
    <div>
      <b>{fieldName}</b>
      &emsp;
      {info}
    </div>
  );
};

const TimeTable = ({ timeTable }) => {
  const { title, startDate, endDate, slotSize } = timeTable;
  const startDateObj = new Date(Date.parse(startDate));
  const endDateObj = new Date(Date.parse(endDate));
  const millisecInWeek = 604800000;
  const millisecInDay = 86400000;
  const countColumns =
    slotSize === timeTableTypeEnum.DAY
      ? Math.ceil((endDateObj - startDateObj) / millisecInWeek)
      : Math.ceil((endDateObj - startDateObj) / millisecInDay);

  return (
    <div className={styles.timeTable}>
      <div className={timeTableHeader.googleFont}>Timetable details</div>
      <div className={styles.detailFields}>
        <TimeTableDetailField fieldName="Name:" info={title} />
        <TimeTableDetailField fieldName="Type:" info={slotSize} />
        <TimeTableDetailField
          fieldName="Period:"
          info={`${startDateObj.getDate()}
            ${startDateObj.toLocaleString('eng', { month: 'long' })}
            ${startDateObj.getFullYear()} year
              - 
            ${endDateObj.getDate()}  
            ${endDateObj.toLocaleString('eng', { month: 'long' })}  
            ${endDateObj.getFullYear()} year`}
        />
        <TimeTableDetailField fieldName="Required order attributes:" info="Name" />
        <TimeTableDetailField fieldName="Order attributes:" info="Description" />
      </div>
      <div className={styles.table}>
        <Table slotSize={slotSize} countColumns={countColumns} startDate={startDateObj} />
      </div>
    </div>
  );
};

const TimeTableContainer = ({ timeTables, loading, error, notifications, fetchSchedules }) => {
  useEffect(() => {
    fetchSchedules();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  const scheduleId = Number(useParams().id.slice(1));
  const timeTable = timeTables.filter(val => val.id === scheduleId)[0];

  return <TimeTable timeTable={timeTable} notifications={notifications} />;
};

const mapStateToProps = ({ timeTablesList: { timeTables, loading, error } }) => ({
  timeTables,
  loading,
  error,
});

const mapDispatchToProps = dispatch => ({
  fetchSchedules: fetchTimeTables(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeTableContainer);
