import React from 'react';
import { typeModalEnum } from '../../constants';
import TextInput from '../../components/inputs/TextInput';
import DateInput from '../../components/inputs/DateInput';
import style from './TimeTable.scss';

const ModalBodyForm = ({ typeModal, getValueFromInput }) => {
  if (typeModal === typeModalEnum.CREATE_ORDER) {
    return (
      <div>
        <div className={style.modalBodyField}>
          <TextInput
            labelName="Title Event*"
            labeId="Title Event"
            getValueFromInput={getValueFromInput}
          />
        </div>
        <div className={style.modalBodyField}>
          <DateInput
            labelName="Date Event"
            labeId="Date Event"
            getValueFromInput={getValueFromInput}
          />
        </div>
        <div style={{ textAlign: 'center' }}>* - required atttributes</div>
      </div>
    );
  }

  return (
    <div>
      <p className={style.modalBodyField}>
        <b>Ordered By:</b>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`${'User'}`}
      </p>
      <p className={style.modalBodyField}>
        <b>Title Event:</b>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`${'Meeting'}`}
      </p>
    </div>
  );
};

export default ModalBodyForm;
