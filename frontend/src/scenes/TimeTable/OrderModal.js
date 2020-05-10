import React from 'react';
import { typeModalEnum, messages } from '../../constants';
import ModalBodyForm from './ModalBodyForm';
import ModalFooterForm from './ModalFooterForm';
import style from './TimeTable.scss';

const OrderModal = ({ title, typeModal, onCancel, onSubmit, onReject }) => {
  let inputValue = 'unknown';
  const getValueFromInput = value => {
    inputValue = value;
  };

  const getAlertText = () => {
    if (typeModal === typeModalEnum.CREATE_ORDER) {
      return messages.ORDER_ADDED;
    }

    if (typeModal === typeModalEnum.ACCEPT_ORDER) {
      return messages.ORDER_ACCEPTED;
    }

    if (typeModal === typeModalEnum.REJECT_ORDER) {
      return messages.ORDER_REJECTED;
    }

    return messages.FAIL_UPDATE;
  };

  return (
    <div className="modalOverlay">
      <div className={style.modalWindow}>
        <div className={style.modalHeader}>
          <div className={style.modalTitle}>{title}</div>
        </div>
        <div>
          <ModalBodyForm typeModal={typeModal} getValueFromInput={getValueFromInput} />
        </div>
        <div className={style.modalFooter}>
          <ModalFooterForm
            typeModal={typeModal}
            onSubmit={() => onSubmit(inputValue, getAlertText())}
            onReject={onReject}
            onCancel={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
