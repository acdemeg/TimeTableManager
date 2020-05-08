import React from 'react';

const TextInput = ({ labelName, labelId }) => {
  return (
    <label htmlFor={labelId}>
      {labelName}
      <input id={labelId} className="input" type="text" />
    </label>
  );
};

export default TextInput;
