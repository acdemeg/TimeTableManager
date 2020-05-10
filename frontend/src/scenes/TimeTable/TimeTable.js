import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchTimeTables } from '../../store/actions';
import Table from './Table';
import { timeTableTypeEnum, scenesEnum } from '../../constants';
import styles from './TimeTable.scss';
import timeTableHeader from '../TimeTables/TimeTables.scss';
import WithData from '../../components/hoc-helpers/WithData';
import OrderModal from './OrderModal';
import Notification from '../../components/Notification';

const TimeTableDetailField = ({ fieldName, info }) => {
  return (
    <div>
      <b>{fieldName}</b>
      &emsp;
      {info}
    </div>
  );
};

const TimeTable = ({
  timeTables,
  isOpenModal,
  openModal,
  handleCancel,
  handleSubmit,
  handleReject,
  titleModal,
  typeModal,
  notifications,
}) => {
  const params = useParams();
  const scheduleId = Number(params.id);
  const timeTable = timeTables.filter(val => val.id === scheduleId)[0];
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
        <Table
          slotSize={slotSize}
          countColumns={countColumns}
          startDate={startDateObj}
          openModal={openModal}
        />
      </div>
      {!isOpenModal ? null : (
        <OrderModal
          title={titleModal}
          typeModal={typeModal}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          onReject={handleReject}
        />
      )}
      <Notification notifications={notifications} currentScene={scenesEnum.TIME_TABLE} />
    </div>
  );
};

export default WithData(TimeTable, fetchTimeTables);
