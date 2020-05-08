import React from 'react';
import { timeTableTypeEnum } from '../constants';

const SelectInput = ({ labelName, labelId }) => {
  return (
    <label
      htmlFor={labelId}
      style={{
        marginLeft: `${labelName === 'Slot size' ? '0' : '5%'}`,
      }}
    >
      {labelName}
      <div id={labelId}>
        <div className="select">
          <select>
            <option>{timeTableTypeEnum.HOUR}</option>
            <option>{timeTableTypeEnum.DAY}</option>
          </select>
        </div>
      </div>
    </label>
  );
};

export default SelectInput;
