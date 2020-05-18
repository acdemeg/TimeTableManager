import React from 'react';
import styles from './TimeTable.scss';
import { typeModalEnum, orderStatusEnum } from '../../constants';

const Cell = ({ styleCell, openModal, typeModal, date, attributeValues, order, role }) => {
  const orderInfo = {
    orderId: order ? order.id : null,
    orderedBy: order ? order.authorName : null,
    nameEvent: attributeValues ? attributeValues[0].value : null,
  };

  if (role === 'USER') {
    if (order) {
      if (order.status === orderStatusEnum.CANCELED || order.status === orderStatusEnum.CREATED)
        return null;
    }
  }

  return (
    <div
      role="gridcell"
      tabIndex={0}
      className={styleCell}
      onKeyDown={() =>
        openModal({
          type: typeModal,
          title: date,
          orderInfo,
        })
      }
      onClick={() =>
        openModal({
          type: typeModal,
          title: date,
          orderInfo,
        })
      }
    >
      {attributeValues ? (
        <div>
          <b>{attributeValues[0] ? attributeValues[0].value : null}</b>
          <p>{attributeValues[1] ? attributeValues[1].value : null}</p>
        </div>
      ) : null}
    </div>
  );
};

const TimeTableCell = ({ order, openModal, date, profile: { role } }) => {
  if (order) {
    const { attributeValues } = order;
    return (
      <Cell
        styleCell={
          order.status === orderStatusEnum.CANCELED
            ? styles.orderCanceled
            : `order.status === orderStatusEnum.CREATED
            ? styles.orderCreated
            : styles.orderAccepted`
        }
        openModal={openModal}
        typeModal={role === 'ADMIN' ? typeModalEnum.ACCEPT_ORDER : typeModalEnum.INFO_ORDER}
        order={order}
        attributeValues={attributeValues}
        date={date}
        role={role}
      />
    );
  }
  return (
    <Cell
      styleCell={styles.cell}
      openModal={openModal}
      typeModal={typeModalEnum.CREATE_ORDER}
      date={date}
      role={role}
    />
  );
};

const TimeCell = ({ time }) => {
  return <div className={styles.timeCell}>{time}</div>;
};

export { TimeTableCell, TimeCell };
