import React from 'react';

const TextInput = ({ labelName, labelId, getValueFromInput }) => {
  return (
    <label htmlFor={labelId}>
      {labelName}
      <input
        id={labelId}
        className="input"
        type="text"
        onChange={e => getValueFromInput(e.target.value)}
      />
    </label>
  );
};

export default TextInput;
