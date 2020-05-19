import React from 'react';
import { typeModalEnum, orderStatusEnum } from '../../constants';
import Button from '../../components/buttons/Button';

const ModalFooterForm = ({ typeModal, onCancel, orderUpdateStatus, orderId }) => {
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
      <Button
        title="Approve"
        handler={event => orderUpdateStatus(event, orderId, orderStatusEnum.ACCEPTED)}
      />
      <Button
        title="Reject"
        handler={event => orderUpdateStatus(event, orderId, orderStatusEnum.CANCELED)}
      />
      <Button title="Cancel" handler={onCancel} />
    </div>
  );
};

export default ModalFooterForm;
