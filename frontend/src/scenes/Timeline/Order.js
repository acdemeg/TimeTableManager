import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Timeline.scss';
import { timeTableTypeEnum, orderStatusEnum } from '../../constants';
import ButtonRemove from '../../components/buttons/ButtonRemove';

const Order = ({ event, removeOrder }) => {
  const {
    orderId,
    timeTableId,
    timeTableTitle,
    startDate,
    endDate,
    titleMainAttrib = null,
    valueMainAttrib = null,
    slotSize,
    orderStatus,
  } = event;

  const startDateObj = new Date(Date.parse(startDate));
  const endDateObj = new Date(Date.parse(endDate));

  return (
    <div>
      <div className={styles.event}>
        <NavLink to={`/timeTable/${timeTableId}`}>
          <div className={styles.titleEvent}>{timeTableTitle}</div>
        </NavLink>
        <div>
          <p>
            <i>
              {slotSize === timeTableTypeEnum.HOUR
                ? `${startDateObj.getDate()}
                ${startDateObj.toLocaleString('eng', { month: 'long' })}
                ${startDateObj.getHours()}:00
                - 
                ${endDateObj.getHours()}:00`
                : `${startDateObj.getDate()}
                ${startDateObj.toLocaleString('eng', { month: 'long' })}`}
            </i>
          </p>
        </div>
        <div>
          <p>
            {titleMainAttrib}
            :&nbsp;
            <i>{valueMainAttrib}</i>
          </p>
          <p>
            Status:&nbsp;
            <i
              style={{
                color: `${(() => {
                  if (orderStatus === orderStatusEnum.CANCELED) {
                    return 'crimson';
                  }
                  if (orderStatus === orderStatusEnum.ACCEPTED) {
                    return 'mediumspringgreen';
                  }
                  return 'black';
                })()}`,
              }}
            >
              <b>{orderStatus}</b>
            </i>
          </p>
        </div>
        <ButtonRemove handler={removeOrder} orderId={orderId} />
      </div>
    </div>
  );
};

export default Order;
