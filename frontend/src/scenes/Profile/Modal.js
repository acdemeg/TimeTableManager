import React from 'react';
import { typeModalEnum, messages } from '../../constants';
import InputForm from './InputForm';
import ButtonModal from '../../components/ButtonModal';
import './Modal.css';

const Modal = ({ title, typeModal, onCancel, onSubmit }) => {
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
    <div className="modalOverlay">
      <div className="modalWindow">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
        </div>
        <div className="modalBody">
          <InputForm typeModal={typeModal} getValueFromInput={getValueFromInput} />
        </div>
        <div className="modalFooter">
          <ButtonModal view={{ title: 'Cancel', style: 'cancel' }} handler={onCancel} />
          <ButtonModal
            view={{ title: 'Submit', style: 'submit' }}
            handler={() => onSubmit(inputValue, getAlertText())}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
