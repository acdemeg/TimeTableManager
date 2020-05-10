import React from 'react';

const DateInput = ({ labelName, labelId, getValueFromInput }) => {
  return (
    <label htmlFor={labelId} style={{ margin: '5% 0 0' }}>
      {labelName}
      <input
        className="input"
        id={labelId}
        type="date"
        onChange={e => getValueFromInput(e.target.value)}
      />
    </label>
  );
};

export default DateInput;
