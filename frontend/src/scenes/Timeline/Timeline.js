import React from 'react';
import styled from '@emotion/styled';
import timeTableHeader from '../TimeTables/TimeTables.scss';
import WithData from '../../components/hoc-helpers/WithData';
import { fetchTimeTables } from '../../store/actions';
import style from './Timeline.scss';
import Order from './Order';
import Notification from '../../components/Notification';
import { scenesEnum } from '../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Timeline = ({ timeTables, profile, notifications, removeOrder }) => {
  const events = [];

  timeTables.forEach(timeTable => {
    timeTable.orders.forEach(order => {
      if (profile.id === order.authorId) {
        events.push({
          slotSize: timeTable.slotSize,
          orderId: order.id,
          timeTableId: timeTable.id,
          timeTableTitle: timeTable.title,
          startDate: order.startDate,
          endDate: order.endDate,
          orderStatus: order.status,
          titleMainAttrib: timeTable.attributes[0] ? timeTable.attributes[0].title : null,
          attr: order.attributeValues.find(v => {
            if (order.attributeValues[0]) {
              return v.attributeId === timeTable.attributes[0].id;
            }
            return null;
          }),
        });
      }
    });
  });

  return (
    <div>
      <div className={timeTableHeader.googleFont}>Timeline</div>
      <div>
        <p className={style.title}>Upcoming events</p>
        <Container>
          {events.map(event => {
            if (new Date(Date.parse(event.endDate)).getTime() < Date.now()) {
              return <Order key={event.orderId} event={event} removeOrder={removeOrder} />;
            }
            return null;
          })}
        </Container>
      </div>
      <div style={{ marginBottom: '10%' }}>
        <p className={style.title}>Previous events</p>
        <Container>
          {events.map(event => {
            if (new Date(Date.parse(event.endDate)).getTime() > Date.now()) {
              return <Order key={event.orderId} event={event} removeOrder={removeOrder} />;
            }
            return null;
          })}
        </Container>
      </div>
      <Notification notifications={notifications} currentScene={scenesEnum.TIMELINE} />
    </div>
  );
};

export default WithData(Timeline, fetchTimeTables);
