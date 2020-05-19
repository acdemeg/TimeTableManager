import React from 'react';
import styles from './TimeTable.scss';
import { typeModalEnum, orderStatusEnum } from '../../constants';

const Cell = ({ styleCell, openModal, typeModal, date, attributeValues, order }) => {
  const getAttributeValue = numAttr => {
    if (attributeValues) {
      if (attributeValues[numAttr]) {
        return attributeValues[numAttr].value;
      }
      return null;
    }
    return null;
  };

  const orderInfo = {
    orderId: order ? order.id : null,
    orderedBy: order ? order.authorName : null,
    nameEvent: getAttributeValue(0),
  };

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
      <div>
        <b>{getAttributeValue(0)}</b>
        <p>{getAttributeValue(1)}</p>
      </div>
    </div>
  );
};

const TimeTableCell = ({ order, openModal, date, profile: { role } }) => {
  if (order) {
    if (role === 'USER') {
      if (order.status === orderStatusEnum.CANCELED || order.status === orderStatusEnum.CREATED) {
        return (
          <Cell
            styleCell={styles.cell}
            openModal={openModal}
            typeModal={typeModalEnum.CREATE_ORDER}
            date={date}
          />
        );
      }
    }
    const { attributeValues } = order;
    return (
      <Cell
        styleCell={
          order.status === orderStatusEnum.CANCELED
            ? styles.orderCanceled
            : order.status === orderStatusEnum.CREATED
            ? styles.orderCreated
            : styles.orderAccepted
        }
        openModal={openModal}
        typeModal={role === 'ADMIN' ? typeModalEnum.ACCEPT_ORDER : typeModalEnum.INFO_ORDER}
        order={order}
        attributeValues={attributeValues}
        date={date}
      />
    );
  }
  return (
    <Cell
      styleCell={styles.cell}
      openModal={openModal}
      typeModal={typeModalEnum.CREATE_ORDER}
      date={date}
    />
  );
};

const TimeCell = ({ time }) => {
  return <div className={styles.timeCell}>{time}</div>;
};

export { TimeTableCell, TimeCell };
