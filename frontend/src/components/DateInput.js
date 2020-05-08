import React from 'react';

const DateInput = ({ labelName, labelId }) => {
  return (
    <label htmlFor={labelId} style={{ margin: '5% 0 0' }}>
      {labelName}
      <input id={labelId} type="date" />
    </label>
  );
};

export default DateInput;
