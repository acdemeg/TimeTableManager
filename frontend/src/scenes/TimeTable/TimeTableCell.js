import React from 'react';
import styles from './TimeTable.scss';
import { typeModalEnum } from '../../constants';

const Cell = ({ styleCell, openModal, typeModal, date, attributeValues, orderedBy }) => {
  const orderInfo = {
    orderedBy,
    nameEvent: attributeValues ? attributeValues[0].value : null,
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
      {attributeValues ? (
        <div>
          <b>{attributeValues[0] ? attributeValues[0].value : null}</b>
          <p>{attributeValues[1] ? attributeValues[1].value : null}</p>
        </div>
      ) : null}
    </div>
  );
};

const TimeTableCell = ({ order, openModal, date }) => {
  if (order) {
    const { attributeValues } = order;
    return (
      <Cell
        styleCell={styles.cellActive}
        openModal={openModal}
        typeModal={typeModalEnum.INFO_ORDER}
        orderedBy={order.authorName}
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
