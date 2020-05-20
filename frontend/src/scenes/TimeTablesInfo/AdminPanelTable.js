import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchTimeTables } from '../../store/actions';
import { scenesEnum } from '../../constants';
import timeTableHeader from '../TimeTables/TimeTables.scss';
import WithData from '../../components/hoc-helpers/WithData';
import Notification from '../../components/Notification';
import SlotInfo from './SlotInfo';

const AdminPanelTable = ({
  timeTables,
  currentTimeTable,
  notifications,
  // orderUpdateStatus,
}) => {
  let timeTable;

  if (currentTimeTable) {
    timeTable = currentTimeTable;
  } else {
    const params = useParams();
    const scheduleId = Number(params.id);
    timeTable = [...timeTables.filter(val => val.id === scheduleId)];
  }

  const { /* id, */ title, /* startDate, endDate, attributes, */ slotSize, orders } = timeTable;

  return (
    <div>
      <div className={timeTableHeader.googleFont}>{title}</div>
      {orders.map(order => (
        <SlotInfo key={order.id} slotSize={slotSize} order={order} />
      ))}
      <Notification notifications={notifications} currentScene={scenesEnum.ADMIN_PANEL_TABLE} />
    </div>
  );
};

export default WithData(AdminPanelTable, fetchTimeTables);
