import React from 'react';
import { typeModalEnum, messages } from '../../constants';
import ModalBodyForm from './ModalBodyForm';
import ModalFooterForm from './ModalFooterForm';
import style from './TimeTable.scss';

const OrderModal = ({
  titleModal,
  typeModal,
  onCancel,
  onSubmit,
  onReject,
  orderedBy,
  orderId,
  nameEvent,
  attributes,
  profile,
  isLoggedIn,
  slotSize,
  timeTableId,
}) => {
  const getAlertText = () => {
    if (typeModal === typeModalEnum.CREATE_ORDER) {
      return messages.ORDER_ADDED;
    }

    return messages.ORDER_ACCEPTED;
  };

  if (typeModal === typeModalEnum.CREATE_ORDER || typeModal === typeModalEnum.ACCEPT_ORDER) {
    if (!isLoggedIn) return null;
  }

  return (
    <form
      id="OrderSubmit"
      onSubmit={event =>
        onSubmit(event, getAlertText(), attributes, profile, titleModal.date, timeTableId, slotSize)
      }
    >
      <div className="modalOverlay">
        <div className={style.modalWindow}>
          <div className={style.modalHeader}>
            <div className={style.modalTitle}>{titleModal.string}</div>
          </div>
          <div>
            <ModalBodyForm
              typeModal={typeModal}
              orderedBy={orderedBy}
              nameEvent={nameEvent}
              attributes={attributes}
            />
          </div>
          <div className={style.modalFooter}>
            <ModalFooterForm
              typeModal={typeModal}
              onReject={event => onReject(event, orderId)}
              onCancel={onCancel}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderModal;
