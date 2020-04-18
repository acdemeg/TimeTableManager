import React from 'react';
import { typeModalEnum, messages } from '../../constants';
import InputForm from './InputForm';

import './Modal.css';

const Modal = ({ title, typeModal, isOpenModal, onCancel, onSubmit }) => {
  let inputValue = 'unknown';
  const getValueFromInput = value => {
    inputValue = value;
  };

  const getAlertText = () => {
    if (typeModal === typeModalEnum.EMAIL) {
      return messages.EMAIL_UPDATE;
    }

    if (typeModal === typeModalEnum.NAME) {
      return messages.NAME_UPDATE;
    }

    return messages.FAIL_UPDATE;
  };

  return (
    <>
      {isOpenModal && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
            </div>
            <div className="modalBody">
              <InputForm typeModal={typeModal} getValueFromInput={getValueFromInput} />
            </div>
            <div className="modalFooter">
              <button
                type="button"
                onClick={onCancel}
                className="button is-rounded is-small cancel"
              >
                {' '}
                Cancel
              </button>
              <button
                type="button"
                onClick={() => onSubmit(inputValue, getAlertText())}
                className="button is-rounded is-small submit"
              >
                {' '}
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
