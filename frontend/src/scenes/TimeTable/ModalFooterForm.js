import React from 'react';
import { typeModalEnum } from '../../constants';
import Button from '../../components/buttons/Button';

const ModalFooterForm = ({ typeModal, onCancel, onReject }) => {
  if (typeModal === typeModalEnum.CREATE_ORDER) {
    return (
      <div>
        <Button title="Place order" handler={() => {}} />
        <Button title="Cancel" handler={onCancel} />
      </div>
    );
  }
  if (typeModal === typeModalEnum.INFO_ORDER) {
    return <Button title="OK" handler={onCancel} />;
  }

  return (
    <div>
      <Button title="Approve" handler={() => {}} />
      <Button title="Reject" handler={onReject} />
      <Button title="Cancel" handler={onCancel} />
    </div>
  );
};

export default ModalFooterForm;
